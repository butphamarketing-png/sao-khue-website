import { logger } from "./logger";

export type LeadEmailPayload = {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  source: string;
  ip: string;
  createdAt: string;
};

const DEFAULT_NOTIFY = "butphamarketing@gmail.com";

function notifyTo(): string {
  return (process.env.LEAD_NOTIFY_EMAIL || DEFAULT_NOTIFY).trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSubject(lead: LeadEmailPayload): string {
  const service = lead.service.trim();
  return service
    ? `[Sao Khuê] Khách mới — ${lead.name} · ${service}`
    : `[Sao Khuê] Khách mới — ${lead.name}`;
}

function buildText(lead: LeadEmailPayload): string {
  return [
    "Có khách gửi thông tin từ website Kiến Trúc Sao Khuê",
    "",
    `Họ tên: ${lead.name}`,
    `Điện thoại: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : null,
    lead.service ? `Dịch vụ: ${lead.service}` : null,
    lead.message ? `Nội dung:\n${lead.message}` : null,
    "",
    `Nguồn: ${lead.source}`,
    `IP: ${lead.ip || "—"}`,
    `Thời gian: ${lead.createdAt}`,
    `Mã lead: #${lead.id}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildHtml(lead: LeadEmailPayload): string {
  const rows = [
    ["Họ tên", lead.name],
    ["Điện thoại", lead.phone],
    lead.email ? ["Email", lead.email] : null,
    lead.service ? ["Dịch vụ", lead.service] : null,
    lead.message ? ["Nội dung", lead.message.replace(/\n/g, "<br>")] : null,
    ["Nguồn", lead.source],
    ["IP", lead.ip || "—"],
    ["Thời gian", lead.createdAt],
    ["Mã lead", `#${lead.id}`],
  ].filter(Boolean) as [string, string][];

  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;width:120px">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;max-width:560px">
    <h2 style="color:#0A2F68;margin:0 0 16px">Khách mới từ website</h2>
    <p style="color:#475569;margin:0 0 16px">Kiến Trúc Sao Khuê — form liên hệ / báo giá</p>
    <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px">${body}</table>
  </div>`;
}

async function sendViaResend(lead: LeadEmailPayload, to: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const from =
    process.env.RESEND_FROM?.trim() || "Kiến Trúc Sao Khuê <noreply@kientrucsaokhue.com>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: buildSubject(lead),
      text: buildText(lead),
      html: buildHtml(lead),
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    logger.warn({ status: res.status, errText }, "[notify-lead-email] Resend failed");
    return false;
  }

  return true;
}

async function sendViaGmail(lead: LeadEmailPayload, to: string): Promise<boolean> {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();
  if (!user || !pass) return false;

  const { default: nodemailer } = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_FROM?.trim() || `Kiến Trúc Sao Khuê <${user}>`,
    to,
    subject: buildSubject(lead),
    text: buildText(lead),
    html: buildHtml(lead),
  });

  return true;
}

/** Gửi email thông báo lead — không throw, log lỗi nếu fail. */
export async function notifyLeadByEmail(lead: LeadEmailPayload): Promise<void> {
  const to = notifyTo();
  if (!to) {
    logger.warn("[notify-lead-email] LEAD_NOTIFY_EMAIL empty, skip");
    return;
  }

  try {
    const useGmail = Boolean(process.env.GMAIL_USER?.trim() && process.env.GMAIL_APP_PASSWORD?.trim());
    const sent = useGmail
      ? (await sendViaGmail(lead, to)) || (await sendViaResend(lead, to))
      : (await sendViaResend(lead, to)) || (await sendViaGmail(lead, to));

    if (sent) {
      logger.info({ leadId: lead.id, to }, "[notify-lead-email] sent");
      return;
    }

    logger.warn(
      { leadId: lead.id, to },
      "[notify-lead-email] skipped — set RESEND_API_KEY or GMAIL_USER + GMAIL_APP_PASSWORD",
    );
  } catch (err) {
    logger.error({ err, leadId: lead.id }, "[notify-lead-email] failed");
  }
}

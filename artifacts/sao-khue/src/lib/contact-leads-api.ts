export type ContactLead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  source: string;
  createdAt: string;
};

export type ContactLeadInput = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  source?: string;
};

export async function submitContactLead(input: ContactLeadInput): Promise<ContactLead> {
  const res = await fetch("/api/contact-leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? "Không gửi được yêu cầu");
  }
  return res.json() as Promise<ContactLead>;
}

export async function fetchContactLeads(limit = 100): Promise<ContactLead[]> {
  const res = await fetch(`/api/contact-leads?limit=${limit}`, { credentials: "include" });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? "Không tải được danh sách");
  }
  return res.json() as Promise<ContactLead[]>;
}

export async function deleteContactLead(id: number): Promise<void> {
  const res = await fetch(`/api/contact-leads/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok && res.status !== 204) {
    throw new Error("Không xóa được");
  }
}

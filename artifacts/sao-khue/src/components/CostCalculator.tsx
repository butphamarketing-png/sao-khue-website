import { useState, type ReactNode } from "react";
import {
  Building2,
  Calculator,
  ChevronDown,
  Layers,
  PhoneCall,
  Ruler,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  telHref,
  useCalculatorConfig,
  usePrimaryPhone,
  useSectionMeta,
} from "@/lib/site-settings";
import { useQuoteRequest } from "@/lib/quote-request-context";

type LoaiNha = "nha-pho" | "biet-thu" | "cap-bon";
type DichVu = "phan-tho" | "tron-goi";
type MucDauTu = "trung-binh" | "tb-kha" | "kha";
type Hem = "rong-5" | "3-5" | "duoi-3";
type Mong = "bang" | "coc" | "don";
type Ham = "khong" | "1-1.2" | "1.2-1.5" | "1.5-1.7" | "1.7-2" | "2-2.5" | "2.5-3";
type SanThuong = "khong" | "khong-mai" | "co-mai";
type Mai = "ton" | "btct" | "xa-go-ngoi" | "btct-ngoi";

const HE_SO_MONG: Record<Mong, number> = { bang: 0.5, coc: 0.3, don: 0.2 };
const HE_SO_HAM: Record<Ham, number> = {
  khong: 0,
  "1-1.2": 1.5,
  "1.2-1.5": 1.7,
  "1.5-1.7": 2.0,
  "1.7-2": 2.2,
  "2-2.5": 2.5,
  "2.5-3": 3.0,
};
const HE_SO_MAI: Record<Mai, number> = {
  ton: 0.3,
  btct: 0.5,
  "xa-go-ngoi": 0.7,
  "btct-ngoi": 1.0,
};
const HE_SO_HEM: Record<Hem, number> = { "rong-5": 1.0, "3-5": 1.05, "duoi-3": 1.1 };
const HE_SO_LOAI: Record<LoaiNha, number> = {
  "nha-pho": 1.0,
  "biet-thu": 1.15,
  "cap-bon": 0.85,
};

const fmt = (n: number) => `${n.toLocaleString("vi-VN")} đ`;

const inputCls =
  "w-full rounded-xl border border-slate-200/80 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20";
const selectCls = inputCls;

export function CostCalculator() {
  const calculatorConfig = useCalculatorConfig();
  const meta = useSectionMeta();
  const phone = usePrimaryPhone();
  const { openQuoteRequest } = useQuoteRequest();
  const [loaiNha, setLoaiNha] = useState<LoaiNha>("nha-pho");
  const [dichVu, setDichVu] = useState<DichVu>("phan-tho");
  const [mucDauTu, setMucDauTu] = useState<MucDauTu>("trung-binh");
  const [matTien, setMatTien] = useState<number>(1);
  const [chieuRong, setChieuRong] = useState<string>("");
  const [chieuDai, setChieuDai] = useState<string>("");
  const [soTang, setSoTang] = useState<string>("");
  const [hem, setHem] = useState<Hem>("rong-5");
  const [dtLung, setDtLung] = useState<string>("");
  const [dtTangThuong, setDtTangThuong] = useState<string>("");
  const [sanThuong, setSanThuong] = useState<SanThuong>("khong");
  const [banCong, setBanCong] = useState<"co" | "khong">("khong");
  const [mong, setMong] = useState<Mong>("bang");
  const [ham, setHam] = useState<Ham>("khong");
  const [mai, setMai] = useState<Mai>("ton");
  const [dtSanVuon, setDtSanVuon] = useState<string>("");
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<null | {
    tongDienTich: number;
    donGia: number;
    tongChiPhi: number;
    chiTiet: { label: string; dt: number }[];
  }>(null);

  function calculate() {
    const rong = parseFloat(chieuRong);
    const dai = parseFloat(chieuDai);
    const tang = parseInt(soTang, 10);

    if (!rong || !dai || !tang || tang <= 0) {
      setResult(null);
      setError("Bạn vui lòng nhập chiều rộng, chiều dài và số tầng hợp lệ.");
      return;
    }

    setError("");
    setShowBreakdown(false);

    const dtTret = rong * dai;
    const dtLungValue = parseFloat(dtLung) || 0;
    const dtTangThuongValue = parseFloat(dtTangThuong) || 0;
    const dtSanVuonValue = parseFloat(dtSanVuon) || 0;

    const dtMong = dtTret * HE_SO_MONG[mong];
    const dtHam = dtTret * HE_SO_HAM[ham];
    const dtTang = dtTret * tang;
    const dtMai = dtTret * HE_SO_MAI[mai];
    const dtSanThuongValueFinal =
      sanThuong === "khong"
        ? 0
        : sanThuong === "khong-mai"
          ? dtTangThuongValue * 0.5
          : dtTangThuongValue * 0.75;
    const dtBanCong = banCong === "co" ? matTien * 1.2 * 0.5 * tang : 0;
    const dtSanVuonTinh = dtSanVuonValue * 0.15;

    const tongDienTich =
      (dtMong +
        dtHam +
        dtTang +
        dtLungValue +
        dtTangThuongValue +
        dtMai +
        dtSanThuongValueFinal +
        dtBanCong +
        dtSanVuonTinh) *
      HE_SO_HEM[hem] *
      HE_SO_LOAI[loaiNha];

    const donGia =
      dichVu === "phan-tho"
        ? calculatorConfig.phanThoRates[mucDauTu]
        : calculatorConfig.tronGoiRates[mucDauTu];

    const tongChiPhi = tongDienTich * donGia;

    setResult({
      tongDienTich: Math.round(tongDienTich * 100) / 100,
      donGia,
      tongChiPhi: Math.round(tongChiPhi),
      chiTiet: [
        { label: "Móng", dt: Math.round(dtMong * 100) / 100 },
        ...(ham === "khong"
          ? []
          : [{ label: "Tầng hầm", dt: Math.round(dtHam * 100) / 100 }]),
        { label: `Tầng 1 → ${tang}`, dt: Math.round(dtTang * 100) / 100 },
        ...(dtLungValue > 0 ? [{ label: "Lửng / tầng lửng", dt: dtLungValue }] : []),
        ...(dtTangThuongValue > 0
          ? [{ label: "Tầng thượng", dt: dtTangThuongValue }]
          : []),
        { label: "Mái", dt: Math.round(dtMai * 100) / 100 },
        ...(dtSanThuongValueFinal > 0
          ? [{ label: "Sân thượng (quy đổi)", dt: Math.round(dtSanThuongValueFinal * 100) / 100 }]
          : []),
        ...(dtBanCong > 0
          ? [{ label: "Ban công", dt: Math.round(dtBanCong * 100) / 100 }]
          : []),
        ...(dtSanVuonTinh > 0
          ? [{ label: "Sân vườn (quy đổi)", dt: Math.round(dtSanVuonTinh * 100) / 100 }]
          : []),
      ],
    });

    setTimeout(() => {
      document
        .getElementById("ket-qua-tinh-chi-phi")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <section id="tinh-chi-phi" className="section-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />

      <div className="site-container relative">
        <SectionHeader title={meta.calculator.title} subtitle={meta.calculator.subtitle} />

        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/5">
            <div className="grid gap-0 lg:grid-cols-[1fr]">
              <div className="p-6 md:p-9 lg:p-10">
                <FormGroup
                  icon={<Building2 className="h-4 w-4" />}
                  title="Loại công trình"
                  step="01"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Chọn loại nhà">
                      <select
                        className={selectCls}
                        value={loaiNha}
                        onChange={(e) => setLoaiNha(e.target.value as LoaiNha)}
                      >
                        <option value="nha-pho">Nhà phố</option>
                        <option value="biet-thu">Biệt thự</option>
                        <option value="cap-bon">Nhà cấp bốn</option>
                      </select>
                    </Field>
                    <Field label="Dịch vụ xây nhà">
                      <select
                        className={selectCls}
                        value={dichVu}
                        onChange={(e) => setDichVu(e.target.value as DichVu)}
                      >
                        <option value="phan-tho">Xây nhà phần thô</option>
                        <option value="tron-goi">Xây nhà trọn gói</option>
                      </select>
                    </Field>
                    <Field label="Mức đầu tư">
                      <select
                        className={selectCls}
                        value={mucDauTu}
                        onChange={(e) => setMucDauTu(e.target.value as MucDauTu)}
                      >
                        <option value="trung-binh">Trung bình</option>
                        <option value="tb-kha">TB - Khá</option>
                        <option value="kha">Khá+</option>
                      </select>
                    </Field>
                    <Field label="Mặt tiền">
                      <select
                        className={selectCls}
                        value={matTien}
                        onChange={(e) => setMatTien(parseInt(e.target.value, 10))}
                      >
                        <option value={1}>1 mặt tiền</option>
                        <option value={2}>2 mặt tiền</option>
                      </select>
                    </Field>
                  </div>
                </FormGroup>

                <FormGroup icon={<Ruler className="h-4 w-4" />} title="Kích thước & vị trí" step="02">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Field label="Chiều rộng (m)">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        className={inputCls}
                        value={chieuRong}
                        onChange={(e) => setChieuRong(e.target.value)}
                        placeholder="VD: 4"
                      />
                    </Field>
                    <Field label="Chiều dài (m)">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        className={inputCls}
                        value={chieuDai}
                        onChange={(e) => setChieuDai(e.target.value)}
                        placeholder="VD: 15"
                      />
                    </Field>
                    <Field label="Số tầng" hint="Trừ tum, lửng">
                      <input
                        type="number"
                        min="1"
                        className={inputCls}
                        value={soTang}
                        onChange={(e) => setSoTang(e.target.value)}
                        placeholder="VD: 2"
                      />
                    </Field>
                    <Field label="Hẻm">
                      <select
                        className={selectCls}
                        value={hem}
                        onChange={(e) => setHem(e.target.value as Hem)}
                      >
                        <option value="rong-5">Rộng hơn 5m</option>
                        <option value="3-5">Rộng 3m – 5m</option>
                        <option value="duoi-3">Nhỏ hơn 3m</option>
                      </select>
                    </Field>
                  </div>
                </FormGroup>

                <FormGroup icon={<Layers className="h-4 w-4" />} title="Hạng mục bổ sung" step="03">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Field label="Lửng (m²)">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        className={inputCls}
                        value={dtLung}
                        onChange={(e) => setDtLung(e.target.value)}
                        placeholder="Không có → để trống"
                      />
                    </Field>
                    <Field label="Tầng thượng (m²)">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        className={inputCls}
                        value={dtTangThuong}
                        onChange={(e) => setDtTangThuong(e.target.value)}
                        placeholder="VD: 30"
                      />
                    </Field>
                    <Field label="Sân vườn (m²)">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        className={inputCls}
                        value={dtSanVuon}
                        onChange={(e) => setDtSanVuon(e.target.value)}
                        placeholder="VD: 20"
                      />
                    </Field>
                    <Field label="Sân thượng">
                      <select
                        className={selectCls}
                        value={sanThuong}
                        onChange={(e) => setSanThuong(e.target.value as SanThuong)}
                      >
                        <option value="khong">Không có</option>
                        <option value="khong-mai">Không mái che</option>
                        <option value="co-mai">Có mái che</option>
                      </select>
                    </Field>
                    <Field label="Ban công">
                      <select
                        className={selectCls}
                        value={banCong}
                        onChange={(e) => setBanCong(e.target.value as "co" | "khong")}
                      >
                        <option value="khong">Không có</option>
                        <option value="co">Có ban công</option>
                      </select>
                    </Field>
                    <Field label="Móng">
                      <select
                        className={selectCls}
                        value={mong}
                        onChange={(e) => setMong(e.target.value as Mong)}
                      >
                        <option value="bang">Móng băng</option>
                        <option value="coc">Móng cọc (đài)</option>
                        <option value="don">Móng đơn</option>
                      </select>
                    </Field>
                    <Field label="Tầng hầm">
                      <select
                        className={selectCls}
                        value={ham}
                        onChange={(e) => setHam(e.target.value as Ham)}
                      >
                        <option value="khong">Không hầm</option>
                        <option value="1-1.2">Sâu 1.0 – 1.2m</option>
                        <option value="1.2-1.5">Sâu 1.2 – 1.5m</option>
                        <option value="1.5-1.7">Sâu 1.5 – 1.7m</option>
                        <option value="1.7-2">Sâu 1.7 – 2.0m</option>
                        <option value="2-2.5">Sâu 2.0 – 2.5m</option>
                        <option value="2.5-3">Sâu 2.5 – 3.0m</option>
                      </select>
                    </Field>
                    <Field label="Mái">
                      <select
                        className={selectCls}
                        value={mai}
                        onChange={(e) => setMai(e.target.value as Mai)}
                      >
                        <option value="ton">Mái tôn</option>
                        <option value="btct">Mái BTCT</option>
                        <option value="xa-go-ngoi">Xà gồ + ngói</option>
                        <option value="btct-ngoi">BTCT + ngói</option>
                      </select>
                    </Field>
                  </div>
                </FormGroup>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={calculate}
                    className="group inline-flex w-full max-w-md cursor-pointer items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-accent to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-accent/30 transition hover:shadow-xl hover:shadow-accent/40 sm:w-auto"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 transition group-hover:scale-105">
                      <Calculator size={20} />
                    </span>
                    Tính toán kết quả
                  </button>
                </div>
              </div>
            </div>

            <div id="ket-qua-tinh-chi-phi" className="scroll-mt-24 border-t border-slate-100">
              {error && (
                <p className="mx-6 mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600 md:mx-9">
                  {error}
                </p>
              )}

              {result && (
                <div className="p-6 md:p-9">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-blue-800 p-8 text-center text-white shadow-xl md:p-10">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                      aria-hidden
                    />
                    <div className="relative">
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                        Kết quả tham khảo
                      </div>
                      <p className="text-sm font-medium text-blue-100">Tổng chi phí dự kiến</p>
                      <p className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        {fmt(result.tongChiPhi)}
                      </p>

                      <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-3">
                        <StatPill label="Diện tích XD" value={`${result.tongDienTich} m²`} />
                        <StatPill label="Đơn giá" value={`${fmt(result.donGia)}/m²`} />
                      </div>

                      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                          href={telHref(phone)}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-md transition hover:bg-blue-50 sm:w-auto"
                        >
                          <PhoneCall size={18} />
                          Gọi {phone}
                        </a>
                        <button
                          type="button"
                          onClick={openQuoteRequest}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
                        >
                          Nhận báo giá chính xác
                        </button>
                      </div>

                      <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-blue-100/90">
                        Kết quả mang tính tham khảo. Báo giá chính thức sau khảo sát miễn phí tại công
                        trình.
                        {calculatorConfig.note ? ` ${calculatorConfig.note}` : ""}
                      </p>
                    </div>
                  </div>

                  {result.chiTiet.length > 0 && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setShowBreakdown((v) => !v)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-slate-100"
                      >
                        {showBreakdown ? "Ẩn" : "Xem"} chi tiết diện tích
                        <ChevronDown
                          className={`h-4 w-4 transition ${showBreakdown ? "rotate-180" : ""}`}
                        />
                      </button>
                      {showBreakdown && (
                        <ul className="mt-3 divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200 bg-white">
                          {result.chiTiet.map((item) => (
                            <li
                              key={item.label}
                              className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
                            >
                              <span className="text-slate-600">{item.label}</span>
                              <span className="font-semibold text-slate-900">{item.dt} m²</span>
                            </li>
                          ))}
                          <li className="flex items-center justify-between gap-4 bg-primary/5 px-4 py-3 text-sm font-bold text-primary">
                            <span>Tổng diện tích xây dựng</span>
                            <span>{result.tongDienTich} m²</span>
                          </li>
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )}

              {!result && !error && (
                <div className="border-t border-dashed border-slate-200 bg-slate-50/50 px-6 py-8 text-center md:px-9">
                  <Calculator className="mx-auto h-8 w-8 text-slate-300" />
                  <p className="mt-3 text-sm text-slate-500">
                    Điền thông tin và bấm <strong className="text-primary">Tính toán kết quả</strong> để
                    xem dự toán tham khảo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormGroup({
  icon,
  title,
  step,
  children,
}: {
  icon: ReactNode;
  title: string;
  step: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Bước {step}
          </span>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
        </div>
      </div>
      {children}
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
      <div className="text-[11px] font-medium uppercase tracking-wide text-blue-100">{label}</div>
      <div className="mt-0.5 text-sm font-bold text-white md:text-base">{value}</div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      {hint && <p className="mb-1.5 text-[11px] text-slate-400">{hint}</p>}
      {children}
    </div>
  );
}

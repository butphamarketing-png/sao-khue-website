import { useState, type ReactNode } from "react";
import { Calculator } from "lucide-react";
import { useCalculatorConfig } from "@/lib/site-settings";

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

export function CostCalculator() {
  const calculatorConfig = useCalculatorConfig();
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
        { label: `Tầng 1 -> ${tang}`, dt: Math.round(dtTang * 100) / 100 },
        ...(dtLungValue > 0 ? [{ label: "Tầng lửng", dt: dtLungValue }] : []),
        ...(dtTangThuongValue > 0
          ? [{ label: "Tầng thượng", dt: dtTangThuongValue }]
          : []),
        { label: "Mái", dt: Math.round(dtMai * 100) / 100 },
        ...(dtSanThuongValueFinal > 0
          ? [{ label: "Sân thượng", dt: Math.round(dtSanThuongValueFinal * 100) / 100 }]
          : []),
        ...(dtBanCong > 0
          ? [{ label: "Ban công", dt: Math.round(dtBanCong * 100) / 100 }]
          : []),
        ...(dtSanVuonTinh > 0
          ? [{ label: "Sân vườn", dt: Math.round(dtSanVuonTinh * 100) / 100 }]
          : []),
      ],
    });

    setTimeout(() => {
      document
        .getElementById("ket-qua-tinh-chi-phi")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  const selectCls =
    "w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-slate-700 outline-none transition focus:border-primary";

  return (
    <section id="tinh-chi-phi" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
            Tính chi phí xây dựng
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-accent"></div>
          <p className="mx-auto max-w-3xl text-slate-600">
            Khách hàng nhập thông tin cơ bản để nhận dự toán tham khảo. Phần này đã
            được tách thành công thức để có thể chỉnh đơn giá ngay trong admin.
          </p>
        </div>

        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <Field label="Loại nhà">
              <select className={selectCls} value={loaiNha} onChange={(e) => setLoaiNha(e.target.value as LoaiNha)}>
                <option value="nha-pho">Nhà phố</option>
                <option value="biet-thu">Biệt thự</option>
                <option value="cap-bon">Nhà cấp bốn</option>
              </select>
            </Field>
            <Field label="Dịch vụ">
              <select className={selectCls} value={dichVu} onChange={(e) => setDichVu(e.target.value as DichVu)}>
                <option value="phan-tho">Xây nhà phần thô</option>
                <option value="tron-goi">Xây nhà trọn gói</option>
              </select>
            </Field>
            <Field label="Mức đầu tư">
              <select className={selectCls} value={mucDauTu} onChange={(e) => setMucDauTu(e.target.value as MucDauTu)}>
                <option value="trung-binh">Trung bình</option>
                <option value="tb-kha">TB - Khá</option>
                <option value="kha">Khá+</option>
              </select>
            </Field>
            <Field label="Mặt tiền">
              <select className={selectCls} value={matTien} onChange={(e) => setMatTien(parseInt(e.target.value, 10))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </Field>

            <Field label="Chiều rộng (m)">
              <input type="number" step="0.1" className={selectCls} value={chieuRong} onChange={(e) => setChieuRong(e.target.value)} />
            </Field>
            <Field label="Chiều dài (m)">
              <input type="number" step="0.1" className={selectCls} value={chieuDai} onChange={(e) => setChieuDai(e.target.value)} />
            </Field>
            <Field label="Số tầng">
              <input type="number" min="1" className={selectCls} value={soTang} onChange={(e) => setSoTang(e.target.value)} />
            </Field>
            <Field label="Hẻm">
              <select className={selectCls} value={hem} onChange={(e) => setHem(e.target.value as Hem)}>
                <option value="rong-5">Rộng hơn 5m</option>
                <option value="3-5">Từ 3m - 5m</option>
                <option value="duoi-3">Dưới 3m</option>
              </select>
            </Field>

            <Field label="Tầng lửng (m²)">
              <input type="number" step="0.1" className={selectCls} value={dtLung} onChange={(e) => setDtLung(e.target.value)} />
            </Field>
            <Field label="Tầng thượng (m²)">
              <input type="number" step="0.1" className={selectCls} value={dtTangThuong} onChange={(e) => setDtTangThuong(e.target.value)} />
            </Field>
            <Field label="Sân thượng">
              <select className={selectCls} value={sanThuong} onChange={(e) => setSanThuong(e.target.value as SanThuong)}>
                <option value="khong">Không có</option>
                <option value="khong-mai">Không mái</option>
                <option value="co-mai">Có mái</option>
              </select>
            </Field>
            <Field label="Ban công">
              <select className={selectCls} value={banCong} onChange={(e) => setBanCong(e.target.value as "co" | "khong")}>
                <option value="khong">Không có</option>
                <option value="co">Có ban công</option>
              </select>
            </Field>

            <Field label="Loại móng">
              <select className={selectCls} value={mong} onChange={(e) => setMong(e.target.value as Mong)}>
                <option value="bang">Móng băng</option>
                <option value="coc">Móng cọc</option>
                <option value="don">Móng đơn</option>
              </select>
            </Field>
            <Field label="Tầng hầm">
              <select className={selectCls} value={ham} onChange={(e) => setHam(e.target.value as Ham)}>
                <option value="khong">Không hầm</option>
                <option value="1-1.2">1.0 - 1.2m</option>
                <option value="1.2-1.5">1.2 - 1.5m</option>
                <option value="1.5-1.7">1.5 - 1.7m</option>
                <option value="1.7-2">1.7 - 2.0m</option>
                <option value="2-2.5">2.0 - 2.5m</option>
                <option value="2.5-3">2.5 - 3.0m</option>
              </select>
            </Field>
            <Field label="Loại mái">
              <select className={selectCls} value={mai} onChange={(e) => setMai(e.target.value as Mai)}>
                <option value="ton">Mái tôn</option>
                <option value="btct">Mái BTCT</option>
                <option value="xa-go-ngoi">Xà gồ + ngói</option>
                <option value="btct-ngoi">BTCT + ngói</option>
              </select>
            </Field>
            <Field label="Sân vườn (m²)">
              <input type="number" step="0.1" className={selectCls} value={dtSanVuon} onChange={(e) => setDtSanVuon(e.target.value)} />
            </Field>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={calculate}
              className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-accent px-8 py-4 font-bold uppercase text-white shadow-lg transition-colors hover:bg-accent/90"
            >
              <Calculator size={22} />
              Tính toán kết quả
            </button>
          </div>

          <div id="ket-qua-tinh-chi-phi" className="mt-8 scroll-mt-24">
            {error && <p className="mb-4 text-center font-semibold text-red-600">{error}</p>}
            {result && (
              <div className="rounded-3xl border border-primary/20 bg-white p-6 shadow-md md:p-8">
                <h3 className="mb-4 text-center text-xl font-bold uppercase text-primary md:text-2xl">
                  Kết quả tính chi phí
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 border-b pb-2 font-semibold text-primary">
                      Chi tiết diện tích
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700">
                      {result.chiTiet.map((item) => (
                        <li key={item.label} className="flex justify-between">
                          <span>{item.label}</span>
                          <span className="font-medium">{item.dt} m²</span>
                        </li>
                      ))}
                      <li className="mt-2 flex justify-between border-t pt-2 font-bold text-primary">
                        <span>Tổng diện tích xây dựng</span>
                        <span>{result.tongDienTich} m²</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center rounded-2xl bg-primary/5 p-6 text-center">
                    <div className="mb-2 text-slate-600">Đơn giá</div>
                    <div className="mb-4 text-lg font-semibold text-primary">
                      {fmt(result.donGia)} / m²
                    </div>
                    <div className="mb-2 text-slate-600">Tổng chi phí dự kiến</div>
                    <div className="text-3xl font-extrabold text-accent md:text-4xl">
                      {fmt(result.tongChiPhi)}
                    </div>
                    <p className="mt-3 text-xs italic text-slate-500">
                      * Kết quả mang tính tham khảo. Vui lòng liên hệ để nhận báo giá
                      chính xác.
                    </p>
                    {calculatorConfig.note && (
                      <p className="mt-2 text-xs italic text-slate-500">
                        {calculatorConfig.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-primary">{label}</label>
      {children}
    </div>
  );
}

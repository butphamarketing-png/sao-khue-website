import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";

type LoaiNha = "nha-pho" | "biet-thu" | "cap-bon";
type DichVu = "phan-tho" | "tron-goi";
type MucDauTu = "trung-binh" | "tb-kha" | "kha";
type Hem = "rong-5" | "3-5" | "duoi-3";
type Mong = "bang" | "coc" | "don";
type Ham = "khong" | "1-1.2" | "1.2-1.5" | "1.5-1.7" | "1.7-2" | "2-2.5" | "2.5-3";
type SanThuong = "khong" | "khong-mai" | "co-mai";
type Mai = "ton" | "btct" | "xa-go-ngoi" | "btct-ngoi";

const DON_GIA: Record<DichVu, Record<MucDauTu, number>> = {
  "phan-tho": { "trung-binh": 3_550_000, "tb-kha": 3_700_000, "kha": 3_800_000 },
  "tron-goi": { "trung-binh": 4_850_000, "tb-kha": 5_500_000, "kha": 6_700_000 },
};

const HE_SO_MONG: Record<Mong, number> = { "bang": 0.5, "coc": 0.3, "don": 0.2 };
const HE_SO_HAM: Record<Ham, number> = {
  "khong": 0, "1-1.2": 1.5, "1.2-1.5": 1.7, "1.5-1.7": 2.0,
  "1.7-2": 2.2, "2-2.5": 2.5, "2.5-3": 3.0,
};
const HE_SO_MAI: Record<Mai, number> = { "ton": 0.3, "btct": 0.5, "xa-go-ngoi": 0.7, "btct-ngoi": 1.0 };
const HE_SO_HEM: Record<Hem, number> = { "rong-5": 1.0, "3-5": 1.05, "duoi-3": 1.1 };
const HE_SO_LOAI: Record<LoaiNha, number> = { "nha-pho": 1.0, "biet-thu": 1.15, "cap-bon": 0.85 };

const fmt = (n: number) => n.toLocaleString("vi-VN") + " đ";

export function CostCalculator() {
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

  const result = useMemo(() => {
    const r = parseFloat(chieuRong);
    const d = parseFloat(chieuDai);
    const tang = parseInt(soTang);
    if (!r || !d || !tang || tang <= 0) return null;

    const dtTret = r * d;
    const lung = parseFloat(dtLung) || 0;
    const tangThuong = parseFloat(dtTangThuong) || 0;
    const sanVuon = parseFloat(dtSanVuon) || 0;

    const dtMong = dtTret * HE_SO_MONG[mong];
    const dtHam = dtTret * HE_SO_HAM[ham];
    const dtTang1ToN = dtTret * tang;
    const dtMai = dtTret * HE_SO_MAI[mai];
    const dtSanThuong =
      sanThuong === "khong" ? 0 : sanThuong === "khong-mai" ? tangThuong * 0.5 : tangThuong * 0.75;
    const dtBanCong = banCong === "co" ? matTien * 1.2 * 0.5 * tang : 0;
    const dtSanVuonTinh = sanVuon * 0.15;

    const tongDienTich =
      (dtMong + dtHam + dtTang1ToN + lung + tangThuong + dtMai + dtSanThuong + dtBanCong + dtSanVuonTinh) *
      HE_SO_HEM[hem] *
      HE_SO_LOAI[loaiNha];

    const donGia = DON_GIA[dichVu][mucDauTu];
    const tongChiPhi = tongDienTich * donGia;

    return {
      dtTret,
      tongDienTich: Math.round(tongDienTich * 100) / 100,
      donGia,
      tongChiPhi: Math.round(tongChiPhi),
      chiTiet: [
        { label: "Móng", dt: Math.round(dtMong * 100) / 100 },
        ...(ham === "khong" ? [] : [{ label: "Tầng hầm", dt: Math.round(dtHam * 100) / 100 }]),
        { label: `Tầng 1 → ${tang}`, dt: Math.round(dtTang1ToN * 100) / 100 },
        ...(lung > 0 ? [{ label: "Lửng", dt: lung }] : []),
        ...(tangThuong > 0 ? [{ label: "Tầng thượng", dt: tangThuong }] : []),
        { label: "Mái", dt: Math.round(dtMai * 100) / 100 },
        ...(dtSanThuong > 0 ? [{ label: "Sân thượng", dt: Math.round(dtSanThuong * 100) / 100 }] : []),
        ...(dtBanCong > 0 ? [{ label: "Ban công", dt: Math.round(dtBanCong * 100) / 100 }] : []),
        ...(dtSanVuonTinh > 0 ? [{ label: "Sân vườn", dt: Math.round(dtSanVuonTinh * 100) / 100 }] : []),
      ],
    };
  }, [loaiNha, dichVu, mucDauTu, matTien, chieuRong, chieuDai, soTang, hem, dtLung, dtTangThuong, sanThuong, banCong, mong, ham, mai, dtSanVuon]);

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <label className="block text-sm font-semibold text-primary mb-1">{label}</label>
      {children}
    </div>
  );

  const selectCls =
    "w-full border-b-2 border-slate-200 focus:border-primary px-2 py-2 bg-transparent outline-none text-slate-700";
  const inputCls = selectCls;

  return (
    <section id="tinh-chi-phi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            Tính chi phí xây dựng
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600">
            Quý khách vui lòng nhập đầy đủ các thông tin bên dưới. Lưu ý quý khách nhập diện tích xây dựng
            (không phải diện tích đất) để có kết quả tính tương đối chính xác nhất. Chân thành cảm ơn quý khách!
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-200 rounded-xl shadow-sm p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Field label="Chọn loại nhà">
              <select className={selectCls} value={loaiNha} onChange={(e) => setLoaiNha(e.target.value as LoaiNha)}>
                <option value="nha-pho">Nhà phố</option>
                <option value="biet-thu">Biệt thự</option>
                <option value="cap-bon">Nhà cấp bốn</option>
              </select>
            </Field>
            <Field label="Dịch vụ xây nhà">
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
              <select className={selectCls} value={matTien} onChange={(e) => setMatTien(parseInt(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </Field>

            <Field label="Chiều rộng (Ví dụ 2.5m)">
              <input type="number" step="0.1" className={inputCls} value={chieuRong} onChange={(e) => setChieuRong(e.target.value)} placeholder="Nhập chiều rộng" />
            </Field>
            <Field label="Chiều dài (Ví dụ 10.5m)">
              <input type="number" step="0.1" className={inputCls} value={chieuDai} onChange={(e) => setChieuDai(e.target.value)} placeholder="Nhập chiều dài" />
            </Field>
            <Field label="Số tầng (Trừ tum, lửng)">
              <input type="number" min="1" className={inputCls} value={soTang} onChange={(e) => setSoTang(e.target.value)} placeholder="Nhập số tầng" />
            </Field>
            <Field label="Hẻm">
              <select className={selectCls} value={hem} onChange={(e) => setHem(e.target.value as Hem)}>
                <option value="rong-5">Rộng hơn 5m</option>
                <option value="3-5">Rộng từ 3m - 5m</option>
                <option value="duoi-3">Nhỏ hơn 3m</option>
              </select>
            </Field>

            <Field label="Lửng (Ví dụ 30m²)">
              <input type="number" step="0.1" className={inputCls} value={dtLung} onChange={(e) => setDtLung(e.target.value)} placeholder="Nhập diện tích" />
            </Field>
            <Field label="Tầng thượng (Ví dụ 30m²)">
              <input type="number" step="0.1" className={inputCls} value={dtTangThuong} onChange={(e) => setDtTangThuong(e.target.value)} placeholder="Nhập diện tích" />
            </Field>
            <Field label="Sân thượng">
              <select className={selectCls} value={sanThuong} onChange={(e) => setSanThuong(e.target.value as SanThuong)}>
                <option value="khong">Không có</option>
                <option value="khong-mai">Sân thượng</option>
                <option value="co-mai">Sân thượng có mái</option>
              </select>
            </Field>
            <Field label="Ban công">
              <select className={selectCls} value={banCong} onChange={(e) => setBanCong(e.target.value as "co" | "khong")}>
                <option value="khong">Không có</option>
                <option value="co">Có ban công</option>
              </select>
            </Field>

            <Field label="Móng">
              <select className={selectCls} value={mong} onChange={(e) => setMong(e.target.value as Mong)}>
                <option value="bang">Móng băng</option>
                <option value="coc">Móng cọc (Móng đài)</option>
                <option value="don">Móng đơn</option>
              </select>
            </Field>
            <Field label="Tầng hầm">
              <select className={selectCls} value={ham} onChange={(e) => setHam(e.target.value as Ham)}>
                <option value="khong">Không hầm</option>
                <option value="1-1.2">Độ sâu 1.0 - 1.2m</option>
                <option value="1.2-1.5">Độ sâu 1.2 - 1.5m</option>
                <option value="1.5-1.7">Độ sâu 1.5 - 1.7m</option>
                <option value="1.7-2">Độ sâu 1.7 - 2.0m</option>
                <option value="2-2.5">Độ sâu 2.0 - 2.5m</option>
                <option value="2.5-3">Độ sâu 2.5 - 3.0m</option>
              </select>
            </Field>
            <Field label="Mái">
              <select className={selectCls} value={mai} onChange={(e) => setMai(e.target.value as Mai)}>
                <option value="ton">Mái tôn</option>
                <option value="btct">Mái BTCT</option>
                <option value="xa-go-ngoi">Xà gồ + ngói</option>
                <option value="btct-ngoi">BTCT + ngói</option>
              </select>
            </Field>
            <Field label="Sân vườn (Ví dụ 30m²)">
              <input type="number" step="0.1" className={inputCls} value={dtSanVuon} onChange={(e) => setDtSanVuon(e.target.value)} placeholder="Nhập diện tích" />
            </Field>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-accent text-white font-bold uppercase px-8 py-4 rounded-full shadow-lg">
              <Calculator size={22} />
              Tính toán kết quả
            </div>
          </div>

          <div className="mt-8">
            {!result ? (
              <p className="text-center text-red-600 font-semibold">
                Bạn vui lòng nhập số tầng, diện tích xây dựng!
              </p>
            ) : (
              <div className="bg-white border border-primary/20 rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-xl md:text-2xl font-bold text-primary uppercase text-center mb-4">
                  Kết quả tính chi phí
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary border-b pb-2 mb-2">Chi tiết diện tích</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      {result.chiTiet.map((c) => (
                        <li key={c.label} className="flex justify-between">
                          <span>{c.label}</span>
                          <span className="font-medium">{c.dt} m²</span>
                        </li>
                      ))}
                      <li className="flex justify-between border-t mt-2 pt-2 font-bold text-primary">
                        <span>Tổng diện tích xây dựng</span>
                        <span>{result.tongDienTich} m²</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center text-center bg-primary/5 rounded-lg p-6">
                    <div className="text-slate-600 mb-2">Đơn giá</div>
                    <div className="text-lg font-semibold text-primary mb-4">{fmt(result.donGia)} / m²</div>
                    <div className="text-slate-600 mb-2">Tổng chi phí dự kiến</div>
                    <div className="text-3xl md:text-4xl font-extrabold text-accent">{fmt(result.tongChiPhi)}</div>
                    <p className="text-xs text-slate-500 mt-3 italic">
                      * Kết quả mang tính tham khảo. Vui lòng liên hệ 0936 045 268 để được khảo sát và báo giá chính xác.
                    </p>
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

import { usePricingItems } from "@/lib/site-settings";

export function HomeTicker() {
  const pricing = usePricingItems();
  const phanTho = pricing.find((p) => p.id === "phan-tho");
  const tronGoi = pricing.find((p) => p.id === "tron-goi");

  const phanThoText = phanTho
    ? `${phanTho.priceFrom} – ${phanTho.priceTo} ${phanTho.unit}`
    : "3.550.000 – 3.800.000 đ/m²";
  const tronGoiText = tronGoi
    ? `${tronGoi.priceFrom} – ${tronGoi.priceTo} ${tronGoi.unit}`
    : "4.850.000 – 6.700.000 đ/m²";

  const message = `KIẾN TRÚC SAO KHUÊ XIN KÍNH CHÀO QUÝ KHÁCH HÀNG — ĐƠN GIÁ XÂY DỰNG PHẦN THÔ: TỪ ${phanThoText.toUpperCase()} — ĐƠN GIÁ XÂY DỰNG TRỌN GÓI: TỪ ${tronGoiText.toUpperCase()} — KHẢO SÁT & TƯ VẤN MIỄN PHÍ`;

  return (
    <div className="qh-home-ticker" aria-label="Thông báo đơn giá">
      <div className="qh-home-ticker__track">
        <span>{message}</span>
        <span aria-hidden>{message}</span>
      </div>
    </div>
  );
}

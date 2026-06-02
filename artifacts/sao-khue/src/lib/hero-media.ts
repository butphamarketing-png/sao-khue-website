/** Kích thước chuẩn ảnh slideshow trang chủ — giữ tỷ lệ trên mọi thiết bị. */
export const HERO_SLIDE_SPEC = {
  width: 1920,
  height: 820,
  aspectRatio: 1920 / 820,
  aspectClass: "aspect-[1920/820]",
  label: "1920 × 820 px",
  ratioLabel: "2,34 : 1",
  maxHeightPx: 820,
  minHeightPx: 280,
} as const;

export const HERO_SLIDE_UPLOAD_HINT =
  `Khuyến nghị ${HERO_SLIDE_SPEC.label} (${HERO_SLIDE_SPEC.ratioLabel}), JPG/PNG/WebP, tối đa 8MB. Ảnh sẽ tự cắt vừa khung (object-cover).`;

export function formatImageDimensions(width: number, height: number): string {
  return `${width} × ${height} px`;
}

export function isAspectRatioMatch(
  width: number,
  height: number,
  targetWidth: number,
  targetHeight: number,
  tolerance = 0.06,
): boolean {
  const target = targetWidth / targetHeight;
  const actual = width / height;
  return Math.abs(actual - target) <= tolerance;
}

export function isHeroDimensionMatch(width: number, height: number, tolerance = 0.06): boolean {
  return isAspectRatioMatch(
    width,
    height,
    HERO_SLIDE_SPEC.width,
    HERO_SLIDE_SPEC.height,
    tolerance,
  );
}

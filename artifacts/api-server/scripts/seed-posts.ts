import { db, postsTable } from "@workspace/db";
import { sql } from "drizzle-orm";

type Seed = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
};

const HERO = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200";
const BUILD = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200";
const REPAIR = "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=1200";
const DESIGN = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200";
const TEAM = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200";

const lorem = (title: string) => `
<h2>${title}</h2>
<p>Công ty TNHH Kiến Trúc Sao Khuê là một trong những đơn vị uy tín hàng đầu tại TP.HCM trong lĩnh vực thiết kế, thi công và xây dựng nhà ở dân dụng. Với đội ngũ kiến trúc sư, kỹ sư giàu kinh nghiệm và đội thợ lành nghề, chúng tôi cam kết mang đến cho khách hàng những công trình chất lượng cao, thẩm mỹ và an toàn.</p>
<h3>Quy trình làm việc chuyên nghiệp</h3>
<p>Chúng tôi luôn tuân thủ quy trình 6 bước rõ ràng: tiếp nhận yêu cầu - khảo sát mặt bằng - thiết kế phương án - báo giá chi tiết - ký kết hợp đồng - thi công và bàn giao. Mọi công đoạn đều được giám sát chặt chẽ để đảm bảo tiến độ và chất lượng.</p>
<h3>Cam kết về chất lượng</h3>
<ul>
  <li>Sử dụng vật liệu chính hãng, có nguồn gốc rõ ràng.</li>
  <li>Tuân thủ tiêu chuẩn kỹ thuật, đảm bảo an toàn lao động.</li>
  <li>Bảo hành công trình tối thiểu 5 năm phần kết cấu.</li>
  <li>Hỗ trợ tư vấn pháp lý, xin giấy phép xây dựng.</li>
</ul>
<p>Quý khách hàng có nhu cầu xin vui lòng liên hệ Hotline <strong>0936 045 268 - 0909 075 668</strong> để được tư vấn miễn phí 24/7.</p>
`;

const posts: Seed[] = [
  // dich-vu
  { slug: "xay-nha-tron-goi-tphcm", title: "Dịch vụ xây nhà trọn gói tại TP.HCM uy tín giá tốt 2026", category: "dich-vu", excerpt: "Sao Khuê nhận xây nhà trọn gói trọn gói chìa khoá trao tay tại TP.HCM với báo giá minh bạch, vật liệu chính hãng, bảo hành dài hạn.", content: lorem("Xây nhà trọn gói TP.HCM"), imageUrl: BUILD },
  { slug: "sua-chua-nha-tphcm", title: "Sửa chữa nhà phố, cải tạo nâng cấp toàn diện", category: "dich-vu", excerpt: "Đơn vị sửa chữa nhà uy tín, nhận cải tạo nội ngoại thất, sơn sửa, chống thấm, lát nền cho nhà phố và biệt thự.", content: lorem("Sửa chữa nhà"), imageUrl: REPAIR },
  { slug: "xay-dung-phan-tho", title: "Xây dựng phần thô nhà phố giá cạnh tranh", category: "dich-vu", excerpt: "Nhận thi công phần thô nhà phố, biệt thự với đội ngũ thợ lành nghề và quản lý công trình chuyên nghiệp.", content: lorem("Xây dựng phần thô"), imageUrl: BUILD },
  { slug: "thiet-ke-nha", title: "Thiết kế nhà ở, nhà phố, biệt thự hiện đại", category: "dich-vu", excerpt: "Đội ngũ kiến trúc sư trẻ, sáng tạo mang đến những phương án thiết kế tối ưu công năng và thẩm mỹ.", content: lorem("Thiết kế nhà"), imageUrl: DESIGN },
  { slug: "nang-tang-nha-pho", title: "Nâng tầng nhà phố an toàn, tiết kiệm chi phí", category: "dich-vu", excerpt: "Khảo sát kỹ kết cấu, đưa ra phương án nâng tầng tối ưu, không ảnh hưởng đến công trình cũ.", content: lorem("Nâng tầng nhà phố"), imageUrl: BUILD },
  { slug: "hoan-thien-nha", title: "Hoàn thiện nhà / căn hộ đã xây thô trọn gói", category: "dich-vu", excerpt: "Sơn nước, ốp lát, điện nước, nội thất – chúng tôi nhận hoàn thiện trọn gói cho căn hộ và nhà phố.", content: lorem("Hoàn thiện nhà"), imageUrl: REPAIR },
  { slug: "khuyen-mai-xay-dung", title: "Khuyến mại xây dựng tháng này: Tặng thiết kế khi xây trọn gói", category: "dich-vu", excerpt: "Ưu đãi đặc biệt: miễn phí thiết kế kiến trúc khi ký hợp đồng xây nhà trọn gói trong tháng này.", content: lorem("Khuyến mại"), imageUrl: HERO },

  // gioi-thieu
  { slug: "so-do-to-chuc", title: "Sơ đồ tổ chức Công ty TNHH Kiến Trúc Sao Khuê", category: "gioi-thieu", excerpt: "Cơ cấu tổ chức gọn nhẹ, linh hoạt với 5 phòng ban chính: Thiết kế – Thi công – Vật tư – Kế toán – Chăm sóc khách hàng.", content: lorem("Sơ đồ tổ chức"), imageUrl: TEAM },
  { slug: "ve-chung-toi", title: "Về Công ty Kiến Trúc Sao Khuê", category: "gioi-thieu", excerpt: "Hơn 10 năm kinh nghiệm trong ngành xây dựng dân dụng, hơn 500 công trình bàn giao thành công khắp TP.HCM.", content: lorem("Về chúng tôi"), imageUrl: TEAM },
  { slug: "hoat-dong-sao-khue", title: "Hoạt động Sao Khuê – Đồng hành cùng cộng đồng", category: "gioi-thieu", excerpt: "Các hoạt động xã hội, từ thiện, đào tạo nghề và hỗ trợ cộng đồng do Sao Khuê tổ chức trong những năm qua.", content: lorem("Hoạt động Sao Khuê"), imageUrl: TEAM },
  { slug: "tuyen-dung", title: "Tuyển dụng kỹ sư, kiến trúc sư, giám sát công trình 2026", category: "gioi-thieu", excerpt: "Sao Khuê đang tìm kiếm các ứng viên tài năng cho các vị trí kỹ sư xây dựng, kiến trúc sư và giám sát công trình.", content: lorem("Tuyển dụng"), imageUrl: TEAM },

  // cong-trinh
  { slug: "xay-nha-pho-binh-thanh", title: "Công trình xây nhà phố tại Bình Thạnh", category: "cong-trinh", excerpt: "Bàn giao thành công công trình nhà phố 4 tầng tại quận Bình Thạnh, diện tích 5x18m, phong cách hiện đại.", content: lorem("Công trình xây nhà"), imageUrl: BUILD },
  { slug: "sua-nha-quan-3", title: "Cải tạo nhà phố cũ tại Quận 3", category: "cong-trinh", excerpt: "Hồi sinh ngôi nhà 30 năm tuổi tại Q.3 thành không gian sống hiện đại, tiện nghi cho gia đình 6 người.", content: lorem("Cải tạo nhà"), imageUrl: REPAIR },
  { slug: "thiet-ke-biet-thu-thu-duc", title: "Thiết kế biệt thự sân vườn tại Thủ Đức", category: "cong-trinh", excerpt: "Phương án thiết kế biệt thự sân vườn 200m2 tại TP. Thủ Đức, phong cách Á Đông kết hợp hiện đại.", content: lorem("Thiết kế biệt thự"), imageUrl: DESIGN },

  // kinh-nghiem
  { slug: "cam-nang-xay-nha-2026", title: "Cẩm nang xây nhà từ A đến Z cho người mới", category: "kinh-nghiem", excerpt: "Tất cả những gì bạn cần biết khi xây nhà lần đầu: chuẩn bị tài chính, chọn nhà thầu, xin phép, giám sát công trình.", content: lorem("Cẩm nang xây nhà"), imageUrl: HERO },
  { slug: "luat-xay-dung-moi-nhat", title: "Tóm tắt Luật Xây Dựng và những điểm cần lưu ý 2026", category: "kinh-nghiem", excerpt: "Phổ biến những quy định mới nhất của Luật Xây dựng, giúp chủ nhà tránh được các rủi ro pháp lý khi thi công.", content: lorem("Luật Xây Dựng"), imageUrl: HERO },
  { slug: "phong-thuy-nha-o", title: "Phong thuỷ nhà ở: Hướng nhà, bố trí phòng hợp tuổi", category: "kinh-nghiem", excerpt: "Hướng dẫn cơ bản về phong thuỷ trong xây nhà, từ chọn hướng, bố trí cửa chính, phòng ngủ, bếp đến phòng thờ.", content: lorem("Phong thuỷ"), imageUrl: HERO },
];

async function main() {
  console.log("Seeding posts...");
  for (const p of posts) {
    await db
      .insert(postsTable)
      .values(p)
      .onConflictDoUpdate({
        target: postsTable.slug,
        set: { title: p.title, category: p.category, excerpt: p.excerpt, content: p.content, imageUrl: p.imageUrl, updatedAt: sql`now()` },
      });
    console.log(" -", p.slug);
  }
  console.log("Done. Total:", posts.length);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

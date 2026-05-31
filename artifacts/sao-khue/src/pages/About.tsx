import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { AboutSection } from "@/components/AboutSection";
import { CommitmentsSection } from "@/components/CommitmentsSection";

export default function About() {
  return (
    <PageShell>
      <PageBanner
        title="Về chúng tôi"
        subtitle="Kiến trúc và xây dựng trọn gói — uy tín, minh bạch, đồng hành cùng gia đình bạn."
      />
      <AboutSection />
      <CommitmentsSection />
    </PageShell>
  );
}

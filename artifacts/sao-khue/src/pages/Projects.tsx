import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CTABanner } from "@/components/CTABanner";

export default function Projects() {
  return (
    <PageShell>
      <PageBanner
        title="Công trình đã thi công"
        subtitle="Một số dự án nhà phố, biệt thự và cải tạo do Sao Khuê thiết kế và thi công."
      />
      <ProjectsSection />
      <CTABanner />
    </PageShell>
  );
}

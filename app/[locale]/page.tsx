import { Header } from "@/components/portfolio/header"
import { HeroSection } from "@/components/portfolio/hero-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { GithubSection } from "@/components/portfolio/github-section"
import { CertificatesSection } from "@/components/portfolio/certificates-section"
import { Footer } from "@/components/portfolio/footer"

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: "pt" | "en" }>
}) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <GithubSection />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  )
}

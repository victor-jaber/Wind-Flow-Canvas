import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProductGallery } from "@/components/ProductGallery";
import { PriceCalculator } from "@/components/PriceCalculator";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { CTASection } from "@/components/CTASection";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProductGallery />
        <PriceCalculator />
        <PortfolioGallery />
        <CTASection />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}

import { useRef, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProductGallery } from "@/components/ProductGallery";
import { CTASection } from "@/components/CTASection";
import { ContactForm, type ContactFormRef } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const contactFormRef = useRef<ContactFormRef>(null);
  const [selectedService, setSelectedService] = useState<"compra" | "aluguel" | "armazenamento" | null>(null);

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView();
  };

  const handleServiceClick = (service: "compra" | "aluguel" | "armazenamento") => {
    setSelectedService(service);
    setTimeout(() => {
      contactFormRef.current?.scrollIntoView();
      contactFormRef.current?.setService(service);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCTAClick={scrollToContact} />
      <main>
        <HeroSection onCTAClick={scrollToContact} />
        <ServicesSection onServiceClick={handleServiceClick} />
        <BenefitsSection />
        <ProductGallery onProductClick={scrollToContact} />
        <CTASection onCTAClick={scrollToContact} />
        <ContactForm ref={contactFormRef} selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}

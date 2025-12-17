import { Button } from "@/components/ui/button";
import { WindBannerAnimation } from "./WindBannerAnimation";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getWhatsAppUrl } from "./WhatsAppCTA";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Wind Banners de Alta Qualidade</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Destaque sua marca com </span>
              <span className="text-primary">Wind Banners</span>
              <span className="text-foreground"> profissionais</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Compre, alugue ou armazene seus wind banners conosco. 
              Soluções completas para eventos, lojas e campanhas publicitárias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-8 py-6 text-base font-semibold"
                asChild
                data-testid="button-hero-cta"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-base font-semibold"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-hero-services"
              >
                Ver Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">+500</span> clientes atendidos
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-end min-h-[400px] lg:min-h-[500px]">
            <div className="flex items-end gap-6 md:gap-10">
              <div className="animate-float" style={{ animationDelay: "0s" }}>
                <WindBannerAnimation size="md" text="PROMO" />
              </div>
              <div>
                <WindBannerAnimation size="xl" text="TeckPrints" />
              </div>
              <div className="animate-float" style={{ animationDelay: "1.5s" }}>
                <WindBannerAnimation size="lg" text="EVENTOS" />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-8 bg-gradient-to-t from-muted/50 to-transparent rounded-full blur-xl" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

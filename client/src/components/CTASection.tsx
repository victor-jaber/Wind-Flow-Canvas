import { Button } from "@/components/ui/button";
import { WindBannerAnimation } from "./WindBannerAnimation";
import { MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getWhatsAppUrl } from "./WhatsAppCTA";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary/95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="absolute left-4 md:left-10 bottom-10 opacity-30">
        <WindBannerAnimation size="md" showPole={false} />
      </div>
      <div className="absolute right-4 md:right-10 bottom-10 opacity-30">
        <WindBannerAnimation size="lg" showPole={false} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para destacar sua marca?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Entre em contato agora pelo WhatsApp e receba um orçamento personalizado.
            Nossa equipe está pronta para atender você!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold bg-green-600 hover:bg-green-700 border-green-700"
              asChild
              data-testid="button-cta-whatsapp"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="w-5 h-5 mr-2" />
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground backdrop-blur-sm"
              asChild
              data-testid="button-cta-contact"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

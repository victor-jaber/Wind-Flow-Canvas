import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os wind banners da TeckPrints.";

export function getWhatsAppUrl(service?: string) {
  let message = WHATSAPP_MESSAGE;
  if (service === "compra") {
    message = "Olá! Gostaria de saber mais sobre a COMPRA de wind banners.";
  } else if (service === "aluguel") {
    message = "Olá! Gostaria de saber mais sobre o ALUGUEL de wind banners.";
  } else if (service === "armazenamento") {
    message = "Olá! Gostaria de saber mais sobre o serviço de ARMAZENAMENTO de wind banners.";
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppCTA() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fale <span className="text-primary">Conosco</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato pelo WhatsApp e receba atendimento imediato.
            Nossa equipe está pronta para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <Card className="p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <SiWhatsapp className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Atendimento rápido e personalizado. Tire suas dúvidas, 
              solicite orçamentos e feche negócios diretamente pelo WhatsApp.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold bg-green-600 hover:bg-green-700 border-green-700"
              asChild
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-whatsapp-main"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Conversa
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Resposta em até 5 minutos durante horário comercial
            </p>
          </Card>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Informações de Contato</h3>
            <div className="space-y-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl hover-elevate active-elevate-2"
                data-testid="link-phone"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Telefone / WhatsApp</p>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </a>

              <a
                href="mailto:contato@teckprints.com.br"
                className="flex items-start gap-4 p-4 rounded-xl hover-elevate active-elevate-2"
                data-testid="link-email"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-muted-foreground">contato@teckprints.com.br</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-muted-foreground">
                    Rua Example, 123 - Centro<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Horário de Atendimento</p>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

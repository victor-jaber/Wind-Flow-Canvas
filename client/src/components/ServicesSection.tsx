import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar, Archive, Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getWhatsAppUrl } from "./WhatsAppCTA";

const services = [
  {
    id: "compra" as const,
    icon: ShoppingCart,
    title: "Compra",
    description: "Adquira wind banners personalizados com a sua marca",
    benefits: [
      "Impressão de alta qualidade",
      "Materiais resistentes às intempéries",
      "Personalização completa",
      "Entrega em todo Brasil",
    ],
    cta: "Comprar Agora",
  },
  {
    id: "aluguel" as const,
    icon: Calendar,
    title: "Aluguel",
    description: "Alugue wind banners para eventos e campanhas temporárias",
    benefits: [
      "Economia para eventos pontuais",
      "Manutenção inclusa",
      "Entrega e retirada",
      "Diversos tamanhos disponíveis",
    ],
    cta: "Alugar",
    featured: true,
  },
  {
    id: "armazenamento" as const,
    icon: Archive,
    title: "Armazenamento",
    description: "Guarde seus wind banners em local seguro e adequado",
    benefits: [
      "Ambiente climatizado",
      "Proteção contra danos",
      "Acesso quando precisar",
      "Manutenção preventiva",
    ],
    cta: "Conhecer Espaço",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em wind banners para sua empresa ou evento.
            Escolha o serviço ideal para suas necessidades.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={`relative p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? "border-primary/50 bg-gradient-to-b from-primary/5 to-background"
                    : ""
                }`}
                data-testid={`card-service-${service.id}`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Mais Popular
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.featured 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-primary/10 text-primary"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className="w-full"
                  variant={service.featured ? "default" : "outline"}
                  asChild
                  data-testid={`button-service-${service.id}`}
                >
                  <a
                    href={getWhatsAppUrl(service.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="w-4 h-4 mr-2" />
                    {service.cta}
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

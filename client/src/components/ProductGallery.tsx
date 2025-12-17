import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WindBannerAnimation } from "./WindBannerAnimation";
import { Ruler } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getWhatsAppUrl } from "./WhatsAppCTA";

const products = [
  {
    id: 1,
    name: "Wind Banner P",
    dimensions: "2m x 0.5m",
    ideal: "Feiras e stands",
    price: "A partir de R$ 189",
    size: "sm" as const,
  },
  {
    id: 2,
    name: "Wind Banner M",
    dimensions: "3m x 0.7m",
    ideal: "Lojas e eventos",
    price: "A partir de R$ 259",
    size: "md" as const,
    popular: true,
  },
  {
    id: 3,
    name: "Wind Banner G",
    dimensions: "4m x 0.9m",
    ideal: "Campanhas e promoções",
    price: "A partir de R$ 329",
    size: "lg" as const,
  },
  {
    id: 4,
    name: "Wind Banner GG",
    dimensions: "5m x 1.1m",
    ideal: "Eventos de grande porte",
    price: "A partir de R$ 419",
    size: "xl" as const,
  },
];

export function ProductGallery() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wind banners em diversos tamanhos para atender todas as suas necessidades.
            Personalize com sua marca e destaque-se.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => {
            const containerHeight = {
              sm: "h-28 md:h-36",
              md: "h-32 md:h-44",
              lg: "h-36 md:h-52",
              xl: "h-40 md:h-60",
            };
            return (
            <Card
              key={product.id}
              className="relative overflow-hidden p-4 md:p-6 flex flex-col"
              data-testid={`card-product-${product.id}`}
            >
              {product.popular && (
                <Badge className="absolute -top-3 right-4 z-10 no-default-active-elevate">
                  Mais Vendido
                </Badge>
              )}
              
              <div className={`${containerHeight[product.size]} flex items-end justify-center mb-4 md:mb-6 mt-6 md:mt-8 overflow-hidden`}>
                <div className="scale-75 md:scale-100 origin-bottom">
                  <WindBannerAnimation
                    size={product.size}
                    showPole={false}
                    text={product.name.split(" ")[2]}
                  />
                </div>
              </div>
              
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-2 md:mb-3">
                <Ruler className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">{product.dimensions}</span>
              </div>
              
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 hidden sm:block">
                Ideal para: {product.ideal}
              </p>
              
              <div className="mt-auto">
                <p className="text-sm md:text-lg font-bold text-primary mb-3 md:mb-4">{product.price}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  size="sm"
                  asChild
                  data-testid={`button-product-${product.id}`}
                >
                  <a
                    href={getWhatsAppUrl("compra")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">Personalizar</span>
                    <span className="md:hidden">Orçamento</span>
                  </a>
                </Button>
              </div>
            </Card>
          );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Precisa de um tamanho personalizado? Entre em contato!
          </p>
          <Button asChild data-testid="button-custom-size">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="w-4 h-4 mr-2" />
              Solicitar Tamanho Especial
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

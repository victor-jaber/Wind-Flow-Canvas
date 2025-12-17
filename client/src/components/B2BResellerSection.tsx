import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Zap, 
  TrendingUp, 
  HeadphonesIcon,
  Building2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    id: "kits",
    icon: Package,
    title: "Kits Prontos para Revenda",
    description: "Wind banner completo em kits individuais (impressão + estrutura), entregando ao seu cliente um produto finalizado e pronto para uso.",
    highlights: ["Produto completo", "Pronto para uso", "Agrega valor ao portfólio"]
  },
  {
    id: "prazos",
    icon: Zap,
    title: "Prazos de Produção Relâmpago",
    description: "Produção em prazos extremamente rápidos, inclusive para grandes volumes, garantindo agilidade nas vendas.",
    highlights: ["Entrega expressa", "Grandes volumes", "Sem perda de oportunidades"]
  },
  {
    id: "margem",
    icon: TrendingUp,
    title: "Margem de Revenda Garantida",
    description: "Preços diferenciados para parceiros, com alta margem de lucro e política de desconto por volume.",
    highlights: ["Alta margem de lucro", "Desconto por volume", "Escale seu faturamento"]
  },
  {
    id: "suporte",
    icon: HeadphonesIcon,
    title: "Suporte Dedicado ao Revendedor",
    description: "Equipe exclusiva para gráficas e agências, com materiais de divulgação, mockups e treinamento.",
    highlights: ["Equipe exclusiva", "Materiais prontos", "Parceria de longo prazo"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function B2BResellerSection() {
  return (
    <section 
      id="b2b-revenda" 
      className="py-20 md:py-28 bg-muted/30"
      aria-labelledby="b2b-heading"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Programa de Revenda B2B</span>
            </div>
            
            <h2 
              id="b2b-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Você é{" "}
              <span className="text-primary">Gráfica</span>,{" "}
              <span className="text-primary">Copiadora</span> ou{" "}
              <span className="text-primary">Agência</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Se a sua empresa atua como revendedora de produtos gráficos, a{" "}
              <span className="font-semibold text-foreground">Teck Prints</span>{" "}
              oferece condições especiais para você aumentar seus lucros com wind banners de alta qualidade.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div key={benefit.id} variants={itemVariants}>
                  <Card 
                    className="h-full hover-elevate transition-all duration-300 border-border/50 overflow-visible"
                    data-testid={`card-benefit-${benefit.id}`}
                  >
                    <CardContent className="p-6 md:p-8 space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <h3 className="text-xl font-semibold tracking-tight">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {benefit.highlights.map((highlight, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center gap-1.5 text-sm text-foreground/80 bg-muted px-3 py-1.5 rounded-full"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left space-y-4 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  Torne-se um Revendedor Teck Prints
                </h3>
                <p className="text-primary-foreground/90 text-lg">
                  Junte-se a dezenas de gráficas e agências que já lucram com nossos wind banners. 
                  Cadastre-se agora e receba uma proposta personalizada.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="text-base px-8 py-6 font-semibold shadow-lg"
                  data-testid="button-cta-reseller"
                >
                  Quero ser Revendedor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 font-semibold border-primary-foreground/30 text-primary-foreground bg-white/10 backdrop-blur-sm"
                  data-testid="button-cta-reseller-whatsapp"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

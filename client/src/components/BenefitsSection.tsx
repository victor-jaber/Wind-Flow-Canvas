import { Shield, Truck, Palette, Sun, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Materiais Premium",
    description: "Tecidos de alta durabilidade e resistência, garantindo a longevidade do seu investimento.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para todo o Brasil. Seu wind banner chega no prazo combinado.",
  },
  {
    icon: Palette,
    title: "Personalização Total",
    description: "Impressão digital de alta definição. Suas cores e designs reproduzidos com perfeição.",
  },
  {
    icon: Sun,
    title: "Resistente ao Clima",
    description: "Materiais tratados para resistir a sol, chuva e vento intenso sem desbotar.",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Equipe dedicada para atender suas demandas com rapidez e eficiência.",
  },
  {
    icon: Award,
    title: "Garantia de Qualidade",
    description: "Compromisso com a excelência em cada produto entregue aos nossos clientes.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="text-primary">TeckPrints</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Anos de experiência e compromisso com a qualidade nos fazem a escolha certa
            para seu projeto de comunicação visual.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl hover-elevate cursor-default"
                data-testid={`benefit-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

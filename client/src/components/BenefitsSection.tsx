import { motion } from "framer-motion";
import { Shield, Truck, Palette, Sun, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Materiais Premium",
    description: "Tecidos de alta durabilidade e resistência, garantindo a longevidade do seu investimento.",
    stat: "10+",
    statLabel: "anos de durabilidade",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para todo o Brasil. Seu wind banner chega no prazo combinado.",
    stat: "48h",
    statLabel: "para capitais",
  },
  {
    icon: Palette,
    title: "Personalização Total",
    description: "Impressão digital de alta definição. Suas cores e designs reproduzidos com perfeição.",
    stat: "100%",
    statLabel: "fiel às cores",
  },
  {
    icon: Sun,
    title: "Resistente ao Clima",
    description: "Materiais tratados para resistir a sol, chuva e vento intenso sem desbotar.",
    stat: "UV",
    statLabel: "proteção total",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Equipe dedicada para atender suas demandas com rapidez e eficiência.",
    stat: "15min",
    statLabel: "tempo de resposta",
  },
  {
    icon: Award,
    title: "Garantia de Qualidade",
    description: "Compromisso com a excelência em cada produto entregue aos nossos clientes.",
    stat: "500+",
    statLabel: "clientes satisfeitos",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="text-primary">TeckPrints</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Anos de experiência e compromisso com a qualidade nos fazem a escolha certa
            para seu projeto de comunicação visual.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                data-testid={`benefit-${index}`}
              >
                <div className="relative h-full p-6 rounded-2xl bg-card border border-border/50 hover-elevate transition-all duration-300 overflow-visible">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-border/50 flex items-center gap-3">
                    <span className="text-3xl font-bold text-primary">{benefit.stat}</span>
                    <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-1">5.000+</div>
            <div className="text-sm text-muted-foreground">Wind Banners Produzidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-1">27</div>
            <div className="text-sm text-muted-foreground">Estados Atendidos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

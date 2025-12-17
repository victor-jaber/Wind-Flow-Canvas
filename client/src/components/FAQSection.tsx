import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de entrega dos wind banners?",
    answer: "O prazo de produção é de 3 a 5 dias úteis após a aprovação do layout. A entrega varia conforme a região, mas geralmente é de 2 a 7 dias úteis adicionais para todo o Brasil.",
  },
  {
    question: "Vocês trabalham com pedidos de grandes quantidades?",
    answer: "Sim! Somos especialistas em atender revendedores e grandes empresas. Oferecemos preços especiais para pedidos em atacado, com condições diferenciadas de pagamento e descontos progressivos.",
  },
  {
    question: "Qual material é utilizado nos wind banners?",
    answer: "Utilizamos tecido Oxford 100% poliéster com tratamento UV, que garante durabilidade e resistência às intempéries. A impressão é feita em sublimação digital de alta definição, garantindo cores vibrantes e duradouras.",
  },
  {
    question: "As bases de pé estão incluídas no preço?",
    answer: "As bases são vendidas separadamente, permitindo que você escolha o modelo ideal para sua necessidade. Oferecemos bases com reservatório de água, bases cruzeta de metal e bases premium para maior estabilidade.",
  },
  {
    question: "Como funciona o serviço de aluguel?",
    answer: "O aluguel é ideal para eventos temporários. Você escolhe o período desejado (mínimo de 1 dia), e nós cuidamos da entrega, instalação e retirada. O valor inclui a manutenção e higienização dos materiais.",
  },
  {
    question: "Posso personalizar o wind banner com minha arte?",
    answer: "Com certeza! Você pode enviar sua arte pronta ou nossa equipe de design pode criar o layout para você. Trabalhamos com arquivos em alta resolução (PDF, AI, CDR ou imagens em 300dpi).",
  },
  {
    question: "Qual a garantia dos produtos?",
    answer: "Oferecemos garantia de 90 dias contra defeitos de fabricação na estrutura e 30 dias na impressão. A garantia não cobre danos causados por mau uso, exposição excessiva ao sol ou condições climáticas extremas.",
  },
  {
    question: "Vocês fazem entrega para todo o Brasil?",
    answer: "Sim! Entregamos para todas as regiões do Brasil. O frete é calculado de acordo com o destino e quantidade de produtos. Para pedidos acima de determinado valor, oferecemos frete grátis para algumas regiões.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Tire suas dúvidas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as principais dúvidas sobre nossos produtos e serviços.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 md:px-6 bg-card"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

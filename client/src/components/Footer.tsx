import { Wind, Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const footerLinks = {
  services: [
    { label: "Compra de Wind Banners", href: "#servicos" },
    { label: "Aluguel para Eventos", href: "#servicos" },
    { label: "Armazenamento", href: "#servicos" },
    { label: "Tamanhos Especiais", href: "#contato" },
  ],
  company: [
    { label: "Sobre Nós", href: "#" },
    { label: "Nossos Produtos", href: "#produtos" },
    { label: "Contato", href: "#contato" },
    { label: "Blog", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/teckprints", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/teckprints", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/teckprints", label: "LinkedIn" },
  { icon: SiWhatsapp, href: "https://wa.me/5511999999999", label: "WhatsApp" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Wind className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TeckPrints</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Especialistas em wind banners de alta qualidade. 
              Compre, alugue ou armazene conosco.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate active-elevate-2"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Serviços</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+5511999999999" className="text-muted-foreground hover:text-foreground transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@teckprints.com.br" className="text-muted-foreground hover:text-foreground transition-colors break-all">
                  contato@teckprints.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Rua Example, 123<br />
                  Centro - São Paulo, SP
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Seg-Sex: 8h-18h<br />
                  Sáb: 8h-12h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {currentYear} TeckPrints. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

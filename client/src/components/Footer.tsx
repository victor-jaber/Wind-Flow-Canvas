import { MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getWhatsAppUrl } from "./WhatsAppCTA";
import logoImage from "@assets/cropped-logo-tec_1765989491588.png";

const footerLinks = {
  services: [
    { label: "Compra de Wind Banners", service: "compra" as const },
    { label: "Bases de Pé", service: "compra" as const },
    { label: "Aluguel para Eventos", service: "aluguel" as const },
  ],
  company: [
    { label: "Sobre Nós", href: "#" },
    { label: "Nossos Produtos", href: "#produtos" },
    { label: "Contato", href: "#contato" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/teckprints", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/teckprints", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/teckprints", label: "LinkedIn" },
  { icon: SiWhatsapp, href: getWhatsAppUrl(), label: "WhatsApp" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="TeckPrints" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Especialistas em wind banners e bases de pé para revendedores e grandes empresas.
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
                    href={getWhatsAppUrl(link.service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <SiWhatsapp className="w-3 h-3" />
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
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">WhatsApp</span>
                    <p className="text-sm">(11) 99999-9999</p>
                  </div>
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

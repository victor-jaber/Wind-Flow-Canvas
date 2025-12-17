import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getWhatsAppUrl } from "./WhatsAppCTA";
import logoImage from "@assets/cropped-logo-tec_1765989491588.png";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
            : "bg-white/10 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              className="flex items-center"
              data-testid="link-logo"
            >
              <img 
                src={logoImage} 
                alt="TeckPrints" 
                className="h-10 md:h-12 w-auto brightness-0 invert"
                style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-white/80 hover:text-white"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button 
                asChild 
                data-testid="button-header-cta"
                className={isScrolled ? "" : "bg-white text-primary hover:bg-white/90"}
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-4 h-4 mr-2" />
                  Orçamento Grátis
                </a>
              </Button>
            </div>

            <button
              className={`md:hidden p-2 ${isScrolled ? "" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 text-lg font-medium hover:text-primary transition-colors"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-4 w-full"
                asChild
                data-testid="button-mobile-cta"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <SiWhatsapp className="w-4 h-4 mr-2" />
                  Orçamento Grátis
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, MapPin, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    title: "Festival de Verão",
    location: "São Paulo, SP",
    date: "Janeiro 2024",
    category: "Eventos",
    size: "large",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: 2,
    title: "Loja TechMaster",
    location: "Rio de Janeiro, RJ",
    date: "Dezembro 2023",
    category: "Varejo",
    size: "medium",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    title: "Campeonato de Surf",
    location: "Florianópolis, SC",
    date: "Novembro 2023",
    category: "Esportes",
    size: "small",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    id: 4,
    title: "Black Friday Store",
    location: "Curitiba, PR",
    date: "Novembro 2023",
    category: "Promoções",
    size: "small",
    gradient: "from-gray-800 to-gray-600",
  },
  {
    id: 5,
    title: "Feira Gastronômica",
    location: "Belo Horizonte, MG",
    date: "Outubro 2023",
    category: "Gastronomia",
    size: "medium",
    gradient: "from-red-600 to-orange-500",
  },
  {
    id: 6,
    title: "Convenção Tech",
    location: "Brasília, DF",
    date: "Setembro 2023",
    category: "Corporativo",
    size: "large",
    gradient: "from-indigo-600 to-purple-500",
  },
];

interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  date: string;
  category: string;
  size: string;
  gradient: string;
}

function GalleryCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
    medium: "md:col-span-1 md:row-span-2 aspect-[3/4]",
    small: "md:col-span-1 md:row-span-1 aspect-video",
  };

  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-xl ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      data-testid={`card-portfolio-${item.id}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-20 transition-opacity duration-300">
        <div className="w-8 h-24 md:w-12 md:h-32 bg-white/20 rounded-b-lg transform -rotate-6" />
        <div className="w-1 h-16 md:h-24 bg-white/30 rounded-full -mt-2" />
      </div>
      
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
        <Badge 
          variant="secondary" 
          className="w-fit mb-2 bg-white/20 text-white border-0 backdrop-blur-sm text-xs"
        >
          {item.category}
        </Badge>
        <h3 className="text-white font-bold text-lg md:text-xl mb-2 drop-shadow-lg">
          {item.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-white/80 text-xs md:text-sm">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.date}
          </span>
        </div>
      </div>
      
      <motion.div 
        className="absolute inset-0 bg-primary/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <Eye className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos wind banners que já produzimos para nossos clientes.
            Cada projeto é único e personalizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {portfolioItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            Mais de <span className="font-bold text-foreground">500+</span> projetos realizados em todo o Brasil
          </p>
        </motion.div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl">
          {selectedItem && (
            <>
              <DialogTitle className="text-xl font-bold">
                {selectedItem.title}
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-4">
                  <div className={`w-full aspect-video rounded-lg bg-gradient-to-br ${selectedItem.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <div className="w-16 h-48 bg-white/20 rounded-b-lg transform -rotate-6" />
                      <div className="w-2 h-32 bg-white/30 rounded-full -mt-4 ml-1" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/60 text-sm">Imagem do projeto</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <Badge variant="outline">{selectedItem.category}</Badge>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedItem.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedItem.date}
                    </span>
                  </div>
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

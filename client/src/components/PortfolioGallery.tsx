import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import portfolioImg1 from "@assets/Gemini_Generated_Image_1vf1kj1vf1kj1vf1_1766004380127.png";
import portfolioImg2 from "@assets/Gemini_Generated_Image_bhhkz3bhhkz3bhhk_1766004380127.png";
import portfolioImg3 from "@assets/Gemini_Generated_Image_gtb7tqgtb7tqgtb7_1766004380127.png";
import portfolioImg4 from "@assets/Gemini_Generated_Image_gxk2g8gxk2g8gxk2_1766004380127.png";
import portfolioImg5 from "@assets/Gemini_Generated_Image_yixbmyixbmyixbmy_1766004380127.png";

const portfolioItems = [
  { id: 1, image: portfolioImg1 },
  { id: 2, image: portfolioImg2 },
  { id: 3, image: portfolioImg3 },
  { id: 4, image: portfolioImg4 },
  { id: 5, image: portfolioImg5 },
];

interface PortfolioItem {
  id: number;
  image: string;
}

function GalleryCard({ item, onClick, className = "" }: { item: PortfolioItem; onClick: () => void; className?: string }) {
  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-xl ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      data-testid={`card-portfolio-${item.id}`}
    >
      <img 
        src={item.image} 
        alt={`Wind Banner ${item.id}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <motion.div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
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
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <GalleryCard
            item={portfolioItems[0]}
            onClick={() => setSelectedItem(portfolioItems[0])}
            className="col-span-2 row-span-2 aspect-square"
          />
          <GalleryCard
            item={portfolioItems[1]}
            onClick={() => setSelectedItem(portfolioItems[1])}
            className="col-span-1 aspect-square"
          />
          <GalleryCard
            item={portfolioItems[2]}
            onClick={() => setSelectedItem(portfolioItems[2])}
            className="col-span-1 aspect-square"
          />
          <GalleryCard
            item={portfolioItems[3]}
            onClick={() => setSelectedItem(portfolioItems[3])}
            className="col-span-1 aspect-square"
          />
          <GalleryCard
            item={portfolioItems[4]}
            onClick={() => setSelectedItem(portfolioItems[4])}
            className="col-span-1 aspect-square"
          />
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
        <DialogContent className="max-w-md p-4">
          {selectedItem && (
            <>
              <DialogTitle className="sr-only">
                Wind Banner {selectedItem.id}
              </DialogTitle>
              <img 
                src={selectedItem.image} 
                alt={`Wind Banner ${selectedItem.id}`}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

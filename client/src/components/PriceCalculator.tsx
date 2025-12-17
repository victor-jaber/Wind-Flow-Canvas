import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ShoppingCart, Calendar, Plus, Minus } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

const products = {
  windBanners: [
    { id: "wb-2m", name: "Wind Banner 2m", priceCompra: 189, priceAluguel: 45 },
    { id: "wb-25m", name: "Wind Banner 2.5m", priceCompra: 229, priceAluguel: 55 },
    { id: "wb-3m", name: "Wind Banner 3m", priceCompra: 279, priceAluguel: 65 },
    { id: "wb-35m", name: "Wind Banner 3.5m", priceCompra: 329, priceAluguel: 75 },
    { id: "wb-4m", name: "Wind Banner 4m", priceCompra: 389, priceAluguel: 89 },
  ],
  bases: [
    { id: "base-simples", name: "Base Simples (água)", priceCompra: 79, priceAluguel: 20 },
    { id: "base-reforçada", name: "Base Reforçada (água)", priceCompra: 129, priceAluguel: 30 },
    { id: "base-cruzeta", name: "Base Cruzeta (metal)", priceCompra: 159, priceAluguel: 35 },
    { id: "base-premium", name: "Base Premium (metal pesado)", priceCompra: 219, priceAluguel: 50 },
  ],
};

const WHATSAPP_NUMBER = "5511999999999";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export function PriceCalculator() {
  const [serviceType, setServiceType] = useState<"compra" | "aluguel">("compra");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [rentalDays, setRentalDays] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);

  const allProducts = [...products.windBanners, ...products.bases];

  const currentProduct = allProducts.find((p) => p.id === selectedProduct);

  const unitPrice = useMemo(() => {
    if (!currentProduct) return 0;
    return serviceType === "compra" ? currentProduct.priceCompra : currentProduct.priceAluguel;
  }, [currentProduct, serviceType]);

  const itemTotal = useMemo(() => {
    if (serviceType === "aluguel") {
      return unitPrice * quantity * rentalDays;
    }
    return unitPrice * quantity;
  }, [unitPrice, quantity, rentalDays, serviceType]);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  }, [cart]);

  const grandTotal = cartTotal + (currentProduct ? itemTotal : 0);

  const addToCart = () => {
    if (!currentProduct) return;

    const existingIndex = cart.findIndex((item) => item.id === currentProduct.id);
    if (existingIndex >= 0) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          id: currentProduct.id,
          name: currentProduct.name,
          quantity: serviceType === "aluguel" ? quantity * rentalDays : quantity,
          unitPrice,
        },
      ]);
    }
    setSelectedProduct("");
    setQuantity(1);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getWhatsAppUrl = () => {
    const items = cart
      .map((item) => `- ${item.quantity}x ${item.name}`)
      .join("\n");
    
    const serviceLabel = serviceType === "compra" ? "COMPRA" : "ALUGUEL";
    const message = `Olá! Sou revendedor/empresa e gostaria de um orçamento para ${serviceLabel}:\n\n${items}\n\nValor estimado: R$ ${cartTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
    
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Orçamento Instantâneo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculadora de <span className="text-primary">Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Monte seu pedido e receba um orçamento instantâneo. 
            Preços especiais para revendedores e grandes quantidades.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <Tabs value={serviceType} onValueChange={(v) => { setServiceType(v as "compra" | "aluguel"); setCart([]); }}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="compra" className="gap-2" data-testid="tab-compra">
                  <ShoppingCart className="w-4 h-4" />
                  Compra
                </TabsTrigger>
                <TabsTrigger value="aluguel" className="gap-2" data-testid="tab-aluguel">
                  <Calendar className="w-4 h-4" />
                  Aluguel
                </TabsTrigger>
              </TabsList>

              <TabsContent value="compra" className="space-y-6">
                <ProductSelector
                  products={allProducts}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  unitPrice={unitPrice}
                  itemTotal={itemTotal}
                  onAddToCart={addToCart}
                  serviceType="compra"
                />
              </TabsContent>

              <TabsContent value="aluguel" className="space-y-6">
                <ProductSelector
                  products={allProducts}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  unitPrice={unitPrice}
                  itemTotal={itemTotal}
                  onAddToCart={addToCart}
                  serviceType="aluguel"
                  rentalDays={rentalDays}
                  setRentalDays={setRentalDays}
                />
              </TabsContent>
            </Tabs>

            {cart.length > 0 && (
              <motion.div
                className="mt-8 pt-6 border-t"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <h4 className="font-semibold mb-4">Itens do Orçamento</h4>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div>
                        <span className="font-medium">{item.quantity}x</span>{" "}
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold">
                          R$ {(item.unitPrice * item.quantity).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeFromCart(item.id)}
                          data-testid={`button-remove-${item.id}`}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Total Estimado:</span>
                    <span className="text-2xl font-bold text-primary">
                      R$ {cartTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    * Valores sujeitos a negociação para grandes quantidades
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 border-green-700"
                    asChild
                  >
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-send-quote"
                    >
                      <SiWhatsapp className="w-5 h-5 mr-2" />
                      Enviar Orçamento via WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

interface ProductSelectorProps {
  products: typeof products.windBanners;
  selectedProduct: string;
  setSelectedProduct: (value: string) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  unitPrice: number;
  itemTotal: number;
  onAddToCart: () => void;
  serviceType: "compra" | "aluguel";
  rentalDays?: number;
  setRentalDays?: (value: number) => void;
}

function ProductSelector({
  products,
  selectedProduct,
  setSelectedProduct,
  quantity,
  setQuantity,
  unitPrice,
  itemTotal,
  onAddToCart,
  serviceType,
  rentalDays = 1,
  setRentalDays,
}: ProductSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Produto</Label>
          <Select value={selectedProduct} onValueChange={setSelectedProduct}>
            <SelectTrigger data-testid="select-product">
              <SelectValue placeholder="Selecione um produto" />
            </SelectTrigger>
            <SelectContent>
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                Wind Banners
              </div>
              {products.slice(0, 5).map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name} - R$ {(serviceType === "compra" ? product.priceCompra : product.priceAluguel).toLocaleString("pt-BR")}
                  {serviceType === "aluguel" && "/dia"}
                </SelectItem>
              ))}
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">
                Bases de Pé
              </div>
              {products.slice(5).map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name} - R$ {(serviceType === "compra" ? product.priceCompra : product.priceAluguel).toLocaleString("pt-BR")}
                  {serviceType === "aluguel" && "/dia"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Quantidade</Label>
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              data-testid="button-qty-minus"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="text-center"
              data-testid="input-quantity"
            />
            <Button
              size="icon"
              variant="outline"
              onClick={() => setQuantity(quantity + 1)}
              data-testid="button-qty-plus"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {serviceType === "aluguel" && setRentalDays && (
        <div className="space-y-2">
          <Label>Dias de Aluguel</Label>
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
              data-testid="button-days-minus"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Input
              type="number"
              min={1}
              value={rentalDays}
              onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
              className="text-center w-24"
              data-testid="input-rental-days"
            />
            <Button
              size="icon"
              variant="outline"
              onClick={() => setRentalDays(rentalDays + 1)}
              data-testid="button-days-plus"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <span className="text-muted-foreground ml-2">dia(s)</span>
          </div>
        </div>
      )}

      {selectedProduct && (
        <motion.div
          className="p-4 rounded-lg bg-muted/50 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="text-sm text-muted-foreground">Subtotal do item:</p>
            <p className="text-xl font-bold">
              R$ {itemTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <Button onClick={onAddToCart} data-testid="button-add-to-cart">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar ao Orçamento
          </Button>
        </motion.div>
      )}
    </div>
  );
}

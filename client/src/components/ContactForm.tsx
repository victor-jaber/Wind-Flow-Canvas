import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { forwardRef, useImperativeHandle, useEffect } from "react";

interface ContactFormProps {
  selectedService?: "compra" | "aluguel" | "armazenamento" | null;
}

export interface ContactFormRef {
  scrollIntoView: () => void;
  setService: (service: "compra" | "aluguel" | "armazenamento") => void;
}

export const ContactForm = forwardRef<ContactFormRef, ContactFormProps>(
  ({ selectedService }, ref) => {
    const { toast } = useToast();
    
    const form = useForm<InsertLead>({
      resolver: zodResolver(insertLeadSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        service: undefined,
        message: "",
      },
    });

    useEffect(() => {
      if (selectedService) {
        form.setValue("service", selectedService, { shouldValidate: true });
      }
    }, [selectedService, form]);

    useImperativeHandle(ref, () => ({
      scrollIntoView: () => {
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      },
      setService: (service: "compra" | "aluguel" | "armazenamento") => {
        form.setValue("service", service, { shouldValidate: true });
      },
    }));

    const mutation = useMutation({
      mutationFn: async (data: InsertLead) => {
        const response = await apiRequest("POST", "/api/leads", data);
        return response.json();
      },
      onSuccess: () => {
        toast({
          title: "Mensagem enviada!",
          description: "Em breve entraremos em contato com você.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente ou entre em contato por telefone.",
          variant: "destructive",
        });
      },
    });

    const onSubmit = (data: InsertLead) => {
      mutation.mutate(data);
    };

    return (
      <section id="contato" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solicite seu <span className="text-primary">Orçamento</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para oferecer a melhor solução para você.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <Card className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="seu@email.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone / WhatsApp</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(00) 00000-0000"
                                {...field}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Serviço de interesse</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Selecione um serviço" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="compra">Compra de Wind Banner</SelectItem>
                              <SelectItem value="aluguel">Aluguel de Wind Banner</SelectItem>
                              <SelectItem value="armazenamento">Armazenamento</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem (opcional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Conte-nos mais sobre seu projeto ou evento..."
                              className="resize-none min-h-[120px]"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full py-6"
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Solicitação
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-start gap-4 p-4 rounded-xl hover-elevate active-elevate-2"
                    data-testid="link-phone"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefone / WhatsApp</p>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@teckprints.com.br"
                    className="flex items-start gap-4 p-4 rounded-xl hover-elevate active-elevate-2"
                    data-testid="link-email"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-muted-foreground">contato@teckprints.com.br</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Endereço</p>
                      <p className="text-muted-foreground">
                        Rua Example, 123 - Centro<br />
                        São Paulo - SP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-primary mb-2">Horário de Atendimento</p>
                <p className="text-muted-foreground text-sm">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactForm.displayName = "ContactForm";

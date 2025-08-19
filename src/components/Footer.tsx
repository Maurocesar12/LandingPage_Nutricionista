import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Clock,
  Heart
} from "lucide-react";
import logoPrincipal from "../image/logoPrincipal.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white">
      {/* Contact Section */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Vamos conversar sobre sua{" "}
                  <span className="text-emerald-light">transformação?</span>
                </h2>
                <p className="text-white/80 text-lg">
                  Estou aqui para esclarecer suas dúvidas e te ajudar a dar o primeiro passo rumo aos seus objetivos.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-white/80">+55 (21) 98294-3243</p>
                    <p className="text-sm text-white/60">Resposta em até 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-white/80">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-white/80">Sábado: 8h às 12h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Atendimento</h3>
                    <p className="text-white/80">Presencial: Rio de Janeiro, RJ</p>
                    <p className="text-white/80">Online: Todo o Brasil</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="font-semibold">Me siga nas redes sociais</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-white/20 text-black hover:bg-white/10"
                  >
                    <a 
                      href="https://www.instagram.com/nutriarletecris/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-white/20 text-black hover:bg-white/10"
                  >
                    <a 
                      href="https://www.facebook.com/Nutriacconsultoria" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  Envie sua mensagem
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Seu nome"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Textarea
                    placeholder="Conte-me sobre seus objetivos..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-emerald hover:bg-emerald-dark text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
                
                <div className="mt-4 p-4 bg-emerald/20 rounded-lg">
                  <p className="text-sm text-white/90">
                    💡 <strong>Dica:</strong> Para uma resposta mais rápida, me chame diretamente no WhatsApp!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <div className="bg-emerald/20 rounded-2xl p-8 border border-emerald/30">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Pronta para começar sua transformação?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Mais de 8.000 mulheres já conquistaram seus objetivos comigo. 
                Sua transformação começa com uma simples conversa.
              </p>
              <Button 
                size="lg" 
                asChild
                className="bg-emerald hover:bg-emerald-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://wa.me/+5521982943243" target="_blank" rel="noopener noreferrer">
                  ✨ Agendar Consulta Gratuita Agora
                </a>
              </Button>
              <div className="mt-4 text-sm text-white/60">
                ⚡ Resposta garantida em até 2 horas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    <img src={logoPrincipal} alt="Logo Arlete Cristina" className="w-8 h-8 rounded-full object-cover" />
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">Arlete Cristina</h4>
                  <p className="text-sm text-white/60">Nutricionista CRN: 12345</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-white/60 text-sm">
                © {currentYear} Arlete Cristina Nutricionista. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm flex items-center justify-center md:justify-end">
                Feito com <Heart className="w-4 h-4 mx-1 text-red-400" /> para sua saúde
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
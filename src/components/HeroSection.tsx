import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Clock, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-nutritionist.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-20 min-h-screen gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint/20 to-emerald-light/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-emerald/5 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="space-y-8">

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme sua{" "}
                <span className="text-gradient">relação com a comida</span>{" "}
                em 30 dias
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experimente um acompanhamento nutricional inovador que combina ciência e tecnologia para transformar sua vida com saúde e bem-estar 
                <strong className="text-primary"> emagrecer com saúde</strong> e manter os resultados para sempre.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "Avaliação completa com bioimpedância",
                "Cardápio personalizado para seu estilo de vida",
                "Acompanhamento quinzenal para ajustes",
                "Suporte via WhatsApp durante todo o processo"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Avaliação média</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">13</span>
                </div>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">72h</span>
                </div>
                <p className="text-sm text-muted-foreground">Para ver resultados</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild
                className="gradient-primary text-primary-foreground hover:shadow-hero transition-all duration-300 transform hover:scale-105"
              >
                <a href="https://wa.me/+5521982943243" target="_blank" rel="noopener noreferrer">
                  ✨ Agendar Consulta Gratuita
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="#depoimentos">
                  Ver Transformações
                </a>
              </Button>
            </div>

            {/* Social Proof Badge - Repositioned */}
            <div className="bg-emerald-light/20 border border-emerald/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <p className="text-sm font-semibold text-forest">
                  ✨ <strong>Mais de 8.000 mulheres transformadas</strong> - Junte-se ao grupo de sucesso!
                </p>
              </div>
            </div>

            {/* Urgency/Scarcity */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                🔥 <strong>Apenas 5 vagas disponíveis este mês</strong> - Garantia de resultado ou seu dinheiro de volta
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Arlete Cristina - Nutricionista especialista em emagrecimento sorrindo em seu consultório profissional"
                className="w-full h-auto rounded-3xl shadow-hero object-cover"
                loading="eager"
                fetchPriority="high"
                width="600"
                height="400"
              />
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-card max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">NS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">"Perdi 10kg em 2 meses!"</p>
                    <p className="text-xs text-muted-foreground">- Nadyne Santos</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
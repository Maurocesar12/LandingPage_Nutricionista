import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Nadyne Santos",
      result: "Perdi 10kg em 2 meses",
      content: "Adorei a consulta com a Dra Arlete! Atendimento maravilhoso, muito simpática e profissional. Nota-se que tem bastante conhecimento. Eu adorei o cardápio personalizado e pensado para minhas necessidades. Já estou obtendo resultados. Não passo fome, ela adaptou a quantidade de comida que eu já comia. Estou feliz e indico ela para todos.",
      rating: 5,
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Philipe Machado",
      result: "Perdeu quase 10kg em 2 meses",
      content: "Nutricionista show de bola, bastante atenciosa, simpática, em 2 meses consegui perder quase 10 kilos. Profissional de verdade! O acompanhamento fez toda a diferença para manter a motivação.",
      rating: 5,
      location: "São Paulo, SP"
    },
    {
      name: "Gabriele Carvalho",
      result: "7kg perdidos em 1 mês e 20 dias",
      content: "Ótima nutricionista, perdi quase 7 quilos em 1 mês e 20 dias só com dieta e exercícios, me ajudou bastante e super recomendo! O plano é fácil de seguir e os resultados apareceram rapidinho.",
      rating: 5,
      location: "Belo Horizonte, MG"
    },
    {
      name: "Rosangela Marequito",
      result: "Transformação completa de vida",
      content: "A Dr. Arlete além de ser uma super mega Profissional, é um ser humano Incrível, Humilde e que não mede esforço para nos ajudar, seja em seu Consultório ou nas redes sociais! Gratidão Nutri, Amo e quero Para vida!",
      rating: 5,
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Brayan Dary",
      result: "Mudança de estilo de vida",
      content: "Fui indicado por um amigo e me surpreendi pela excelente profissional que é, dedicada e muito atenciosa. Explicou tudo detalhado, tirou todas as dúvidas e deu dicas preciosas. Recomendo 100%!",
      rating: 5,
      location: "Niterói, RJ"
    },
    {
      name: "Mayara Vidal",
      result: "Atendimento humanizado",
      content: "Amei ser atendida pela Dra. Arlete. Atendimento Humanizado e personalizado. Estou ansiosa para a próxima consulta. Ela realmente se importa com cada paciente.",
      rating: 5,
      location: "Rio de Janeiro, RJ"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit px-4 py-2 mx-auto">
            Depoimentos Reais
          </Badge>
          <h2 className="text-4xl font-bold">
            O que minhas pacientes{" "}
            <span className="text-gradient">estão falando</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 8.000 mulheres já transformaram suas vidas. Veja alguns resultados reais:
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-12">
          <Card className="bg-card border-border shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-xl leading-relaxed text-foreground mb-6">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <div>
                      <cite className="text-lg font-semibold text-foreground not-italic">
                        {testimonials[activeTestimonial].name}
                      </cite>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeTestimonial].location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-success rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {testimonials[activeTestimonial].result.match(/\d+/)?.[0] || "✓"}
                        {testimonials[activeTestimonial].result.includes("kg") ? "kg" : ""}
                      </div>
                      <div className="text-sm text-white/90">
                        {testimonials[activeTestimonial].result.includes("kg") ? "perdidos" : "sucesso"}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {testimonials[activeTestimonial].result}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-soft hover:-translate-y-1 ${
                index === activeTestimonial 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'bg-card border-border'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.result.match(/\d+/)?.[0]}kg
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-foreground line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Banner */}
        <div className="gradient-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Junte-se a mais de 8.000 mulheres transformadas!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">8.000+</div>
              <p className="text-primary-foreground/90">Pacientes atendidas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
              <p className="text-primary-foreground/90">Taxa de sucesso</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">4.9★</div>
              <p className="text-primary-foreground/90">Avaliação média</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">13</div>
              <p className="text-primary-foreground/90">Anos de experiência</p>
            </div>
          </div>
          <p className="text-primary-foreground/90 mb-6">
            Seu próximo depoimento pode estar aqui. Que tal começar hoje?
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
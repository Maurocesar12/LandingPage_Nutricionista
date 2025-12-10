import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  FileText, 
  HeartHandshake, 
  Clock,
  CheckCircle,
  MessageCircle 
} from "lucide-react";
import professionalAssessment from "@/assets/professional-assessment.jpg";
import mealPrepImage from "@/assets/healthy-meal-prep.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Avaliação Completa",
      description: "Aqui começa o diagnóstico de verdade. A consulta inicia com uma anamnese detalhada, onde conversamos sobre:",
      features: [
        "histórico de saúde pessoal e familiar",
        "rotina, alimentação, sono e nível de estresse",
        "sintomas, desconfortos, intolerâncias e sinais metabólicos",
        "Rastreamento de alergias e intolerâncias"
      ],
      image: professionalAssessment
    },
    {
      icon: FileText,
      title: "Plano Nutricional Exclusivo",
      description: "O plano alimentar não vem pronto. Ele é construído com você, durante a consulta.",
      features: [
        "sua rotina real",
        "preferências alimentares",
        "objetivos clínicos e estéticos",
        "exames laboratoriais (quando disponíveis)"
      ],
      image: mealPrepImage
    },
    {
      icon: HeartHandshake,
      title: "Acompanhamento Contínuo",
      description: "Resultado não vem de uma consulta isolada. Durante o acompanhamento (3 meses, 6 meses ou 1 ano), você conta com:",
      features: [
        "Consultas quinzenais ou mensais para ajustes",
        "Suporte via WhatsApp",
        "Adequações conforme sua evolução",
        "Orientação contínua para evitar recaídas e estagnação"
      ],
      image: null
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit px-4 py-2 mx-auto">
            Meus Serviços
          </Badge>
          <h2 className="text-4xl font-bold">
            Como funciona o{" "}
            <span className="text-gradient">processo de transformação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um método científico e personalizado que já transformou a vida de mais de 14.000 mulheres
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-card border-border">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <CardHeader className="p-0">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          Etapa {index + 1}
                        </Badge>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>


                  </CardContent>
                </div>

                {/* Image */}
                {service.image && (
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img
                      src={service.image}
                      alt={`${service.title} - Imagem ilustrativa do processo de ${service.title.toLowerCase()}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>
                )}
                
                {!service.image && (
                  <div className={`bg-gradient-hero p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center space-y-6">
                      <MessageCircle className="w-16 h-16 text-primary mx-auto" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Suporte Completo</h3>
                        <p className="text-muted-foreground">
                          Estou sempre disponível para tirar suas dúvidas e te apoiar em cada etapa da jornada.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              Pronta para cuidar da sua saúde de forma realista e personalizada?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Te ajudo a entender o seu corpo, criar hábitos que cabem na sua rotina e alcançar resultados sem dietas radicais.
            </p>
            <Button 
              size="lg" 
              asChild
              className="gradient-primary text-primary-foreground hover:shadow-soft transition-all duration-300"
            >
              <a href="https://wa.me/+5521982943243" target="_blank" rel="noopener noreferrer">
                🚀 Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
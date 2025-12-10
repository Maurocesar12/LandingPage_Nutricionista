import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Calendar } from "lucide-react";

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Nutricionista Clínica e Esportiva",
      description: "Graduação com especialização em emagrecimento"
    },
    {
      icon: Award,
      title: "Especialização em fitoterapia",
      description: "Pela UFRJ - Universidade Federal do Rio de Janeiro"
    },
    {
      icon: Users,
      title: "12.000+ Pacientes Atendidas",
      description: "Mais de uma década transformando vidas"
    },
    {
      icon: Calendar,
      title: "14 Anos de Experiência",
      description: "Atuando em consultório desde 2011"
    }
  ];

  const specialties = [
    "Emagrecimento sustentável",
    "Ganho de massa muscular",
    "Diabetes e síndrome metabólica",
    "Colesterol e triglicérides",
    "Deficiências nutricionais",
    "Nutrição esportiva",
    "Fitoterapia",
    "Doença renal crônica",
    "Esteatose"
  ];

  return (
    <section id="sobre" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit px-4 py-2">
                Sobre a Especialista
              </Badge>
              <h2 className="text-4xl font-bold">
                Prazer, <span className="text-gradient">Arlete Cristina</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Sua futura nutri! 👋
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Sou nutricionista clínica, com 14 anos de experiência, nesse tempo, aprendi uma coisa importante: 
                <strong className="text-primary"> ninguém falha na alimentação porque “não quer”.</strong> 
                As pessoas desistem porque recebem orientações que não cabem na rotina.
              </p>
              
              <p className="text-lg leading-relaxed">
                Meu trabalho é olhar para o todo:<strong> horários, hábitos, histórico de saúde, relação com a comida e contexto emocional.</strong> A partir disso, construo um plano possível de seguir, sem rigidez, sem terrorismo alimentar e sem soluções temporárias. Aqui, emagrecimento não é castigo. É consequência de organização, entendimento do corpo e constância.

              </p>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Minhas Especialidades:</h3>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 gradient-primary rounded-full"></div>
                    <span className="text-foreground">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                      <credential.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
                      <p className="text-sm text-muted-foreground">{credential.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results Banner */}
        <div className="mt-16 gradient-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Resultados Comprovados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">8.000+</div>
              <p className="text-primary-foreground/90">Mulheres transformadas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
              <p className="text-primary-foreground/90">Taxa de sucesso</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">4.9★</div>
              <p className="text-primary-foreground/90">Avaliação dos pacientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
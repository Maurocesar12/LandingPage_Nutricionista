import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta tem duração de aproximadamente 60 minutos e é GRATUITA. Realizamos uma avaliação completa com bioimpedância, análise do seu histórico pessoal e familiar, hábitos alimentares atuais, estilo de vida e objetivos. Com base nessas informações, criamos um plano nutricional 100% personalizado para você."
    },
    {
      question: "Em quanto tempo verei os primeiros resultados?",
      answer: "Os primeiros resultados costumam aparecer entre 7 a 14 dias, mas isso varia de pessoa para pessoa. Muitas pacientes relatam melhorias na disposição e bem-estar já na primeira semana, enquanto a perda de peso visível geralmente ocorre a partir da segunda semana seguindo o plano corretamente."
    },
    {
      question: "O plano alimentar é muito restritivo?",
      answer: "Não! Meu método não trabalha com dietas restritivas ou 'dietas malucas'. Criamos um plano equilibrado e sustentável que se adapta ao seu estilo de vida, incluindo alimentos que você gosta. O objetivo é criar novos hábitos alimentares saudáveis que você possa manter para sempre."
    },
    {
      question: "Preciso fazer exercícios obrigatoriamente?",
      answer: "Embora o exercício seja sempre benéfico para a saúde, meu foco principal é na reeducação alimentar. Muitas pacientes conseguem excelentes resultados apenas com o plano nutricional. Se você já pratica exercícios ou quer começar, adaptamos o plano para potencializar seus resultados."
    },
    {
      question: "Como funciona o acompanhamento após a consulta?",
      answer: "Após a primeira consulta, oferecemos consultas de retorno quinzenais ou mensais para ajustar o plano conforme sua evolução. Além disso, você tem acesso ao meu WhatsApp para tirar dúvidas, receber orientações e manter a motivação durante todo o processo."
    },
    {
      question: "Posso fazer o acompanhamento à distância?",
      answer: "Sim! Atendo pacientes de todo o Brasil através de consultas online. O processo é exatamente o mesmo: avaliação completa, plano personalizado e acompanhamento contínuo, tudo pela telemedicina. A eficácia é a mesma das consultas presenciais."
    },
    {
      question: "Qual o investimento no acompanhamento nutricional?",
      answer: "O investimento varia conforme o tipo de acompanhamento escolhido. Oferecemos pacotes mensais e trimestrais com valores especiais. Na consulta gratuita, apresentamos todas as opções disponíveis para que você escolha a que melhor se adequa ao seu orçamento e objetivos."
    },
    {
      question: "Vocês oferecem garantia de resultados?",
      answer: "Sim! Tenho tanta confiança no meu método que ofereço garantia de resultados. Se seguir o plano corretamente e não ver resultados em 30 dias, devolvemos 100% do seu investimento. Essa é a nossa garantia de compromisso com o seu sucesso."
    },
    {
      question: "O plano funciona para pessoas com restrições alimentares?",
      answer: "Absolutamente! Trabalho com todos os tipos de restrições: vegetarianos, veganos, intolerância à lactose, diabetes, hipertensão, etc. O plano é totalmente personalizado levando em conta suas necessidades específicas e condições de saúde."
    },
    {
      question: "Como posso agendar minha consulta gratuita?",
      answer: "É muito simples! Clique no botão do WhatsApp em qualquer lugar desta página ou me mande uma mensagem diretamente. Vou verificar minha agenda e marcaremos sua consulta gratuita no melhor horário para você. Atendo de segunda a sexta-feira."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit px-4 py-2 mx-auto">
            Perguntas Frequentes
          </Badge>
          <h2 className="text-4xl font-bold">
            Tire suas{" "}
            <span className="text-gradient">dúvidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As perguntas mais comuns das minhas pacientes. Se tiver outras dúvidas, me chame no WhatsApp!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card text-center space-y-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💬</span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Fale comigo diretamente no WhatsApp! Estou aqui para esclarecer todas as suas questões e te ajudar a dar o primeiro passo.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  asChild
                  className="w-full gradient-primary text-primary-foreground hover:shadow-soft transition-all duration-300"
                >
                  <a href="https://wa.me/+5521982943243" target="_blank" rel="noopener noreferrer">
                    💬 Falar no WhatsApp
                  </a>
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  <p>⏰ Respondo em até 2 horas</p>
                  <p>📞 Segunda a sexta: 8h às 18h</p>
                  <p>📱 Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Consulta Gratuita</p>
                    <p className="text-sm text-green-600">Primeira avaliação sem custo</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🛡️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Garantia Total</p>
                    <p className="text-sm text-blue-600">100% do dinheiro de volta</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-800">8.000+ Transformadas</p>
                    <p className="text-sm text-purple-600">Resultados comprovados</p>
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

export default FAQSection;

import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Profissionais qualificados e certificados para oferecer o melhor serviço contábil.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção dedicada e soluções customizadas para seu negócio.'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Trabalhamos para maximizar sua lucratividade e minimizar seus riscos fiscais.'
    },
    {
      icon: Clock,
      title: 'Agilidade e Praticidade',
      description: 'Processos otimizados e atendimento online para maior comodidade.'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Sobre Nós
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Responsabilidade e Profissionalismo
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Solução Contábil Online disponibiliza para você e sua empresa soluções 
            contábeis e consultoria com responsabilidade e profissionalismo. Nossa missão 
            é ser seu parceiro estratégico no crescimento do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-brand card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 rounded-xl p-3 w-fit mb-4">
                <feature.icon size={24} className="text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 font-heading">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
              Nossa Missão
            </h3>
            
            <p className="text-white/90 text-lg leading-relaxed">
              Fornecer soluções contábeis inovadoras e eficientes, utilizando tecnologia 
              de ponta para simplificar a gestão financeira das empresas, permitindo que 
              nossos clientes foquem no que fazem de melhor: crescer seus negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

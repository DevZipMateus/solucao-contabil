
import React from 'react';
import { 
  Calculator, 
  Shield, 
  Users, 
  TrendingUp, 
  FileText, 
  Settings, 
  CreditCard,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Sistemas de Gestão (ERP)',
      description: 'Sistemas completos para gestão de pequenas empresas, controle de estoque, vendas e finanças.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Certificado Digital',
      description: 'Emissão de certificados digitais para empresas e profissionais autônomos.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calculator,
      title: 'Contabilidade Financeira',
      description: 'Escrituração contábil, elaboração de balanços e DRE com linguagem clara e acessível.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Contabilidade Fiscal',
      description: 'Apuração de impostos, escrituração fiscal e cumprimento das obrigações tributárias.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Contabilidade Trabalhista',
      description: 'Folha de pagamento, férias, rescisões e todas as obrigações relacionadas a colaboradores.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Planejamento Tributário',
      description: 'Estratégias para reduzir a carga tributária de forma legal e segura para sua empresa.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Abertura/Encerramento de Empresas',
      description: 'Suporte completo para legalização, alterações contratuais ou encerramento de atividades.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Soluções Contábeis Completas
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos um portfólio completo de serviços contábeis para atender todas 
            as necessidades da sua empresa, desde a abertura até o crescimento sustentável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-brand border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`bg-gradient-to-r ${service.color} rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} className="text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors font-heading">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* CTA */}
              <button 
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group-hover:translate-x-1 transition-transform"
              >
                Solicitar orçamento
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-secondary rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-heading">
              Precisa de uma solução personalizada?
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Nossa equipe está pronta para criar uma proposta sob medida 
              para as necessidades específicas da sua empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary group"
              >
                Falar com Especialista
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="https://api.whatsapp.com/send?phone=5567999369264&text=Olá! Gostaria de saber mais sobre os serviços contábeis."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                WhatsApp
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

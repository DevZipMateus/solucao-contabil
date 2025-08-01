
import React from 'react';
import { ArrowRight, Shield, TrendingUp, FileCheck } from 'lucide-react';

const Hero = () => {
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
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Shield size={16} className="mr-2" />
                Contabilidade Confiável
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight font-heading">
                Solução Contábil
                <span className="text-primary block">Online</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Descubra como nossos especialistas podem aumentar sua lucratividade 
                enquanto mantêm sua empresa em conformidade com as leis fiscais
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="btn-primary group"
                >
                  Solicitar Consultoria
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="btn-outline"
                >
                  Ver Serviços
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">+500</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Conformidade</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element - Reorganized */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              {/* Professional Accounting Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-brand-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=350&fit=crop&crop=center"
                    alt="Profissional trabalhando com contabilidade e documentos financeiros"
                    className="w-full h-64 lg:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
                
                {/* Floating badge - repositioned */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-brand animate-float z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileCheck size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">100% Digital</div>
                      <div className="text-xs text-muted-foreground">Processos online</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Cards - separated with proper spacing */}
              <div className="bg-gradient-primary rounded-3xl p-6 lg:p-8 shadow-brand-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float">
                    <TrendingUp size={28} className="text-white mb-3" />
                    <h3 className="text-white font-semibold text-sm mb-1">Crescimento</h3>
                    <p className="text-white/80 text-xs">Aumente sua lucratividade</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                    <FileCheck size={28} className="text-white mb-3" />
                    <h3 className="text-white font-semibold text-sm mb-1">Conformidade</h3>
                    <p className="text-white/80 text-xs">100% em dia com o fisco</p>
                  </div>
                  
                  <div className="col-span-2 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                    <Shield size={28} className="text-white mb-3" />
                    <h3 className="text-white font-semibold text-sm mb-1">Segurança Total</h3>
                    <p className="text-white/80 text-xs">Seus dados protegidos com certificação digital</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements - repositioned */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -left-4 w-12 h-12 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/4f7aa27f-f26d-4dc2-815c-fa001c2ed332.png" 
                alt="Solução Contábil Online"
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-lg font-bold">Solução Contábil</h3>
                <p className="text-sm opacity-80">Online</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Soluções contábeis e consultoria com responsabilidade e profissionalismo 
              para o crescimento do seu negócio.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/solucaocontabilidadeonline"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-primary-foreground transition-colors p-2 rounded-lg"
                aria-label="Instagram da Solução Contábil Online"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://solucaocontabilonline.cnt.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-primary-foreground transition-colors p-2 rounded-lg"
                aria-label="Site da Solução Contábil Online"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 flex-shrink-0 opacity-80" />
                <a href="tel:+5567999369264" className="hover:text-primary transition-colors">
                  (67) 99936-9264
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 flex-shrink-0 opacity-80" />
                <a href="mailto:solucaoctb@gmail.com" className="hover:text-primary transition-colors">
                  solucaoctb@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 opacity-80" />
                <span>
                  Dourados - MS
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="opacity-80" />
                <span>Segunda - Sexta: 08:00 - 17:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="opacity-80" />
                <span>Sábado: Fechado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="opacity-80" />
                <span>Domingo: Fechado</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4">Principais Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>• Contabilidade Completa</li>
              <li>• Planejamento Tributário</li>
              <li>• Certificado Digital</li>
              <li>• Sistema de Gestão (ERP)</li>
              <li>• Abertura de Empresas</li>
              <li>• Consultoria Especializada</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-sm opacity-80">
            <p>
              © {currentYear} Solução Contábil Online LTDA. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              Desenvolvido com ❤️ para seu sucesso empresarial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

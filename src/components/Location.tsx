
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Nossa Localização
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Visite Nosso Escritório
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos localizados em ponto estratégico para melhor atendê-lo. 
            Venha nos conhecer pessoalmente ou entre em contato através dos nossos canais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="animate-fade-in-left">
            <div className="bg-white rounded-2xl p-4 shadow-brand">
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=Rua+Hiran+Pereira+de+Matos,+1795,+Vila+Alba,+Dourados,+MS&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Solução Contábil Online"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-brand card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rua Hiran Pereira de Matos, 1795<br />
                      Vila Alba - Dourados, MS<br />
                      CEP: 79830-240
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/ZLGENgvjU1HV96TF7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm mt-2 transition-colors"
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-brand card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">
                      Horário de Atendimento
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Segunda - Sexta:</span>
                        <span className="text-foreground font-medium">08:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sábado:</span>
                        <span className="text-muted-foreground">Fechado</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Domingo:</span>
                        <span className="text-muted-foreground">Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-brand card-hover">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Telefone</h4>
                      <a 
                        href="tel:+5567999369264"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (67) 99936-9264
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">E-mail</h4>
                      <a 
                        href="mailto:solucaoctb@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        solucaoctb@gmail.com
                      </a>
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

export default Location;

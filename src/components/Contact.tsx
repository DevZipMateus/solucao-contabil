
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Ligue diretamente para nós',
      contact: '(67) 99936-9264',
      link: 'tel:+5567999369264',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Atendimento rápido e prático',
      contact: '(67) 99936-9264',
      link: 'https://api.whatsapp.com/send?phone=5567999369264&text=Olá! Gostaria de saber mais sobre os serviços contábeis.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Envie sua mensagem',
      contact: 'solucaoctb@gmail.com',
      link: 'mailto:solucaoctb@gmail.com',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    let message = "📝 *Solicitação de Consultoria Gratuita*\n\n";
    
    if (formData.name) message += `👤 *Nome:* ${formData.name}\n`;
    if (formData.email) message += `📧 *E-mail:* ${formData.email}\n`;
    if (formData.phone) message += `📱 *Telefone:* ${formData.phone}\n`;
    if (formData.company) message += `🏢 *Empresa:* ${formData.company}\n`;
    if (formData.service) {
      const serviceLabels: { [key: string]: string } = {
        'contabilidade-completa': 'Contabilidade Completa',
        'planejamento-tributario': 'Planejamento Tributário',
        'abertura-empresa': 'Abertura de Empresa',
        'certificado-digital': 'Certificado Digital',
        'erp': 'Sistema de Gestão (ERP)',
        'consultoria': 'Consultoria Especializada'
      };
      message += `🎯 *Serviço de Interesse:* ${serviceLabels[formData.service] || formData.service}\n`;
    }
    if (formData.message) message += `💬 *Mensagem:* ${formData.message}\n`;
    
    message += "\n_Mensagem enviada através do site_";
    
    // Encode message and create WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5567999369264&text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Entre em Contato
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Vamos Conversar?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos prontos para atender você e sua empresa. Entre em contato através 
            dos nossos canais e descubra como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-brand border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover animate-fade-in-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-r ${method.color} rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors font-heading">
                {method.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3">
                {method.description}
              </p>
              
              <p className="text-primary font-medium group-hover:text-primary/80 transition-colors">
                {method.contact}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-secondary rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-heading">
                Solicite uma Consultoria Gratuita
              </h3>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato em breve
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="(67) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="contabilidade-completa">Contabilidade Completa</option>
                  <option value="planejamento-tributario">Planejamento Tributário</option>
                  <option value="abertura-empresa">Abertura de Empresa</option>
                  <option value="certificado-digital">Certificado Digital</option>
                  <option value="erp">Sistema de Gestão (ERP)</option>
                  <option value="consultoria">Consultoria Especializada</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Descreva suas necessidades ou dúvidas..."
                />
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="btn-primary group inline-flex items-center justify-center"
                >
                  <span>Solicitar Consultoria Gratuita</span>
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Ao enviar este formulário, você concorda em ser contatado pela nossa equipe.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
              <img 
                src="/lovable-uploads/4f7aa27f-f26d-4dc2-815c-fa001c2ed332.png" 
                alt="Solução Contábil Online - Logo"
                className="h-10 lg:h-12 w-auto"
              />
              {!isMobile && (
                <div className="ml-3">
                  <h1 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                    Solução Contábil
                  </h1>
                  <p className="text-xs text-muted-foreground -mt-1">Online</p>
                </div>
              )}
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary text-sm"
              >
                Fale Conosco
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Abrir menu de navegação"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={toggleMobileMenu}></div>
        <nav className={`absolute top-16 right-0 left-0 bg-white border-b shadow-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary mt-4"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

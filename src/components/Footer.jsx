import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import clyonLogo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacto', href: '/contato' },
  ]

  const services = [
    'Recolha de Entulho',
    'Móveis e Eletrodomésticos',
    'Lixo Verde e Jardim',
    'Serviços Urgentes',
    'Limpeza de Sótãos',
    'Locais de Acesso Difícil'
  ]

  const areas = [
    'Lisboa', 'Cascais', 'Sintra', 'Oeiras',
    'Amadora', 'Loures', 'Setúbal', 'Almada',
    'Barreiro', 'Seixal', 'Sesimbra', 'Palmela'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="clyon-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={clyonLogo} alt="CLYON" className="h-10 w-auto brightness-0 invert" />
            <p className="text-gray-300 text-sm">
              Recolha profissional de entulho e resíduos em Lisboa e Setúbal. 
              Serviço rápido, seguro e sustentável.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+351 931 632 622</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@clyon.pt</span>
              </div>
              <a 
                href="https://wa.me/351931632622" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/simulacao" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Simular Orçamento
                </Link>
              </li>
              <li>
                <Link 
                  to="/politica-privacidade" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Areas & Hours */}
          <div className="space-y-4 mb-5">
            <h3 className="text-lg font-semibold">Área de Atuação</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <div className="text-gray-300 text-sm">
                <p className="font-medium mb-2">Grande Lisboa e Setúbal</p>
                <div className="grid grid-cols-2 gap-1">
                  {areas.map((area) => (
                    <span key={area} className="text-xs">{area}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-2 pt-4">
              <h4 className="font-medium">Horários</h4>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Segunda a Sábado: 8h-18h</p>
                  <p>Domingo: Apenas urgências</p>
                  <p className="text-xs mt-1">WhatsApp 24h para emergências</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="clyon-container py-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} CLYON. Todos os direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 my-4">
              <span className="text-gray-400 text-sm">Siga-nos:</span>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


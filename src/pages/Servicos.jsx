import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { 
  Hammer, 
  Sofa, 
  Leaf, 
  Zap, 
  Home,
  Mountain,
  CheckCircle,
  Clock,
  Shield,
  Recycle,
  ArrowRight
} from 'lucide-react'
import serviceEntulho from '../assets/service-entulho.jpg'
import serviceMoveis from '../assets/service-moveis.jpg'
import serviceJardim from '../assets/service-jardim.jpg'

const Servicos = () => {
  const servicosPrincipais = [
    {
      icon: <Hammer className="h-12 w-12 text-primary" />,
      title: "Recolha de Entulho",
      description: "Especialistas em recolha de resíduos de construção e demolição",
      image: serviceEntulho,
      items: [
        "Tijolos, blocos e argamassa",
        "Azulejos e cerâmica", 
        "Madeira de construção",
        "Gesso e reboco",
        "Ferro e metais",
        "Vidros de obra"
      ],
      detalhes: "Recolhemos todos os tipos de resíduos de construção e demolição com equipamentos adequados e descarte responsável em locais licenciados."
    },
    {
      icon: <Sofa className="h-12 w-12 text-primary" />,
      title: "Móveis e Eletrodomésticos", 
      description: "Recolha responsável de móveis velhos e eletrodomésticos",
      image: serviceMoveis,
      items: [
        "Sofás e poltronas",
        "Mesas e cadeiras",
        "Armários e estantes", 
        "Frigoríficos e máquinas",
        "Televisões e eletrónicos",
        "Colchões e bases de cama"
      ],
      detalhes: "Serviço especializado na recolha de móveis e eletrodomésticos com foco na reutilização e reciclagem adequada."
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Lixo Verde e Jardim",
      description: "Limpeza completa de quintais e jardins",
      image: serviceJardim,
      items: [
        "Folhas e ramos",
        "Relva cortada",
        "Podas de árvores",
        "Arbustos e sebes",
        "Terra e substrato", 
        "Vasos e jardineiras"
      ],
      detalhes: "Recolha de resíduos vegetais e limpeza de jardins com compostagem e descarte ecológico dos materiais orgânicos."
    }
  ]

  const servicosAdicionais = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Serviços Urgentes",
      description: "Atendimento rápido para situações que requerem recolha imediata",
      caracteristicas: ["Disponível 24h", "Resposta em 2-4 horas", "Equipas especializadas"]
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Limpeza de Sótãos e Caves",
      description: "Limpeza completa de espaços de armazenamento",
      caracteristicas: ["Avaliação prévia", "Separação de materiais", "Limpeza final"]
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      title: "Locais de Acesso Difícil",
      description: "Especialistas em recolha em locais de difícil acesso",
      caracteristicas: ["Equipamentos especiais", "Técnicos experientes", "Soluções personalizadas"]
    }
  ]

  const vantagens = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Recolha no mesmo dia",
      description: "Quando possível, realizamos a recolha no mesmo dia do contacto"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Orçamento gratuito",
      description: "Avaliação e orçamento sem compromisso e totalmente gratuito"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Equipamentos adequados",
      description: "Utilizamos equipamentos modernos e adequados para cada tipo de resíduo"
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: "Descarte responsável",
      description: "Compromisso com o meio ambiente e descarte sustentável"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Soluções completas para recolha de resíduos em Lisboa e Setúbal
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/orcamentos">
                Pedir Orçamento Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços Principais</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Especialistas em diferentes tipos de recolha com equipamentos adequados
            </p>
          </div>

          <div className="space-y-12">
            {servicosPrincipais.map((servico, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    {servico.icon}
                    <h3 className="text-2xl font-bold ml-4">{servico.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{servico.detalhes}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {servico.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="clyon-button">
                    <Link to="/orcamentos">Solicitar Orçamento</Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={servico.image} 
                    alt={servico.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Adicionais */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços Adicionais</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Outros serviços especializados para atender todas as suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicosAdicionais.map((servico, index) => (
              <Card key={index} className="clyon-card-hover">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {servico.icon}
                  </div>
                  <CardTitle className="text-xl">{servico.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{servico.description}</p>
                  <ul className="space-y-2">
                    {servico.caracteristicas.map((caracteristica, charIndex) => (
                      <li key={charIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                      <Link to="/contato">Consultar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher nossos serviços */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nossos serviços?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vantagens.map((vantagem, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {vantagem.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{vantagem.title}</h3>
                <p className="text-gray-600 text-sm">{vantagem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="clyon-section clyon-primary text-white">
        <div className="clyon-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Atuação</h2>
            <p className="text-xl opacity-90">
              Atendemos toda a região da Grande Lisboa e Setúbal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Lisboa', 'Cascais', 'Sintra', 'Oeiras', 'Amadora', 'Loures',
              'Setúbal', 'Almada', 'Barreiro', 'Seixal', 'Sesimbra', 'Palmela'
            ].map((cidade) => (
              <div key={cidade} className="bg-white bg-opacity-20 rounded-lg p-3 text-center text-black font-bold">
                {cidade}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clyon-section clyon-gradient text-white">
        <div className="clyon-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de algum destes serviços?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contacto connosco e receba um orçamento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/orcamentos">Pedir Orçamento</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/simulacao">Simular Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicos


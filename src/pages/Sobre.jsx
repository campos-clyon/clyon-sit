import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Recycle, 
  Users, 
  Award,
  MapPin,
  Clock,
  CheckCircle,
  Target,
  Heart,
  Leaf
} from 'lucide-react'
import teamWork from '../assets/team-work.jpg'

const Sobre = () => {
  const valores = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Segurança",
      description: "Priorizamos a segurança em todos os nossos processos, desde a recolha até o descarte final."
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Sustentabilidade",
      description: "Compromisso com o meio ambiente através de práticas sustentáveis e descarte responsável."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Profissionalismo",
      description: "Equipa qualificada e experiente, sempre pronta para oferecer o melhor serviço."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Qualidade",
      description: "Excelência em todos os serviços prestados, superando as expectativas dos clientes."
    }
  ]

  const numeros = [
    { numero: "500+", label: "Clientes Satisfeitos" },
    { numero: "1000+", label: "Recolhas Realizadas" },
    { numero: "12", label: "Cidades Atendidas" },
    { numero: "24h", label: "Atendimento Urgente" }
  ]

  const diferenciais = [
    "Equipamentos modernos e adequados para cada tipo de resíduo",
    "Equipa treinada e certificada em segurança no trabalho",
    "Parcerias com centros de reciclagem licenciados",
    "Atendimento personalizado e orçamentos transparentes",
    "Disponibilidade para serviços urgentes",
    "Compromisso com práticas ambientalmente responsáveis"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a CLYON</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Especialistas em recolha de resíduos com compromisso ambiental e qualidade
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A CLYON nasceu da necessidade de oferecer um serviço de recolha de resíduos 
                  profissional, rápido e ambientalmente responsável na região da Grande Lisboa e Setúbal.
                </p>
                <p>
                  Com anos de experiência no setor, desenvolvemos expertise em diferentes tipos 
                  de recolha, desde entulho de construção até móveis e resíduos verdes, sempre 
                  com foco na sustentabilidade e satisfação do cliente.
                </p>
                <p>
                  Hoje somos reconhecidos pela qualidade dos nossos serviços, rapidez no atendimento 
                  e compromisso com o meio ambiente, atendendo tanto particulares quanto empresas.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="clyon-button">
                  <Link to="/contato">Entre em Contacto</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={teamWork} 
                alt="Equipa CLYON"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center clyon-card-hover">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-gray-600">
                  Oferecer serviços de recolha de resíduos com excelência, rapidez e 
                  responsabilidade ambiental, contribuindo para um ambiente mais limpo e sustentável.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center clyon-card-hover">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser a empresa de referência em recolha de resíduos na região, reconhecida 
                  pela qualidade, inovação e compromisso com a sustentabilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center clyon-card-hover">
              <CardContent className="p-8">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <p className="text-gray-600">
                  Sustentabilidade, profissionalismo, transparência, segurança e 
                  compromisso com a satisfação dos nossos clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Valores Detalhados */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nos move</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossos valores fundamentais que guiam todas as nossas ações e decisões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="clyon-section clyon-primary text-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CLYON em Números</h2>
            <p className="text-xl opacity-90">
              Resultados que demonstram nossa experiência e confiabilidade
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {numeros.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{item.numero}</div>
                <div className="text-lg opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de recolha de resíduos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{diferencial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Onde Atuamos</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cobrimos toda a região da Grande Lisboa e Setúbal com serviços de qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Grande Lisboa</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Lisboa', 'Cascais', 'Sintra', 'Oeiras', 'Amadora', 'Loures'].map((cidade) => (
                  <div key={cidade} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>{cidade}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Península de Setúbal</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Setúbal', 'Almada', 'Barreiro', 'Seixal', 'Sesimbra', 'Palmela'].map((cidade) => (
                  <div key={cidade} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>{cidade}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Horários de Atendimento</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 8h às 16h</p>
                <p><strong>Domingo:</strong> Apenas serviços urgentes</p>
                <p className="text-sm mt-4 text-primary">
                  <strong>WhatsApp 24h para emergências</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clyon-section clyon-gradient text-white">
        <div className="clyon-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer conhecer melhor nossos serviços?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contacto connosco e descubra como podemos ajudar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/orcamentos">Pedir Orçamento</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contato">Falar Connosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre


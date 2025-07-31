import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import {
  Truck,
  Clock,
  Shield,
  Recycle,
  Star,
  Phone,
  ArrowRight,
  Hammer,
  Sofa,
  Leaf,
  Zap,
  MessageCircle,
  MapPin
} from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'
import serviceEntulho from '../assets/service-entulho.jpg'
import serviceMoveis from '../assets/service-moveis.jpg'
import serviceJardim from '../assets/service-jardim.jpg'

const Home = () => {
  const servicos = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: 'Recolha de Entulho',
      description: 'Resíduos de construção e demolição recolhidos de forma segura e responsável.',
      image: serviceEntulho
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: 'Móveis e Eletrodomésticos',
      description: 'Recolha de móveis usados e eletrodomésticos com descarte adequado.',
      image: serviceMoveis
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Lixo Verde',
      description: 'Limpeza de quintais e jardins com recolha de resíduos vegetais.',
      image: serviceJardim
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Serviços Urgentes',
      description: 'Atendimento rápido para situações que exigem recolha imediata.'
    }
  ]

  const vantagens = [
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: 'Rapidez',
      description: 'Recolha rápida e eficiente, muitas vezes no mesmo dia.'
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: 'Segurança',
      description: 'Equipa qualificada com equipamentos de proteção adequados.'
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: 'Sustentabilidade',
      description: 'Compromisso com o meio ambiente e descarte responsável.'
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: 'Profissionalismo',
      description: 'Serviço profissional com equipamentos modernos e adequados.'
    }
  ]

  const passos = [
    {
      numero: '1',
      titulo: 'Contacto',
      descricao: 'Entre em contacto conosco por telefone, e-mail ou formulário online.'
    },
    {
      numero: '2',
      titulo: 'Avaliação',
      descricao: 'Realizamos uma avaliação do serviço e fornecemos um orçamento gratuito.'
    },
    {
      numero: '3',
      titulo: 'Confirmação',
      descricao: 'Confirme o serviço com 50% do valor para agendar a recolha.'
    },
    {
      numero: '4',
      titulo: 'Recolha',
      descricao: 'Efetuamos a recolha na data agendada e recebemos o pagamento final.'
    }
  ]

  const testemunhos = [
    {
      nome: 'Maria Silva',
      local: 'Lisboa',
      texto:
        'Serviço excelente! Recolheram todo o entulho da minha renovação de forma rápida e profissional.',
      estrelas: 5
    },
    {
      nome: 'João Santos',
      local: 'Setúbal',
      texto: 'Muito satisfeito com o atendimento. Pontuais e preço justo. Recomendo!',
      estrelas: 5
    },
    {
      nome: 'Ana Costa',
      local: 'Cascais',
      texto: 'Precisava de recolher móveis usados urgentemente. A CLYON resolveu no mesmo dia!',
      estrelas: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative clyon-hero text-white py-20 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 160, 188, 0.8), rgba(7, 160, 188, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="clyon-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 clyon-text-shadow">
              Recolha rápida e profissional de entulho e resíduos
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Atuação em Lisboa e Setúbal com compromisso ambiental e foco na segurança
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
                <Link to="/orcamentos"> Pedir Orçamento Grátis <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
                <Link to="/simulacao">Simular Orçamento <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 text-sm">
  <a
    href="tel:+351931632622"
    className="flex items-center justify-center gap-2 px-4 py-2 text-[#000000] font-medium border border-[#38b6ff] rounded-full hover:bg-[#07a0bc] hover:text-white transition"
  >
    <Phone className="h-4 w-4" />
    <span>+351 931 632 622</span>
  </a>
  <a
    href="https://wa.me/351931632622"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 px-4 py-2 text-[#000000] font-medium border border-[#38b6ff] rounded-full hover:bg-[#07a0bc] hover:text-white transition"
  >
    <MessageCircle className="h-4 w-4" />
    <span>WhatsApp</span>
  </a>
</div>

          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="clyon-section clyon-bg-pattern">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para a recolha de diversos tipos de resíduos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="clyon-card-hover">
                <CardContent className="p-6 text-center">
                  {servico.image ? (
                    <img
                      src={servico.image}
                      alt={servico.title}
                      className="h-24 w-24 mx-auto mb-4 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="text-primary mb-4">{servico.icon}</div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{servico.title}</h3>
                  <p className="text-gray-600">{servico.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="clyon-button">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a CLYON?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos especialistas na recolha de resíduos, com foco em qualidade e sustentabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vantagens.map((vantagem, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{vantagem.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{vantagem.title}</h3>
                <p className="text-gray-600">{vantagem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo simples e transparente em 4 etapas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passos.map((passo, index) => (
              <div key={index} className="text-center">
                <div className="clyon-primary rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {passo.numero}
                </div>
                <h3 className="text-xl font-semibold mb-2">{passo.titulo}</h3>
                <p className="text-gray-600">{passo.descricao}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="clyon-button">
              <Link to="/como-funciona">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem os nossos clientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Avaliações reais de clientes satisfeitos com os nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testemunhos.map((testemunho, index) => (
              <Card key={index} className="clyon-card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testemunho.estrelas)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testemunho.texto}"</p>
                  <div>
                    <p className="font-semibold">{testemunho.nome}</p>
                    <p className="text-sm text-gray-500">{testemunho.local}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="clyon-section clyon-primary">
        <div className="clyon-container text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Área de Atuação</h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Atuamos em toda a região da Grande Lisboa e Setúbal
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            {[
              'Lisboa', 'Cascais', 'Sintra', 'Oeiras', 'Amadora', 'Loures',
              'Setúbal', 'Almada', 'Barreiro', 'Seixal', 'Sesimbra', 'Palmela'
            ].map((cidade) => (
              <div key={cidade} className="bg-white bg-opacity-20 rounded-lg p-3 text-black">
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
            Precisa de recolha de resíduos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Fale conosco e receba um orçamento gratuito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/orcamentos" style={{ color: '#07a0bc' }}>
                Pedir Orçamento
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contato" style={{ color: '#07a0bc' }}>
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <a
                href="https://wa.me/351931632622"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#07a0bc' }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

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
      title: "Recolha de Entulho",
      description: "Resíduos de construção e demolição recolhidos de forma segura e responsável.",
      image: serviceEntulho
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Móveis e Eletrodomésticos",
      description: "Recolha de móveis usados e eletrodomésticos com descarte adequado.",
      image: serviceMoveis
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Lixo Verde",
      description: "Limpeza de quintais e jardins com recolha de resíduos vegetais.",
      image: serviceJardim
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Serviços Urgentes",
      description: "Atendimento rápido para situações que exigem recolha imediata."
    }
  ]

  const vantagens = [
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Rapidez",
      description: "Recolha rápida e eficiente, muitas vezes no mesmo dia."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Segurança",
      description: "Equipa qualificada com equipamentos de proteção adequados."
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Sustentabilidade",
      description: "Compromisso com o meio ambiente e descarte responsável."
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Profissionalismo",
      description: "Serviço profissional com equipamentos modernos e adequados."
    }
  ]

  const passos = [
    {
      numero: "1",
      titulo: "Contacto",
      descricao: "Entre em contacto connosco por telefone, e-mail ou formulário online."
    },
    {
      numero: "2",
      titulo: "Avaliação",
      descricao: "Realizamos uma avaliação do serviço e fornecemos um orçamento gratuito."
    },
    {
      numero: "3",
      titulo: "Confirmação",
      descricao: "Confirme o serviço com 50% do valor para agendar a recolha."
    },
    {
      numero: "4",
      titulo: "Recolha",
      descricao: "Efetuamos a recolha na data agendada e recebemos o pagamento final."
    }
  ]

  const testemunhos = [
    {
      nome: "Maria Silva",
      local: "Lisboa",
      texto: "Serviço excelente! Recolheram todo o entulho da minha renovação de forma rápida e profissional.",
      estrelas: 5
    },
    {
      nome: "João Santos",
      local: "Setúbal",
      texto: "Muito satisfeito com o atendimento. Pontuais e preço justo. Recomendo!",
      estrelas: 5
    },
    {
      nome: "Ana Costa",
      local: "Cascais",
      texto: "Precisava de recolher móveis usados urgentemente. A CLYON resolveu no mesmo dia!",
      estrelas: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Aqui vai o restante do JSX do seu layout, com as seções já revisadas: Hero, Serviços, Vantagens, Passos, Testemunhos, Área de Atuação, CTA */}
    </div>
  )
}

export default Home

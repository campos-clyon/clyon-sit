import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Calculator, 
  CheckCircle, 
  Truck,
  Clock,
  CreditCard,
  MessageCircle,
  Mail,
  FileText,
  Camera,
  MapPin,
  Shield,
  ArrowRight,
  AlertCircle
} from 'lucide-react'

const ComoFunciona = () => {
  const passos = [
    {
      numero: "1",
      titulo: "Contacto Inicial",
      icon: <Phone className="h-8 w-8" />,
      descricao: "Entre em contacto connosco através do telefone, WhatsApp, email ou formulário online.",
      detalhes: [
        "Telefone: +351 931 632 622",
        "WhatsApp disponível 24h",
        "Email: wwcampss@gmail.com",
        "Formulário no site"
      ],
      tempo: "Imediato"
    },
    {
      numero: "2", 
      titulo: "Avaliação e Orçamento",
      icon: <Calculator className="h-8 w-8" />,
      descricao: "Fazemos uma avaliação detalhada do serviço e fornecemos um orçamento gratuito e transparente.",
      detalhes: [
        "Avaliação gratuita e sem compromisso",
        "Orçamento detalhado por escrito",
        "Explicação clara dos custos",
        "Validade do orçamento: 15 dias"
      ],
      tempo: "2-4 horas"
    },
    {
      numero: "3",
      titulo: "Confirmação do Serviço", 
      icon: <CheckCircle className="h-8 w-8" />,
      descricao: "Confirme o serviço com 50% do valor para garantir o agendamento da recolha.",
      detalhes: [
        "Pagamento de 50% para confirmação",
        "Agendamento da data e hora",
        "Confirmação por email/SMS",
        "Possibilidade de reagendamento"
      ],
      tempo: "Após confirmação"
    },
    {
      numero: "4",
      titulo: "Recolha e Pagamento Final",
      icon: <Truck className="h-8 w-8" />,
      descricao: "Realizamos a recolha no dia agendado e recebemos o pagamento dos restantes 50%.",
      detalhes: [
        "Recolha pontual no horário agendado",
        "Pagamento dos 50% restantes",
        "Comprovativo de descarte responsável",
        "Limpeza final do local"
      ],
      tempo: "Conforme agendado"
    }
  ]

  const formasContacto = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      titulo: "Telefone",
      descricao: "+351 931 632 622",
      disponibilidade: "Segunda a Sábado: 8h-18h"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      titulo: "WhatsApp",
      descricao: "+351 931 632 622", 
      disponibilidade: "24h para emergências"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      titulo: "Email",
      descricao: "wwcampss@gmail.com",
      disponibilidade: "Resposta em até 2h"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      titulo: "Formulário Online",
      descricao: "Preencha no site",
      disponibilidade: "Disponível 24h"
    }
  ]

  const informacoesNecessarias = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      item: "Morada completa do serviço"
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      item: "Tipo de resíduo a recolher"
    },
    {
      icon: <Camera className="h-5 w-5 text-primary" />,
      item: "Fotos do material (se possível)"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      item: "Urgência do serviço"
    },
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      item: "Condições de acesso"
    }
  ]

  const formasPagamento = [
    "Dinheiro",
    "Multibanco",
    "MB Way", 
    "Transferência bancária",
    "Cartão de crédito/débito"
  ]

  const garantias = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      titulo: "Seguro de Responsabilidade Civil",
      descricao: "Todos os nossos serviços estão cobertos por seguro"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      titulo: "Comprovativo de Descarte",
      descricao: "Fornecemos comprovativo do descarte responsável"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      titulo: "Garantia de Qualidade",
      descricao: "Satisfação garantida ou refaremos o serviço"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Processo simples e transparente em 4 passos para garantir o melhor serviço
          </p>
        </div>
      </section>

      {/* Processo Principal */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo pensado para ser simples, rápido e transparente
            </p>
          </div>

          <div className="space-y-12">
            {passos.map((passo, index) => (
              <div key={index} className="relative">
                {/* Linha conectora */}
                {index < passos.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-24 bg-gray-300 transform -translate-x-1/2"></div>
                )}
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Card className="clyon-card-hover">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="clyon-primary rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">
                            {passo.numero}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{passo.titulo}</h3>
                            <p className="text-primary font-medium">Tempo: {passo.tempo}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{passo.descricao}</p>
                        
                        <ul className="space-y-2">
                          {passo.detalhes.map((detalhe, detIndex) => (
                            <li key={detIndex} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              <span className="text-sm">{detalhe}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="clyon-primary rounded-full w-32 h-32 flex items-center justify-center text-white">
                      {passo.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formas de Contacto */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Entrar em Contacto</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Múltiplas formas de contacto para sua conveniência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formasContacto.map((forma, index) => (
              <Card key={index} className="text-center clyon-card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {forma.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{forma.titulo}</h3>
                  <p className="text-gray-600 mb-2">{forma.descricao}</p>
                  <p className="text-sm text-primary">{forma.disponibilidade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Necessárias */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Informações Necessárias</h2>
              <p className="text-gray-600 mb-6">
                Para fornecer o melhor orçamento, precisamos de algumas informações básicas:
              </p>
              
              <div className="space-y-4">
                {informacoesNecessarias.map((info, index) => (
                  <div key={index} className="flex items-center">
                    {info.icon}
                    <span className="ml-3">{info.item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary">Dica Importante</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Quanto mais detalhes fornecer, mais preciso será o orçamento. 
                      Fotos ajudam muito na avaliação!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Formas de Pagamento</h2>
              <p className="text-gray-600 mb-6">
                Aceitamos diversas formas de pagamento para sua conveniência:
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {formasPagamento.map((forma, index) => (
                  <div key={index} className="flex items-center">
                    <CreditCard className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{forma}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Política de Pagamento</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 50% na confirmação do serviço</li>
                  <li>• 50% na conclusão da recolha</li>
                  <li>• Orçamentos válidos por 15 dias</li>
                  <li>• Sem taxas adicionais ocultas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantias */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Garantias</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com total transparência e responsabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {garantias.map((garantia, index) => (
              <Card key={index} className="text-center clyon-card-hover">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {garantia.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{garantia.titulo}</h3>
                  <p className="text-gray-600">{garantia.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quanto tempo demora a recolha?</h3>
              <p className="text-gray-600 mb-4">
                Normalmente conseguimos fazer a recolha no mesmo dia ou no dia seguinte, 
                dependendo da disponibilidade e urgência.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Trabalham aos fins de semana?</h3>
              <p className="text-gray-600 mb-4">
                Sim, trabalhamos aos sábados. Domingos apenas para serviços urgentes 
                com taxa adicional.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Qual é o valor mínimo?</h3>
              <p className="text-gray-600 mb-4">
                Não temos valor mínimo. Cada serviço é avaliado individualmente 
                para oferecer o melhor preço.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Incluem IVA?</h3>
              <p className="text-gray-600 mb-4">
                Sim, todos os nossos preços já incluem IVA. 
                Fornecemos fatura para todos os serviços.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/faq">Ver Todas as Perguntas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clyon-section clyon-gradient text-white">
        <div className="clyon-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contacto connosco e inicie o processo hoje mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/orcamentos">
                Pedir Orçamento
              </Link>
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

export default ComoFunciona


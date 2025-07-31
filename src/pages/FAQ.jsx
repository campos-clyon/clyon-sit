import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqCategories = [
    {
      categoria: "Serviços e Preços",
      perguntas: [
        {
          pergunta: "Quanto tempo demora a recolha?",
          resposta: "Normalmente conseguimos fazer a recolha no mesmo dia ou no dia seguinte ao contacto, dependendo da nossa disponibilidade e da urgência do serviço. Para serviços urgentes, podemos atender em 2-4 horas."
        },
        {
          pergunta: "Qual é o valor mínimo para recolha?",
          resposta: "Não temos valor mínimo estabelecido. Cada serviço é avaliado individualmente considerando o tipo de resíduo, quantidade, localização e dificuldade de acesso. Fazemos sempre um orçamento personalizado."
        },
        {
          pergunta: "Os preços incluem IVA?",
          resposta: "Sim, todos os nossos preços já incluem IVA à taxa legal em vigor. Fornecemos sempre fatura para todos os serviços prestados, seja para particulares ou empresas."
        },
        {
          pergunta: "Como é calculado o preço?",
          resposta: "O preço é calculado com base no tipo de resíduo, volume/peso, localização, dificuldade de acesso, urgência do serviço e custos de descarte. Fornecemos sempre um orçamento detalhado e transparente."
        },
        {
          pergunta: "Fazem desconto para grandes quantidades?",
          resposta: "Sim, para grandes volumes ou clientes regulares oferecemos condições especiais. Entre em contacto connosco para discutir as melhores condições para o seu caso específico."
        }
      ]
    },
    {
      categoria: "Horários e Disponibilidade",
      perguntas: [
        {
          pergunta: "Quais são os horários de funcionamento?",
          resposta: "Funcionamos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 16h. Aos domingos atendemos apenas serviços urgentes com taxa adicional. O WhatsApp está disponível 24h para emergências."
        },
        {
          pergunta: "Trabalham aos fins de semana?",
          resposta: "Sim, trabalhamos aos sábados no horário normal. Aos domingos e feriados atendemos apenas serviços urgentes com acréscimo de 50% no valor do serviço."
        },
        {
          pergunta: "Atendem serviços urgentes?",
          resposta: "Sim, temos equipa disponível para serviços urgentes. Contacte-nos pelo WhatsApp (+351 931 632 622) e faremos o possível para atender no mesmo dia, mesmo fora do horário normal."
        },
        {
          pergunta: "Posso agendar para uma data específica?",
          resposta: "Claro! Após a confirmação do orçamento com 50% do valor, agendamos a data e hora que melhor lhe convier, dentro da nossa disponibilidade."
        }
      ]
    },
    {
      categoria: "Tipos de Resíduos",
      perguntas: [
        {
          pergunta: "Que tipos de resíduos recolhem?",
          resposta: "Recolhemos entulho de construção, móveis velhos, eletrodomésticos, lixo verde (jardim), resíduos domésticos volumosos, e materiais de limpeza de sótãos e caves. Não recolhemos resíduos perigosos ou tóxicos."
        },
        {
          pergunta: "Recolhem eletrodomésticos?",
          resposta: "Sim, recolhemos todos os tipos de eletrodomésticos: frigoríficos, máquinas de lavar, televisões, micro-ondas, etc. Garantimos o descarte responsável seguindo as normas ambientais."
        },
        {
          pergunta: "Aceitam resíduos de jardim?",
          resposta: "Sim, recolhemos folhas, ramos, relva cortada, podas de árvores, arbustos e outros resíduos vegetais. Estes materiais são encaminhados para compostagem sempre que possível."
        },
        {
          pergunta: "Recolhem materiais perigosos?",
          resposta: "Não recolhemos materiais perigosos como tintas, solventes, produtos químicos, amianto, ou resíduos hospitalares. Para estes materiais, deve contactar empresas especializadas licenciadas."
        },
        {
          pergunta: "Há limite de quantidade?",
          resposta: "Não há limite mínimo ou máximo. Desde pequenas quantidades até grandes volumes, adaptamos o nosso serviço às suas necessidades com os equipamentos adequados."
        }
      ]
    },
    {
      categoria: "Pagamento e Orçamento",
      perguntas: [
        {
          pergunta: "Como funciona o pagamento?",
          resposta: "O pagamento é feito em duas partes: 50% na confirmação do serviço para garantir o agendamento, e os restantes 50% na conclusão da recolha. Aceitamos dinheiro, multibanco, MB Way, transferência e cartão."
        },
        {
          pergunta: "O orçamento é gratuito?",
          resposta: "Sim, a avaliação e orçamento são completamente gratuitos e sem compromisso. Fornecemos um orçamento detalhado por escrito com validade de 15 dias."
        },
        {
          pergunta: "Posso cancelar o serviço?",
          resposta: "Sim, pode cancelar até 24h antes da data agendada sem custos. Cancelamentos com menos de 24h podem ter taxa de 25% do valor total devido aos custos de mobilização da equipa."
        },
        {
          pergunta: "Fornecem fatura?",
          resposta: "Sim, fornecemos sempre fatura para todos os serviços, seja para particulares ou empresas. A fatura é emitida no momento do pagamento final."
        },
        {
          pergunta: "Aceitam cartão de crédito?",
          resposta: "Sim, aceitamos cartões de crédito e débito, além de dinheiro, multibanco, MB Way e transferência bancária. Escolha a forma que for mais conveniente para si."
        }
      ]
    },
    {
      categoria: "Localização e Acesso",
      perguntas: [
        {
          pergunta: "Que áreas atendem?",
          resposta: "Atendemos toda a Grande Lisboa (Lisboa, Cascais, Sintra, Oeiras, Amadora, Loures) e Península de Setúbal (Setúbal, Almada, Barreiro, Seixal, Sesimbra, Palmela)."
        },
        {
          pergunta: "Atendem locais de difícil acesso?",
          resposta: "Sim, somos especialistas em locais de difícil acesso. Temos equipamentos especiais e técnicos experientes para recolhas em caves, sótãos, andares altos sem elevador, etc."
        },
        {
          pergunta: "Precisam de acesso de viatura?",
          resposta: "Idealmente sim, mas não é obrigatório. Para locais sem acesso de viatura, utilizamos equipamentos manuais e fazemos o transporte até ao veículo. Isto pode influenciar o preço do serviço."
        },
        {
          pergunta: "Trabalham em prédios?",
          resposta: "Sim, trabalhamos em prédios, moradias, escritórios, lojas, etc. Respeitamos sempre as regras do condomínio e horários estabelecidos pelos administradores."
        }
      ]
    },
    {
      categoria: "Processo e Documentação",
      perguntas: [
        {
          pergunta: "Fornecem comprovativo de descarte?",
          resposta: "Sim, fornecemos sempre comprovativo do descarte responsável dos materiais recolhidos. Trabalhamos apenas com centros de tratamento licenciados e seguimos todas as normas ambientais."
        },
        {
          pergunta: "Têm seguro de responsabilidade civil?",
          resposta: "Sim, todos os nossos serviços estão cobertos por seguro de responsabilidade civil. Trabalhamos com total segurança e profissionalismo."
        },
        {
          pergunta: "Precisam que eu esteja presente?",
          resposta: "Idealmente sim, para confirmar o que deve ser recolhido e fazer o pagamento final. Se não puder estar presente, podemos combinar outras formas de acesso e pagamento."
        },
        {
          pergunta: "Como posso acompanhar o serviço?",
          resposta: "Mantemos contacto constante via WhatsApp ou telefone. Confirmamos a chegada da equipa e informamos sobre o progresso do serviço até à conclusão."
        }
      ]
    }
  ]

  const filteredFAQ = faqCategories.map(categoria => ({
    ...categoria,
    perguntas: categoria.perguntas.filter(
      item => 
        item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.resposta.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(categoria => categoria.perguntas.length > 0)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="clyon-container">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Pesquisar perguntas..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          {filteredFAQ.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Nenhuma pergunta encontrada para "{searchTerm}"</p>
              <Button onClick={() => setSearchTerm('')} variant="outline">
                Limpar pesquisa
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQ.map((categoria, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-bold mb-6 clyon-primary-text">
                    {categoria.categoria}
                  </h2>
                  
                  <div className="space-y-4">
                    {categoria.perguntas.map((item, index) => {
                      const itemKey = `${catIndex}-${index}`
                      const isOpen = openItems[itemKey]
                      
                      return (
                        <Card key={index} className="clyon-card-hover">
                          <CardContent className="p-0">
                            <button
                              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                              onClick={() => toggleItem(itemKey)}
                            >
                              <h3 className="text-lg font-semibold pr-4">
                                {item.pergunta}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                              )}
                            </button>
                            
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <div className="border-t pt-4">
                                  <p className="text-gray-600 leading-relaxed">
                                    {item.resposta}
                                  </p>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contacto Direto */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Não encontrou a resposta?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entre em contacto direto connosco. Estamos aqui para esclarecer todas as suas dúvidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center clyon-card-hover">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">+351 931 632 622</p>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <a href="tel:+351931632622">Ligar Agora</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center clyon-card-hover">
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Disponível 24h</p>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <a href="https://wa.me/351931632622" target="_blank" rel="noopener noreferrer">
                    Enviar Mensagem
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center clyon-card-hover">
              <CardContent className="p-6">
                <Search className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Formulário</h3>
                <p className="text-gray-600 mb-4">Contacto online</p>
                <Button asChild className="w-full clyon-button">
                  <Link to="/contato">Enviar Mensagem</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clyon-section clyon-gradient text-white">
        <div className="clyon-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para solicitar o serviço?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agora que esclareceu as suas dúvidas, peça o seu orçamento gratuito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/orcamentos">Pedir Orçamento Grátis</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/simulacao">Simular Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ


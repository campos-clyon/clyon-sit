import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Bot, 
  User, 
  Send, 
  Loader2, 
  Calculator,
  MessageCircle,
  Phone,
  AlertCircle,
  CheckCircle,
  Lightbulb
} from 'lucide-react'

const Simulacao = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! Sou o assistente virtual da CLYON. Vou ajudá-lo a simular um orçamento para recolha de resíduos. Para começar, pode descrever-me que tipo de material precisa de recolher e onde se localiza?'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    setIsLoading(true)

    // Adicionar mensagem do usuário
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    try {
      // Simular chamada à API OpenAI
      // Em produção, esta seria uma chamada real à API
      const response = await simulateGPTResponse(userMessage, messages)
      
      // Adicionar resposta do assistente
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Desculpe, ocorreu um erro. Por favor, tente novamente ou contacte-nos diretamente.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const simulateGPTResponse = async (userMessage, previousMessages) => {
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 1500))

    const message = userMessage.toLowerCase()
    
    // Lógica de resposta baseada em palavras-chave
    if (message.includes('entulho') || message.includes('construção') || message.includes('obra')) {
      return `Entendo que precisa de recolha de entulho de construção. Para um orçamento mais preciso, preciso de saber:

📍 **Localização:** Em que cidade/zona se encontra?
📏 **Quantidade:** Aproximadamente quantos m³ ou sacos de entulho?
🏗️ **Tipo de material:** Tijolos, betão, azulejos, madeira, etc.?
🚚 **Acesso:** O camião consegue chegar perto ou é preciso transporte manual?

**Estimativa inicial:** Entre 80€-200€ dependendo da quantidade e localização.

Pode fornecer mais detalhes para um orçamento mais preciso?`
    }
    
    if (message.includes('móveis') || message.includes('eletrodomésticos') || message.includes('sofá')) {
      return `Perfeito! Para recolha de móveis e eletrodomésticos, preciso de saber:

🏠 **Localização:** Cidade e se é moradia ou apartamento?
📦 **Itens:** Que móveis/eletrodomésticos específicos?
🏢 **Andar:** Se for apartamento, que andar e tem elevador?
📅 **Urgência:** Precisa de recolha urgente?

**Estimativa inicial:** 
- Móveis pequenos: 30€-60€
- Eletrodomésticos grandes: 40€-80€
- Conjunto de móveis: 100€-250€

Que itens específicos tem para recolher?`
    }
    
    if (message.includes('jardim') || message.includes('folhas') || message.includes('ramos') || message.includes('verde')) {
      return `Ótimo! Para recolha de resíduos de jardim:

🌳 **Tipo de resíduos:** Folhas, ramos, relva cortada, podas?
📏 **Quantidade:** Quantos sacos ou m³ aproximadamente?
📍 **Localização:** Em que cidade?
🚚 **Acesso:** O camião consegue chegar ao jardim?

**Estimativa inicial:**
- Até 5 sacos: 40€-70€
- 5-15 sacos: 70€-120€
- Grandes quantidades: 120€-200€

Pode descrever melhor o tipo e quantidade de resíduos verdes?`
    }
    
    if (message.includes('preço') || message.includes('custo') || message.includes('€') || message.includes('euro')) {
      return `Os nossos preços dependem de vários fatores:

💰 **Fatores que influenciam o preço:**
- Tipo e quantidade de resíduo
- Localização e distância
- Dificuldade de acesso
- Urgência do serviço
- Custos de descarte

📋 **Preços base (incluem IVA):**
- Serviço mínimo: 40€
- Recolha standard: 80€-150€
- Grandes volumes: 150€-300€+

Para um orçamento exato, preciso de mais detalhes sobre o seu caso específico. Pode descrever o que precisa de recolher?`
    }
    
    if (message.includes('lisboa') || message.includes('cascais') || message.includes('sintra') || message.includes('setúbal')) {
      const cidade = message.includes('lisboa') ? 'Lisboa' : 
                   message.includes('cascais') ? 'Cascais' :
                   message.includes('sintra') ? 'Sintra' : 'Setúbal'
      
      return `Excelente! Atendemos ${cidade} regularmente. 

🚚 **Para ${cidade}:**
- Recolha no mesmo dia (se disponível)
- Sem taxa de deslocação adicional
- Equipa local conhece bem a área

Agora preciso de saber:
- Que tipo de resíduo tem para recolher?
- Qual a quantidade aproximada?
- Tem alguma urgência específica?

Com estas informações posso dar-lhe um orçamento mais preciso!`
    }
    
    if (message.includes('urgente') || message.includes('hoje') || message.includes('amanhã')) {
      return `Compreendo que precisa de um serviço urgente! 

⚡ **Serviços urgentes:**
- Disponível no mesmo dia (sujeito a disponibilidade)
- Taxa adicional de urgência: +25€
- Contacto direto: +351 931 632 622
- WhatsApp 24h para emergências

Para serviços urgentes, recomendo que me contacte diretamente por telefone após esta simulação.

Pode descrever-me o que precisa de recolher urgentemente?`
    }
    
    if (message.includes('obrigado') || message.includes('obrigada') || message.includes('ok') || message.includes('sim')) {
      return `De nada! Fico feliz por ajudar! 😊

Se quiser um orçamento oficial ou agendar o serviço, pode:

📞 **Contactar-nos diretamente:**
- Telefone: +351 931 632 622
- WhatsApp: Mesmo número
- Email: acontato@clyon.pt

📋 **Ou preencher o formulário de orçamento** para receber uma proposta detalhada.

Tem mais alguma dúvida sobre os nossos serviços?`
    }
    
    // Resposta genérica
    return `Obrigado pela sua mensagem! Para lhe dar o melhor orçamento possível, preciso de algumas informações:

🔍 **Informações importantes:**
1. **Tipo de resíduo:** Entulho, móveis, jardim, etc.
2. **Quantidade:** Número de sacos, m³ ou descrição
3. **Localização:** Cidade e condições de acesso
4. **Urgência:** Quando precisa do serviço

💡 **Dica:** Quanto mais detalhes fornecer, mais preciso será o orçamento!

Pode começar por me dizer que tipo de material precisa de recolher?`
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    "Quanto custa recolher entulho de uma pequena obra?",
    "Preciso de recolher móveis velhos em Lisboa",
    "Recolha de resíduos de jardim urgente",
    "Quanto custa recolher um frigorífico?"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <Calculator className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simulação de Orçamento</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Chat inteligente para simular orçamentos de recolha de resíduos
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Chat Principal */}
            <div className="lg:col-span-3">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center">
                    <Bot className="h-6 w-6 text-primary mr-2" />
                    Assistente Virtual CLYON
                    <span className="ml-auto text-sm font-normal text-green-600 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Online
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'clyon-primary text-white'
                            : 'bg-white border shadow-sm'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.role === 'assistant' && (
                            <Bot className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          )}
                          {message.role === 'user' && (
                            <User className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          )}
                          <div className="whitespace-pre-wrap text-sm leading-relaxed">
                            {message.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border shadow-sm rounded-lg p-3 max-w-[80%]">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-5 w-5 text-primary" />
                          <Loader2 className="h-4 w-4 animate-spin text-primary" />
                          <span className="text-sm text-gray-600">A escrever...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </CardContent>
                
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Descreva o que precisa de recolher..."
                      className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                      rows={1}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      className="clyon-button"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Sugestões */}
                  {messages.length === 1 && (
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-2">Sugestões:</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedQuestions.map((question, index) => (
                          <button
                            key={index}
                            onClick={() => setInputMessage(question)}
                            className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Informações */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como Funciona</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Simulação Inteligente</p>
                      <p className="text-xs text-gray-600">Descreva o que precisa e receba uma estimativa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Calculator className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Orçamento Aproximado</p>
                      <p className="text-xs text-gray-600">Valores indicativos baseados na descrição</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Sem Compromisso</p>
                      <p className="text-xs text-gray-600">Simulação gratuita e sem obrigações</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contacto Direto */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contacto Direto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Para orçamentos oficiais ou serviços urgentes:
                  </p>
                  
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <a href="tel:+351931632622">
                      <Phone className="mr-2 h-4 w-4" />
                      +351 931 632 622
                    </a>
                  </Button>

                  <Button asChild className="w-full clyon-button">
                    <a href="https://wa.me/351931632622" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Aviso */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Importante</p>
                      <p className="text-xs text-yellow-700 mt-1">
                        Esta é uma simulação. Para orçamentos oficiais, 
                        contacte-nos diretamente ou preencha o formulário de orçamento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clyon-section clyon-gradient text-white">
        <div className="clyon-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gostou da simulação?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Solicite um orçamento oficial ou contacte-nos diretamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <a href="/orcamentos">Orçamento Oficial</a>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <a href="/contato">Contactar-nos</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Simulacao


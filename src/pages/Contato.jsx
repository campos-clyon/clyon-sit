import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Send
} from 'lucide-react'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const assuntos = [
    "Pedido de orçamento",
    "Dúvida sobre serviços",
    "Agendamento",
    "Reclamação",
    "Sugestão",
    "Outro"
  ]

  const contactos = [
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      titulo: "Telefone",
      principal: "+351 931 632 622",
      secundario: "Segunda a Sábado: 8h-18h",
      link: "tel:+351931632622",
      linkText: "Ligar Agora"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      titulo: "WhatsApp",
      principal: "+351 931 632 622",
      secundario: "Disponível 24h para emergências",
      link: "https://wa.me/351931632622",
      linkText: "Enviar Mensagem"
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      titulo: "Email",
      principal: "acontato@clyon.pt",
      secundario: "Resposta em até 2 horas",
      link: "mailto:acontato@clyon.pt",
      linkText: "Enviar Email"
    }
  ]

  const horarios = [
    { dia: "Segunda a Sexta", horario: "8h às 18h" },
    { dia: "Sábado", horario: "8h às 16h" },
    { dia: "Domingo", horario: "Apenas urgências" },
    { dia: "Feriados", horario: "Apenas urgências" }
  ]

  const areas = [
    "Lisboa", "Cascais", "Sintra", "Oeiras", "Amadora", "Loures",
    "Setúbal", "Almada", "Barreiro", "Seixal", "Sesimbra", "Palmela"
  ]

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Mensagem Enviada!</h2>
            <p className="text-gray-600 mb-6">
              Recebemos a sua mensagem. Entraremos em contacto consigo 
              em breve durante o horário comercial.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full clyon-button">
                <a href="https://wa.me/351931632622" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp para Urgências
                </a>
              </Button>
              <Button variant="outline" className="w-full" onClick={() => window.location.reload()}>
                Enviar Nova Mensagem
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Entre em contacto connosco. Estamos aqui para ajudar com todas as suas necessidades
          </p>
        </div>
      </section>

      {/* Contactos Principais */}
      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale Connosco</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Múltiplas formas de contacto para sua conveniência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactos.map((contacto, index) => (
              <Card key={index} className="text-center clyon-card-hover">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {contacto.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contacto.titulo}</h3>
                  <p className="text-lg font-medium mb-1">{contacto.principal}</p>
                  <p className="text-sm text-gray-600 mb-6">{contacto.secundario}</p>
                  <Button asChild className="w-full clyon-button">
                    <a 
                      href={contacto.link} 
                      target={contacto.link.startsWith('http') ? '_blank' : undefined}
                      rel={contacto.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {contacto.linkText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contacto */}
      <section className="clyon-section bg-gray-50">
        <div className="clyon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome *</Label>
                        <Input
                          id="nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          placeholder="Seu nome"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          placeholder="+351 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Select onValueChange={(value) => handleInputChange('assunto', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          {assuntos.map((assunto) => (
                            <SelectItem key={assunto} value={assunto}>
                              {assunto}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        placeholder="Escreva aqui a sua mensagem..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full clyon-button" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-6">
              {/* Horários */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Horários de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {horarios.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-medium">{item.dia}</span>
                        <span className="text-gray-600">{item.horario}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>WhatsApp 24h</strong> para emergências e serviços urgentes
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Área de Atuação */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Área de Atuação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Atendemos toda a região da Grande Lisboa e Setúbal:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {areas.map((area) => (
                      <div key={area} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Informações da Empresa */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações da Empresa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold">CLYON</p>
                    <p className="text-sm text-gray-600">Recolha de Resíduos e Entulho</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-sm text-gray-600">acontato@clyon.pt</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Telefone:</p>
                    <p className="text-sm text-gray-600">+351 931 632 622</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Área de Atuação:</p>
                    <p className="text-sm text-gray-600">Grande Lisboa e Setúbal</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Rápido */}
      <section className="clyon-section clyon-primary text-white">
        <div className="clyon-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de atendimento urgente?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contacto direto para serviços urgentes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+351931632622">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary" asChild>
              <a href="https://wa.me/351931632622" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp 24h
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato


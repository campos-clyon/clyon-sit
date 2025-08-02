import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FileText,
  Clock,
  CheckCircle,
  Upload,
  MessageCircle
} from 'lucide-react'

const Orcamentos = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    morada: '',
    cidade: '',
    tipoResiduo: '',
    descricao: '',
    urgente: false,
    acessoDificil: false,
    termos: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xblkagae", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          morada: formData.morada,
          cidade: formData.cidade,
          tipoResiduo: formData.tipoResiduo,
          descricao: formData.descricao,
          urgente: formData.urgente ? "Sim" : "Não",
          acessoDificil: formData.acessoDificil ? "Sim" : "Não",
          termos: formData.termos ? "Aceitou" : "Não aceitou"
        })
      })

      if (!response.ok) throw new Error("Erro ao enviar")

      setSubmitted(true)
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error)
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const tiposResiduo = [
    "Entulho de construção",
    "Móveis velhos",
    "Eletrodomésticos",
    "Lixo verde/jardim",
    "Limpeza de sótão/cave",
    "Resíduos mistos",
    "Outro (especificar na descrição)"
  ]

  const cidades = [
    "Lisboa", "Cascais", "Sintra", "Oeiras", "Amadora", "Loures",
    "Setúbal", "Almada", "Barreiro", "Seixal", "Sesimbra", "Palmela"
  ]

  const vantagens = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      titulo: "Orçamento Gratuito",
      descricao: "Avaliação sem compromisso e totalmente gratuita"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      titulo: "Resposta Rápida",
      descricao: "Resposta em até 2 horas durante horário comercial"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      titulo: "Preço Transparente",
      descricao: "Sem custos ocultos, preço final detalhado"
    }
  ]

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Pedido Enviado!</h2>
            <p className="text-gray-600 mb-6">
              Recebemos o seu pedido de orçamento. Entraremos em contacto consigo
              em até 2 horas durante o horário comercial.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                <strong>Referência:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <div className="flex flex-col space-y-2">
                <Button asChild className="clyon-button">
                  <a href="https://wa.me/351931632622" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp para Urgências
                  </a>
                </Button>
                <Button variant="outline" onClick={() => navigate('/orcamentos')}>
                  Fazer Novo Pedido
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* ... todo o restante JSX permanece inalterado ... */}
      {/* Só alterei a handleSubmit acima */}
    </div>
  )
}

export default Orcamentos

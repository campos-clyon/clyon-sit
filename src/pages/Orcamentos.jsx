import { useState, useRef, useEffect } from 'react' // <-- PASSO 1: useEffect importado
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
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
  MessageCircle,
  X,
  Image
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
    termos: false,
    imagem: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const formRef = useRef(null)
  const fileInputRef = useRef(null)

  const navigate = useNavigate()

  // <-- PASSO 2: useEffect adicionado aqui
  useEffect(() => {
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.')
        return
      }
      
      if (file.size > 1 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 1MB para anexo no email.')
        return
      }

      setFormData(prev => ({ ...prev, imagem: file }))
      
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, imagem: null }))
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (formData.imagem) {
        try {
          const formDataToSend = new FormData()
          
          formDataToSend.append('nome', formData.nome)
          formDataToSend.append('email', formData.email)
          formDataToSend.append('telefone', formData.telefone)
          formDataToSend.append('morada', formData.morada)
          formDataToSend.append('cidade', formData.cidade)
          formDataToSend.append('tipoResiduo', formData.tipoResiduo)
          formDataToSend.append('descricao', formData.descricao)
          formDataToSend.append('urgente', formData.urgente ? 'Sim' : 'Não')
          formDataToSend.append('acessoDificil', formData.acessoDificil ? 'Sim' : 'Não')
          formDataToSend.append('termos', formData.termos ? 'Aceitou' : 'Não aceitou')
          formDataToSend.append('attachment', formData.imagem)
          
          await emailjs.sendForm(
            'service_u783k4t',
            'template_a41pmvm',
            formDataToSend,
            'Fzcwt1Ax0RaIDF0QW'
          )
          
          console.log('Email enviado com anexo!')
          setSubmitted(true)
          
        } catch (attachmentError) {
          console.log('Erro com anexo, tentando método alternativo:', attachmentError)
          
          const reader = new FileReader()
          reader.onload = async (e) => {
            try {
              const base64Image = e.target.result
              
              await emailjs.send(
                'service_u783k4t',
                'template_a41pmvm',
                {
                  nome: formData.nome,
                  email: formData.email,
                  telefone: formData.telefone,
                  morada: formData.morada,
                  cidade: formData.cidade,
                  tipoResiduo: formData.tipoResiduo,
                  descricao: formData.descricao,
                  urgente: formData.urgente ? 'Sim' : 'Não',
                  acessoDificil: formData.acessoDificil ? 'Sim' : 'Não',
                  termos: formData.termos ? 'Aceitou' : 'Não aceitou',
                  imagemBase64: base64Image,
                  nomeImagem: formData.imagem.name,
                  tamanhoImagem: `${(formData.imagem.size / 1024).toFixed(1)} KB`
                },
                'Fzcwt1Ax0RaIDF0QW'
              )
              
              console.log('Email enviado com Base64!')
              setSubmitted(true)
              
            } catch (base64Error) {
              console.error('Erro com Base64:', base64Error)
              
              await emailjs.send(
                'service_u783k4t',
                'template_a41pmvm',
                {
                  nome: formData.nome,
                  email: formData.email,
                  telefone: formData.telefone,
                  morada: formData.morada,
                  cidade: formData.cidade,
                  tipoResiduo: formData.tipoResiduo,
                  descricao: `${formData.descricao}\n\n--- IMAGEM NÃO ANEXADA ---\nNome: ${formData.imagem.name}\nTamanho: ${(formData.imagem.size / 1024).toFixed(1)} KB\nPor favor, solicite o reenvio via WhatsApp.`,
                  urgente: formData.urgente ? 'Sim' : 'Não',
                  acessoDificil: formData.acessoDificil ? 'Sim' : 'Não',
                  termos: formData.termos ? 'Aceitou' : 'Não aceitou'
                },
                'Fzcwt1Ax0RaIDF0QW'
              )
              
              setSubmitted(true)
            } finally {
              setIsSubmitting(false)
            }
          }
          reader.readAsDataURL(formData.imagem)
        }
      } else {
        await emailjs.send(
          'service_u783k4t',
          'template_a41pmvm',
          {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            morada: formData.morada,
            cidade: formData.cidade,
            tipoResiduo: formData.tipoResiduo,
            descricao: formData.descricao,
            urgente: formData.urgente ? 'Sim' : 'Não',
            acessoDificil: formData.acessoDificil ? 'Sim' : 'Não',
            termos: formData.termos ? 'Aceitou' : 'Não aceitou'
          },
          'Fzcwt1Ax0RaIDF0QW'
        )
        
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error)
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente ou entre em contato via WhatsApp.")
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
            {formData.imagem && (
              <p className="text-sm text-green-600 mb-4">
                📷 Tentamos anexar sua imagem ao email. Se não chegou como anexo, solicitaremos via WhatsApp.
              </p>
            )}
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
                {/* O código para rolar a página no botão abaixo já não é estritamente necessário, mas pode ser mantido como um fallback. */}
                <button variant="outline" onClick={( ) => { window.location.reload(); window.scrollTo(0, 0); }}>
                  Fazer Novo Pedido
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ... (o resto do seu código JSX permanece o mesmo)
  return (
    <div className="min-h-screen">
      {/* ... */}
    </div>
  )
}

export default Orcamentos

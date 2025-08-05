import { useState, useRef } from 'react'
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Verificar se é uma imagem
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.')
        return
      }
      
      // Verificar tamanho (máximo 1MB para anexo)
      if (file.size > 1 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 1MB para anexo no email.')
        return
      }

      setFormData(prev => ({ ...prev, imagem: file }))
      
      // Criar preview da imagem
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
      // Método 1: Tentar com FormData e anexo real
      if (formData.imagem) {
        try {
          // Criar FormData com todos os campos
          const formDataToSend = new FormData()
          
          // Adicionar todos os campos do formulário
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
          
          // Adicionar arquivo
          formDataToSend.append('attachment', formData.imagem)
          
          // Tentar enviar com anexo usando sendForm
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
          
          // Método 2: Converter para Base64 e incluir no email
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
              
              // Método 3: Fallback - enviar sem imagem mas com informações
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
        // Sem imagem - envio normal
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
                <Button variant="outline" onClick={() => window.location.reload()}>
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
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pedir Orçamento</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Preencha o formulário e receba um orçamento gratuito e personalizado
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="clyon-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vantagens.map((vantagem, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">{vantagem.icon}</div>
                <div>
                  <h3 className="font-semibold">{vantagem.titulo}</h3>
                  <p className="text-sm text-gray-600">{vantagem.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="clyon-section bg-white">
        <div className="clyon-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Dados do Orçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                    <div className="space-y-4 my-2">
                      <h3 className="text-lg font-semibold my-2">Dados de Contacto</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nome" className="mb-1 block">Nome Completo *</Label>
                          <Input 
                            id="nome" 
                            name="nome"
                            type="text" 
                            required 
                            value={formData.nome} 
                            onChange={(e) => handleInputChange('nome', e.target.value)} 
                            placeholder="Seu nome completo" 
                            className="mt-2" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="telefone" className="mb-1 block">Telefone *</Label>
                          <Input 
                            id="telefone" 
                            name="telefone"
                            type="tel" 
                            required 
                            value={formData.telefone} 
                            onChange={(e) => handleInputChange('telefone', e.target.value)} 
                            placeholder="+351 xxx xxx xxx" 
                            className="mt-2" 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-1 block">Email *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          required 
                          value={formData.email} 
                          onChange={(e) => handleInputChange('email', e.target.value)} 
                          placeholder="seu@email.com" 
                          className="mt-2" 
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold my-2">Localização do Serviço</h3>
                      <div>
                        <Label htmlFor="morada" className="mb-1 block">Morada Completa *</Label>
                        <Input 
                          id="morada" 
                          name="morada"
                          type="text" 
                          required 
                          value={formData.morada} 
                          onChange={(e) => handleInputChange('morada', e.target.value)} 
                          placeholder="Rua, número, andar, código postal" 
                          className="mt-2" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cidade" className="mb-1 block">Cidade *</Label>
                        <Select onValueChange={(value) => handleInputChange('cidade', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a cidade" />
                          </SelectTrigger>
                          <SelectContent>
                            {cidades.map((cidade) => (
                              <SelectItem key={cidade} value={cidade}>
                                {cidade}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold my-2">Detalhes do Serviço</h3>
                      <div>
                        <Label htmlFor="tipoResiduo" className="mb-1 block">Tipo de Resíduo *</Label>
                        <Select onValueChange={(value) => handleInputChange('tipoResiduo', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo de resíduo" />
                          </SelectTrigger>
                          <SelectContent>
                            {tiposResiduo.map((tipo) => (
                              <SelectItem key={tipo} value={tipo}>
                                {tipo}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="descricao" className="mb-1 block">Descrição Detalhada *</Label>
                        <Textarea 
                          id="descricao" 
                          name="descricao"
                          required 
                          value={formData.descricao} 
                          onChange={(e) => handleInputChange('descricao', e.target.value)} 
                          placeholder="Descreva detalhadamente..." 
                          rows={4} 
                          className="mt-2" 
                        />
                      </div>
                      
                      {/* Seção de Upload de Imagem com Anexo Real */}
                      <div>
                        <Label className="mb-1 block">Upload de Fotos (opcional)</Label>
                        
                        {!imagePreview ? (
                          <div 
                            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Clique para adicionar uma foto</p>
                            <p className="text-xs text-gray-500 mt-1">Máximo 1MB - JPG, PNG, GIF</p>
                            <p className="text-xs text-green-600">📎 Tentaremos anexar no email!</p>
                          </div>
                        ) : (
                          <div className="border-2 border-green-300 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <Image className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-green-600">Imagem pronta para anexar</span>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={removeImage}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="relative">
                              <img 
                                src={imagePreview} 
                                alt="Preview" 
                                className="max-w-full h-32 object-cover rounded border"
                              />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">{formData.imagem?.name}</p>
                            <p className="text-xs text-green-600 mt-1">
                              📎 Esta imagem será anexada ao email
                            </p>
                          </div>
                        )}
                        
                        <Input
                          ref={fileInputRef}
                          type="file"
                          name="attachment"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold my-2">Opções Especiais</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="urgente" 
                            checked={formData.urgente} 
                            onCheckedChange={(checked) => handleInputChange('urgente', checked)} 
                          />
                          <Label htmlFor="urgente" className="text-sm">Serviço urgente</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="acessoDificil" 
                            checked={formData.acessoDificil} 
                            onCheckedChange={(checked) => handleInputChange('acessoDificil', checked)} 
                          />
                          <Label htmlFor="acessoDificil" className="text-sm">Local de acesso difícil</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="termos" 
                          required 
                          checked={formData.termos} 
                          onCheckedChange={(checked) => handleInputChange('termos', checked)} 
                        />
                        <Label htmlFor="termos" className="text-sm">Aceito os termos e autorizo o contacto *</Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full clyon-button" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Enviar Pedido de Orçamento'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Orcamentos

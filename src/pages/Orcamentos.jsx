import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

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
    imagens: []
  })

  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        'service_u783k4t',       // ID do serviço
        'template_a41pmvm',      // ID do template
        formRef.current,         // Ref do formulário
        'Fzcwt1Ax0RaIDF0QW'      // Chave pública
      )
      setSubmitted(true)
    } catch (error) {
      console.error('Erro ao enviar:', error)
      alert('Erro ao enviar formulário.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Pedido enviado com sucesso!</h2>
        <p>Em breve entraremos em contato.</p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
      <div>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" required value={formData.nome} onChange={(e) => handleInputChange('nome', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="telefone">Telefone</Label>
        <Input id="telefone" name="telefone" value={formData.telefone} onChange={(e) => handleInputChange('telefone', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="morada">Morada</Label>
        <Input id="morada" name="morada" value={formData.morada} onChange={(e) => handleInputChange('morada', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="cidade">Cidade</Label>
        <Input id="cidade" name="cidade" value={formData.cidade} onChange={(e) => handleInputChange('cidade', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="tipoResiduo">Tipo de Resíduo</Label>
        <Input id="tipoResiduo" name="tipoResiduo" value={formData.tipoResiduo} onChange={(e) => handleInputChange('tipoResiduo', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="descricao">Descrição</Label>
        <Textarea id="descricao" name="descricao" value={formData.descricao} onChange={(e) => handleInputChange('descricao', e.target.value)} />
      </div>
      <div>
        <Label htmlFor="imagens">Imagem (opcional)</Label>
        <Input
          id="imagens"
          name="attachments" // Este campo precisa ser "attachments" no template do EmailJS
          type="file"
          accept="image/*"
          onChange={(e) => handleInputChange('imagens', Array.from(e.target.files))}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="urgente" name="urgente" checked={formData.urgente} onCheckedChange={(v) => handleInputChange('urgente', v)} />
        <Label htmlFor="urgente">Urgente</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="acessoDificil" name="acessoDificil" checked={formData.acessoDificil} onCheckedChange={(v) => handleInputChange('acessoDificil', v)} />
        <Label htmlFor="acessoDificil">Acesso Difícil</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="termos" name="termos" required checked={formData.termos} onCheckedChange={(v) => handleInputChange('termos', v)} />
        <Label htmlFor="termos">Aceito os termos</Label>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Orçamento'}
      </Button>
    </form>
  )
}

export default Orcamentos

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
    imagem: null
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
      // Passa o elemento do formulário diretamente para o EmailJS
      await emailjs.sendForm(
        'service_u783k4t',
        'template_a41pmvm',
        formRef.current, // Passa o elemento do formulário, não FormData
        'Fzcwt1Ax0RaIDF0QW'
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
        <Input 
          id="nome" 
          name="nome" 
          required 
          value={formData.nome} 
          onChange={(e) => handleInputChange('nome', e.target.value)} 
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          required 
          value={formData.email} 
          onChange={(e) => handleInputChange('email', e.target.value)} 
        />
      </div>
      <div>
        <Label htmlFor="telefone">Telefone</Label>
        <Input 
          id="telefone" 
          name="telefone" 
          value={formData.telefone} 
          onChange={(e) => handleInputChange('telefone', e.target.value)} 
        />
      </div>
      <div>
        <Label htmlFor="morada">Morada</Label>
        <Input 
          id="morada" 
          name="morada" 
          value={formData.morada} 
          onChange={(e) => handleInputChange('morada', e.target.value)} 
        />
      </div>
      <div>
        <Label htmlFor="cidade">Cidade</Label>
        <Input 
          id="cidade" 
          name="cidade" 
          value={formData.cidade} 
          onChange={(e) => handleInputChange('cidade', e.target.value)} 
        />
      </div>
      <div>
        <Label htmlFor="tipoResiduo">Tipo de Resíduo</Label>
        <Input 
          id="tipoResiduo" 
          name="tipoResiduo" 
          value={formData.tipoResiduo} 
          onChange={(e) => handleInputChange('tipoResiduo', e.target.value)} 
        />
      </div>
      <div>
        <Label htmlFor="descricao">Descrição</Label>
        <Textarea 
          id="descricao" 
          name="descricao" 
          value={formData.descricao} 
          onChange={(e) => handleInputChange('descricao', e.target.value)} 
        />
      </div>
      <div>
        <Label htmlFor="imagem">Imagem (opcional)</Label>
        <Input
          id="imagem"
          name="file" // este campo precisa bater com {{file}} no template
          type="file"
          accept="image/*"
          onChange={(e) => handleInputChange('imagem', e.target.files[0])}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox 
          id="urgente" 
          name="urgente" 
          checked={formData.urgente} 
          onCheckedChange={(v) => handleInputChange('urgente', v)} 
        />
        <Label htmlFor="urgente">Urgente</Label>
        {/* Campo hidden para enviar o valor do checkbox */}
        <input type="hidden" name="urgente" value={formData.urgente ? 'Sim' : 'Não'} />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox 
          id="acessoDificil" 
          name="acessoDificil" 
          checked={formData.acessoDificil} 
          onCheckedChange={(v) => handleInputChange('acessoDificil', v)} 
        />
        <Label htmlFor="acessoDificil">Acesso Difícil</Label>
        {/* Campo hidden para enviar o valor do checkbox */}
        <input type="hidden" name="acessoDificil" value={formData.acessoDificil ? 'Sim' : 'Não'} />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox 
          id="termos" 
          name="termos" 
          required 
          checked={formData.termos} 
          onCheckedChange={(v) => handleInputChange('termos', v)} 
        />
        <Label htmlFor="termos">Aceito os termos</Label>
        {/* Campo hidden para enviar o valor do checkbox */}
        <input type="hidden" name="termos" value={formData.termos ? 'Sim' : 'Não'} />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Orçamento'}
      </Button>
    </form>
  )
}

export default Orcamentos

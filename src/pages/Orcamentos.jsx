import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { FileText, Clock, CheckCircle, Upload, MessageCircle } from 'lucide-react'

const Orcamentos = () => {
  const [formData, setFormData] = useState({
    urgente: false,
    acessoDificil: false,
    termos: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        'service_u783k4t',
        'template_xxxxxx', // Substitua pelo seu Template ID
        e.target,
        'YOUR_PUBLIC_KEY'  // Substitua pela sua Public Key
      )
      setSubmitted(true)
    } catch (error) {
      console.error('Erro ao enviar:', error)
      alert('Erro ao enviar o formulário.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const tiposResiduo = [
    "Entulho de construção", "Móveis velhos", "Eletrodomésticos",
    "Lixo verde/jardim", "Limpeza de sótão/cave",
    "Resíduos mistos", "Outro (especificar na descrição)"
  ]

  const cidades = [
    "Lisboa", "Cascais", "Sintra", "Oeiras", "Amadora", "Loures",
    "Setúbal", "Almada", "Barreiro", "Seixal", "Sesimbra", "Palmela"
  ]

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Pedido Enviado!</h2>
            <p className="text-gray-600 mb-6">
              Recebemos o seu pedido de orçamento. Entraremos em contacto em até 2h úteis.
            </p>
            <Button variant="outline" onClick={() => navigate('/orcamentos')}>
              Fazer Novo Pedido
            </Button>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Formulário de Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Contacto */}
                <Label>Nome *</Label>
                <Input name="nome" type="text" required placeholder="Seu nome" />

                <Label className="mt-4">Email *</Label>
                <Input name="email" type="email" required placeholder="seu@email.com" />

                <Label className="mt-4">Telefone *</Label>
                <Input name="telefone" type="tel" required placeholder="+351 9XX XXX XXX" />

                {/* Local */}
                <Label className="mt-4">Morada *</Label>
                <Input name="morada" type="text" required />

                <Label className="mt-4">Cidade *</Label>
                <Select name="cidade" onValueChange={(val) => document.getElementsByName('cidade')[0].value = val}>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha a cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {cidades.map(cidade => (
                      <SelectItem key={cidade} value={cidade}>{cidade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" name="cidade" />

                {/* Tipo de resíduo */}
                <Label className="mt-4">Tipo de Resíduo *</Label>
                <Select name="tipoResiduo" onValueChange={(val) => document.getElementsByName('tipoResiduo')[0].value = val}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de resíduo" />
                  </SelectTrigger>
                  <SelectContent>
                    {tiposResiduo.map(tipo => (
                      <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" name="tipoResiduo" />

                <Label className="mt-4">Descrição Detalhada *</Label>
                <Textarea name="descricao" required placeholder="Descreva o serviço..." />

                {/* Upload */}
                <Label className="mt-4">Upload de imagens (opcional)</Label>
                <Input type="file" name="file1" accept="image/*" />
                <Input type="file" name="file2" accept="image/*" className="mt-2" />
                <Input type="file" name="file3" accept="image/*" className="mt-2" />

                {/* Checkboxes */}
                <div className="mt-4 flex items-center space-x-2">
                  <Checkbox
                    id="urgente"
                    checked={formData.urgente}
                    onCheckedChange={(checked) => handleCheckboxChange('urgente', checked)}
                  />
                  <Label htmlFor="urgente" className="text-sm">Serviço urgente</Label>
                </div>
                <input type="hidden" name="urgente" value={formData.urgente ? 'Sim' : 'Não'} />

                <div className="mt-2 flex items-center space-x-2">
                  <Checkbox
                    id="acessoDificil"
                    checked={formData.acessoDificil}
                    onCheckedChange={(checked) => handleCheckboxChange('acessoDificil', checked)}
                  />
                  <Label htmlFor="acessoDificil" className="text-sm">Acesso difícil</Label>
                </div>
                <input type="hidden" name="acessoDificil" value={formData.acessoDificil ? 'Sim' : 'Não'} />

                <div className="mt-2 flex items-start space-x-2">
                  <Checkbox
                    id="termos"
                    required
                    checked={formData.termos}
                    onCheckedChange={(checked) => handleCheckboxChange('termos', checked)}
                  />
                  <Label htmlFor="termos" className="text-sm">Aceito os termos e autorizo o contacto *</Label>
                </div>
                <input type="hidden" name="termos" value={formData.termos ? 'Sim' : 'Não'} />

                <Button type="submit" className="w-full mt-6" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Pedido de Orçamento'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Orcamentos

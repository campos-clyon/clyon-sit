import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Shield, Mail, Phone } from 'lucide-react'

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="clyon-hero text-white py-16">
        <div className="clyon-container text-center">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Transparência no tratamento dos seus dados pessoais
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="clyon-section bg-white">
        <div className="clyon-container max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-PT')}
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">1. Introdução</h2>
                    <p className="text-gray-700 leading-relaxed">
                      A CLYON compromete-se a proteger a privacidade e os dados pessoais dos seus clientes e utilizadores. 
                      Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos as suas 
                      informações pessoais em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e 
                      a legislação portuguesa aplicável.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">2. Responsável pelo Tratamento</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">CLYON</p>
                      <p className="text-gray-700">Email: contato@clyon.pt</p>
                      <p className="text-gray-700">Telefone: +351 931 632 622</p>
                      <p className="text-gray-700">Área de atuação: Grande Lisboa e Setúbal</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">3. Dados Pessoais Recolhidos</h2>
                    <p className="text-gray-700 mb-4">Recolhemos os seguintes tipos de dados pessoais:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">3.1 Dados de Identificação</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Nome completo</li>
                          <li>Endereço de email</li>
                          <li>Número de telefone</li>
                          <li>Morada do serviço</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">3.2 Dados do Serviço</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Tipo de resíduo a recolher</li>
                          <li>Descrição detalhada do serviço</li>
                          <li>Fotografias dos materiais (quando fornecidas)</li>
                          <li>Preferências de agendamento</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">3.3 Dados de Navegação</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Endereço IP</li>
                          <li>Tipo de navegador</li>
                          <li>Páginas visitadas no site</li>
                          <li>Tempo de permanência</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">4. Finalidades do Tratamento</h2>
                    <p className="text-gray-700 mb-4">Os seus dados pessoais são utilizados para:</p>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Fornecer orçamentos personalizados para os serviços solicitados</li>
                      <li>Agendar e executar os serviços de recolha de resíduos</li>
                      <li>Comunicar sobre o estado dos serviços</li>
                      <li>Processar pagamentos e emitir faturas</li>
                      <li>Responder a questões e pedidos de suporte</li>
                      <li>Melhorar os nossos serviços e experiência do utilizador</li>
                      <li>Cumprir obrigações legais e regulamentares</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">5. Base Legal</h2>
                    <p className="text-gray-700 mb-4">O tratamento dos seus dados pessoais baseia-se em:</p>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Execução de contrato:</strong> Para prestação dos serviços solicitados</li>
                      <li><strong>Consentimento:</strong> Para comunicações de marketing (quando aplicável)</li>
                      <li><strong>Interesse legítimo:</strong> Para melhoria dos serviços e suporte ao cliente</li>
                      <li><strong>Obrigação legal:</strong> Para cumprimento de obrigações fiscais e contabilísticas</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">6. Partilha de Dados</h2>
                    <p className="text-gray-700 mb-4">
                      Os seus dados pessoais não são vendidos, alugados ou partilhados com terceiros para fins comerciais. 
                      Podemos partilhar dados apenas nas seguintes situações:
                    </p>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Com prestadores de serviços que nos auxiliam na execução dos serviços</li>
                      <li>Com autoridades competentes quando legalmente obrigatório</li>
                      <li>Com centros de tratamento de resíduos licenciados para comprovação de descarte</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">7. Retenção de Dados</h2>
                    <p className="text-gray-700 mb-4">Os dados pessoais são conservados pelo período necessário para:</p>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Dados de clientes:</strong> 5 anos após a última prestação de serviços</li>
                      <li><strong>Dados fiscais:</strong> Conforme exigido pela legislação fiscal portuguesa</li>
                      <li><strong>Dados de navegação:</strong> Máximo de 2 anos</li>
                      <li><strong>Dados de marketing:</strong> Até retirada do consentimento</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">8. Segurança dos Dados</h2>
                    <p className="text-gray-700 mb-4">
                      Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais:
                    </p>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Encriptação de dados em trânsito e em repouso</li>
                      <li>Acesso restrito aos dados apenas a pessoal autorizado</li>
                      <li>Sistemas de backup seguros e regulares</li>
                      <li>Formação regular da equipa sobre proteção de dados</li>
                      <li>Monitorização contínua de segurança</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">9. Os Seus Direitos</h2>
                    <p className="text-gray-700 mb-4">Tem os seguintes direitos relativamente aos seus dados pessoais:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Direito de Acesso</h4>
                        <p className="text-sm text-gray-700">Solicitar informações sobre os dados que tratamos</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Direito de Retificação</h4>
                        <p className="text-sm text-gray-700">Corrigir dados incorretos ou incompletos</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Direito de Apagamento</h4>
                        <p className="text-sm text-gray-700">Solicitar a eliminação dos seus dados</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Direito de Portabilidade</h4>
                        <p className="text-sm text-gray-700">Receber os seus dados em formato estruturado</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Direito de Oposição</h4>
                        <p className="text-sm text-gray-700">Opor-se ao tratamento dos seus dados</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Direito de Limitação</h4>
                        <p className="text-sm text-gray-700">Limitar o tratamento em certas circunstâncias</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">10. Cookies</h2>
                    <p className="text-gray-700 mb-4">
                      O nosso site utiliza cookies para melhorar a experiência do utilizador. Os cookies são pequenos 
                      ficheiros de texto armazenados no seu dispositivo. Utilizamos:
                    </p>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento do site</li>
                      <li><strong>Cookies de desempenho:</strong> Para análise e melhoria do site</li>
                      <li><strong>Cookies funcionais:</strong> Para personalizar a experiência</li>
                    </ul>
                    
                    <p className="text-gray-700 mt-4">
                      Pode gerir as suas preferências de cookies nas definições do seu navegador.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">11. Alterações à Política</h2>
                    <p className="text-gray-700">
                      Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações significativas 
                      serão comunicadas através do nosso site ou por email. Recomendamos que consulte regularmente esta 
                      página para se manter informado sobre como protegemos os seus dados.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 clyon-primary-text">12. Contactos</h2>
                    <p className="text-gray-700 mb-4">
                      Para exercer os seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                      pode contactar-nos através de:
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-primary mr-3" />
                          <div>
                            <p className="font-semibold">Email</p>
                            <p className="text-sm">contato@clyon.pt</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-primary mr-3" />
                          <div>
                            <p className="font-semibold">Telefone</p>
                            <p className="text-sm">+351 93163 622</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mt-4">
                      Tem também o direito de apresentar uma reclamação à Comissão Nacional de Proteção de Dados (CNPD) 
                      se considerar que o tratamento dos seus dados pessoais viola a legislação aplicável.
                    </p>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Tem dúvidas sobre a nossa Política de Privacidade?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="clyon-button">
                <Link to="/contato">Contactar-nos</Link>
              </Button>
              <Button asChild className="clyon-button">
                <Link to="/">Voltar ao Início</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PoliticaPrivacidade


# CLYON - Site Profissional

Site completo e profissional para a CLYON, empresa de recolha de entulho e resíduos em Lisboa e Setúbal.

## 🚀 Funcionalidades

### Páginas Principais
- **Home** - Página inicial com hero section e overview dos serviços
- **Serviços** - Detalhes completos de todos os serviços oferecidos
- **Sobre** - Informações sobre a empresa e missão
- **Como Funciona** - Processo em 4 passos simples
- **FAQ** - Perguntas frequentes organizadas por categorias
- **Orçamentos** - Formulário completo para pedidos de orçamento
- **Contato** - Múltiplas formas de contacto e formulário
- **Simulação** - Chat inteligente para simulação de orçamentos
- **Política de Privacidade** - Política completa conforme RGPD

### Funcionalidades Especiais
- **Chat Inteligente** - Simulação de orçamentos com IA
- **Formulários Avançados** - Validação e envio de dados
- **Design Responsivo** - Funciona em desktop e mobile
- **SEO Otimizado** - Meta tags e estrutura otimizada
- **Acessibilidade** - Componentes acessíveis

## 🎨 Design

### Cores
- **Primária**: #07a0bc (Azul CLYON)
- **Secundária**: Branco (#ffffff)
- **Terciária**: Preto (#000000)

### Componentes
- Utiliza shadcn/ui para componentes profissionais
- Ícones Lucide React
- Tailwind CSS para estilização
- Design system consistente

## 📱 Informações de Contacto

- **Email**: acontato@clyon.pt
- **Telefone**: +351 931 632 622
- **WhatsApp**: +351 931 632 622
- **Área de Atuação**: Grande Lisboa e Setúbal

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **React Router** - Navegação

## 📦 Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clonar o repositório
git clone [URL_DO_REPOSITORIO]

# Entrar na pasta
cd clyon-site

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev
```

### Scripts Disponíveis
```bash
# Desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview

# Lint
pnpm run lint
```

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conectar ao GitHub**
   - Faça push do código para um repositório GitHub
   - Conecte o repositório ao Vercel

2. **Configuração Automática**
   - O Vercel detecta automaticamente que é um projeto Vite
   - Build command: `pnpm run build`
   - Output directory: `dist`

3. **Deploy Automático**
   - Cada push para a branch main faz deploy automático
   - Preview deployments para outras branches

### Outras Plataformas

#### Netlify
```bash
# Build
pnpm run build

# Deploy pasta dist/
```

#### GitHub Pages
```bash
# Instalar gh-pages
pnpm add -D gh-pages

# Adicionar script no package.json
"deploy": "gh-pages -d dist"

# Build e deploy
pnpm run build
pnpm run deploy
```

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
# Para integração GPT (futuro)
VITE_OPENAI_API_KEY=sua_chave_aqui

# Para analytics (opcional)
VITE_GA_TRACKING_ID=seu_id_aqui
```

### Personalização

#### Cores
Edite o arquivo `src/App.css` para alterar as cores:

```css
:root {
  --primary: #07a0bc;
  --primary-dark: #058a9f;
  /* ... outras cores */
}
```

#### Conteúdo
- Textos: Edite os componentes em `src/pages/`
- Imagens: Substitua em `src/assets/`
- Informações de contacto: Atualize em todos os componentes

## 📁 Estrutura do Projeto

```
clyon-site/
├── public/
│   ├── favicon.ico
│   └── clyon-logo.png
├── src/
│   ├── assets/
│   │   ├── hero-image.jpg
│   │   ├── construction-waste.jpg
│   │   ├── furniture-removal.jpg
│   │   └── garden-waste.jpg
│   ├── components/
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Servicos.jsx
│   │   ├── Sobre.jsx
│   │   ├── ComoFunciona.jsx
│   │   ├── FAQ.jsx
│   │   ├── Orcamentos.jsx
│   │   ├── Contato.jsx
│   │   ├── Simulacao.jsx
│   │   └── PoliticaPrivacidade.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🔮 Funcionalidades Futuras

### Integração GPT Real
Para implementar a integração real com OpenAI GPT:

1. **Backend API**
   - Criar endpoint para processar mensagens
   - Integrar com OpenAI API
   - Implementar rate limiting

2. **Segurança**
   - Autenticação de requests
   - Validação de inputs
   - Logs de conversas

### Analytics
- Google Analytics 4
- Hotjar para heatmaps
- Métricas de conversão

### CRM Integration
- Integração com sistemas de CRM
- Automação de follow-up
- Gestão de leads

## 📞 Suporte

Para dúvidas sobre o desenvolvimento ou manutenção do site:

- **Email Técnico**: [seu-email-tecnico]
- **Documentação**: Este README
- **Issues**: Use o sistema de issues do GitHub

## 📄 Licença

Este projeto foi desenvolvido especificamente para a CLYON. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a CLYON**


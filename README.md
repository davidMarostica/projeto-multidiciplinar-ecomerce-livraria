📚 Bookstore Management System
<div align="center">
https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white

Sistema completo de gerenciamento de livraria desenvolvido em TypeScript

Projeto Multidisciplinar - Análise e Desenvolvimento de Sistemas

🚀 Começar • 📋 Funcionalidades • 🏗️ Arquitetura • 📱 Demo

</div>
🌟 Sobre o Projeto
O Bookstore Management System é uma aplicação full-stack desenvolvida em TypeScript que demonstra conceitos avançados de engenharia de software, arquitetura de sistemas e desenvolvimento web moderno.

🎯 Objetivos do Projeto
Demonstrar domínio de TypeScript e POO avançada

Implementar Collections (Map, Set, Array) de forma eficiente

Aplicar padrões arquiteturais (MVC, Repository, Service Layer)

Desenvolver API REST completa com Express

Criar interface web responsiva (mobile-first)

Documentar processo de desenvolvimento profissional

📊 Status do Projeto
Módulo	Status	Branch	Descrição
🏗️ Parte 1 - Core	✅ Concluído	parte-1	Fundamentos do sistema
💰 Parte 2 - Negócio	✅ Concluído	parte-2	Regras de negócio complexas
🌐 Parte 3 - Web	✅ Concluído	parte-3	Interface e API REST
🚀 Produção	✅ Pronto	main	Sistema completo
🚀 Começar Rapidamente
Pré-requisitos
Node.js 16.0 ou superior

npm ou yarn

Navegador web moderno

Instalação Expressa
bash
# Clone o repositório
git clone https://github.com/seu-usuario/projeto-livraria.git
cd projeto-livraria

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Acesse no navegador
# http://localhost:3000
📦 Scripts Disponíveis
bash
npm run dev          # 🏃 Desenvolvimento com hot-reload
npm run build        # 🔨 Compilação para produção
npm start           # 🚀 Produção
npm run cli         # 💻 Interface de linha de comando
npm test            # 🧪 Executar testes
npm run test:coverage # 📊 Testes com cobertura
🏗️ Arquitetura
Estrutura do Projeto
text
src/
├── 🏗️ core/                 # Fundamentos do sistema
│   ├── models/            # Entidades base (Produto, Livro)
│   ├── repositories/      # Padrão Repository + Collections
│   ├── services/         # Lógica de negócio específica
│   └── controllers/      # Coordenação de operações
├── 💰 negocio/             # Regras de negócio complexas
│   ├── models/           # Entidades de domínio (Venda, Cliente)
│   ├── controllers/      # Controladores especializados
│   ├── services/         # Serviços complexos
│   ├── validators/       # Validações de negócio
│   └── repositories/     # Repositórios especializados
└── 🌐 web/                # Interface e API
    ├── server/           # API REST com Express
    └── frontend/         # Interface web responsiva
📐 Diagrama Arquitetural
text
Frontend (HTML/CSS/JS)
        ↓
    API REST (Express)
        ↓
    Controllers
        ↓
    Services
        ↓
 Repositories
        ↓
   Models/Entities
📋 Funcionalidades
🏗️ Módulo Core (Parte 1)
Funcionalidade	Status	Descrição
✅ Cadastro de Livros	Implementado	CRUD completo com metadados
✅ Sistema de Categorias	Implementado	Categorias dinâmicas com Set
✅ Buscas Avançadas	Implementado	Nome, autor, categoria, ISBN
✅ Controle de Estoque	Implementado	Gestão em tempo real
✅ Estatísticas	Implementado	Relatórios e analytics
✅ Ordenação/Filtros	Implementado	Múltiplos critérios
💰 Módulo Negócio (Parte 2)
Funcionalidade	Status	Descrição
✅ Processo de Venda	Implementado	Fluxo completo
✅ Gestão de Clientes	Implementado	CRUD com validações
✅ Regras de Negócio	Implementado	Descontos progressivos
✅ Validações	Implementado	Estoque e elegibilidade
✅ Relatórios	Implementado	Analytics avançados
✅ Integração	Implementado	Conexão com módulo Core
🌐 Módulo Web (Parte 3)
Funcionalidade	Status	Descrição
✅ API REST	Implementado	Endpoints completos
✅ Interface Web	Implementado	Design responsivo
✅ Dashboard	Implementado	Visualização em tempo real
✅ Processo de Venda	Implementado	Interface gráfica
✅ Relatórios	Implementado	Visualização de dados
✅ Mobile-First	Implementado	Design responsivo
🛠️ Tecnologias e Conceitos
💻 Stack Tecnológica
Backend: Node.js + Express + TypeScript

Frontend: HTML5 + CSS3 + JavaScript Vanilla

Arquitetura: MVC + Repository Pattern + Service Layer

Collections: Map, Set, Array (métodos funcionais)

Validações: Regras de negócio complexas

🎯 Conceitos Demonstrados
typescript
// Exemplo de uso avançado de Collections
public getEstatisticas(): Map<string, number> {
    const estatisticas = new Map<string, number>();
    const livros = this.repository.listarTodos();

    // Uso de Array methods funcionais
    estatisticas.set("total_livros", livros.length);
    
    const totalEstoque = livros.reduce((total, livro) => 
        total + livro.getQuantidadeEstoque(), 0
    );
    
    const valorTotalEstoque = livros.reduce((total, livro) => 
        total + (livro.getPreco() * livro.getQuantidadeEstoque()), 0
    );
    
    return estatisticas;
}
📡 API REST
Endpoints Principais
📚 Livros
http
GET    /api/livros                 # Listar todos os livros
GET    /api/livros/:id            # Buscar livro por ID
👥 Clientes
http
GET    /api/clientes               # Listar clientes
💰 Vendas
http
POST   /api/vendas                 # Criar nova venda
POST   /api/vendas/:id/itens      # Adicionar item à venda
POST   /api/vendas/:id/finalizar  # Finalizar venda
📊 Relatórios
http
GET    /api/relatorios/completo    # Relatório completo do sistema
GET    /api/relatorios/vendas      # Relatório de vendas
📝 Exemplo de Uso da API
javascript
// Criar uma venda
const response = await fetch('/api/vendas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        clienteId: 1,
        itens: [
            { livroId: 1, quantidade: 2 },
            { livroId: 2, quantidade: 1 }
        ]
    })
});
🎨 Interface
📱 Design Responsivo
Mobile-First: Design otimizado para dispositivos móveis

Tablet: Layout adaptativo para tablets

Desktop: Experiência completa para desktop

Dark Mode: Suporte a preferência do sistema

🖼️ Capturas de Tela
Mobile	Tablet	Desktop
📱 Interface otimizada	📟 Layout adaptativo	🖥️ Experiência completa
🧪 Testes e Qualidade
Estratégia de Testes
bash
# Executar suite de testes
npm test

# Testes com cobertura
npm run test:coverage

# Testes específicos por módulo
npx ts-node src/test-parte1.ts
npx ts-node src/test-parte2.ts
✅ Cobertura de Testes
Módulo Core: Testes unitários completos

Módulo Negócio: Testes de integração

API REST: Testes de endpoints

Validações: Testes de regras de negócio

📈 Performance e Otimizações
🚀 Otimizações Implementadas
Collections Eficientes: Uso de Map para acesso O(1)

Algoritmos Otimizados: Buscas e filtros eficientes

Memory Management: Gerenciamento adequado de recursos

Code Splitting: Separação lógica por módulos

📊 Métricas de Performance
typescript
// Busca otimizada com Map
public buscarPorId(id: number): T | null {
    return this.entidades.get(id) || null; // O(1)
}

// Filtros com métodos funcionais
public buscarPorCategoria(categoria: string): T[] {
    return this.listarTodos().filter(produto => 
        produto.getCategoria().toLowerCase().includes(categoria.toLowerCase())
    );
}
👥 Estrutura de Desenvolvimento
🌿 Git Flow
text
main (produção)
├── parte-1-core         ✅ Concluída
├── parte-2-negocio      ✅ Concluída  
└── parte-3-web          ✅ Concluída
📝 Convenções de Commit
bash
git commit -m "feat: adiciona sistema de vendas"
git commit -m "fix: corrige validação de estoque"
git commit -m "docs: atualiza documentação da API"
git commit -m "refactor: melhora estrutura de repositories"
git commit -m "test: adiciona testes para módulo de clientes"
🚀 Deploy e Produção
Build para Produção
bash
# Compilar TypeScript
npm run build

# Executar em produção
npm start
Variáveis de Ambiente
env
PORT=3000
NODE_ENV=production
🤝 Contribuição
Guidelines de Desenvolvimento
Siga as convenções de código estabelecidas

Mantenha a cobertura de testes

Documente novas funcionalidades

Use branches feature para desenvolvimento

Solicite code review antes do merge

Estrutura de Branches
bash
git checkout -b feature/nova-funcionalidade
git checkout -b fix/correcao-bug
git checkout -b docs/atualizacao-documentacao
📄 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

👨‍💻 Autor
Seu Nome - seu-email@dominio.com

🙏 Agradecimentos
Professores e orientadores do curso

Comunidade TypeScript

Documentação e recursos utilizados

<div align="center">
Desenvolvido com 💻 e 🎯 para demonstração de excelência em engenharia de software

⬆ Voltar ao topo

</div>
https://github.com/davidMarostica/projeto-multidiciplinar-ecomerce-livraria.git
📚 Bookstore Management System
<div align="center">
https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white

Sistema completo de gerenciamento de livraria - Projeto Multidisciplinar

Desenvolvido por David Aparecido Da Silva

🚀 Começar • 📋 Funcionalidades • 🏗️ Arquitetura • 🌐 Demo Online

</div>
🌟 Sobre o Projeto
O Bookstore Management System é uma aplicação full-stack desenvolvida em TypeScript como projeto multidisciplinar para o curso de Análise e Desenvolvimento de Sistemas. O sistema demonstra conceitos avançados de engenharia de software, arquitetura em camadas e desenvolvimento web moderno.

🎯 Objetivos do Projeto
Demonstrar domínio de TypeScript e Programação Orientada a Objetos

Implementar Collections (Map, Set, Array) de forma eficiente

Aplicar padrões arquiteturais (MVC, Repository, Service Layer)

Desenvolver API REST completa com Express

Criar interface web responsiva (mobile-first)

Documentar processo de desenvolvimento profissional

📊 Status do Projeto
Módulo	Status	Descrição	Tecnologias
🏗️ Parte 1 - Core	✅ Concluído	Fundamentos do sistema	TypeScript, Collections
💰 Parte 2 - Negócio	✅ Concluído	Regras de negócio complexas	Services, Validators
🌐 Parte 3 - Web	✅ Concluído	Interface e API REST	Express, HTML5, CSS3
🚀 Sistema Completo	✅ Pronto	Integração total	Full-Stack
🚀 Começar Rapidamente
Pré-requisitos
Node.js 16.0 ou superior

npm ou yarn

Navegador web moderno

Instalação Rápida
bash
# Clone o repositório
git clone https://github.com/davidMarostica/projeto-multidiciplinar-ecomerce-livraria.git
cd projeto-multidiciplinar-ecomerce-livraria

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Acesse a aplicação
# http://localhost:3000
📦 Scripts Disponíveis
Comando	Descrição
npm run dev	🏃 Desenvolvimento com hot-reload
npm run build	🔨 Compilação TypeScript para produção
npm start	🚀 Executar em produção
npm run cli	💻 Interface de linha de comando
npm test	🧪 Executar suite de testes
npm run test:coverage	📊 Testes com relatório de cobertura
🏗️ Arquitetura do Sistema
Estrutura do Projeto
text
src/
├── 🏗️ core/                    # Parte 1 - Fundamentos
│   ├── models/               # Entidades base
│   │   ├── EntidadeBase.ts   # Classe abstrata base
│   │   ├── Produto.ts        # Modelo de produto
│   │   └── Livro.ts          # Modelo especializado de livro
│   ├── repositories/         # Camada de acesso a dados
│   │   ├── RepositoryInterface.ts
│   │   ├── BaseRepository.ts
│   │   └── ProdutoRepository.ts
│   ├── services/            # Lógica de negócio
│   │   └── CategoriaService.ts
│   └── controllers/         # Controladores
│       └── ProdutoController.ts
├── 💰 negocio/                # Parte 2 - Regras de Negócio
│   ├── models/              # Entidades de domínio
│   │   ├── Cliente.ts       # Gestão de clientes
│   │   ├── Venda.ts         # Processo de venda
│   │   ├── ItemVenda.ts     # Itens da venda
│   │   └── Fornecedor.ts    # Cadastro de fornecedores
│   ├── controllers/         # Controladores especializados
│   │   ├── VendaController.ts
│   │   ├── ClienteController.ts
│   │   └── RelatorioController.ts
│   ├── services/           # Serviços complexos
│   │   ├── VendaService.ts
│   │   ├── EstoqueService.ts
│   │   └── RegrasNegocioService.ts
│   └── validators/         # Validações
│       └── VendaValidator.ts
└── 🌐 web/                   # Parte 3 - Interface Web
    ├── server/             # API REST
    │   └── server.ts       # Servidor Express
    └── frontend/           # Interface do usuário
        └── public/
            ├── index.html  # Página principal
            ├── css/
            │   └── style.css # Estilos responsivos
            └── js/
                └── app.js  # Lógica do frontend
📐 Diagrama de Fluxo
text
Frontend (Interface Web)
        ↓
    API REST (Express.js)
        ↓
  Controllers (MVC)
        ↓
   Services (Lógica)
        ↓
Repositories (Dados)
        ↓
  Models (Entidades)
📋 Funcionalidades Detalhadas
🏗️ Módulo Core - Gestão de Livros
✅ CRUD Completo: Create, Read, Update, Delete de livros

✅ Sistema de Categorias: Categorização dinâmica com Set

✅ Buscas Avançadas: Por nome, autor, categoria, ISBN

✅ Controle de Estoque: Gestão em tempo real

✅ Estatísticas: Relatórios de inventário e valores

✅ Ordenação: Por preço, nome, categoria

💰 Módulo Negócio - Processos Comerciais
✅ Processo de Venda: Fluxo completo de venda

✅ Gestão de Clientes: Cadastro e histórico

✅ Regras de Negócio: Descontos progressivos automáticos

✅ Validações: Estoque, elegibilidade do cliente

✅ Relatórios: Analytics de vendas e performance

✅ Integração: Conexão perfeita com módulo Core

🌐 Módulo Web - Interface e API
✅ API REST: Endpoints completos para integração

✅ Interface Responsiva: Design mobile-first

✅ Dashboard: Visualização em tempo real

✅ Processo de Venda UI: Interface gráfica intuitiva

✅ Relatórios Visuais: Apresentação de dados

✅ Design Moderno: CSS3 com variáveis e animações

🛠️ Tecnologias e Conceitos Técnicos
💻 Stack Tecnológica
Backend: Node.js + Express + TypeScript

Frontend: HTML5 + CSS3 + JavaScript Vanilla

Arquitetura: MVC + Repository Pattern + Service Layer

Collections: Map, Set, Array (métodos funcionais)

Validações: Regras de negócio complexas

🎯 Conceitos de POO e Collections Demonstrados
typescript
// Uso avançado de Generics e Collections
export class BaseRepository<T extends EntidadeBase> {
    protected entidades: Map<number, T> = new Map();
    
    public criar(entidade: T): T {
        entidade.setId(this.proximoId++);
        this.entidades.set(entidade.getId(), entidade);
        return entidade;
    }
    
    public listarTodos(): T[] {
        return Array.from(this.entidades.values());
    }
}

// Métodos funcionais com Array
public getEstatisticas(): Map<string, number> {
    const livros = this.repository.listarTodos();
    
    return new Map([
        ["total_livros", livros.length],
        ["total_estoque", livros.reduce((total, livro) => 
            total + livro.getQuantidadeEstoque(), 0)],
        ["valor_total_estoque", livros.reduce((total, livro) => 
            total + (livro.getPreco() * livro.getQuantidadeEstoque()), 0)]
    ]);
}
📡 API REST - Documentação Completa
Endpoints Principais
📚 Gestão de Livros
http
GET    /api/livros                 # Listar todos os livros
GET    /api/livros/:id            # Buscar livro específico
👥 Gestão de Clientes
http
GET    /api/clientes               # Listar clientes cadastrados
💰 Processo de Vendas
http
POST   /api/vendas                 # Iniciar nova venda
Body: { "clienteId": number }

POST   /api/vendas/:id/itens      # Adicionar item à venda
Body: { "livroId": number, "quantidade": number }

POST   /api/vendas/:id/finalizar  # Finalizar venda
📊 Relatórios e Analytics
http
GET    /api/relatorios/completo    # Relatório completo do sistema
GET    /api/relatorios/vendas      # Relatório específico de vendas
📝 Exemplos de Uso da API
javascript
// Exemplo: Criar uma venda completa
async function realizarVenda() {
    // 1. Criar venda
    const vendaResponse = await fetch('/api/vendas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clienteId: 1 })
    });
    
    const { vendaId } = await vendaResponse.json();
    
    // 2. Adicionar itens
    await fetch(`/api/vendas/${vendaId}/itens`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ livroId: 1, quantidade: 2 })
    });
    
    // 3. Finalizar venda
    await fetch(`/api/vendas/${vendaId}/finalizar`, {
        method: 'POST'
    });
}
🎨 Interface do Usuário
📱 Design Responsivo
Mobile-First: Design otimizado para dispositivos móveis

Tablet: Layout adaptativo para tablets

Desktop: Experiência completa para desktop

Dark Mode: Suporte a preferência do sistema

🎯 Seções da Interface
📖 Livros: Catálogo completo com busca e filtros

💰 Vendas: Processo intuitivo de venda

👥 Clientes: Gestão de cadastros

📊 Relatórios: Dashboard com analytics

✨ Características do UI/UX
Navegação intuitiva por abas

Feedback visual imediato

Formulários validados

Loading states

Mensagens de erro e sucesso

Design consistente

🧪 Qualidade e Testes
Estratégia de Testes
bash
# Executar testes automatizados
npm test

# Testes com cobertura detalhada
npm run test:coverage

# Testes específicos por módulo
npx ts-node src/test-parte1.ts    # Teste do módulo Core
npx ts-node src/test-parte2.ts    # Teste do módulo Negócio
✅ Cobertura de Testes
Testes Unitários: Models, Services, Validators

Testes de Integração: Controllers, API endpoints

Testes de Regras: Validações de negócio

Testes de UI: Interface do usuário

📈 Performance e Otimizações
🚀 Otimizações Implementadas
Collections Eficientes

Map para acesso O(1) por ID

Set para valores únicos (categorias)

Array methods para operações em lote

Algoritmos Otimizados

Buscas com complexidade controlada

Ordenação eficiente

Processamento em memória

Arquitetura de Performance

Separação de concerns

Lazy loading quando aplicável

Cache estratégico

📊 Exemplo de Otimização
typescript
// Busca otimizada usando Map
public buscarPorId(id: number): Livro | null {
    return this.repository.buscarPorId(id); // O(1)
}

// Filtros eficientes com métodos funcionais
public buscarPorCategoria(categoria: string): Livro[] {
    return this.repository.listarTodos()
        .filter(livro => 
            livro.getCategoria().toLowerCase().includes(categoria.toLowerCase())
        );
}
👥 Estrutura de Desenvolvimento
🌿 Git Flow e Branches
text
main (produção)
├── parte-1-core         ✅ Concluída - Módulo fundamental
├── parte-2-negocio      ✅ Concluída - Regras de negócio  
└── parte-3-web          ✅ Concluída - Interface e API
📝 Convenções e Padrões
Commits Semânticos

bash
git commit -m "feat: implementa sistema de vendas com descontos progressivos"
git commit -m "fix: corrige validação de estoque na finalização de venda"
git commit -m "docs: adiciona documentação completa da API REST"
git commit -m "refactor: melhora arquitetura de repositories"
git commit -m "test: implementa testes para módulo de clientes"
Padrões de Código

TypeScript com tipagem estrita

Interfaces para contratos explícitos

Classes com responsabilidades únicas

Métodos pequenos e especializados

🚀 Deploy e Produção
Build para Produção
bash
# Compilar TypeScript
npm run build

# Executar em produção
npm start
Configuração de Ambiente
env
PORT=3000
NODE_ENV=production
Acesso em Produção
bash
# Acesse a aplicação
http://localhost:3000

# Ou configure o domínio desejado
http://seu-dominio.com:3000
🤝 Contribuição
Guidelines para Contribuidores
Siga as convenções estabelecidas

Mantenha a cobertura de testes

Documente novas funcionalidades

Use branches feature para desenvolvimento

Solicite code review antes do merge

Estrutura de Branches para Features
bash
# Desenvolvimento de novas funcionalidades
git checkout -b feature/nova-funcionalidade

# Correções de bugs
git checkout -b fix/correcao-especifica

# Melhorias de documentação
git checkout -b docs/melhoria-documentacao
📄 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes completos.

👨‍💻 Autor
David Marostica

GitHub: @davidMarostica

Projeto: Bookstore Management System

🙏 Agradecimentos
Professores e orientadores do curso de Análise e Desenvolvimento de Sistemas

Comunidade TypeScript por recursos e documentação

Stack Overflow e comunidades de desenvolvimento

Todos que contribuíram direta ou indiretamente

<div align="center">
Desenvolvido com 💻 e 🎯 para demonstração de excelência em engenharia de software

"Código não é apenas instruções para máquinas, é comunicação entre desenvolvedores"

⬆ Voltar ao topo

</div>

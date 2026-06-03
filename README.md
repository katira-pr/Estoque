# 📦 Estoque - Sistema de Controle de Inventário e Custos

Sistema web para gestão de estoques e custos em hotéis, com foco na previsão de demanda e redução de desperdício de alimentos e bebidas.

## 🎯 Objetivo

Diminuir custo e desperdício nas categorias A e B do controle de inventário, com ênfase na previsão precisa de consumo de café da manhã baseada na taxa de ocupação e perfil dos hóspedes.

## 🏗️ Arquitetura

```
Estoque/
├── frontend/          # React.js - Interface do usuário
├── backend/           # Node.js + Express - API REST
├── database/          # Scripts PostgreSQL
├── docs/              # Documentação
└── docker-compose.yml # Orquestração de containers
```

## 🛠️ Stack Tecnológico

### Backend
- **Node.js** + Express.js
- **PostgreSQL** - Banco de dados relacional
- **Sequelize** - ORM
- **JWT** - Autenticação
- **Joi** - Validação de dados
- **Dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **React.js** + React Router
- **Axios** - Cliente HTTP
- **Redux Toolkit** - Gerenciamento de estado
- **Material-UI** - Design system
- **Chart.js** - Gráficos e relatórios
- **Formik + Yup** - Formulários e validação

## 📋 Funcionalidades Principais

### 1. Gestão de Inventário
- ✅ Cadastro de produtos (alimentos, bebidas)
- ✅ Categorização (A, B, C)
- ✅ Controle de estoque em tempo real
- ✅ Alertas de limite mínimo/máximo

### 2. Controle de Custos
- ✅ Registro de compras
- ✅ Cálculo de custo unitário
- ✅ Análise de variação de preços
- ✅ Relatórios financeiros

### 3. Previsão de Demanda
- ✅ Integração com taxa de ocupação do hotel
- ✅ Perfil de hóspedes (perfil de consumo)
- ✅ Histórico de consumo
- ✅ Sugestões de quantidade ideal

### 4. Controle de Desperdício
- ✅ Registro de itens vencidos/desperdiçados
- ✅ Relatórios de perda
- ✅ Análise de impacto financeiro

### 5. Dashboard e Relatórios
- ✅ Dashboard executivo
- ✅ Gráficos de consumo
- ✅ Relatórios parametrizados
- ✅ Exportação de dados (PDF/Excel)

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 16+
- PostgreSQL 12+
- npm ou yarn
- Docker e Docker Compose (opcional)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/katira-pr/Estoque.git
cd Estoque
```

2. **Instale as dependências do backend**
```bash
cd backend
npm install
```

3. **Instale as dependências do frontend**
```bash
cd ../frontend
npm install
```

4. **Configure as variáveis de ambiente**
```bash
# Backend
cp backend/.env.example backend/.env
# Edite backend/.env com suas credenciais

# Frontend
cp frontend/.env.example frontend/.env
```

5. **Configure o banco de dados**
```bash
cd ../database
psql -U postgres -f init.sql
```

6. **Inicie o servidor backend**
```bash
cd ../backend
npm run dev
```

7. **Em outro terminal, inicie o frontend**
```bash
cd frontend
npm start
```

8. **Acesse a aplicação**
```
http://localhost:3000
```

### Com Docker Compose

```bash
docker-compose up -d
```

## 📁 Estrutura do Projeto

### Backend (`/backend`)
```
backend/
├── src/
│   ├── config/        # Configurações (DB, JWT, etc)
│   ├── controllers/    # Controladores da API
│   ├── models/        # Modelos Sequelize
│   ├── routes/        # Rotas da API
│   ├── middleware/    # Middlewares (autenticação, etc)
│   ├── services/      # Lógica de negócio
│   ├── validators/    # Validadores de entrada
│   └── utils/         # Utilitários
├── .env.example
├── .gitignore
├── server.js          # Ponto de entrada
└── package.json
```

### Frontend (`/frontend`)
```
frontend/
├── src/
│   ├── components/    # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── services/      # Chamadas à API
│   ├── store/         # Redux store
│   ├── styles/        # Estilos globais
│   ├── utils/         # Utilitários
│   ├── App.js
│   └── index.js
├── .env.example
├── .gitignore
└── package.json
```

## 🔐 Segurança

- Autenticação via JWT
- Hash de senhas com bcrypt
- Validação de entrada em todas as requisições
- CORS configurado
- Proteção contra SQL Injection (Sequelize ORM)

## 📊 Modelo de Dados

### Entidades Principais
- **Usuários** - Gestores de estoque
- **Produtos** - Itens de inventário
- **Categorias** - Classificação ABC
- **Estoque** - Registro de quantidade em tempo real
- **Compras** - Histórico de aquisições
- **Consumo** - Histórico de saída do estoque
- **Desperdício** - Registro de perdas
- **Hóspedes** - Perfil de consumo
- **Ocupação** - Taxa de ocupação do hotel

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 📧 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/katira-pr/Estoque/issues).

---

**Desenvolvido com ❤️ para reduzir desperdício e otimizar custos**

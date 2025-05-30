# nest-project-mba
Repositório para o projeto de MBA com NestJS

Gabriel Olimpio Ferreira Francisco - gabriel.francisco@aluno.faculdadeimpacta.com.br


API de Gerenciamento de Usuários
Uma API REST completa para gerenciamento de usuários desenvolvida com Node.js e NestJS, implementando operações CRUD com armazenamento em memória.

🚀 Funcionalidades
✅ Criar usuário - POST /users
✅ Listar todos os usuários - GET /users
✅ Buscar usuário por ID - GET /users/:id
✅ Atualizar usuário - PATCH /users/:id
✅ Deletar usuário - DELETE /users/:id
✅ Validação de dados com class-validator
✅ Validação de e-mail único
✅ Tratamento de erros personalizado
✅ Armazenamento em memória
📋 Modelo de Dados
Usuário
{
  id: string; // UUID gerado automaticamente
  nome: string; // Nome do usuário (min. 2 caracteres)
  email: string; // E-mail válido e único
  createdAt: Date; // Data de criação
  updatedAt: Date; // Data da última atualização
}
🛠️ Tecnologias Utilizadas
Node.js - Runtime JavaScript
NestJS - Framework backend TypeScript
TypeScript - Linguagem tipada
class-validator - Validação de dados
class-transformer - Transformação de dados
uuid - Geração de IDs únicos
📦 Instalação e Configuração
Pré-requisitos
Node.js 18+
npm ou yarn
Instalação
# Instalar dependências
npm install
🚀 Executando a Aplicação
# Desenvolvimento
npm run start

# Desenvolvimento com watch mode (recomendado)
npm run start:dev

# Produção
npm run start:prod
A API estará disponível em: http://localhost:3000

📖 Documentação da API
Endpoints Disponíveis
1. Criar Usuário
POST /users
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@exemplo.com"
}
Resposta (201 Created):

{
  "message": "Usuário criado com sucesso",
  "data": {
    "id": "uuid-gerado",
    "nome": "João Silva",
    "email": "joao@exemplo.com",
    "createdAt": "2025-05-29T10:30:00.000Z",
    "updatedAt": "2025-05-29T10:30:00.000Z"
  }
}
2. Listar Todos os Usuários
GET /users
Resposta (200 OK):

{
  "message": "Lista de usuários recuperada com sucesso",
  "data": [
    {
      "id": "uuid-1",
      "nome": "João Silva",
      "email": "joao@exemplo.com",
      "createdAt": "2025-05-29T10:30:00.000Z",
      "updatedAt": "2025-05-29T10:30:00.000Z"
    }
  ],
  "total": 1
}
3. Buscar Usuário por ID
GET /users/:id
Resposta (200 OK):

{
  "message": "Usuário encontrado com sucesso",
  "data": {
    "id": "uuid-1",
    "nome": "João Silva",
    "email": "joao@exemplo.com",
    "createdAt": "2025-05-29T10:30:00.000Z",
    "updatedAt": "2025-05-29T10:30:00.000Z"
  }
}
4. Atualizar Usuário
PATCH /users/:id
Content-Type: application/json

{
  "nome": "João Santos",
  "email": "joao.santos@exemplo.com"
}
Resposta (200 OK):

{
  "message": "Usuário atualizado com sucesso",
  "data": {
    "id": "uuid-1",
    "nome": "João Santos",
    "email": "joao.santos@exemplo.com",
    "createdAt": "2025-05-29T10:30:00.000Z",
    "updatedAt": "2025-05-29T10:35:00.000Z"
  }
}
5. Deletar Usuário
DELETE /users/:id
Resposta (204 No Content)

Códigos de Erro
400 Bad Request - Dados inválidos (validação falhou)
404 Not Found - Usuário não encontrado
409 Conflict - E-mail já cadastrado
🧪 Testes
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
🏗️ Estrutura do Projeto
src/
├── users/                    # Módulo de usuários
│   ├── dto/                 # Data Transfer Objects
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entities/            # Definições de entidades
│   │   └── user.entity.ts
│   ├── users.controller.ts  # Controlador REST
│   ├── users.service.ts     # Lógica de negócio
│   └── users.module.ts      # Configuração do módulo
├── app.module.ts            # Módulo principal
└── main.ts                  # Ponto de entrada
📝 Validações Implementadas
Nome: Obrigatório, mínimo 2 caracteres
E-mail: Obrigatório, formato válido, único no sistema
Campos extras: Rejeitados automaticamente
Tipos: Conversão automática quando possível
🔧 Funcionalidades Técnicas
✅ Validação global com class-validator
✅ Transformação automática de dados
✅ Tratamento consistente de erros
✅ CORS habilitado
✅ Logs informativos
✅ Tipagem completa com TypeScript
✅ Arquitetura modular (NestJS)
🎯 Exemplos de Uso com cURL
Criar usuário
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Maria Silva","email":"maria@exemplo.com"}'
Listar usuários
curl http://localhost:3000/users
Buscar usuário
curl http://localhost:3000/users/uuid-do-usuario
Atualizar usuário
curl -X PATCH http://localhost:3000/users/uuid-do-usuario \
  -H "Content-Type: application/json" \
  -d '{"nome":"Maria Santos"}'
Deletar usuário
curl -X DELETE http://localhost:3000/users/uuid-do-usuario

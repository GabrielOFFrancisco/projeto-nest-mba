nest-project-mba
Repositório para o projeto de MBA com NestJS

**Gabriel Olimpio Ferreira Francisco - gabriel.francisco@aluno.faculdadeimpacta.com.br**
<br>
**Gabriel Freire Fumes - gabriel.fumes@aluno.faculdadeimpacta.com.br**
<br>
**Camila Ribeiro de Jesus Oliveira - camila.jesus@aluno.faculdadeimpacta.com.br**
<br>
**Rayana Bispo de Souza - rayana.souza@aluno.faculdadeimpacta.com.br**
<br>
<br>
📌 API de Gerenciamento de Usuários
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

typescript
Copiar
Editar
{
  id: string;        // UUID gerado automaticamente
  nome: string;      // Nome do usuário (min. 2 caracteres)
  email: string;     // E-mail válido e único
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
bash
Copiar
Editar
# Instalar dependências
npm install
🚀 Executando a Aplicação
bash
Copiar
Editar
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

Exemplo de Requisição:

json
Copiar
Editar
{
  "nome": "João Silva",
  "email": "joao@exemplo.com"
}
Resposta (201 Created):

json
Copiar
Editar
{
  "message": "Usuário criado com sucesso",
  "data": {
    "id": "uuid-gerado",
    "nome": "João Silva",
    "email": "joao@exemplo.com"
  }
}
2. Listar Todos os Usuários
GET /users

Resposta (200 OK):

json
Copiar
Editar
{
  "message": "Lista de usuários recuperada com sucesso",
  "data": [
    {
      "id": "uuid-1",
      "nome": "João Silva",
      "email": "joao@exemplo.com"
    }
  ],
  "total": 1
}
3. Buscar Usuário por ID
GET /users/:id

Resposta (200 OK):

json
Copiar
Editar
{
  "message": "Usuário encontrado com sucesso",
  "data": {
    "id": "uuid-1",
    "nome": "João Silva",
    "email": "joao@exemplo.com"
  }
}
4. Atualizar Usuário
PATCH /users/:id
Content-Type: application/json

Exemplo de Requisição:

json
Copiar
Editar
{
  "nome": "João Santos",
  "email": "joao.santos@exemplo.com"
}
Resposta (200 OK):

json
Copiar
Editar
{
  "message": "Usuário atualizado com sucesso",
  "data": {
    "id": "uuid-1",
    "nome": "João Santos",
    "email": "joao.santos@exemplo.com"
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
bash
Copiar
Editar
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov

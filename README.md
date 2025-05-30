# API de Gerenciamento de Usuários

Uma API REST completa para gerenciamento de usuários desenvolvida com Node.js e NestJS, implementando operações CRUD com armazenamento em memória.

## 🚀 Funcionalidades

- ✅ **Criar usuário** - POST /users
- ✅ **Listar todos os usuários** - GET /users
- ✅ **Buscar usuário por ID** - GET /users/:id
- ✅ **Atualizar usuário** - PATCH /users/:id
- ✅ **Deletar usuário** - DELETE /users/:id
- ✅ **Validação de dados** com class-validator
- ✅ **Validação de e-mail único**
- ✅ **Tratamento de erros** personalizado
- ✅ **Armazenamento em memória**

## 📋 Modelo de Dados

### Usuário

```typescript
{
  id: string; // UUID gerado automaticamente
  nome: string; // Nome do usuário (min. 2 caracteres)
  email: string; // E-mail válido e único
  createdAt: Date; // Data de criação
  updatedAt: Date; // Data da última atualização
}
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **NestJS** - Framework backend TypeScript
- **TypeScript** - Linguagem tipada
- **class-validator** - Validação de dados
- **class-transformer** - Transformação de dados
- **uuid** - Geração de IDs únicos

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install
```

## 🚀 Executando a Aplicação

```bash
# Desenvolvimento
npm run start

# Desenvolvimento com watch mode (recomendado)
npm run start:dev

# Produção
npm run start:prod
```

A API estará disponível em: `http://localhost:3000`

## 📖 Documentação da API

### Endpoints Disponíveis

#### 1. Criar Usuário

```http
POST /users
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@exemplo.com"
}
```

**Resposta (201 Created):**

```json
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
```

#### 2. Listar Todos os Usuários

```http
GET /users
```

**Resposta (200 OK):**

```json
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
```

#### 3. Buscar Usuário por ID

```http
GET /users/:id
```

**Resposta (200 OK):**

```json
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
```

#### 4. Atualizar Usuário

```http
PATCH /users/:id
Content-Type: application/json

{
  "nome": "João Santos",
  "email": "joao.santos@exemplo.com"
}
```

**Resposta (200 OK):**

```json
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
```

#### 5. Deletar Usuário

```http
DELETE /users/:id
```

**Resposta (204 No Content)**

### Códigos de Erro

- **400 Bad Request** - Dados inválidos (validação falhou)
- **404 Not Found** - Usuário não encontrado
- **409 Conflict** - E-mail já cadastrado

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 🏗️ Estrutura do Projeto

```
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
```

## 📝 Validações Implementadas

- **Nome**: Obrigatório, mínimo 2 caracteres
- **E-mail**: Obrigatório, formato válido, único no sistema
- **Campos extras**: Rejeitados automaticamente
- **Tipos**: Conversão automática quando possível

## 🔧 Funcionalidades Técnicas

- ✅ Validação global com class-validator
- ✅ Transformação automática de dados
- ✅ Tratamento consistente de erros
- ✅ CORS habilitado
- ✅ Logs informativos
- ✅ Tipagem completa com TypeScript
- ✅ Arquitetura modular (NestJS)

## 🎯 Exemplos de Uso com cURL

### Criar usuário

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Maria Silva","email":"maria@exemplo.com"}'
```

### Listar usuários

```bash
curl http://localhost:3000/users
```

### Buscar usuário

```bash
curl http://localhost:3000/users/uuid-do-usuario
```

### Atualizar usuário

```bash
curl -X PATCH http://localhost:3000/users/uuid-do-usuario \
  -H "Content-Type: application/json" \
  -d '{"nome":"Maria Santos"}'
```

### Deletar usuário

```bash
curl -X DELETE http://localhost:3000/users/uuid-do-usuario
```

## 🚀 Deploy e Produção

Para deploy em produção, considere:

1. **Configurar variáveis de ambiente**
2. **Usar banco de dados persistente** (PostgreSQL, MongoDB, etc.)
3. **Implementar autenticação e autorização**
4. **Adicionar rate limiting**
5. **Configurar logging estruturado**
6. **Implementar healthcheck**

## 📄 Licença

Este projeto está sob a licença MIT.

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

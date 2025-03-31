# Delivery API

Delivery API é uma API desenvolvida com Node.js, Express e Prisma para gerenciar entregas. Os usuários podem se cadastrar, autenticar-se e criar pedidos de entrega. Cada entrega possui um status (`processing`, `shipped` ou `delivered`) e um histórico de logs. 

## Tecnologias Utilizadas
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Docker
- Bcrypt (para criptografia de senha)
- JWT (para autenticação)

## Como Executar o Projeto Localmente
Siga os passos abaixo para rodar a Delivery API na sua máquina:

### 1. Clonar o Repositório
```sh
git clone https://github.com/seu-usuario/delivery-api.git
cd delivery-api
```

### 2. Instalar as Dependências
```sh
npm install
```

### 3. Configurar o Banco de Dados com Docker
Para facilitar a execução do PostgreSQL, utilize o Docker:
```sh
docker run --name delivery-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=delivery -p 5432:5432 -d postgres
```
Isso criará um container chamado `delivery-db` com o PostgreSQL rodando na porta `5432`.

### 4. Configurar as Variáveis de Ambiente
Renomeie o arquivo `.env.example` para `.env` e configure a variável `DATABASE_URL` com:
```
DATABASE_URL="postgresql://admin:admin@localhost:5432/delivery?schema=public"
```

### 5. Executar as Migrações do Prisma
```sh
npx prisma migrate dev
```
Isso criará as tabelas no banco de dados.

### 6. Rodar a API
```sh
npm run dev
```
A API será executada em `http://localhost:3000` por padrão.

## Endpoints Principais

### Autenticação
- `POST /users` - Criar um novo usuário.
- `POST /login` - Autenticar e receber um token JWT.

### Entregas
- `POST /deliveries` - Criar uma nova entrega (Requer autenticação).
- `GET /deliveries` - Listar todas as entregas do usuário logado.
- `GET /deliveries/:id` - Obter detalhes de uma entrega.
- `PATCH /deliveries/:id` - Atualizar o status da entrega.

### Logs de Entrega
- `GET /deliveries/:id/logs` - Listar os logs de uma entrega.

---
Agora você pode testar a Delivery API localmente! 🚀


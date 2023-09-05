# Projeto de Upload de Arquivos

## Link da apresentação em video

https://www.loom.com/embed/25f6d277ff114fad984e526dd3f7922b

## Funcionalidades

- Fazer autenticação de usuário
- Upload de Arquivos, transcrevendo os dados para o banco de dados.

## Regras do negócio

- O usuário tem email único.
- O Arquivo enviado precisa ser em TXT

## Tecnologias

Back-End

- TypeScript
- NodeJs
- Express
- Sequelize
- Docker
- Mysql

Front-End

- TypeScript
- Next.js
- Tailwind
- React-Query
- Context Api

## Rotas

```javascript

Users
post("/api/signup") - Cadastro de novos usuários
post("/api/signin") - Login de usuários

Transactions
post("/api/upload") - Envio de arquivos.txt
get("/api/transactions") - Listagem das transações.



```

## Como instalar o Back-End

Instalar as dependências

```bash
$ cd .\sales_api\
$ yarn install
```

## Criar o arquivo .env

```
cp .env.example .env
```

## Docker

Executar o docker usando o `docker-compose`

```bash
$ docker-compose up --build -d
```

## URL

```
http://localhost:3333
```

---

## Como instalar o Front-End

```bash
$ cd .\web\
$ yarn install

```

## Criar o arquivo .env

```
cp .env.example .env.local
```

## Rodar a aplicação

```bash
$ yarn dev
```

## URL

```
http://localhost:3000
```

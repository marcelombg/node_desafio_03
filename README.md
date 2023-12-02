# Passo a passo do projeto

- Criar repositório no git
  - git init
  - gh repo create node_desafio_03

- Estrutura projeto node
  - Criar pasta do projeto
  - npm init -y
  - npm i typescript @types/node tsx tsup -D
  - npx tsc --init
  - Arquivo tsconfig.json trocar "target" para "es2020"
  - npm i fastify
  - criar arquivo app.ts na pasta src
  - criar arquivo server.ts na pasta src
  - alterar package.json:
      "scripts": {
        "dev": "tsx watch src/server.ts",
        "build":"tsup src --out-dir build",
        "start": "node build/server.js"
    }
  - criar arquivo .npmrc com o conteúdo save-exact=true
  - criar arquivo .env e .env.example
  - criar arquivo .gitignore
  - npm i dotenv
  - npm i zod
  - npm i eslint @rocketseat/eslint-config -D
  - criar arquivo .eslintrc.json e .eslintignore
  - alterar tsconfig.json:
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }

- Banco de Dados
  - npm i prisma -D
  - npx prisma init
  - npx prisma generate (após criar model de uma tabela)
  - npm i @prisma/client (depência de production)
  - subir container do Docker
  - npx prisma migrate dev (testar conexão e atualizar dados para o migrate)
  - npx prisma studio (abrir prisma no navegador)

- Docker:
  - podman run --name desafio_03-pg -e POSTGRESQL_USERNAME=admin -e POSTGRESQL_PASSWORD=admin -e POSTGRESQL_DATABASE=desafio03 -p 5432:5432 bitnami/postgresql:latest (cria imagem do postgre)
  - podman ps -a (listar imagens disponíveis)
  - podman ps (listar containers ativos)
  - podman start <nome ou ID do container> (iniciar o container)
  - podman stop <nome ou ID do container> (para o container)
  - podman rm <nome ou ID do container> (remove o container)
  - podman logs <nome ou ID do container> (remove o container)
  - criar compose.yml
  - podman machine start (iniciar serviço do podman)
  - podman-compose up (iniciar containers do compose com logs)
  - podman-compose up -d (iniciar containers do compose sem logs)
  - podman-compose down (parar containers do compose)

- Hash da senha e validação:
  - npm i bcryptjs (biblioteca para fazer hash)
  - npm i -D @types/bcryptjs

- Testes:
  - npm i vitest vite-tsconfig-paths -D (instalar o vitest e pacote de paths para que o vitest leia os paths do tsconfig.json)
  - criar arquivo vite.config.ts
  - criar scripts para o vitest no package.json
  - npm i @vitest/coverage-v8 -D
  - criar scripts para o vitest coverage no package.json
  - npm i -D @vitest/ui
  - criar scripts para o vitest ui no package.json
  - npm i dayjs (biblioteca para trabalhar com data)

- Token JWT
  - npm i @fastify/jwt

- Testes E2E
 - criar pasta com o nome vitest-environment-prisma
 - acessar a pasta e dar o comando npm init -y
 - no package.json da pasta vitest-environment-prisma, altere "main": "prisma-test-environment.js",
 - criar objeto test no arquivo vite.config.ts,
 - dentro da pasta vitest-environment-prisma dar o comando npm link,
 - dentro da pasta do projeto dar o comando npm link vitest-environment-prisma
 - npm i -D npm-run-all
 - no package.json da pasta do projeto, altere "test:create-prisma-environment": "npm link ./prisma/vitest-environment-prisma", "test:install-prisma-environment": "npm link vitest-environment-prisma", "pretest:e2e": "run-s test:create-prisma-environment test:install-prisma-environment"
 - npm i supertest -D
 - npm i @types/supertest -D

- Refresh Token JWT
  - npm i @fastify/cookie

# App

GymPass style app.

### Regras da aplicação
[OK] Deve ser possível cadastrar um pet
[OK] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
[OK] Deve ser possível filtrar pets por suas características
- Deve ser possível visualizar detalhes de um pet para adoção
- Deve ser possível se cadastrar como uma ONG
- Deve ser possível realizar login como uma ONG

### Regras de negócio
[OK] Para listar os pets, obrigatoriamente precisamos informar a cidade
- Uma ONG precisa ter um endereço e um número de WhatsApp
- Um pet deve estar ligado a uma ONG
- O usuário que quer adotar, entrará em contato com a ONG via WhatsApp
- Todos os filtros, além da cidade, são opcionais
- Para uma ONG acessar a aplicação como admin, ela precisa estar logada

##RNFs (Requisitos não-funcionais)




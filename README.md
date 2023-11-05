# Nome do Seu Projeto

API RESTful integrada com o banco de dados mongoDB com Node + Typescript utilizando SOLID, trata-se de um portal de notícias que realiza um CRUD. O projeto trabalha com rotas get, post, put e delete e com os métodos http(GET, POST, PUT e DELETE).

## Pré-requisitos

- [Node.js](https://nodejs.org/) - Versão v20.9.0 
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/piovesani/API-Restiful-Node-Typescript.git
Navegue até o diretório do projeto:

bash
Copy code
cd seu-projeto
Execute `npm install` para instalar todas as dependencias do projeto.

Execute `npm run compile` para compilar o projeto.

Execute `npm start` para iniciar o projeto.

Utilize uma API Client como o Insomnia para testar as seguintes rotas:

Método GET -> rota `http://localhost:3000/api/v1/news`
Método GET -> rota `http://localhost:3000/api/v1/news/:id`
Método POST -> rota `http://localhost:3000/api/v1/news`
Método PUT -> rota `http://localhost:3000/api/v1/news/:id`
Método DELETE -> rota `http://localhost:3000/api/v1/news/:id`
Para os métodos POST e PUT, utilize este modelo JSON no corpo da requisição:

json
Copy code
{
  "hat": "O verão 2023 vem com tudo",
  "title": "O verão 2023 promete em muitas partes do Brasil",
  "text": "O verão é uma das quatro estações do ano, caracterizada por ser a estação mais quente. Neste período, as temperaturas permanecem elevadas e os dias são mais longos do que os dias das outras estações. Geralmente, o verão é também o período do ano reservado às férias",
  "author": "Desconhecido",
  "img": "http://imagem.com.br/f_446243.jpg",
  "link": "https://.....",
  "active": true
}

Utilize o ID retornado dos GET para utilizar o PUT e DELETE.
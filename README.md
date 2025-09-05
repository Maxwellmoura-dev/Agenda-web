# 📌 Agenda Web

Este projeto é uma Agenda de Contatos que permite aos usuários criar uma conta, fazer login e gerenciar seus contatos pessoais de forma prática e segura. Ele foi desenvolvido utilizando Node.js, Express, MongoDB e EJS para a interface web.
<p align="center">
  <img src="https://github.com/user-attachments/assets/37cfa98c-7f9d-42db-9fc9-6ef3254be50e" width="300" />
  <img src="https://github.com/user-attachments/assets/1d9e2485-1c39-4c31-9026-c762bfc4953f" width="300" />
  <img src="https://github.com/user-attachments/assets/3ba2b88b-0361-4015-88dc-4339c7816085" width="300" />
</p>
Mas não se preocupe: aqui vou explicar passo a passo como você pode rodar no seu computador, mesmo que nunca tenha programado antes.



---

## 🚀 O que foi usado para criar

- **Node.js** → É como o "motor" que faz o sistema funcionar no computador.  
- **Express** → Ajuda a criar as páginas e organizar o funcionamento do site.  
- **EJS** → Permite misturar código e HTML para gerar páginas dinâmicas.  
- **MongoDB** → É onde os contatos ficam salvos (como se fosse o "caderno" da agenda).  
- **CSS** → Deixa as páginas bonitas (cores, tamanhos, estilos).  
- **Webpack** → Junta e organiza os arquivos do projeto para que rodem de forma mais rápida.

---

## 📂 O que tem dentro da pasta do projeto

- **server.js** → É o arquivo principal que liga tudo (como a chave de ignição de um carro).  
- **routes.js** → Onde ficam os caminhos das páginas (por exemplo: "quando clicar em X, abre Y").  
- **views/** → As telas do site (arquivos EJS, que viram páginas HTML).  
- **public/** → As coisas visuais (CSS, imagens, JavaScript que roda no navegador).  
- **models/** → Como os contatos são guardados no banco de dados (MongoDB).  

---

## ⚙️ Como rodar o projeto no seu computador

> ✨ Não se preocupe, é só seguir os passos abaixo. Mesmo sem entender nada de programação, você vai conseguir.

### 1️⃣ Instalar os programas necessários
- Baixe e instale o **Node.js** → [https://nodejs.org/](https://nodejs.org/)  
- Baixe e instale o **MongoDB** (ou crie uma conta no **MongoDB Atlas**, que é online) → [https://www.mongodb.com/](https://www.mongodb.com/)  

### 2️⃣ Baixar o projeto
⚠️ Pré-requisito: você precisa ter o Git instalado na sua máquina para usar esse comando.
Abra o terminal (Prompt de Comando ou PowerShell no Windows) e digite:

git clone https://github.com/Maxwellmoura-dev/Agenda-web.git
cd Agenda-web

### 3️⃣ Instalar as dependências

Digite no terminal:

npm install


Esse comando baixa todas as peças que o projeto precisa para funcionar.

### 4️⃣ Configurar o banco de dados

Você tem 2 opções aqui:

🔹 A) Localmente

Instale o MongoDB no seu computador: https://www.mongodb.com/try/download/community

Inicie o servidor local do MongoDB (geralmente na porta 27017 por padrão)

🔹 B) Usar MongoDB Atlas (recomendado)

Crie uma conta gratuita em: https://www.mongodb.com/cloud/atlas

Crie um cluster gratuito

Copie a connection string (ex: mongodb+srv://usuario:senha@cluster0.mongodb.net/nome-do-banco)


Crie um arquivo chamado .env na raiz do projeto com algo assim:

MONGO_URI=mongodb+srv://usuario:senha@cluster0.mongodb.net/agenda
PORT=3000


Substitua pelos dados reais do seu cluster ou servidor local.

### 5️⃣ Rodar o sistema

Agora, ligue o sistema com:

npm start


Se aparecer tudo certo, abra o navegador e vá até:

👉 http://localhost:3000

Pronto! 🎉 Sua agenda online já está funcionando no seu computador.

### 📖 Resumindo

1- Instale Node.js e MongoDB

2- Baixe o projeto

3- Rode o comando npm install

4- Configure a conexão com o MongoDB

5- Rode npm start

6- Abra no navegador http://localhost:3000

Agora você tem uma agenda web simples e funcional rodando direto no seu computador 🚀

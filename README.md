<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/ecommerce-store">
    <img src="\public\favicon\favicon.ico" alt="Logo" width="40" weight="40" />
  </a>

  <p align="center">
    Mini e-commerce feito em Next.js, Typescript, Zustand e TailwindCSS, foi criada uma homepage, página de categoria, produto e carrinho. Todos os dados foram pré-cadastrados em um painel administrador que criei com Next.js, Typescript, Prisma, Clerk, Cloudinary, Stripe e MongoDB e está disponível neste link: (https://bruno-carvalho-feitosa-store-admin-panel.vercel.app).
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

### Homepage
A homepage é totalmente responsiva, se adapta a qualquer resolução/tamanho de tela, possui animações de transição na galeria de produtos que foi feita com o plugin framer motion e a homepage contém basicamente diversos produtos que possuem call to actions para rápida pré-visalização do produto, redirecionamento para a página de produto para informação completa a respeito do produto de interesse ou a adição do produto diretamente ao carrinho.

https://github.com/BrunoCarvalhoFeitosa/ecommerce-store/assets/46093815/5d310709-4791-4452-aa03-e14443240996

### Categoria
A página de categoria é totalmente responsiva, logo ao topo foi criado um breadcrumb para identificação da página, bem como ações para retornar ao último link visitado ou à homepage, logo abaixo do breadcrumb foi criado um filtro que pode ser collapsado (aberto ou fechado), ao lado do filtro é possível mudar a disposição da visualização dos produtos, ou seja, o usuário pode definir se quer ver 4, 5 ou 6 produtos por "linha" e os produtos exibidos são totalmente dinâmicos, ao decorrer que o usuário define as opções de filtragem os produtos são separados e exibidos conforme o que foi pré-definido pelo usuário. Toda esta dinâmicidade se dá através do hook useSearchParams, onde é possível pegar os parâmetros da url e devolve-los a requição get que é feita.

https://github.com/BrunoCarvalhoFeitosa/ecommerce-store/assets/46093815/182f43e9-df11-4f81-91d9-95cbab73754b

### Produto
A página de produto também é totalmente responsiva, possui uma galeria de imagens com thumbnails, onde ao clicar na thumbnail prontamente a imagem é renderizada num tamanho maior e com melhor qualidade, as informações pertinentes ao produto são exibidas, o botão de compra adiciona este produto direamente ao carrinho e a página possui uma vitrine de sugestão de produtos que são da mesma categoria deste produto visualizado, ou seja, se usuário se interessou por uma jaqueta, serão sugeridas jaquetas, se o interesse foi por calças serão sugeridas calças.

https://github.com/BrunoCarvalhoFeitosa/ecommerce-store/assets/46093815/d6e3b9da-3f20-4e84-8a1b-1d67c22ee48f

### Carrinho
Através do zustand, foi possível armazenar o id dos produtos comprados pelo usuário em um estado, na página de carrinho este estado é recuperado e repassado para a api que faz um get e retorna as informações completas do mesmo, através destas informações, os preços são extraídos e então é possível exibir o total da compra do usuário, caso o usuário queira remover todos os produtos do carrinho é possível, existe uma função para isso e está localizada no botão "Remove all" ou caso queira remover um produto específico existe um botão com o ícone de lixeira. Esta página é integrada com o stripe, foi criado um webkook que basicamente "escuta" as ações de finalização da compra do usuário, os dados preenchidos são enviados à plataforma e com estes dados podemos criar um dashboard interativo para ter controle sobre o estoque, arrecadação, etc.

https://github.com/BrunoCarvalhoFeitosa/ecommerce-store/assets/46093815/14317ad7-6a5a-4325-8a56-8c8092b21749


### Feito com

* [Next.js](https://nextjs.org)
* [Typescript](https://www.typescriptlang.org)
* [Stripe](https://stripe.com/br)
* [TailwindCSS](https://tailwindcss.com)
* [Vercel](https://vercel.com)

### Hospedagem

A aplicação está em produção neste link: (https://bruno-carvalho-feitosa-nike-store.vercel.app).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/ecommerce-store.git), após o download será necessário abrir este projeto no seu editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando npm run dev ou yarn dev, após isso, a página será aberta em seu navegador.

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/ecommerce-store.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

<!-- LICENSE -->
## Licença

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)

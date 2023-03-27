<h1 align="center">Next.js Proxy CORS</h1>
<p align=center><i align="center">Servidor Proxy CORS baseado em Next.js para deploy via Vercel</i></p>

<br>

<div align="center">

<a href="https://vercel.com"><img src="https://img.shields.io/badge/vercel-%23000000.svg?style=plastic&logo=vercel&logoColor=white" height="22" alt="Vercel"/></a>
<a href="https://www.javascript.com"><img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E" height="22" alt="JavaScript"/></a>

<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white" height="22" alt="NodeJS"/></a>
<a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next-black?style=plastic&logo=next.js&logoColor=white" height="22" alt="NextJS"/></a>

<a href=""><img src="https://img.shields.io/badge/maintenance-as--is-yellow.svg?style=plastic" height="22" alt="Maintenance-as-is"/></a>
<a href=""><img src="https://img.shields.io/github/last-commit/dexdevlab/nextjs-proxy-cors?style=plastic" height="22" alt="LastCommit"></a>
<a href=""><img src="https://snyk.io/test/github/dexdevlab/nextjs-proxy-cors/badge.svg" height="22" alt="Snyk"/></a>

<a href=""><img src="https://img.shields.io/github/repo-size/dexdevlab/nextjs-proxy-cors?style=plastic" height="22" alt="RepoSize"/></a>
<a href=""><img src="https://img.shields.io/github/languages/code-size/dexdevlab/nextjs-proxy-cors?style=plastic" height="22" alt="CodeSize"/></a>
<a href=""><img src="https://img.shields.io/github/contributors/dexdevlab/nextjs-proxy-cors?style=plastic" height="22" alt="Contributors"></a>

<a href=""><img src="https://img.shields.io/github/forks/dexdevlab/nextjs-proxy-cors?style=plastic" height="22" alt="Fork"></a>
<a href=""><img src="https://img.shields.io/badge/version-0.0.14-140126?style=plastic" height="22" alt="Version"></a>
<a href="https://github.com/dexdevlab/nextjs-proxy-cors/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dexdevlab/nextjs-proxy-cors?&style=plastic" height="22" alt="License"></a>

<!-- || [Conteúdo](#section-conteudo) || [Características](#section-caracteristicas) || [Stack](#section-stack) || [Documentação](#section-documentacao) || [Instruções](#section-instrucoes) || -->

|| [Conteúdo](#section-conteudo) || [Stack](#section-stack) || [Instruções](#section-instrucoes) || [Variáveis de Ambiente](#section-vars) ||

<!-- || [Variáveis de Ambiente](#section-vars) || [Notas de versão](#section-changelog) || [Autores](#section-autores) || [Contato](#section-contato) || [Licença](#section-licenca) || -->

|| [Notas de versão](#section-changelog) || [Autores](#section-autores) || [Contato](#section-contato) || [Licença](#section-licenca) ||

</div>

<hr>

<a name="section-conteudo">

## Conteúdo

</a>

<br>

Este projeto pode ser utilizado para subir um servidor CORS que transmite os headers CORS (e quaisquer outros desejáveis) para a entrada e saída das requisições na forma de um middleware. Ele direciona todas as chamadas de rota de API (diretório /api) para fazerem rota com o Proxy, o qual suprime o caminho original e transfere o endereço de destino a ser acessado com os headers.

<hr>

<!-- <a name="section-caracteristicas">

## Características

</a>

<br>

-

<hr>  -->

<a name="section-stack">

## Stack

</a>

<br>

- **Linguagem Principal:** [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
<!-- - **Linguagens de Marcação e Estilo:** [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML), [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS), [SASS](https://sass-lang.com/documentation) -->
- **Framework Principal:** [Node.js](https://nodejs.org/en/docs/)
- **Framework estrutural:** [Next.js](https://nextjs.org/docs/getting-started)
<!-- - **Framework de design:** [Chakra UI](https://chakra-ui.com/docs/getting-started) -->
- **Gerenciador de Bibliotecas:** [Yarn](https://yarnpkg.com/getting-started)
- **Bibliotecas:** Para uma lista completa de bibliotecas e dependências nos mais variados escopos, conferir o arquivo [package.json](https://github.com/dexdevlab/nextjs-proxy-cors/blob/main/package.json).

<hr>

<!-- <a name="section-documentacao">

## Documentação

</a>

<br>

[Lorem](https://miro.com/app/board/uXjdfgsdgVPWCiaDo=/?share_link_id=713196550342) 

<hr>
 -->
<a name="section-instrucoes">

## Instruções

</a>

<br>

### Utilizando o repositório como projeto

Faça um git clone ou o download do repositório, da forma que preferir

```bash

git clone https://github.com/dexdevlab/nextjs-proxy-cors.git

```

<br>

### Testando a aplicação

1 - Execute `yarn dev` ou `npm run dev` do terminal dentro do diretório do projeto. A aplicação irá ser executada na porta 3000 como padrão.

2 - Para realizar o redirecionamento de um site, faça uma requisição `GET` no seguinte formato: `${server_address}:${server_port}/api?url=${destination_url}`. Por exemplo: `http://localhost:3000/api?url=https://http.cat/100`. Esta requisição devolverá o endereço com os HEADERS pertinentes ao CORS na entrada e na saída, como um bypass.

**NOTA: Não foram testados outros métodos de requisição HTTP por não haver necessidade no momento.**

<br>

### Instanciando no Vercel

Você pode inicializar sua própria instância do Servidor Nextjs CORS clicando neste botão:

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=NEXT_PUBLIC_RATE_LIMIT_REQUESTS,NEXT_PUBLIC_RATE_LIMIT_INTERVAL,NEXT_PUBLIC_RATE_LIMIT_USERS"><img src="https://vercel.com/button" height="30" alt="Deploy with Vercel"/></a>

<hr>

<a name="section-vars">

## Variáveis de Ambiente

</a>

<br>

Para usar a aplicação, crie um arquivo `.env` com as seguintes variáveis de ambiente:

| Variável      | Uso   |
|---------------|-------|
|`NEXT_PUBLIC_RATE_LIMIT_REQUESTS` | Quantidade específica de requisições que podem ser feitas em um determinado intervalo. | |
|`NEXT_PUBLIC_RATE_LIMIT_INTERVAL` | O intervalo em segundos em que a quantidade de requisições são redefinidas. Por exemplo, NEXT_PUBLIC_RATE_LIMIT_REQUESTS = 30 e NEXT_PUBLIC_RATE_LIMIT_INTERVAL = 60 significam 30 requisições a cada 60 segundos, no máximo.  | |
|`NEXT_PUBLIC_RATE_LIMIT_USERS` | A quantidade de usuários que podem fazer requisições por intervalo. Por exemplo, NEXT_PUBLIC_RATE_LIMIT_INTERVAL = 60 e NEXT_PUBLIC_RATE_LIMIT_USERS = 50 significam um máximo de 50 diferentes usuários requisitando a cada 60 segundos.  | |

<hr>

<a name="section-changelog">

## Notas de versão

</a>

<br>

### v0.0.14-230326

- Ajuste de deployment no Vercel
- Alteração na estrutura da documentação para compatibilidade com Vercel

### v0.0.13-230326

- Ajuste de deployment no Vercel

### v0.0.12-230326

- Implementação de Rate Limit
- Atualização da documentação
- Ajuste de rotas para documentação dinâmica

### v0.0.11-230325

- Teste com Middleware de Rate Limit

### v0.0.10-230325

- Atualização da Documentação
- Restruturação de pastas da aplicação
- Teste com Middleware de Rate Limit

### v0.0.9-230324

- Atualização da Documentação

### v0.0.8-230324

- Atualização da Documentação

### v0.0.7-230324

- Adição de dependências e testes de execução no Vercel

### v0.0.6-230324

- Adição de Next.js como dependência e mais testes de execução no Vercel

### v0.0.5-230324

- Refatoração e teste de execução

### v0.0.4-230324

- Ajuste para execução direta sem intermédio do Next.js
- Atualização da Documentação

### v0.0.3-230323

- Criação de variável de ambiente para definir schema HTTP
- Alteração de saída para erros no Servidor

### v0.0.2-230323

- Ajuste na rota CORS para receber o schema HTTP e manipular exceções

### v0.0.1-230323

- Commit inicial

<hr>

<a name="section-autores">

## Autores

</a>

<br>

<a href="https://github.com/dexdevlab/nextjs-proxy-cors/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dexdevlab/nextjs-proxy-cors" />
</a>

<hr>

<a name="section-contato">

## Contato

</a>

<br>

Se você gostou deste projeto, dê uma <a href="https://github.com/dexdevlab/nextjs-proxy-cors" data-icon="octicon-star" aria-label="Star dexdevlab/nextjs-proxy-cors on GitHub">estrela</a>. <br>
Para contato, envie um email a: <a href="mailto:dex.houshi@hotmail.com">dex.houshi@hotmail.com</a>

<hr>

<a name="section-licenca">

## Licença

</a>

Licenciado sob a [MIT License](https://github.com/dexdevlab/nextjs-proxy-cors/blob/main/LICENSE).

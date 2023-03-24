<h1 align="center">nextjs-proxy-cors</h1>
<p align=center><i align="center">Servidor Next.js de Proxy CORS, um fork do projeto de <a href="https://github.com/Rob--W/cors-anywhere">Rob--W</a>.</i></p>

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
<a href=""><img src="https://img.shields.io/badge/version-0.0.4-140126?style=plastic" height="22" alt="Version"></a>
<a href="https://github.com/dexdevlab/nextjs-proxy-cors/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dexdevlab/nextjs-proxy-cors?&style=plastic" height="22" alt="License"></a>

<!-- || [Conteúdo](#section-conteudo) || [Características](#section-caracteristicas) || [Stack](#section-stack) || [Documentação](#section-documentacao) || [Instruções](#section-instrucoes) || -->

|| [Conteúdo](#section-conteudo) || [Stack](#section-stack) || [Instruções](#section-instrucoes) ||

<!-- || [Variáveis de Ambiente](#section-vars) || [Notas de versão](#section-changelog) || [Autores](#section-autores) || [Contato](#section-contato) || [Licença](#section-licenca) || -->

|| [Notas de versão](#section-changelog) || [Autores](#section-autores) || [Contato](#section-contato) || [Licença](#section-licenca) ||

</div>

<hr>

<a name="section-conteudo">

## Conteúdo

</a>

<br>

Este repositório tem por objetivo comportar um fork para o projeto original do desenvolvedor [Rob--W](https://github.com/Rob--W/cors-anywhere). Este repositório funciona como um fork para ser executado com Vercel, usando Next.js como framework de aplicação e gerenciamento de rota. Também pode funcionar como um proxy web genérico (veja na seção 'Variáveis de Ambiente')

<hr>

<!-- <a name="section-caracteristicas">

## Características

</a>

<br>

- Lorem ipsum dolor sit amet;

<hr> -->

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

<a name="section-documentacao">

## Documentação

</a>

<br>

<!-- - [Lorem](https://miro.com/app/board/uXjdfgsdgVPWCiaDo=/?share_link_id=713196550342) -->

Documentação adicional pode ser encontrada [aqui](https://github.com/Rob--W/cors-anywhere/blob/master/README.md).

<hr>

<a name="section-instrucoes">

## Instruções

</a>

<br>

### Utilizando o repositório como projeto

</a>

1 - Faça um git clone ou o download do repositório, da forma que preferir

```bash

git clone https://github.com/dexdevlab/nextjs-proxy-cors.git

```

### Testando a aplicação

</a>

1 - Execute `yarn cors` ou `npm run cors` do terminal dentro do diretório do projeto. A aplicação irá ser executada na porta 8080 como padrão.

2 - Para realizar o redirecionamento de um site, faça uma requisição `GET` no seguinte formato: `${server_address}:${server_port}/${destination_url}`. Por exemplo: `http://localhost:8080/https://http.cat/100`. Esta requisição devolverá o endereço com os HEADERS pertinentes ao CORS na entrada e na saída, como um bypass.

**NOTA: Não foram testados outros métodos de requisição HTTP por não haver necessidade no momento.**

<hr>

<a name="section-vars">

### Variáveis de Ambiente

</a>

<br>

Para usar a aplicação, crie um arquivo `.env` com as seguintes variáveis de ambiente:

| Variável      | Uso   |
|---------------|-------|
|`NEXT_PUBLIC_CORS_HOST` | Endereço que será usado como host para execução do Servidor CORS. Deve estar incluído o schema e as barras duplas ('http://'). | |
|`NEXT_PUBLIC_CORS_PORT` | Porta de serviço do Servidor CORS. | |
|`NEXT_PUBLIC_CORS_WHITELIST` | Lista de endereços permitidos para requisitar dados do Servidor CORS. Caso esteja vazio, o Servidor CORS aceita requisições de qualquer endereço. Caso haja alguma url, bloqueará todos os tipos de requisição, exceto para os endereços aqui listados. | |
|`NEXT_PUBLIC_CORS_BLACKLIST` | Lista de endereços proibidos de requisitar dados do Servidor CORS. | |
|`NEXT_PUBLIC_CORS_RATELIMIT` | Rate Limit para reduzir a quantidade de acessos em um determinado escopo de tempo. Por exemplo, `NEXT_PUBLIC_CORS_RATELIMIT = '1 5'` permitirá apenas 1 requisição a cada 5 minutos. Outras formas de ajuste são permitidas. Verifique a [documentação do CORS Anywhere](https://github.com/Rob--W/cors-anywhere) para mais detalhes.  | |
|`NEXT_PUBLIC_CORS_USEASWEBPROXY` | Se definido como `true`, o Servidor CORS irá redirecionar requisições mesmo que não hajam headers na origem. Útil para testar requisições diretamente do browser. Se ausente, automaticamente assumirá como `false` | |

<hr>

<a name="section-changelog">

## Notas de versão

</a>

<br>

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

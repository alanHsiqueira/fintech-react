# Fintech React

Aplicação React + TypeScript para visualização de resumo financeiro e listagem de vendas.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router
- Recharts

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+ (recomendado)

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador:

```text
http://localhost:5173
```

## Scripts disponíveis

- `npm run dev`: inicia o projeto em modo de desenvolvimento
- `npm run build`: gera build de produção na pasta `dist`
- `npm run preview`: serve localmente o build gerado
- `npm run lint`: executa o lint
- `npm run deploy`: publica a pasta `dist` na branch `gh-pages`

## Deploy no GitHub Pages

Este projeto já está configurado para deploy com `gh-pages`.

### 1) Faça push da branch principal

Confirme que seu código está publicado no GitHub na branch principal (geralmente `main`).

### 2) Ajuste o caminho base se necessário

O arquivo de configuração do Vite está com:

```ts
base: '/fintech-react/'
```

Se o nome do repositório for diferente de `fintech-react`, altere esse valor para o nome correto.

Exemplo para repositório `meu-projeto`:

```ts
base: '/meu-projeto/'
```

### 3) Faça o deploy

```bash
npm run deploy
```

Esse comando executa:

1. Build do projeto
2. Publicação da pasta `dist` na branch `gh-pages`

### 4) Ative o GitHub Pages no repositório

No GitHub:

1. Abra **Settings**
2. Acesse **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha a branch **gh-pages** e a pasta **/(root)**
5. Salve e aguarde a publicação

## Observações

- O app usa `HashRouter` para evitar erro 404 em rotas ao atualizar a página no GitHub Pages.
- Se quiser voltar para `BrowserRouter`, será necessário configurar redirecionamento de rotas no ambiente de hospedagem.
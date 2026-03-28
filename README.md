# Fintech React

Aplicação de dashboard financeiro com resumo de vendas, gráfico por status e consulta de detalhes por venda, desenvolvida como projeto de prática com React, TypeScript e Vite.

## Deploy

[Acesse aqui](https://alanhsiqueira.github.io/fintech-react/)

## Funcionalidades

- Resumo financeiro por período:
	calcula automaticamente os totais de **Vendas**, **Recebido** e **Processando** com base nos dados da API.
- Filtro por intervalo de datas:
	permite selecionar data inicial e final para atualizar todas as métricas e listagens em tempo real.
- Atalhos de mês:
	botões para navegar rapidamente entre meses recentes e aplicar o intervalo completo de cada mês.
- Gráfico de desempenho diário:
	visualização em linhas com os valores agrupados por dia e separados por status (**pago**, **processando** e **falha**).
- Listagem de vendas:
	exibe ID, nome do cliente e preço formatado em BRL para cada venda do período selecionado.
- Página de detalhes da venda:
	rota dinâmica por ID com informações individuais (nome, preço e status).
- Estado de carregamento:
	mostra feedback visual enquanto os dados estão sendo buscados.
- Tratamento de erros de requisição:
	o hook de dados captura falhas HTTP e erros de rede para melhorar a confiabilidade da aplicação.
- Navegação SPA:
	navegação entre páginas de Resumo e Vendas sem recarregar a aplicação.

## Tecnologias

- React 
- TypeScript
- Vite
- React Router DOM
- Recharts
- Context API (gerenciamento de estado global de filtros e dados)
- CSS (estilização da interface)

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, abra `http://localhost:5173` no navegador.

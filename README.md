# Desafio Frontend - Nexus - Gerador de Conselhos

## Resumo de conteúdos

- [O Desafio](#o-desafio)
- [Requisitos e Bônus Executados](#requisitos-e-bonus-feitos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Itens a serem desenvolvidos](#itens-a-serem-desenvolvidos)
- [Materiais Utilizados](#materiais-utilizados)


## O Desafio

Solução para o desafio de frontend do projeto Nexus. O desafio consiste em construir um aplicativo gerador de conselhos aleatório utilizando a [API Advice Slip](https://api.adviceslip.com), seguindo o melhor possível os designs indicados na pasta `/design`. 
As informações de estilo (como paleta de cores e fontes) estão no arquivo arquivo `style-guide.md`. 
Na pasta `/images` se encontra os assets necessários para o desafio. Os assets já estão otimizados.

## Requisitos e Bônus Executados

- Responsividade para dispositivos móveis e desktop;
- Todos os elementos interativos na página devem possuir estado de hoover;
- Ao clicar no ícone de dado, um novo conselho deverá ser gerado;
- A aplicação deve ser escrita em Typescript;
- O código deve ser compartilhado conosco através de um repositório Git;
- Forneça um README com instruções de como rodar o projeto.


## Como rodar o projeto
Para que o projeto possa rodar, é necessário fazer os seguintes passos:

- Clone o projeto e acesse a pasta do mesmo.
  ```
  $ git clone https://github.com/PPassaro/nexus-desafio-frontend
  $ cd nexus-desafio-frontend
  ```

- Instalar as dependências
  ```
  $ npm install
  ```

- Iniciar o projeto
  ```
  $ npm start
  ```
 O app estará disponível no seu browser pelo endereço http://localhost:3000.


## Itens a serem desenvolvidos
- Desenvolver uma **nova** página, com uma ou mais funcionalidades adicionais:
  - Buscar por conselhos específicos, de acordo com o ID numérico.
    - Informar ao usuário quando nenhum conselho for encontrado.
  - Buscar por conselhos contendo termos específicos.
    - Informar ao usuário quando nenhum conselho for encontrado.
    - Exibir o total de conselhos encontrados.
  - Permitir a navegação entre os conselhos (exemplo: para o próximo, anterior).
- Adicione animações


## Materiais Utilizados

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Styled Components](https://styled-components.com/)
- [React com Typescript](https://www.alura.com.br/conteudo/react-modernizando-escrever-typescript?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=662261334153&hsa_src=g&hsa_tgt=aud-539280195084:dsa-810524869174&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiAxreqBhAxEiwAfGfndC-JKloixlzzlCYEGr-h4e43wZENCp21hRzPuguf3opPLGHkQIb-bxoCAv0QAvD_BwE)

- [Renderização](https://react.dev/reference/react-dom/client/createRoot)

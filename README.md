# Elo7 - Job Page

O seguinte projeto foi elaborado como proposto pelo [Desafio de Programação Elo7](https://gist.github.com/elo7-developer/33a0844a9ac6953dd3e5). O projeto consiste em uma landing page que consulta informações via API e expõe as vagas em aberto. O projeto pode ser consultado em produção neste [link](https://elo7-page.onrender.com/ 'https://elo7-page.onrender.com/').

## Tecnologias utilizadas e justificativas

|      Abrangência       | Utilizado  |
| :--------------------: | ---------- |
|       Linguagem        | Javascript |
|         Estilo         | SASS       |
|       Requisição       | Fetch      |
| _Framework (opcional)_ | React      |

O framework escolhido para o projeto foi o React.js, pois permite entregar aplicações rápidas, com alto desempenho e criar componentes reutilizáveis. Além disso, permite uma melhor organização do código e uma melhor escalabilidade.
Foi utilizado SASS para estilização pois oferece uma gama de funcionalidades a mais que o CSS e permite uma maior organização e manutenção do código.
A requisição foi feita através de fetch, por ser nativo e por ser proposto no desafio.

## Como Roda a Aplicação

### Requisitos

-   Node.js 16.16.0

### `yarn install`

No diretório da aplicação rode o seguinte comando acima para instalar as dependências

### `yarn dev`

E o comando acima para rodar a aplicação na URL http://127.0.0.1:5173/

## Algumas melhorias aplicadas

Foi elaborado um footer para o layout, e foram adicionados alguns textos referentes ao Elo7 :). Foi utilizado o render para auto deploy, assim as mudanças são refletidas no link de produção.

## Melhorias propostas

<ol>
<li> Proponho que seja adicionado IDs únicas para as informações consultadas na API para serem usadas como key.
<li> Outra sugestão seria adicionar a categoria das vagas consultadas na API.

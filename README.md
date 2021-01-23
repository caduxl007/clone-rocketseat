<h1 align="center">clone-rocketseat</h1>
<p align="center">Clone da página web da Rocketseat, desenvolvido com ReactJS, Styled-components e Typescript.</p>


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:  

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)

<h1>📱 Como usar? </h1>

### Pré-requisitos

Primeiramente, você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), e o instalador de pacotes [Yarn](https://yarnpkg.com/). 
E lógico é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/caduxl007/clone-rocketseat.git>

# Clone o repositório do backend
$ git clone <https://github.com/caduxl007/backend-clone-rocketseat.git>

# Após instalar o docker execute no terminal/cmd
$ docker run --name "nome-que-quiser" -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres

# Use qualquer gerenciar de banco de dados crie uma database no postgres:
$ nome da database: clone_rocketseat
$ port: 5434

# Acesse a pasta do projeto backend no terminal/cmd
$ cd backend-clone-rocketseat

Instale as dependências
$ yarn

# Execute o comando para instalar as tabelas
$ yarn typeorm migration:run

# Execute a aplicação
$ yarn dev:server

# Acesse a pasta do projeto frotend
$ cd clone-rocketseat

Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

## Prontinho você terá acesso a aplicação!!!
```

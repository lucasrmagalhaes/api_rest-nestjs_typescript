<h3 align="center">NestJS: criando uma API Rest com TypeScript</h3>

O Nest funciona praticamente com qualquer banco de dados SQL ou NoSQL. Existem inúmeras opções disponíveis, depende da sua preferência. De maneira geral, conectar o Nest à um banco de dados é simples, basta instalar e configurar o driver apropriado.

---

*Instalação do Nest.js*
```
npm install -g @nestjs/cli
```

*Verificar a versão*
```
nest -v
```

*Criação do projeto*
```
nest new livros-api
```

*Iniciar o projeto*
```
npm run start
```

```
localhost:3000
```

---

*Inicializar o servidor do Nest de outra maneira, servidor sempre atualizando*
```
npm run start:dev
```

---

![Rotas](https://github.com/lucasrmagalhaes/api_rest-nestjs_typescript/blob/main/assets/img/rotas.png)

![Status Code](https://github.com/lucasrmagalhaes/api_rest-nestjs_typescript/blob/main/assets/img/status_code.png)

---

Injeção de dependência é um importante padrão de projeto que ajuda a manter um baixo nível de acoplamento entre classes. Nesta solução, as dependências de uma classe não são definidas programaticamente, mas sim pelo framework ou pela linguagem utilizada.

![Com Injeção de Dependência](https://github.com/lucasrmagalhaes/api_rest-nestjs_typescript/blob/main/assets/img/com_injecao_de_dependencia.png)

![Sem Injeção de Dependência](https://github.com/lucasrmagalhaes/api_rest-nestjs_typescript/blob/main/assets/img/sem_injecao_de_dependencia.png)

---

*Criando o banco de dados MySQL*
```
SHOW DATABASES;
```

```
CREATE DATABASE livraria;
```

```
USE livraria;
SHOW TABLES;
```

---

[Sequelize Integration](https://docs.nestjs.com/techniques/database#sequelize-integration)

```
npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
```

```
npm install --save-dev @types/sequelize
```

```
mysql -u root -p --port 3306
```

```
USE livraria;
DESC livros;
```

---

 O TypeORM é um dos pacotes mais maduros disponíveis para TypeScript. Como ele é escrito em TypeScript é nativamente integrado ao Nest. É uma boa alternativa ao Sequelize.

 ![typeorm exemplo](https://github.com/lucasrmagalhaes/api_rest-nestjs_typescript/blob/main/assets/img/typeorm_exemplo.png)

É possível usar bibliotecas que permitem escrever código SQL no projeto ou usar ferramentas ORM como o Sequelize e TypeORM.

 ---

 [techniques/configuration](https://docs.nestjs.com/techniques/configuration)

```
npm i --save @nestjs/config
```

 ---
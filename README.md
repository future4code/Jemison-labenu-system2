# Jemison-labenu-system2

Projeto feito no Bootcamp da Labenu, que representa o básico do sistema que é usado para organizar alunos, turmas e docentes.

Ele possui ao menos 3 entidades importantes que existem no código como **Classes**

**`Turma`**

Toda turma é composta pelas seguintes características:

**`id`**: identificador único gerado pela própria aplicação

**`nome`**: nome da turma

**`docentes`**: lista de ids de docentes dessa turma

- essas ids devem existir na tabela de docentes

**`estudantes`**: lista de ids de estudantes dessa turma

- essas ids devem existir na tabela de estudantes

**`modulo`**: módulo atual da turma


**`Estudante`**

Representa estudantes da instituição. Estudantes com cadastro novo começam sem alocação em nenhuma turma.

**`id`**: identificador único gerado pela própria aplicação

**`nome`**: nome da pessoa

**`email`**: email da pessoa

**`data_nasc`**: data de nascimento no formato DD/MM/AAAA

exemplo: `21/03/1999`

**`turma_id`**: id da turma da pessoa

- esse id deve existir na *tabela de turmas*

**`hobbies`**: uma lista de hobbies relacionados à pessoa (passatempos)



**`Docente`**

Representa docentes da instituição. Docentes com cadastro novo começam sem alocação em nenhuma turma.

**`id`**: identificador único gerado pela própria aplicação

**`nome`**`: nome da pessoa

**`email`**`: email da pessoa

**`data_nasc`**`: data de nascimento no formato DD/MM/AAAA

**`turma_id`**: id da turma que essa pessoa é responsável

- esse id deve existir na *tabela de turmas*

**`especialidades`**: uma lista de especialidades relacionadas à pessoa


**`Tecnologias`**

→ Node.js
→ Typescript
→ Express
→ Knex
→ MySQL
→ Dotenv
→ Cors
→ Ts-node-dev
→ Knex



**`Como rodar o projeto`**

→ Clone o repositório
→ Instale as dependências com `npm install` ou `yarn`
→ Execute `npm run start` para rodar a aplicação ou `yarn start`
→ Execute `npm run dev` para rodar a aplicação em modo de desenvolvimento ou `yarn dev`


**`Endpoints funcionando`**

→ Buscar estudantes através do nome
→ Buscar todas as pessoas docentes
→ Buscar todas os estudantes
→ Buscar docentes pelo nome

**`Endpoints em desenvolvimento`**
→ Criar turma - Ainda em desenvolvimento
→ Mudar turma de módulo - Ainda em desenvolvimento
→ Criar estudante - Ainda em desenvolvimento
→ Mudar estudante de turma - Ainda em desenvolvimento
→ Mudar docente de turma - Ainda em desenvolvimento
→ Exibir todas as pessoas (estudantes e docentes) que estão em uma mesma turma - Ainda em desenvolvimento
→ Exibir estudantes que possuam o mesmo hobby - Ainda em desenvolvimento
→ Exibir todas as pessoas docentes que sejam especialistas em POO - Ainda em desenvolvimento
→ Exibir todas as pessoas de um mesmo signo (docentes e estudantes) - Ainda em desenvolvimento
→ Buscar turmas ativas - Ainda em desenvolvimento

**`Documentação`**

→ https://documenter.getpostman.com/view/22370646/2s8ZDU4Pc7

**`Link do render`**

→ https://labenu-system-y21m.onrender.com


**`Pessoas Desenvolvedoras`**

→ [Douglas Werner](https://github.com/DouglasWerner)

→ [Daniel Souza](https://github.com/DanielSiilva)

→ [Matheus Queiroz](https://github.com/matheusqueirozds)


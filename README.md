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

#Imagens das tabelas criadas

-> Esquema completo

![image](https://user-images.githubusercontent.com/97309506/213597127-6d7767a8-3ae7-4520-9f80-f8aaf9accedb.png)

-> Tabela Turmas

![image](https://user-images.githubusercontent.com/97309506/213870336-bc0e234c-005e-471f-a6da-f0a9110f0efb.png)

-> Tabela Estudantes

![image](https://user-images.githubusercontent.com/97309506/213870397-9bbac4d5-df3b-49e6-a2c5-88498e66ce81.png)

-> Tabela Hobbies

![image](https://user-images.githubusercontent.com/97309506/213870470-38da6dbe-bc2d-43c5-b456-c64ec1770a1b.png)

-> Tabela Estudante_Hobbies 

![image](https://user-images.githubusercontent.com/97309506/213870517-3766ae77-9521-4080-8a09-340bb13638d1.png)

-> Tabela Docentes

![image](https://user-images.githubusercontent.com/97309506/213870792-a5cadba0-cb4b-49d4-b66b-3a85c27818ff.png)

-> Tabela Especialidades

![image](https://user-images.githubusercontent.com/97309506/213870850-7bc1f1b3-5c5f-42bc-8d94-c51eff7c3f65.png)

-> Tabela Docente_Especialidades

![image](https://user-images.githubusercontent.com/97309506/213870894-705881a4-f68a-4f26-8806-f1f55193b70f.png)

-> Tabela Docentes_Estudantes_Turmas

![image](https://user-images.githubusercontent.com/97309506/213870922-a0d224eb-fd15-4417-8f5b-de02bd609e7f.png)






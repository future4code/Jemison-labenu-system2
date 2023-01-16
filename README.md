# Jemison-labenu-system2

Projeto feito no Bootcamp da Labenu, que representa o básico do sistema que é usado para organizar alunos, turmas e docentes.

Ele deve possuir ao menos 3 entidades importantes que devem existir no código como **Classes**

**`Turma`**

Toda turma é composta pelas seguintes características:

**`id`**: identificador único gerado pela própria aplicação

`**nome**`: nome da turma

`**docentes**`: lista de ids de docentes dessa turma

- essas ids devem existir na tabela de docentes

`**estudantes**`: lista de ids de estudantes dessa turma

- essas ids devem existir na tabela de estudantes

**`modulo`**: módulo atual da turma

- pode assumir um valor entre 1 a 6 nas turmas ativas, ou `**0**`, indicando que as aulas dessa turma ainda não começaram
- deve iniciar como **`0`**

**`Estudante`**

Representa estudantes da nossa instituição. Cada estudante deve possuir uma, e somente uma turma por vez. Estudantes com cadastro novo começam sem alocação em nenhuma turma.

Deve possuir:

**`id`**: identificador único gerado pela própria aplicação

`**nome**`: nome da pessoa

`**email**`: email da pessoa

`**data_nasc**`: data de nascimento no formato DD/MM/AAAA

exemplo: `21/03/1999`

**`turma_id`**: id da turma da pessoa

- esse id deve existir na *tabela de turmas*

**`hobbies`**: uma lista de hobbies relacionados à pessoa (passatempos)

- esses hobbies devem existir na *tabela de hobbies*
    - caso não exista, deve ser adicionado à *tabela de hobbies* automaticamente
- exemplo:
    - ["assistir séries de tv", "jogar videogames", "passear de bike"]

**`Docente`**

Representa docentes da nossa instituição.  Cada docente deve possuir uma, e somente uma turma por vez. Docentes com cadastro novo começam sem alocação em nenhuma turma.

Deve possuir:

**`id`**: identificador único gerado pela própria aplicação

`**nome**`: nome da pessoa

`**email**`: email da pessoa

`**data_nasc**`: data de nascimento no formato DD/MM/AAAA

exemplo: "21/03/1999"

**`turma_id`**: id da turma que essa pessoa é responsável

- esse id deve existir na *tabela de turmas*

`**especialidades**`: uma lista de especialidades relacionadas à pessoa

- essas especialidades devem existir na *tabela de especialidades*
- deve iniciar com pelo menos uma das especialidades pré-definidas
- existem 5 especialidades fixas:
    - JS
    - CSS
    - React
    - Typescript
    - POO (Programação Orientada a Objetos)

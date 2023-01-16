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

**`Funcionalidades`**

→ Buscar turmas ativas;
→ Buscar estudantes através do nome;
→ Buscar todas as pessoas docentes;
→ Buscar todas os estudantes;
→ Buscar docentes pelo nome;

**`Funcionalidades a se fazer`**
→ Criar turma;
→ Mudar turma de módulo;
→ Criar estudante;
→ Mudar estudante de turma;
→ Mudar docente de turma;
→ Exibir todas as pessoas (estudantes e docentes) que estão em uma mesma turma;
Esta funcionalidade deve utilizar o **polimorfismo** para trazer ao mesmo tempo estudantes e discentes de uma mesma turma;
→ Exibir estudantes que possuam o mesmo hobby;
→ Exibir todas as pessoas docentes que sejam especialistas em POO
→ Exibir todas as pessoas de um mesmo signo (docentes e estudantes)



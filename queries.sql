create table Turmas (
	id int auto_increment primary key not null,
    nome varchar(255) not null,
    modulo varchar(255) not null default 0
);

create table Estudantes (
	id int auto_increment primary key not null,
    nome varchar(255) not null,
    email varchar(255) not null unique,
    date_nasc varchar(10) not null,
    turma_id int,
    foreign key (turma_id) references Turmas(id)
);

create table Hobbies (
	id int auto_increment primary key not null,
    nome varchar(255) not null unique
);

create table Estudante_Hobbie (
	id int auto_increment primary key not null,
    estudante_id int,
    hobby_id int,
    foreign key (estudante_id) references Estudantes(id),
    foreign key (hobby_id) references Hobbies(id)
);

create table Docentes (
	id int auto_increment primary key not null,
    nome varchar(255) not null,
    email varchar(255) not null unique,
    date_nasc varchar(10) not null,
    turma_id int,
    foreign key (turma_id) references Turmas(id)
);

create table Especialidades (
	id int auto_increment primary key not null,
    nome varchar(255) not null unique
);
 
create table Docente_Especialidade (
	id int auto_increment primary key not null,
    docente_id int,
    especialidade_id int,
    foreign key (docente_id) references Docentes(id),
    foreign key (especialidade_id) references Especialidades(id)
);

create table Docentes_Estudantes_Turmas (
	id int auto_increment primary key not null,
    docente_id int,
    estudante_id int,
    turma_id int,
    foreign key (docente_id) references Docentes(id),
    foreign key (estudante_id) references Estudantes(id),
    foreign key (turma_id) references Turmas(id)
);

CREATE DATABASE LibraTechDB

USE  LibraTechDB
--Tabela Libraria
CREATE TABLE Libraria(
IDLibrari int primary key not null,
Emri varchar(50) null,
Rruga varchar(50) null,
Qyteti varchar(50) null,
);

--Tabela Stafi
CREATE TABLE Stafi(
IDStafi int primary key,
Emri varchar(30) not null,
Mbiemri varchar(40) not null,
Adresa varchar(40),
Gjinia char(1) not null check(Gjinia = 'F' or Gjinia = 'M'),
IDLibrari int foreign key references Libraria 
);


 CREATE TABLE [Stafi] (
     [IDStafi] int NOT NULL IDENTITY,
     [Emri] nvarchar(max) NOT NULL,
     [Mbiemri] nvarchar(max) NOT NULL,
     [ZipCode] int NOT NULL,
     [Gjinia] nvarchar(1) NOT NULL,
     [Pervoja] nvarchar(max) NOT NULL,
     [IDLibrari] int NULL,
     CONSTRAINT [PK_Stafi] PRIMARY KEY ([IDStafi])
 );

 select * from stafi;
--Tabela StafiTeknik
/*
CREATE TABLE STeknik(
StafiID int primary key,
Stafi_ID int not null  foreign key references Stafi,

);
--Tabela Depo
CREATE TABLE Depo(
IDDepo int primary key,
Viti int,
Pershkrimi varchar(60),
Sasia int not null,
LibrariaID int foreign  key references Libraria
);*/


--Tabela StafiDergues
CREATE TABLE SDergues(
StafiID int primary key not null,
Stafi_ID int not null  foreign key references Stafi,
Bonus int null,
Nr_Pakove int not null,
);


--Tabela Klienti
CREATE TABLE Klienti(
    ID int primary key identity(1,1),
    Emri varchar(30),
    Mbiemri varchar(30),
    Email varchar(50) unique not null,
    Password varchar(100)
);
--
select * from Klienti;



--Tabela Porosia
CREATE TABLE Porosia(
NrPorosia int primary key not null,
Emri varchar(30),
Totali decimal(5,2),
Klienti_ID int foreign key references Klienti
);

--Tabela SDergues/Porosia
CREATE TABLE SDergues_Porosia(
IDStafi int not null,
IDPorosia int not null,
constraint PK_SDP primary key (IDStafi,IDPorosia),
foreign key (IDStafi) references SDergues(StafiID),
foreign key (IDPorosia) references Porosia(NrPorosia)
);
drop table Libraria;

--Tabela Telefoni
CREATE TABLE Telefoni (
    KlientiID int FOREIGN KEY REFERENCES Klienti(ID) ON DELETE CASCADE,
    PRIMARY KEY (KlientiID,Nr_Tel),
	Nr_Tel int NOT NULL
);

drop table Telefoni;
--Tabela Dergon
CREATE TABLE Dergon(
KlientiID int not null,
IDPorosia int not null,
IDStafi int not null,
constraint PK_Dergon primary key (KlientiID,IDPorosia,IDStafi),
foreign key (KlientiID) references Klienti(ID),
foreign key (IDPorosia) references Porosia(NrPorosia),
foreign key (IDStafi) references SDergues(StafiID),
Koha datetime
);

--Tabela Libri
CREATE TABLE Libri(
ISBN int primary key not null,
Titulli varchar(30) not null,
Autori varchar(30) not null,
VitiPublikimit int,
Cmimi decimal(4,2),
Sasia int,
IDLibraria int foreign key references Libraria,
IDDepo int foreign key references Depo,
NrPorosise int foreign key references Porosia
);

--Tabela Kategoria
CREATE TABLE Kategoria(
IDKategoria int primary key identity(1,1),
Emri varchar(30),
Sasia int not null
);

--Tabela Libri_Kategoria
CREATE TABLE Libri_Kategoria(
IDLibri int not null,
IDKategoria int not null,
constraint PK_LK primary key (IDLibri,IDKategoria),
foreign key (IDLibri) references Libri(ISBN),
foreign key (IDKategoria) references Kategoria(IDKategoria),
Klienti_ID int foreign key references Klienti
);

--Tabela GradaShkollimit
CREATE TABLE GradaShkollimit(
StafiID int not null,
gradaShkollimit varchar(40) not null,
constraint PK_Gsh primary key (StafiID,gradaShkollimit),
StafiID_fk int foreign key references STeknik(StafiID)
);


--Pjesa e insertit
ALTER TABLE Libraria
ADD CONSTRAINT Unique_Libraria_Rresht UNIQUE (IDLibrari);

INSERT INTO Libraria (IDLibrari, Emri, Rruga, Qyteti)
VALUES (1, 'BookStore', 'Rruga 12-Qeshori', 'Ferizaj');

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Albana', 'Krasniqi', 1005, 'F', 'Marketing', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Ermal', 'Dervishi', 1012, 'M', 'Financë', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Flaka', 'Peci', 1003, 'F', 'Logjistikë', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Ilir', 'Qosja', 1008, 'M', 'Administrim', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Rita', 'Kadriu', 1010, 'F', 'IT', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Valon', 'Sylejmani', 1004, 'M', 'Marketing', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Xhensila', 'Shala', 1001, 'F', 'Financë', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Yllza', 'Gashi', 1011, 'F', 'Logjistikë', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Zamir', 'Berisha', 1007, 'M', 'Administrim', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Shkëlqim', 'Rrahmani', 1006, 'M', 'IT', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Altina', 'Abazi', 1006, 'F', 'IT', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Arben', 'Ajvazi', 1007, 'M', 'Marketing', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Avni', 'Ismajli', 1006, 'M', 'Administrim', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Bekim', 'Azizi', 1011, 'M', 'IT', 1);

INSERT INTO Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
VALUES ('Genta', 'Deliu', 1010, 'F', 'Marketing', 1);

INSERT INTO SDergues (StafiID, Stafi_ID, Bonus, Nr_Pakove) 
VALUES (11, 1, 100,10);

INSERT INTO SDergues (StafiID, Stafi_ID, Bonus, Nr_Pakove) 
VALUES (12, 2, 150, 7);

INSERT INTO SDergues (StafiID, Stafi_ID, Bonus, Nr_Pakove) 
VALUES (13, 3, 200, 8);

INSERT INTO SDergues (StafiID, Stafi_ID, Bonus, Nr_Pakove) 
VALUES (14, 4, 120, 4);

INSERT INTO SDergues (StafiID, Stafi_ID, Bonus, Nr_Pakove) 
VALUES (15, 5, 180, 9);


INSERT INTO STeknik (StafiID, Stafi_ID, Menaxheri) VALUES
(1, 1, 1),
(2, 2, Null),
(3, 3, Null),
(4, 4, Null),
(5, 5, Null),
(6, 6, Null),
(7, 7, NULL),
(8, 8, Null),
(9, 9, NULL),
(10, 10, Null);


INSERT INTO Depo(IDDepo, Viti, Pershkrimi,Sasia)
VALUES (1, 2023, 'DepoA',500);

INSERT INTO Depo(IDDepo, Viti, Pershkrimi,Sasia)
VALUES (2, 2023, 'DepoB',750);


INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Anisa', 'Hoxha', '1985-09-20', 'anisa.hoxha@example.com', 'Ferizaj', 'Rruga e Kavajës', 1002, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Artan', 'Krasniqi', '1992-04-10', 'artan.krasniqi@example.com', 'Prishtina', 'Bulevardi Bill Klinton', 1003, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Elvana', 'Xhaka', '1988-12-03', 'elvana.xhaka@example.com', 'Tirana', 'Rruga Taulantia', 2001, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Ardian', 'Gjoka', '1995-07-18', 'ardian.gjoka@example.com', 'Shkodra', 'Rruga Kole Idromeno', 3004, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Adelina', 'Kola', '1993-02-28', 'adelina.kola@example.com', 'Vlorë', 'Rruga e Plazhit', 4005, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Ilir', 'Krasniqi', '1990-11-11', 'ilir.krasniqi@example.com', 'Gjakova', 'Rruga Adem Jashari', 5006, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Flori', 'Rama', '1987-06-25', 'flori.rama@example.com', 'Gjilan', 'Rruga e Kombit', 6007, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Nora', 'Ibrahimi', '1991-03-17', 'nora.ibrahimi@example.com', 'Kukës', 'Rruga Hasan Prishtina', 7008, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Besmir', 'Deda', '1986-08-08', 'besmir.deda@example.com', 'Elbasan', 'Rruga Skënderbeu', 8009, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Era', 'Krasniqi', '1994-01-30', 'era.krasniqi@example.com', 'Peje', 'Bulevardi Ilirida', 9010, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Gentian', 'Xhema', '1989-10-05', 'gentian.xhema@example.com', 'Shkupi', 'Rruga e Dibres', 1011, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Eni', 'Mustafa', '1997-05-22', 'eni.mustafa@example.com', 'Prizren', 'Rruga Kryesore', 1112, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Teuta', 'Krasniqi', '1996-12-14', 'teuta.krasniqi@example.com', 'Peja', 'Rruga Rexhep Luci', 1213, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Agron', 'Gjokaj', '1998-07-09', 'agron.gjokaj@example.com', 'Prishtina', 'Rruga Ali Pashë Tepelena', 1314, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Albana', 'Shala', '1990-04-02', 'albana.shala@example.com', 'Gjilan', 'Rruga Kryesore', 1415, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Roland', 'Krasniqi', '1986-11-27', 'roland.krasniqi@example.com', 'Ferizaj', 'Bulevardi Gjergj Kastriot', 1007,1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Edona', 'Berisha', '1993-09-08', 'edona.berisha@example.com', 'Prishtina', 'Rruga e Dardanëve', 1516, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Erion', 'Gjini', '1997-02-18', 'erion.gjini@example.com', 'Tirana', 'Rruga e Elbasanit', 1617, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Arta', 'Krasniqi', '1995-06-30', 'arta.krasniqi@example.com', 'Gjakova', 'Rruga e Fshatit', 1718, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Vlera', 'Rexha', '1992-12-19', 'vlera.rexha@example.com', 'Shkodra', 'Rruga e Pavarësisë', 1819, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Blenda', 'Abazi', '2003-10-28', 'blenda.abazi@example.com', 'Ferizaj', 'Rruga e Trimave', 1007, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Dea', 'Ajvazi', '2004-10-28', 'dea.ajvazi@example.com', 'Ferizaj', '12-Qeshori', 1007, 1);

INSERT INTO Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
VALUES ('Belita', 'Ajvazi', '2004-10-28', 'belita.ajvazi@example.com', 'Ferizaj', '12-Qeshori', 1007, 1);

select *
from Klienti

--Inserimi Porosive
INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (1, 'Porosi1', 25.50, 1);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (2, 'Porosi2', 45.75, 3);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (3, 'Porosi3', 30.00, 5);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (4, 'Porosi4', 15.80, 7);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (5, 'Porosi5', 50.25, 9);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (6, 'Porosi6', 22.30, 11);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (7, 'Porosi7', 35.90, 13);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (8, 'Porosi8', 19.99, 15);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (9, 'Porosi9', 27.75, 17);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (10, 'Porosi10', 38.60, 19);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (11, 'Porosi11', 42.00, 5);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (12, 'Porosi12', 29.70, 4);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (13, 'Porosi13', 18.25, 6);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (14, 'Porosi14', 31.50, 8);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (15, 'Porosi15', 55.80, 10);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (16, 'Porosi16', 20.00, 12);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (17, 'Porosi17', 28.75, 14);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (18, 'Porosi18', 33.20, 16);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (19, 'Porosi19', 45.60, 18);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (20, 'Porosi20', 22.50, 20);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (21, 'Porosi21', 48.90, 1);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (22, 'Porosi22', 16.75, 3);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (23, 'Porosi23', 29.30, 5);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (24, 'Porosi24', 38.20, 7);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (25, 'Porosi25', 55.00, 9);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (26, 'Porosi26', 24.90, 11);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (27, 'Porosi27', 18.45, 13);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (28, 'Porosi28', 37.60, 15);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (29, 'Porosi29', 23.70, 17);

INSERT INTO Porosia (NrPorosia, Emri, Totali, Klienti_ID)
VALUES (30, 'Porosi30', 40.25, 19);


--Insertet SDergues_Porosia
INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (11, 1);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (12, 2);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (13, 3);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (14, 4);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (15, 5);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (12, 6);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (12, 7);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (13, 8);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (14, 9);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (15, 10);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (11, 11);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (12, 12);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (13, 13);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (14, 14);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (15, 15);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (11, 16);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (12, 17);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (13, 18);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (14, 19);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (15, 20);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (11, 21);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (12, 22);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (13, 23);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (14, 24);

INSERT INTO SDergues_Porosia (IDStafi, IDPorosia)
VALUES (15, 25);

--Insertimi i NrTel

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (1, 044558961);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (2, 044369852);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (3, 045325587);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (4, 044125887);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (5, 045325585);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (6, 045325586);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (7, 045395587);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (8, 044395587);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (9, 045326287);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (10, 044444796);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (11, 044258485);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (12, 044685947);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (13, 045698520);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (14, 044775869);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (15, 045855225);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (16, 044321156);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (17, 044785412);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (18, 044859656);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (19, 045326985);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (20, 045871236);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (21, 044449836);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (22, 044298495);

INSERT INTO Telefoni (KlientiID, Nr_Tel)
VALUES (24, 044298495);


--Insertimi i Dergon
INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (1, 1, 11, '2023-01-01 08:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (2, 2, 12, '2023-01-02 09:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (3, 3, 13, '2023-01-03 10:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (4, 4, 14, '2023-01-04 11:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (5, 5, 15, '2023-01-05 12:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (6, 6, 11, '2023-01-06 13:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (7, 7, 12, '2023-01-07 14:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (8, 8, 13, '2023-01-08 15:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (9, 9, 14, '2023-01-09 16:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (10, 10, 11, '2023-01-10 17:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (11, 11, 11, '2023-01-11 18:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (12, 12, 12, '2023-01-12 19:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (13, 13, 13, '2023-01-13 20:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (14, 14, 14, '2023-01-14 21:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (15, 15, 15, '2023-01-15 22:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (16, 16, 11, '2023-01-16 23:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (17, 17, 12, '2023-01-17 00:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (18, 18, 13, '2023-01-18 01:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (19, 19, 14, '2023-01-19 02:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (20, 20, 15, '2023-01-20 03:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (1, 21, 11, '2023-01-21 04:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (2, 22, 12, '2023-01-22 05:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (3, 23, 13, '2023-01-23 06:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (4, 24, 14, '2023-01-24 07:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (5, 25, 15, '2023-01-25 08:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (6, 26, 11, '2023-01-26 09:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (7, 27, 12, '2023-01-27 10:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (8, 28, 13, '2023-01-28 10:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (9, 29, 14, '2023-01-29 12:00:00');

INSERT INTO Dergon (KlientiID, IDPorosia, IDStafi, Koha)
VALUES (10, 30, 15, '2023-01-30 13:00:00');

--Insertimi i Librave
INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (1, 'Përralla nga e kaluara', 'Ernest Koliqi', 1928, 50.00,20, 1, 2, 1);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2365, 'Kur Qeni Vjen Nga Fusha', 'Dritëro Agolli', 1967, 50.00,30, 1, 1, 2);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (1853, 'Kronikë në gur', 'Ismail Kadare', 1971, 55.00, 40,1, 1, 3);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi, Sasia,IDLibraria, IDDepo, NrPorosise) 
VALUES (9789, 'Prilli i thyer', 'Ismail Kadare', 1976, 60.00,22, 1, 2, 4);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (9856, 'Shqipëria njëzet vjet më pas', 'Ismail Kadare', 1991, 45.00, 35,1, 1, 5);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2584, 'Gjenerali i ushtrisë së vdekur', 'Ismail Kadare', 1963, 50.00, 32,1, 1, 6);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (3654, 'Kështjella', 'Ismail Kadare', 1970, 65.00,46, 1, 2, 8);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi, Sasia,IDLibraria, IDDepo, NrPorosise) 
VALUES (3698, 'Vjersha', 'Naim Frashëri', 1886, 40.00,42, 1, 1, 9);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2541, 'Bagëti e Bujqësia', 'Naim Frashëri', 1897, 75.00,71, 1, 2, 10);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (1478, 'Lulet e verës', 'Naim Frashëri', 1886, 38.00, 68,1, 2, 11);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2563, 'Krimi dhe dënimi', 'Fjodor Dostojevski', 1866, 45.00,50, 1, 1, 12);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi, Sasia,IDLibraria, IDDepo, NrPorosise) 
VALUES (9851, 'Idioti', 'Fjodor Dostojevski', 1869, 50.00,53, 1, 2, 13);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (3658, 'Vargjet e lira', 'Migjeni', 1936, 35.00,85, 1, 1, 14);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi, Sasia,IDLibraria, IDDepo, NrPorosise) 
VALUES (3652, 'Lulet e verës', 'Migjeni', 1936, 40.00,62, 1, 2, 15);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (3640, 'Emblema e dikurshme', 'Migjeni', 1936, 38.00,47, 1, 2, 16);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi, Sasia,IDLibraria, IDDepo, NrPorosise) 
VALUES (2586, 'Këngë për të huajt', 'Migjeni', 1936, 45.00,42, 1, 1, 17);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi, Sasia,IDLibraria, IDDepo, NrPorosise) 
VALUES (3052, 'Shpërthimi', 'Migjeni', 1936, 42.00, 53,1, 2, 18);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2589, 'Lahuta e Malcis', 'Gjergj Fishta', 1937, 55.00,75, 1, 1, 19);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (1475, 'Perëndia e ëndërrës sime', 'Gjergj Fishta', 1944, 60.00,62, 1, 2, 20);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2506, 'Gomari i Babatasit', 'Gjergj Fishta', 1927, 50.00,70, 1, 2, 21);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (3602, 'Zogu i Zi', 'Gjergj Fishta', 1934, 65.00,42, 1, 1, 22);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (1078, 'Hyjnore dhe shejtan', 'Gjergj Fishta', 1920, 58.00,45, 1, 2, 23);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2012, 'Fletore e Skënderbeut', 'Faik Konica', 1919, 45.00,30, 1, 1, 24);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2015, 'Vepra letrare 1', 'Faik Konica', 1925, 50.00,17, 1, 2, 25);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (1452, 'Plagë të bardha', 'Faik Konica', 1902, 38.00,25, 1, 2, 26);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (8050, 'Gjaku i arbrit', 'Faik Konica', 1900, 55.00,50, 1, 1, 27);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2030, 'Autobiografia', 'Faik Konica', 1922, 48.00,28, 1, 2, 7);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (2730, 'Lumturia', 'Faik Konica', 1952, 48.00,10, 1, 2, 7);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (1897, 'Kur bie muzgu', 'Fadil Abazi', 2016, 25.00,10, 1, 2, null);

INSERT INTO Libri (ISBN, Titulli, Autori, VitiPublikimit, Cmimi,Sasia, IDLibraria, IDDepo, NrPorosise) 
VALUES (3678, 'Novelat e Veriut', 'Migjeni', 1980, 15.00,10, 1, 2, null);

--Insertimi i Kategorise
INSERT INTO Kategoria (Emri, Sasia) VALUES ('Romane', 300);
INSERT INTO Kategoria (Emri, Sasia) VALUES ('Poezi', 250);
INSERT INTO Kategoria (Emri, Sasia) VALUES ('Dramë', 100);
INSERT INTO Kategoria (Emri, Sasia) VALUES ('Histori', 300);
INSERT INTO Kategoria (Emri, Sasia) VALUES ('AutoBiografi', 160);
INSERT INTO Kategoria (Emri, Sasia) VALUES ('Filozofi', 90);
INSERT INTO Kategoria (Emri, Sasia) VALUES ('Perralla', 90);


--Insertimi i Librit-Kategorise
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (1, 7);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2365, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (1853, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (9789, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (9856, 4);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2584, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3654, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3698, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2541, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (1478, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2563, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (9851, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3658, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3652, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3640, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2586, 3);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3052, 6);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2589, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (1475, 6);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2506, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3602, 5);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (3602, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (1078, 6);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2012, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (1452, 1);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2015, 2);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (8050, 4);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2030, 5);
INSERT INTO Libri_Kategoria (IDLibri, IDKategoria) VALUES (2730, 6);

INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (1, 'Master');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (2, 'Shkolle e Mesme');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (3, 'Bachelor');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (4, 'Bachelor');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (5, 'Shkolle E Mesme ');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (6, 'Bachelor');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (7, 'Master');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (8, 'Master');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (9, 'Shkolle E Mesme');
INSERT INTO GradaShkollimit (StafiID, gradaShkollimit) VALUES (10, 'Bachelor');


--UPDATE
UPDATE Libri 
SET Cmimi = 20.00
Where ISBN=2015

UPDATE Libri
SET Sasia = 48
Where ISBN = 8050

UPDATE Klienti
SET Email = 'rama.flori@example.com'
where ID=7

UPDATE Klienti
SET Qyteti = 'Ferizaj'
where ID=7

UPDATE Klienti
SET ZipCode =70000
where ID=7

UPDATE Klienti
SET Rruga = 'Sejdi Sejdiu'
where ID=7

UPDATE Telefoni
SET Nr_Tel = 044987563
where IDKlienti=5

UPDATE Telefoni
SET Nr_Tel = 049365218
where IDKlienti=10

UPDATE Kategoria 
SET Sasia=10
WHERE IDKategoria=1

UPDATE Kategoria 
SET Sasia=32
WHERE IDKategoria=6

UPDATE Libri
SET Sasia = 72
Where ISBN = 3652

UPDATE Stafi
SET Emri = 'Blerona'
Where IDStafi = 3

UPDATE Stafi
SET Mbiemri = 'Hoxha'
Where IDStafi = 3

UPDATE SDergues
SET Bonus = 100
Where StafiID = 12

UPDATE SDergues
SET Nr_Pakove = 10
Where StafiID = 13

UPDATE STeknik
SET Menaxheri=1
WHERE StafiID=2

UPDATE Libri 
SET Cmimi = 50.00
Where ISBN=1475

UPDATE SDergues
SET Nr_Pakove = 6
Where StafiID = 11

UPDATE Depo
SET Sasia = 600
Where IDDepo = 1

UPDATE Depo
SET Sasia = 700
Where IDDepo = 2


--Delete
Delete
from SDergues_Porosia
where IDPorosia = 2

Delete 
from Dergon 
where IDPorosia=29

Delete 
from Dergon 
where IDPorosia=28

Delete
from Dergon
where IDPorosia=30

Delete 
from Porosia 
where NrPorosia=29

Delete 
from Porosia 
where NrPorosia=28

Delete 
from STeknik
where StafiID=2

Delete
from SDergues_Porosia
where IDPorosia = 20

Delete 
from Dergon 
where IDPorosia=26

Delete 
from Telefoni
where Nr_Tel = 044987563


Delete 
from Telefoni 
where IDKlienti=21

--Pjesa e trete


     ---8 Query te thjeshta vetem me nje relacion---


--1.Te shfaqen vetem klientet femra
select s.Emri,s.Mbiemri,s.Gjinia
from Stafi s
where Gjinia='F';

--2.Te shfaqen klientet nga qyteti i Ferizaji
select k.ID,k.Emri,k.Mbiemri,k.Qyteti
from Klienti k
where k.Qyteti='Ferizaj';

--3.Selecto te gjithe klientet permbajne shkronjen E
select *
from Klienti k
where k.Emri like '%E%';

--4.Te shfaqen librat me cmimi me te madh se 50.00
select l.ISBN,l.Titulli,l.Sasia,l.Cmimi
from Libri l
where l.Cmimi>50.00
order by [cmimi]asc;

--5.Te shfaqen punetoret e stafit qe jane pjese e marketingut dhe IT dhe kane ZipCode 1010
select *
from Stafi s
where s.Pervoja in('Marketing','IT') and s.ZipCode=1010;

--6.Te shfaqen librat me sasi mes 10 deri 50 dhe i takojne Depo1
select l.Titulli,l.Sasia,l.Cmimi,l.IDDepo
from Libri l
where l.Sasia between 10 and 50 and l.IDDepo=1

--7.Te shfaqet autori,sasia e librit me titull "Bagëti e Bujqësia"
select l.Titulli,l.Autori,l.Sasia
from Libri l
where l.Titulli='Bagëti e Bujqësia';

--8.Te njehsohet mesatarja e cmimit te librave
select avg(l.Cmimi) as 'Mesatarja'
from Libri l




      ---8 Query te thjeshta -> Te realizohen ne minimum dy relacione  e me teper---

--1.Shfaqe menaxherin e stafit teknik
select ss.Emri,ss.Mbiemri,s.Menaxheri
from STeknik s,Stafi ss
where s.Stafi_ID=ss.IDStafi and s.Menaxheri=1

--2.Te shfaqen klientet qe kane porositur dhe jane nga Prishtina
select k.Emri,k.Mbiemri,k.Email,k.Qyteti,p.Emri
from Klienti k,Porosia p
where k.ID=p.Klienti_ID and k.Qyteti='Prishtina';

--3.Te shfaqen numri i porosive te bera nga secili Klient
select k.Emri,k.Mbiemri,p.Klienti_ID,count(*)'Nr_Porosive'
from Klienti k, Porosia p
where k.ID=p.Klienti_ID
group by k.Emri,k.Mbiemri,p.Klienti_ID

--4.Te shfaqen klientet qe kane bere me shume se nje porosi
select k.Emri,k.Mbiemri, p.Klienti_ID,count(*)[shuma_e_porosive]
from Klienti k, Porosia p,Kategoria kk,Libri l
where k.id=p.Klienti_ID and kk.IDKategoria=l.ISBN
group by k.Emri,k.Mbiemri, p.Klienti_ID
having count(l.Sasia)>1
order by [shuma_e_porosive] desc;

--5.Te shfaqni mosha e klienteve qe kane porositur librin "Lulet e verës"
select k.Emri,l.Titulli,(DATEDIFF(YY, k.Datelindja,GETDATE())) as Mosha
from Klienti k, Porosia p,Libri l
where k.id=p.Klienti_ID and p.NrPorosia=l.NrPorosise and l.Titulli='Lulet e verës';


--6.Te listohet klienti me numer telefoni qe fillon me '045'
select *
from Klienti k,Telefoni t
where t.KlientiID=k.ID and t.Nr_Tel like ('45%')
order by k.Emri,k.Mbiemri 


--7.Selekto klientet me id 8 dhe 16 se qfare porosi kane bere
select k.Emri,k.Mbiemri,l.Titulli,p.Totali
from Klienti k,Porosia p,Libri l
where k.ID=p.Klienti_ID and p.NrPorosia=l.NrPorosise and (k.ID=16 or k.ID=8)

--8.Te numerohen porosit nga klientja Anisa
select k.Emri,count(*)as 'shuma_e_porosive'
from Klienti k,Porosia p
where k.ID=p.Klienti_ID and k.Emri='Anisa'
group by k.Emri
having count(*)>0;


         ---Te krijoni min. 8 Query te avancuara  te realizuara ne minimum dy relacione (tabela) e me teper---

--1.Te selektohen klientet te cilet kane pranuar porosit ne daten 2023-01-24

select k.Emri, k.Mbiemri,p.Emri as 'Porosia',d.Koha
from Klienti k inner join Porosia p
on k.ID=p.NrPorosia inner join SDergues_Porosia dp
on dp.IDPorosia=p.Klienti_ID inner join Dergon d
on d.KlientiID=k.ID
where d.Koha='2023-01-27 10:00:00'

 --2.Selekto librat te cilet nuk jane porositur asnjhere
 select l.Titulli,l.Autori,l.VitiPublikimit, l.Cmimi
 from Libri l left join Porosia p
 on l.NrPorosise=p.NrPorosia
 where p.Emri is null
 order by l.VitiPublikimit


 --3.Selekto numrin e telefonit te klientit emri i te cilit fillon me shkronjen E
 select k.Emri,k.Mbiemri, t.Nr_Tel
 from Klienti k inner join Telefoni t
 on k.ID=t.KlientiID
 where k.Emri like 'E%'
 order by k.Mbiemri

 --4.Listo klientet që kane porositur te cileve iu mbaron emri me shkronjen A
select k.Emri,k.Mbiemri,p.Totali
from Porosia p FULL JOIN Klienti k
on p.Klienti_ID=k.ID
where k.Emri like '%A'


--5.Listo titujt e librave qe kane porositur klienetet
 select k.Emri as 'Klienti',Titulli,l.Autori,l.VitiPublikimit, l.Cmimi
 from Libri l right join Porosia p
 on l.NrPorosise=p.NrPorosia inner join Klienti k
 on k.ID=p.Klienti_ID
 where l.Titulli is not null
 order by l.Cmimi asc


--6.Rendit graden e shkollimit te stafit qe jane femra
select s.Emri,s.Mbiemri,s.Gjinia,g.gradaShkollimit
from Stafi s inner join STeknik st
on s.IDStafi=st.Stafi_ID inner join GradaShkollimit g
on g.StafiID=st.StafiID
where s.Gjinia='F'
order by s.Emri asc

--7.Selekto punetoret me pervoj 'Marketing' dhe qe kane bonus me te lart se 50  deri 200 euro
select s.Emri, s.Mbiemri, sd.Bonus,s.Pervoja
from Stafi s inner join SDergues sd
on s.IDStafi=sd.StafiID
where s.Pervoja='Marketing' and (sd.Bonus between 50 and 200)

--8.Selekto numrin e telefonit te klienteve te cilet kane moshen me te madhe se 25
select k.Emri,k.Mbiemri, t.Nr_Tel,(DATEDIFF(YY, k.Datelindja,GETDATE())) as 'mosha'
from Klienti k inner join Telefoni t
on k.ID=t.KlientiID
where (DATEDIFF(YY, k.Datelindja,GETDATE()))>25
order by mosha asc


              -----Te krijoni min. 8 subquery te thjeshta-----

--1.Selekto të gjitha të dhënat për puntoret me ZipCode 1006
select s.Emri,s.Mbiemri, s.ZipCode
from Stafi S ,Libraria l
Where s.IDLibrari=l.IDLibrari  and s.ZipCode  in (select s.ZipCode
from Stafi s
where s.ZipCode like '1006')

--2.Selekto klientin qe e ka bere porosin me totalin me te larte
select k.Emri,k.Mbiemri,p.Totali
from Klienti k,Porosia p
where k.ID=p.Klienti_ID and p.Totali=(select max(p.Totali)
									  from Porosia p)

--3.Shfaqe numrin e telefonit te klientit dhe qytetin që i përket ZipCode '1007' .
select distinct k.Emri , k.ZipCode, t.Nr_Tel
From Klienti k , Telefoni t
where k.ID = t.KlientiID and  k.ZipCode in (select k.ZipCode
											from  Klienti k
											where k.ZipCode=1007)


--4.Listoni librat e porositura nga klientja Adelina
select k.Emri, k.Mbiemri,l.Titulli
from Libri l inner join Porosia p on p.NrPorosia=l.NrPorosise
inner join Klienti k on k.ID=p.Klienti_ID
where k.ID=(select kk.ID
			from Klienti kk
			where kk.Emri='Adelina')

--5.Shfaqe te gjitha te dhenat per klientin me ID 2  
select *
from  Klienti k , Telefoni t
where k.ID = t.KlientiID and t.KlientiID = (select t.KlientiID
											from  Telefoni t
											where t.KlientiID=2)

--6.Te listohen librat qe jane romane
select l.Titulli,l.Sasia,k.Emri as 'Kategoria'
from Libri l inner join Libri_Kategoria lk
on l.ISBN=lk.IDLibri inner join Kategoria k
on k.IDKategoria=lk.IDKategoria
where lk.IDKategoria in (select k.IDKategoria
                         from Kategoria k
where k.Emri='Romane')

 --7.Selekto me '1' punetoret e stafit dergues ndersa '0' punetoret e stafit teknik
select s.Emri,s.Mbiemri,s.Gjinia,(select count(*)
from SDergues sd
where s.IDStafi=sd.StafiID)as 'Punetoret'
from Stafi s


--8.Selekto totalin me te ulet te porosise.
select *
from Porosia p
where p.Totali=(select min(pp.Totali)
                from Porosia pp
)

--9.Shfaqeni klientat qe kane porositur libra
create view libratEPorositur as(
select l.Titulli, l.Autori, l.VitiPublikimit, l.Cmimi, l.Sasia,l.NrPorosise
from Libri l right join Porosia p
on l.NrPorosise = p.NrPorosia
where l.Titulli is not null)

select  k.Emri, k.Mbiemri,l.Titulli
from Klienti k inner join Porosia p 
on k.ID = p.Klienti_ID inner join libratEPorositur l
on p.NrPorosia =l.NrPorosise;

--10.Shfaqeni klientet qe kane bere me me se shumti porosi.
with numriPorosivePerKlient as (
    select k.ID as KlientiID, k.Emri as EmriKlienti, count(p.NrPorosia) as NumriPorosive
    from Klienti k left join Porosia p 
	on k.ID = p.Klienti_ID
	group by k.ID,k.Emri
)
select k.KlientiID,k.EmriKlienti,k.NumriPorosive
from numriPorosivePerKlient k
where k.NumriPorosive = (select max(NumriPorosive) 
                        from numriPorosivePerKlient);




               ---Te krijoni min. 8 subquery te avancuara-----

--1.Selekto klientin i cili ka porositur libra dhe ka numer telefoni 45325586.
select k.Emri,k.Mbiemri,k.Qyteti,(select t.Nr_Tel
                                  from Telefoni t
                                  where k.ID=t.KlientiID) as 'Telefoni'
from Klienti k inner join Porosia p
on k.ID=p.Klienti_ID
where k.ID=(select t.KlientiID
            from Telefoni t
            where t.Nr_Tel='45325586')



--2.Të gjenden te gjitha librat e porositura qe kane totalin me te vogel se mesatarja e tyre dhe kane sasi me shume se 10.
select l.ISBN,l.Titulli,p.Totali,sum(l.Sasia) as Sasia
from Libri l inner join Porosia p
on p.NrPorosia=l.NrPorosise
where l.NrPorosise in (select p.NrPorosia
                       from Porosia p
                       where p.Totali <any(select avg(p.Totali)
                                           from Porosia p))
group by l.ISBN,l.Titulli,p.Totali
having sum(l.Sasia)>10



--3.Selekto puntorin ne Stafin Teknik qe i fillon ID me 7
select s.Emri,s.Mbiemri,st.StafiID
from Stafi s inner join STeknik st
on s.IDStafi=st.StafiID where exists (select st.StafiID
                                       from Stafi s
                                       where s.IDStafi=st.StafiID
                                       and st.StafiID=7)


--4.Listo klientet qe kane porositur me shume se nje here dhe datat e tyre te pranimin te porosise
select k.ID, k.Emri, k.Mbiemri, d.Koha, t.Nr_Tel
from Klienti k inner join Dergon d
on k.ID = d.KlientiID inner join Telefoni t
on k.ID = t.KlientiID
where d.Koha is not null
and d.KlientiID in (select d2.KlientiID
                    from Dergon d2
                    where d2.KlientiID = k.ID
                    and d2.Koha is not null
                    group by d2.KlientiID
                    having count(*) > 1)

--5.Selekto klientin qe ka porositur librin 'Autobiografia'
select  k.Emri ,k.Email ,k.Qyteti, p.Totali
from Klienti k inner join Porosia p
on p.Klienti_ID = k.ID where exists (select l.Titulli
                                     from  Libri l
                                     where l.NrPorosise = p.NrPorosia
                                     and l.Titulli like 'Autobiografia')



--6.Te listohen klientet te cilet e kane marre porosin me vleren me te madhe
select k.Emri,k.Mbiemri,k.Qyteti,(select max(p.Totali)
                                   from Porosia p) as 'Totali'
from Klienti k
where k.ID  in (select k.ID
                from Porosia p inner join Klienti k
                on p.Klienti_ID=k.ID
                where p.Totali = (select max(Totali)
                                  from Porosia))


--7.Te shfaqen librat sipas sasise mesatare te kategorive
select *
from Libri l,(select l.Titulli,sum(k.Sasia)/count(k.IDKategoria)as Mesatarja
              from Libri l inner join Libri_Kategoria lk
              on lk.IDLibri=l.ISBN inner join Kategoria k
              on k.IDKategoria=lk.IDKategoria
              group by l.Titulli)  as Rezultati
 where l.Titulli = Rezultati.Titulli
 order by Mesatarja desc

--8.Selektoni minimun se sa numra ka nje klient
select min(Tabela.Llogarite)
from (select k.Emri, count(*) as 'LLogarite'
from Klienti k inner join Telefoni t
on k.ID = t.KlientiID
group by k.Emri) as Tabela




   -----Te krijoni min. 8 subquery te avancuara algjebres relacionale-----



 --1.Gjeni klientet që kane bere porosi dhe stafin dergues qe i ka procesuar ato porosi.
select k.Emri, k.Mbiemri
from Klienti k inner join Porosia p 
on k.ID = p.Klienti_ID

union

select s.Emri, s.Mbiemri
from Stafi s inner join SDergues  sd 
on s.IDStafi = sd.Stafi_ID;



--2.Shfaqni librat qe jane ne depo per nje librari te caktuar dhe librat qe jane porositur nga klientet.
select l.Titulli
from Libri l inner join Depo d 
on l.IDDepo = d.IDDepo
where d.LibrariaID = 1

union

select l.Titulli
from Libri l inner join Dergon d 
on l.NrPorosise = d.IDPorosia;



--3.Shfaqni autoret e librave qe jane porositur ose jane ende ne depo.
select distinct Autori
from Libri l inner join Dergon d 
on l.NrPorosise = d.IDPorosia

union

select distinct Autori
from Libri l left join Dergon d 
on l.NrPorosise = d.IDPorosia
where d.IDPorosia is null;



--4.Gjeni klientet qe kane bere porosi, por ende nuk i kane pranuar ato.
select k.Emri, k.Mbiemri
from Klienti k inner join Porosia p 
on k.ID = p.Klienti_ID

except

select s.Emri, s.Mbiemri
from Stafi s inner join SDergues sd 
on s.IDStafi = sd.Stafi_ID;



--5.Selekto te gjithe stafin emri i te cileve fillon me shkronjen A dhe klientet qe kane bere me shume se nje porosi

select s.Emri, s.Mbiemri
from Stafi s
where s.Emri like 'A%'

union

select k.Emri, k.Mbiemri
from Klienti k inner join Porosia p on k.ID = p.Klienti_ID
group by k.Emri, k.Mbiemri
having count(p.NrPorosia) > 1;



--6.Gjeni librat qe jane ne depo, por nuk jane blere ne asnje porosi
select l.ISBN, l.Titulli
from Libri l inner join Depo d
on l.IDDepo = d.IDDepo

except

select l.ISBN, l.Titulli
from Libri l inner join Porosia p 
on l.NrPorosise = p.NrPorosia;


--7. Gjeni klientet qe kane bere me shume se nje porosi dhe jane nga nje qytet i caktuar
select k.Emri, k.Mbiemri, k.Qyteti
from Klienti k inner join Porosia p on k.ID = p.Klienti_ID
where k.Qyteti = 'Ferizaj'

intersect

select k.Emri, k.Mbiemri, k.Qyteti
from Klienti k inner join Porosia p
on k.ID = p.Klienti_ID
group by k.Emri, k.Mbiemri, k.Qyteti
having count(p.NrPorosia) > 1;


--8. Gjeni klientet qe kane numer telefoni dhe jane nga nje qytet i caktuar
select k.Emri, k.Mbiemri, t.Nr_Tel
from Klienti k inner join Telefoni t 
on k.ID = t.KlientiID
where k.Qyteti = 'Ferizaj'

intersect

select k.Emri, k.Mbiemri, t.Nr_Tel
from Klienti k inner join Telefoni t
on k.ID = t.KlientiID;




           --Te krijoni min. 8 Proceduara të ruajtura (Stored Procedure)--

--1.Krijoni nje stored procedure qe shfaqe personat ne baze të inputit ‘qyteti’.
create procedure klientetNeBazeTeQytetit
(@qyteti varchar (50))
as
begin
	select *
	from Klienti k
	where k.Qyteti like @qyteti
end

klientetNeBazeTeQytetit Ferizaj

--2.Krijoni nje stored procedure e cila shfaqe numrin e porosive te klientave ne baze te id-se. Nese
--klienti perkates ka 1 porosi te shfaqet mesazhi: “Klienti ka vetem nje porosi”, dhe nese klienti
--ka me shume se 1 porosi te shfaqet mesazhi: “Klienti ka me shume se nje porosi”

create procedure NumerPorosivePerKlient
    @Klienti_ID int
as
begin
 
    declare @NumerPorosive int

   
    select @NumerPorosive = count(*)
    from Porosia p
    where p.Klienti_ID = @Klienti_ID

    if @NumerPorosive = 1
    begin
        print 'Klienti ka vetem nje porosi.'
    end
    else if @NumerPorosive > 1
    begin
        print 'Klienti ka me shume se nje porosi.'
    end
    else
    begin
        print 'Klienti nuk ka porosi.'
    end
end

NumerPorosivePerKlient 14

--3. Krijoni nje stored procedure e cila tregon perqindjen e klientave nga nje qytet, ne baze te
--inputit ‘qyteti’.

create procedure perqindja (@qyteti varchar(50))
as
begin

    declare @totali int;
    declare @klientatNgaQyteti int;
    declare @perqindja decimal(5,2);

   
    select @totali = count(*) from	Klienti;

    
    select @klientatNgaQyteti = count(*) 
	from Klienti k 
	where k.Qyteti= @qyteti;

   
    if @totali > 0
		begin
         set @perqindja =convert(decimal(5,2), @klientatNgaQyteti) / @totali * 100;
		 print 'Perqindja e klientave nga '+@qyteti+' eshte '+ convert(varchar(10), @perqindja)+'%'
		end

    else
	  begin
        print 'Nuk ka informacion per klientat'
	  end
end

perqindja Prishtina


--4.Shfaqni librat qe kane cmim me te larte se 50 si "i shtrenjte" dhe ata nen 50 si te "arsyeshem".
create procedure statusiCmimit  
as
begin
    select l.Titulli,l.Autori,l.VitiPublikimit,l.Cmimi,
        case
            when Cmimi > 50 then 'I shtrenjte'
            else 'I arsyeshem'
        end as StatusiCmimit
    from Libri l
    where IDLibraria = 1;
end

statusiCmimit

--5.Krijoni nje store procedure duke perdorur while qe shfaq librat e autorit "Gjergj Fishta"
create procedure shfaqLibrat
as
begin
    declare @Count int = 0;
    declare @TotalLibrat int = (select count(*) from Libri l where l.IDLibraria =1);

    while(@Count <= @TotalLibrat)
    begin
        select l.Titulli,l.Autori,l.VitiPublikimit,l.Cmimi
        from Libri l
        where l.IDLibraria=1 and l.Autori = 'Gjergj Fishta';

        set @Count = @Count + 1;
    end
end

--6.Numero punetoret e Stafit teknik ne baze te grades se shkollimit sipas Shkolle e mesme,Bachelor,Master.
create procedure countGradaShkollimit
as
begin
    declare @nrMesem int;
    declare @nrBachelor int;
    declare @nrMaster int;


    select @nrMesem = count(*) 
    from Stafi s inner join GradaShkollimit g
	on s.IDStafi = g.StafiID
    where g.gradaShkollimit = 'Shkolle E Mesme';

    select @nrBachelor = count(*) 
    from Stafi s inner join GradaShkollimit g 
	on s.IDStafi = g.StafiID
    where g.gradaShkollimit = 'Bachelor';

	select @nrMaster = count(*) 
    from Stafi s inner join GradaShkollimit g 
	on s.IDStafi = g.StafiID
    where g.gradaShkollimit = 'Master';

 
    print 'Numri i punetoreve me shkolle te mesme: ' + convert(varchar(10), @nrMesem);
    print 'Numri i punetoreve me  bachelor: ' + convert(varchar(10), @nrBachelor);
    print 'Numri i punetoreve me  master: ' + convert(varchar(10), @nrMaster);
end




--7.Krijoni nje store procedure qe shfaq klientet nga qytetet nga inputi,
  --mirepo nese eshte i qytetit te Tiranes te ekzekutohen vetem ata qe ju fillon numri me 44

create procedure GjejKlientetNgaQyteti
    @qyteti varchar(50)
as
begin
    
    select k.Emri, k.Mbiemri, t.Nr_Tel
    from Klienti k inner join Telefoni t
	on k.ID = t.KlientiID
    where k.qyteti = @qyteti;

    if @qyteti = 'Tirana'
    begin
        
        select k.Emri, k.Mbiemri, t.Nr_Tel
		from Klienti k inner join Telefoni t 
		on k.ID = t.KlientiID
        where k.qyteti = @qyteti and t.Nr_Tel like '44%';
    end
end

GjejKlientetNgaQyteti Tirana


--8.Krijo nje store procedure e cila ne baze te pervojes cakton pagen e Stafit.
create procedure ShfaqPagenBazuarNePervoje
as
begin
   select Emri, Mbiemri, Pervoja,
    case
        when Pervoja = 'Marketing' then 500
        when Pervoja = 'Financë' then 600
        when Pervoja = 'Logjistikë' then 550
        else 400
    end as Paga
from Stafi;
end

ShfaqPagenBazuarNePervoje

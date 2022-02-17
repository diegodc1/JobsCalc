//ANOTAÇÕES:
//o init.js é o responsável por criar o arquivo do banco de dados.
//roda-se o init apenas uma vez, caso precise rodar novamente é necessário apagar o arquivo do banco de dados.
//precisa coloca o await antes dos "comandos", para que o js espere a finalização do processo.
//o await precisa estar dentro de uma função async.

const Database = require('./config')

const initDb = {
   async init(){

  
const db = await Database()


//criando as tabelas profile e jobs
await db.exec(`CREATE TABLE profile (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   avatar TEXT,
   monthly_budget INT,
   days_per_week INT,
   hours_per_day INT,
   vacation_per_year INT,
   value_hour INT
)`);

await db.exec(`CREATE TABLE jobs (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   daily_hours INT,
   total_hours INT,
   created_at DATETIME
)`)


//Inserindo as informações na tabela/banco de dados
await db.run(`INSERT INTO profile (
   name, 
   avatar, 
   monthly_budget, 
   days_per_week, 
   hours_per_day, 
   vacation_per_year,
   value_hour
) VALUES (
    "jakeliny",
    "https://avatars.githubusercontent.com/u/17316392",
    3000,
    5,
    5,
    4,
    70
);`)

await db.run(`INSERT INTO jobs(
   name,
   daily_hours,
   total_hours,
   created_at
) VALUES (
   "Pizzaria Guloso",
   2,
   1,
   1617514376018
)`)

await db.run(`INSERT INTO jobs(
   name,
   daily_hours,
   total_hours,
   created_at
) VALUES (
   "OneTwo Projects",
   3,
   47,
   1617514376018
);`)


await db.close()
   }
}

initDb.init()
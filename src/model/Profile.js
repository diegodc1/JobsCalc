const Database = require('../db/config')

module.exports = {
  async get() {
    const db = await Database()

    const data = await db.get(`SELECT * FROM profile`) //está pegando os dados de todos os campos da tabela/banco de dados profile (obs.: o get() trás apenas 1 objeto)

    await db.close()

    //para retornar sem erro devemos fazer uma normalização, pois o banco de dados usa o underline ( _ ), e no código foi usado traço ( - )
    return {
      name: data.name,
      avatar: data.avatar,
      "monthly-budget": data.monthly_budget,
      "days-per-week": data.days_per_week,
      "hours-per-day": data.hours_per_day,
      "vacation-per-year": data.vacation_per_year,
      "value-hour": data.value_hour
    };
  },

  async update(newData) {
    const db = await Database()
    
    db.run(`UPDATE profile SET
    name = "${newData.name}",
    avatar = "${newData.avatar}",
    monthly_budget = ${newData["monthly-budget"]},
    days_per_week = ${newData["days-per-week"]},
    hours_per_day = ${newData["hours-per-day"]},
    vacation_per_year = ${newData["vacation-per-year"]},
    value_hour = ${newData["value-hour"]}
    `);

    await db.close()
  },
};

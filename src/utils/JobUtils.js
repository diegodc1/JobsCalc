module.exports = {
  remainingDays(job) {
    //cálculo de tempo restante
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed(); //to fixed arrendonda o número

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDays); //somando a data de vencimento
    const dueDateInMs = createdDate.setDate(dueDay); //data futura de vencimento

    const timeDiffInMs = dueDateInMs - Date.now(); //a diferança entre o dia da criação e o dia de vencimento

    //transformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.floor(timeDiffInMs / dayInMs);

    return dayDiff; //restam x dias
  },

  calculateBudget: (job, valueHour) => valueHour * job["total-hours"], //o valor da hora vezes o total de horas gastos no projeto
};

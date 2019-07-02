'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money || money == '' || money == null)) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: '',
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?');

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
      } else {
        console.log("bad result");
        i--;
      }
    }
  },
  // Расчет дневного бюджета
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на 1 день составляет: ' + appData.moneyPerDay + 'руб.');
  },
  // Расчет уровня достатка
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay >= 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
  },
  // Расчет дохода с депозита
  checkSavings: function () {
    if (appData.savings == truu) {
      let save = +prompt('Какова сума накоплений?'),
        percent = +prompt('Под какой процент?');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  // Функция для определения необязательных расходов
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let questionOptExpenses = prompt('Статья необязательных расходов?');
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  //Дополнительный источник дохода
  chooseIncome: function () {
    let items = prompt('Что принесет дополнительныый доход? (Перечислите через запятую)', '');

    if ( typeof(items) != 'string' || items == '' || typeof(items) == null ) {
      console.log('Введено не коректные даные!');
    } else {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то еще?', ''));
      appData.income.sort();
    }

    appData.income.forEach( function (itemArray, i) {
      alert('Способы доп. заработка: ' + ( i + 1 ) + ', ' + itemArray );
    });
  }
};

for ( let key in appData) {
  alert('Наша программа включает в себя данные: ' + key + ', ' + appData[key]);
};

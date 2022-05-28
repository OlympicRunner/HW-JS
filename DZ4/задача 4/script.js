let Week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

let startDayWeek = 1;    // тут можно задать день с которого начинается неделя
let startDayWeekI = 6 + startDayWeek;
for (let j = 1; j < startDayWeekI; ++j) {
    Week.push(Week.shift())
};

let lastNumber = 31; // крайний день месяца
let Mounth = [];

for (let i = 1; i < (lastNumber + 1); ++i) {
    Mounth.push(i);
};


for (let day of Mounth) {

    console.log(day + ' января, ' + Week[day % 7])
}


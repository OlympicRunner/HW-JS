
// масив создан 

let Week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

// let startDayWeek = 0;    // то что нужно задавать

let lastNumber = 31; // крайний день месяца
let Mounth = [];

for (let i = 1; i < (lastNumber + 1); ++i) {
    Mounth.push(i);
}


for (let day of Mounth) {
    
    console.log(day + ' января, ' + Week[day % 7])
}

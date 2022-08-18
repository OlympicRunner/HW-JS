function filter(objects, ourValue, ourSetting) {
    let newList = []


    let values = Object.values(objects);

    for (let value of values) {
        let abc = Object.entries(value)
        for (let ab of abc) {
            if (ab.includes(ourValue) && ab.includes(ourSetting)) {
                newList.push(value)

                console.log(newList)
            }
            // else {
            //     console.log('такого нет в массиве')
            // }
        }

    }
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]


let ourSetting = 'name';
let ourValue = 'Иван';

let show = filter(objects, ourValue, ourSetting)


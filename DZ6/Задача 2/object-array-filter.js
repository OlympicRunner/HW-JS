function filter(objects, ourValue, ourSetting) {

    for (let obj of objects) {

        let entries = Object.entries(obj)
        for (let [key, value] of entries) {
            if (value === ourValue && key === ourSetting) {
                console.log(obj)
            }
        }
    }
}


let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let ourSetting = `name`;
let ourValue = 'Пётр';

let show = filter(objects, ourValue, ourSetting)



// for (let [key, value] of entries) {
//     console.log(`${key}: ${value}`)
// }

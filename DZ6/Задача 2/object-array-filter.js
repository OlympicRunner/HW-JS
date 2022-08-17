function filter(objects, ourValue, ourSetting) {

    for (let i = 0; i < objects.length; i++) {
        let obj = Object.entries(objects[i])
        
        console.log(obj[0].includes( ourValue))

        
        
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


// for (let obj of objects) {
//     for (let [key, value] of Object.entries(obj)) {
//         if (value === ourValue && key === ourSetting) {
//             console.log(obj)
//         }
//     }
// }
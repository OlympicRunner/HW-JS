function filter(objects, ourValue, ourSetting) {
    let newList = []
    for (let i = 0; i < objects.length; i++) {
        let obj = objects[i];


        if (Object.keys(obj).includes(ourSetting)) {
            let index = Object.keys(obj).indexOf('name')
            if ((Object.values(obj))[index].includes(ourValue) ) {
                newList.push(obj)
                console.log(newList)
            }
        }



        // console.log(Object.keys(obj).indexOf('name'))
        
        // if(Object.keys(obj).includes('name')){
        //     console.log('+')
        // }

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

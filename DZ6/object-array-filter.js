function filter(objects, ourValue, ourSetting) {
    let newList = []
<<<<<<< HEAD
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


=======

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
>>>>>>> 41b74fa3ba167e2ca4519f62d813c8c21c20e494
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

<<<<<<< HEAD
let ourSetting = `name`;
let ourValue = 'Пётр';
=======
let ourSetting = 'name';
let ourValue = 'Иван';
>>>>>>> 41b74fa3ba167e2ca4519f62d813c8c21c20e494

let show = filter(objects, ourValue, ourSetting)


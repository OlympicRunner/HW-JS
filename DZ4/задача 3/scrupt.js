
let roadMines = [false, false, false, true, true, false, false, false, false, false];
let a = [];
let b = [];

i = 0
for (let mine of roadMines) {
    i ++;
    a.push(i)
    if (mine == true) {
        console.log(`Танк переместился на ` + a);
        console.log(`танк поврежден`)
        break;      
    }
    if (i == roadMines.length) {
        console.log('танк переместился на '+ a)
    }
}

let raodMinesCorrect = roadMines.slice(i, roadMines.length);

for (let mine of raodMinesCorrect) {
    i ++;
    b.push(i)
    if (mine == true) {
        console.log('танк переместился на ' + b )
        console.log(`танк уничтожен`)
        break;      
    }
    if (i == roadMines.length) {
        console.log('танк переместился на '+ b)
    }
}

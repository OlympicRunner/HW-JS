var str = 'Word';

var rts = '';

for (let i = str.length - 1; i >= 0; --i) {
    rts = rts.concat(str[i]);
}

console.log(rts)
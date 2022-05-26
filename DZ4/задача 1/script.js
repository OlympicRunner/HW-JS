
let n = 30;
let m = -30;
let count = 4;

let newMasive = [];

for (let i = 1; i < (count + 1); ++i) {
    newMasive.push(Math.round(Math.random()*Math.min(m, n)+(Math.random()*Math.max(m, n))));
    
}
console.log(newMasive);
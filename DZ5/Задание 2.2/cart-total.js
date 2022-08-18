function calculate(fullList, amountItem, promo) {

    let promo = Null;

    let finalSumm = '';
    
    if (promo === 'ДАРИМ300') {
        if (fullList > 300) {
            finalSumm = fullList - 300
        } else {
            finalSumm = 0
        }
    } else {
        finalSumm = fullList
    }
    
    if (amountItem >= 10) {
        finalSumm = finalSumm * .95
    }
    
    if (fullList > 50000) {
        finalSumm = 50000 + ((finalSumm - 50000) * 0.85)
    }
    
    if (promo ===  'СКИДКА15' && fullList >= 20000) {
        finalSumm = finalSumm * .85
    }
    
    console.log(finalSumm)

}

let fullList = 56000;
let amountItem = 10;
let promo = 'ДАРИМ300';

let show = calculate(fullList, amountItem, promo);
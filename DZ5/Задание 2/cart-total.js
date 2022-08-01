function calculate(fullList, amountItem, promo) {

    let firstSumm = '';
    let secondSumm = '';
    let thirdSumm = '';
    let fourthSumm = '';
    
    if (promo == 'ДАРИМ300') {
        if (fullList > 300) {
            firstSumm = fullList - 300
        } else {
            firstSumm = 0
        }
    } else {
        firstSumm = fullList
    }
    
    if (amountItem >= 10) {
        secondSumm = firstSumm * .95
    } else {
        secondSumm = firstSumm
    }
    
    if (fullList > 50000) {
        thirdSumm = 50000 + ((secondSumm - 50000) * 0.85)
    } else {
        thirdSumm = secondSumm
    }
    
    if (promo ==  'СКИДКА15' && fullList >= 20000) {
            fourthSumm = thirdSumm * .85
    } else {
        fourthSumm = thirdSumm
    }
    
    console.log(fourthSumm)

}

let fullList = 2000;
let amountItem = 11;
let promo = 'ДАРИМ300';

let show = calculate(fullList, amountItem, promo);
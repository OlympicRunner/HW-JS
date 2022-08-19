document.addEventListener('DOMContentLoaded', function() {
    let inputCounter = document.querySelector('.input-counter')
    let restartCounter = document.querySelector('.start')
    let showCounter = document.querySelector('.show-counter')

    function downCounter (i) {
        i;
        let setInt = setInterval(function() {
            i--;

            if (i == -1) {
                clearInterval(setInt);
            } else {
                console.log(i);
                showCounter.textContent =  i
            }
        }, 1000);
    }

    restartCounter.addEventListener('click', function () {
        downCounter.
        downCounter(parseInt(inputCounter.value)+1)
    })

})






// let i = 10;

// let id = setInterval(function() {
// 	i--;
	
// 	if (i == 0) {
// 		clearInterval(id);
// 	} else {
// 		console.log(i);
// 	}
// }, 1000);
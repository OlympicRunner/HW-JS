document.addEventListener('DOMContentLoaded', function() {
    let inputCounter = document.querySelector('.input-counter')
    let restartCounter = document.querySelector('.start')
    let showCounter = document.querySelector('.show-counter')

    let setInt;
    function downCounter (i) {
        i;
        setInt = setInterval(function() {
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
        window.clearInterval(setInt)
        downCounter(parseInt(inputCounter.value)+1)
    })

})

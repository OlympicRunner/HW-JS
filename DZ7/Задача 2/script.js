document.addEventListener('DOMContentLoaded', function() {
    let addText = document.querySelector('.container__input')
    let finalText = document.querySelector('.container__h2')

        let setTme
    function showText() {
        setTme = setTimeout(function() {
            finalText.textContent = addText.value
        }, 2000)

    }

    addText.addEventListener('input', function() {
        clearTimeout(setTme)
        showText();
    })

})

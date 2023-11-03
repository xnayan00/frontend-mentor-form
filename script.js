const form = document.getElementById('js-form')
const mainSection = document.getElementById('js-main')
const successSection = document.getElementById('js-success')
const dismissButton = document.getElementById('js-dismiss')
const emailInput = document.getElementById('js-email-input')
var emailValue = document.getElementById('subscribed_email')

function toggleSections(){
    var isVisible = successSection.getAttribute('data-visible')

    if(isVisible == 'true') {
        mainSection.classList.remove('d-none')
        successSection.classList.add('d-none')
        successSection.setAttribute('data-visible', 'false')
    }else{
        mainSection.classList.add('d-none')
        successSection.classList.remove('d-none')
        successSection.setAttribute('data-visible', 'true')
    }
}

dismissButton.addEventListener('click', () => {
    form.reset()
    toggleSections()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    emailValue.innerText = emailInput.value

    toggleSections()
})

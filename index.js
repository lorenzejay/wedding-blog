// nav bar
const navBtn = document.querySelector('.burger');
const navlinks = document.querySelector('.nav-links')

navBtn.addEventListener('click', () =>{
    navlinks.classList.toggle('nav-active')
})

// email list 
const subscribeBtn = document.querySelector('.subscribe-btn');
const inputName = document.querySelector('.input-name')
const inputEmail = document.querySelector('.input-email')
const inputError = document.querySelector('.input-error')

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputError.style.color = 'red'
    if (inputName.value === '' || inputName.value === null ){
        inputError.textContent  = 'You need to input a name'
    }
    if (inputEmail.value.length < 2) {
        inputError.textContent = 'You need to enter a valid email'
    }
})


const container = document.getElementById('container')
const registionBtn = document.getElementById('signup')
const loginBtn = document.getElementById('signin')

registionBtn.addEventListener('click', () => {
    container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
})
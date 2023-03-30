
console.log('Client side Javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

//messageOne.textContent = 'from JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    

    messageOne.textContent = 'Loading...'
    messagetwo.textContent = ''

fetch('http://localhost:3000/weather?address=' + location).then((res) => {
    res.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent =  data.location
            messagetwo.textContent = data.forecast
         
        }
    })
})


})
console.log('funguju!');


const alarm = document.querySelector('.alarm')
const audio = document.querySelector('audio')
const button = document.querySelector('button')

let startTime = Number(prompt('Zadejte za kolik vterin ma minutka zazvonit: '))

const ring = () => {
    alarm.classList.add('.alarm--ring')
    audio.play()
}

setTimeout(ring, startTime)

const stop = () => {
	audio.pause()
}

button.addEventListener('click', stop)


const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76;
const width = 9;

function moveFrog(e) {
    squares[currentIndex].classList.remove('frogger');
    switch(e.key) {
        case 'ArrowLeft' :
            console.log('move-left')
            if (currentIndex % width !== 0) currentIndex -= 1
            break
        case 'ArrowRight' :
            console.log('move-right')
            if (currentIndex % width < width - 1 ) currentIndex += 1
            break
        case 'ArrowUp' :
            console.log('move-up')
            if (currentIndex - width >= 0 ) currentIndex -= width
            break
        case 'ArrowDown' :
            console.log(currentIndex)
            if (currentIndex + width < width * width ) currentIndex += width
            break
    }
    squares[currentIndex].classList.add('frogger');
}
document.addEventListener('keyup', moveFrog)
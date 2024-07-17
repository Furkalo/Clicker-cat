const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

function start() {
  setScore(getScore())
  setImage()
}

function setScore(score) {
  localStorage.setItem('score', score)
  $score.textContent = score
}

function setImage() {
  if (getScore() >= 50 && getScore() <= 100) {
    $circle.setAttribute('src', './assets/cat.png')
  }
  if (getScore() >= 101 && getScore() <= 200)
    $circle.setAttribute('src', './assets/cat-195.png')
  if (getScore() >= 201 && getScore() <= 300)
    $circle.setAttribute('src', './assets/cat-6.png')
  if (getScore() >= 301 && getScore() <= 600)
    $circle.setAttribute('src', './assets/cat-png-14.png')
  if (getScore() >= 601 && getScore() <= 800)
    $circle.setAttribute('src', './assets/cat-png-32.png')
  if (getScore() >= 801 && getScore() <= 900)
    $circle.setAttribute('src', './assets/cat-png-34.png')
  if (getScore() >= 901 && getScore() <= 1000)
    $circle.setAttribute('src', './assets/cat-png-44.png')
  if (getScore() >= 1001 && getScore() <= 1500)
    $circle.setAttribute('src', './assets/cat-png-54.png')
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
  setScore(getScore() + 1)
  setImage()
}

$circle.addEventListener('click', (event) => {
  const rect = $circle.getBoundingClientRect()

  const offfsetX = event.clientX - rect.left - rect.width / 2
  const offfsetY = event.clientY - rect.top - rect.height / 2

  const DEG = 40

  const tiltX = (offfsetY / rect.height) * DEG
  const tiltY = (offfsetX / rect.width) * -DEG

  $circle.style.setProperty('--tiltX', `${tiltX}deg`)
  $circle.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`)
    $circle.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  $circle.parentElement.appendChild(plusOne)

  addOne()

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
})

start()
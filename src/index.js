import Typed from 'typed.js'
import typo from './components/typo/typo'
import delayElement from './components/delay/delay'

const typedString = `Attila Polgar`

const typed = new Typed('#my-name', {
  strings: [typo(typedString), typedString],
  typeSpeed: 150,
  backDelay: 50,
  startDelay: 100,
  showCursor: false,
})

const aboutMeElement = document.getElementById('about-me')
const socialElement = document.getElementById('social')
delayElement(aboutMeElement, 4000)
delayElement(socialElement, 5500)

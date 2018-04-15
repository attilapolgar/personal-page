import Typed from 'typed.js'
import typo from './components/typo/typo'
import delayElement from './components/delay/delay'

const delayedAboutMe = delayElement('about-me', 500)
const delayedSocial = delayElement('social', 2000)

const onComplete = () => {
  delayedAboutMe.start()
  delayedSocial.start()
}

const typedString = `Attila Polgar`
const typed = new Typed('#my-name', {
  strings: [typo(typedString), typedString],
  typeSpeed: 150,
  backDelay: 50,
  startDelay: 0,
  showCursor: false,
  onComplete,
})

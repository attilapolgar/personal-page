import Typed from 'typed.js'
import typo from '../typo/typo'
import delayElement from '../delay/delay'
import './style'

class IntroductionCard extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    console.log('IntroductionCard::connectedCallback')
    this.innerHTML = `
    <div>
      <div class="introduction">
        <h1 class="title">
          <div>Hi, my name is</div>
          <div id="my-name"></div>
        </h1>
        <div id="about-me">I'm a web developer and live in
          <span class="location">Budapest, Hungary</span>.
        </div>
      </div>
      <div id="social">
        <a href="https://github.com/raglopa" target="_blank">
          <div class="social-image github" title="my github profile" alt="my github profile"></div>
        </a>
        <a href="https://www.linkedin.com/in/attilapolgar/" target="_blank">
          <div class="social-image linkedin" title="my linkedin profile" alt="my linkedin profile"></div>
        </a>
      </div>
    </div>
  `

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
  }
  disconnectedCallback() {
    console.log('IntroductionCard::disconnectedCallback')
  }
}

window.customElements.define('introduction-card', IntroductionCard)

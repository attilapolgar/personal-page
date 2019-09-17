import Typed from 'typed.js'
import './introduction-card.style'
import { delayElement } from '../../utils/delay/delay'
import { typo } from '../../utils/typo/typo'

const urls = {
  github: 'https://github.com/attilapolgar',
  linkedin: 'https://www.linkedin.com/in/attilapolgar',
  instagram: 'https://www.instagram.com/raglopa',
  source:
    'https://github.com/attilapolgar/personal-page/blob/master/src/components/introduction-card/introduction-card.js'
}

class IntroductionCard extends HTMLElement {
  connectedCallback () {
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
        <a href="${urls.github}" target="_blank" rel="noopener">
          <div class="social-image github" title="my github profile" alt="my github profile"></div>
        </a>
        <a href="${urls.linkedin}" target="_blank" rel="noopener">
          <div class="social-image linkedin" title="my linkedin profile" alt="my linkedin profile"></div>
        </a>
        <a href="${urls.instagram}" target="_blank" rel="noopener">
          <div class="social-image instagram" title="my instagram profile" alt="my instagram profile"></div>
        </a>
      </div>
      <a id="source-code" href="${urls.source}" target="_blank" rel="noopener">
        <div class="icon" title="check the source" alt="check the source"></div>
      </a>
    </div>
  `

    const delayedAboutMe = delayElement('about-me', 500)
    const delayedSocial = delayElement('social', 2000)

    const onComplete = () => {
      delayedAboutMe.start()
      delayedSocial.start()
    }

    const typedString = `Attila Polgar`
    // eslint-disable-next-line no-new
    new Typed('#my-name', {
      strings: [typo(typedString), typedString],
      typeSpeed: 150,
      backDelay: 50,
      startDelay: 0,
      showCursor: false,
      onComplete
    })
  }

  disconnectedCallback () {
    console.log('IntroductionCard::disconnectedCallback')
  }
}

window.customElements.define('introduction-card', IntroductionCard)

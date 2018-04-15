import './delay.scss'

const delayElement = (element, delay = 1000) => {
  element.classList.add('delayed')
  window.setTimeout(() => {
    element.classList.add('visible')
  }, delay)
}

export default delayElement

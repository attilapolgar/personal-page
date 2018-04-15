import './delay.scss'

const delayElement = (e, delay) => {
  const element = document.getElementById(e)
  let timeout = null
  element.classList.add('delayed')

  const start = () => {
    timeout = window.setTimeout(() => {
      element.classList.add('visible')
    }, delay)
  }

  const cancel = () => {
    window, clearTimeout(timeout)
  }

  return {
    start,
    cancel,
  }
}

export default delayElement

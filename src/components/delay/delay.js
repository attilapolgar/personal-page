import './delay.scss'

const delayElement = (e, delay) => {
  const element = document.getElementById(e)
  let timeout = null

  if (element) {
    element.classList.add('delayed')
  } else {
    console.warn(`element not found: ${e}`)
  }

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

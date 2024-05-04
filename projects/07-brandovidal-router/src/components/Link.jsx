/* eslint-disable react/prop-types */
import { EVENTS } from '../consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props } = {}) {
  const handleClick = event => {
    event.preventDefault()

    navigate(to)
  }

  return <a href={to} target={target} onClick={handleClick} {...props} />
}

export function throttle(fn, delay = 200) {
  let lastCall = 0

  const throttleExec = (...args) => {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args) // eslint-disable-line
  }
  return throttleExec
}

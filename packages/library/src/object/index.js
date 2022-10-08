export function deepCloneObject(obj) {
  if (typeof obj !== 'object') {
    return undefined
  }

  return JSON.parse(JSON.stringify(obj))
}

export function isEmptyObject(obj) {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}

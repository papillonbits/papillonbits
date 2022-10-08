export function deepCloneObject(obj) {
  if (typeof obj !== 'object') {
    return undefined
  }

  return JSON.parse(JSON.stringify(obj))
}

export function isEmptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false
  }

  return true
}

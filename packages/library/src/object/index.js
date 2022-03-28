export function deepCloneObject(obj) {
  if (typeof obj !== 'object') {
    return undefined
  }

  return JSON.parse(JSON.stringify(obj))
}

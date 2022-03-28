export function getCapizalizedString({ string, separator = '-' }) {
  const splitted = string.split(separator)
  const capitalized = splitted.map((splittedItem) => `${splittedItem.charAt(0).toUpperCase()}${splittedItem.slice(1)}`)

  return capitalized.join(' ')
}

export function getRandomAlphaNumericString() {
  return Math.random().toString(36).slice(2)
}

export function getRandomAlphaNumericStringByLength({ length }) {
  let randomAlphaNumericString = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i += 1) randomAlphaNumericString += characters.charAt(Math.floor(Math.random() * characters.length))

  return randomAlphaNumericString !== '' ? randomAlphaNumericString : getRandomAlphaNumericString()
}

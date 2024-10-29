export const generateId = () => {
  return Math.floor(Math.random() * 10000)
}

export const isValidValue = (value) => {
  return value !== undefined && !Number.isNaN(value) && value !== null
}

export const prefixNumber = (n) => `${n}`[1] ? `${n}` : `0${n}`;
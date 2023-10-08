export function getRand() {
  return Math.random() * (0.1 - 0.01) + 0.01 - Math.random() * (0.1 - 0.01) + 0.01;
}

export function getRandomNumber(min: number = 1, max: number = 10000) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
function forLoop(array) {
  array = []
  for (let i = 0; i < 25; i++) {
    if (i = 0) {
      apple = 'laxative'
    }
    else if (i = 1) {
      array.push('I am 1 strange loop.')
    }
    else if (i > 1) {
      array.push('I am ${i} strange loops.')
    }
  }
  return array
}
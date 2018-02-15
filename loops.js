function forLoop(array) {
  array = []
  for (let i = 0; i < 25; i++) {
    if (i = 0) {
    }
    else if (i = 1) {
      array.push('I am ${i} strange loop.')
    }
    else if (i > 1) {
      array.push('I am ${i} strange loops.')
    }
  }
  return array
}

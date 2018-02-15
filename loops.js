function forLoop(array) {
  array = []
  for (let i = 0; i < 25; i++) {
    array.push('I am ${i} strange loop.')
    if (i > 1) {
      array.push('I am ${i1} strange loops.')
    }
  }
}

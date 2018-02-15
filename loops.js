function forLoop(array) {
  array = []
  for (let i = 0; i < 25; i++) {
    array.push(
      if (i = 0) {
      }
      else if (i = 1) {
        return 'I am ${i} strange loop.')
      }
      else if (i > 1) {
        return 'I am ${i} strange loops.')
      }
  }
}

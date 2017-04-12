function changeCompletely(element, index, array) {
  array[index] = element + "bird"
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
function convertToSlicedArray(originalDeck, slices){
  return Array(slices).fill().map( (_,index) => cardFilterByMod(originalDeck, slices, index) )
}

function cardFilterByMod(originalDeck, n , remainder) {
  return originalDeck.filter( (_, index) => index % n === remainder )
}

function handleMagicTrick(originalDeck, choice, indexRef) {
  const newDeck = [...originalDeck].flat().filter((el) => !originalDeck[choice].includes(el))
  newDeck.splice(indexRef, 0, ...originalDeck[choice])
  return convertToSlicedArray(newDeck, originalDeck.length)
}

export {convertToSlicedArray, cardFilterByMod, handleMagicTrick}

import { ShowCards } from "./components/ShowCards.js"
import { createDeck } from "./utils/createDeck.js"
import "./App.css"
import { useState } from "react"

function App() {
  const NUMBER_OF_ROWS = 3
  const MIDDLE_OF_ARRAY_INDEX = 7

  const magicDeck = createDeck()

  function convertToSlicedArray(arr, slices){
    return Array(slices).fill().map( (_,index) => cardFilterByMod(arr, index) )
  }
  const [magicDeckSlices, setMagicDeckSlices] = useState(convertToSlicedArray(magicDeck, NUMBER_OF_ROWS))
  
  function cardFilterByMod(sourceDeck, mod) {
    return sourceDeck.filter( (_, index) => index % 3 === mod )
  }

  function handleMagicTrick(originalDeck, choice) {
    const newDeck = [...originalDeck].flat().filter((el) => !originalDeck[choice].includes(el))
    newDeck.splice(MIDDLE_OF_ARRAY_INDEX, 0, ...originalDeck[choice])
    return convertToSlicedArray(newDeck, originalDeck.length)
  }

  const handleMagicDeck = (choice) => {
    setMagicDeckSlices((prevMagicDeck) => handleMagicTrick(prevMagicDeck, choice));
};

  return (
    <div className="container">
      <p className="page__title"> 11Th Card Trick </p>

      <div className="deck__container" onClick={()=>{handleMagicDeck(0)}}>
        <ShowCards deck = {magicDeckSlices[0]} />
      </div>

      <div className="deck__container" onClick={()=>{handleMagicDeck(1)}}>  
        <ShowCards deck = {magicDeckSlices[1]} />
      </div> 
    
      <div className="deck__container" onClick={()=>{handleMagicDeck(2)}}>  
        <ShowCards deck = {magicDeckSlices[2]} />
      </div>
    </div>
  )
}

export default App

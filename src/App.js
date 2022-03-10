import { ShowCards } from "./components/ShowCards.js"
import { createDeck } from "./utils/createDeck.js"
import "./App.css"
import { useState } from "react"

function App() {
  const NUMBER_OF_ROWS = 3
  const MIDDLE_OF_ARRAY_INDEX = 7

  const initialMagicDeck = createDeck()

  const [magicDeck, setMagicDeck] = useState(initialMagicDeck)
  // estou usando o array errado, eu deveria usar o proprio magicDeckSlices
  
  function cardFilterByMod(sourceDeck, mod) {
    return sourceDeck.filter( (_, index) => index % 3 === mod )
  }

  const magicDeckSlices = Array(NUMBER_OF_ROWS).fill().map( (_,index) => cardFilterByMod(magicDeck, index) )
  

  function handleMagicTrick(originalDeck, choice) {
    const newDeck = [
      ...cardFilterByMod(originalDeck, 0),
      ...cardFilterByMod(originalDeck, 1),
      ...cardFilterByMod(originalDeck, 2)]
      .filter((el) => !cardFilterByMod(originalDeck, choice).includes(el))

    newDeck.splice(MIDDLE_OF_ARRAY_INDEX, 0, ...cardFilterByMod(originalDeck, choice))

    return newDeck
  }

  const handleMagicDeck = (choice) => {
    setMagicDeck((prevMagicDeck) => handleMagicTrick(prevMagicDeck, choice));
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

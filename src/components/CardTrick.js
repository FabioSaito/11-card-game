import { ShowCards} from  "./ShowCards.js"
import { createDeck } from "../utils/createDeck.js"
import { useState } from "react"
import { convertToSlicedArray, handleMagicTrick } from "../utils/deckFunctions.js"
import "./CardTrick.css"

const NUMBER_OF_ROWS = 3
const MIDDLE_OF_ARRAY_INDEX = 7

function CardTrick() {

  const magicDeck = createDeck()

  const [magicDeckSlices, setMagicDeckSlices] = useState(convertToSlicedArray(magicDeck, NUMBER_OF_ROWS))
  
  const handleMagicDeck = (choice) => {
    setMagicDeckSlices((prevMagicDeck) => handleMagicTrick(prevMagicDeck, choice, MIDDLE_OF_ARRAY_INDEX))
  }

  return magicDeckSlices.map((slice,index) => 
    <div className="deck__container" key = {index} onClick={() => {handleMagicDeck(index)}}>
      <ShowCards deck = {slice} />
    </div>
  )
}

export {CardTrick}

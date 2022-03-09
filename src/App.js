import { ShowCards } from "./components/ShowCards.js"
import { createDeck } from "./utils/createDeck.js"
import "./App.css"

function App() {
  const magicDeck = createDeck()
  const magicDeckSlice1 = magicDeck.filter((card, index) => index%3 === 0);
  const magicDeckSlice2 = magicDeck.filter((card, index) => index%3 === 1);
  const magicDeckSlice3 = magicDeck.filter((card, index) => index%3 === 2);

  return (
    <div className="container">
      <p className="page__title">11Th Card Trick </p>

      <div className="deck__container">
        <ShowCards deck = {magicDeckSlice1} />
      </div>

      <div className="deck__container">  
        <ShowCards deck = {magicDeckSlice2} />
      </div> 
    
      <div className="deck__container">  
        <ShowCards deck = {magicDeckSlice3} />
      </div>
    </div>
  )
}

export default App

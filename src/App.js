import { ShowCards } from "./components/ShowCards.js";
import { createDeck } from "./utils/createDeck.js";
import "./App.css"

function App() {
  const myDeck = createDeck()

  return (
    <div className="container">
      <p className="page__title">11Th Card Trick </p>
      
      <div className="deck__container">
        <ShowCards deck = {myDeck.slice(0,7)} />
      </div>

      <div className="deck__container">  
        <ShowCards deck = {myDeck.slice(7,14)} />
      </div> 
    
      <div className="deck__container">  
        <ShowCards deck = {myDeck.slice(14,21)} />
      </div>
    </div>
  )
}

export default App

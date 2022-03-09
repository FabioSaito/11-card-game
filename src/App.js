import { ShowCards } from "./components/ShowCards.js"
import { createDeck } from "./utils/createDeck.js"

function App() {
  const myDeck = createDeck()

  return (
    <div className="container">
      <p>DECK</p>
      <ShowCards deck = {myDeck} />
    </div>
  )
}

export default App

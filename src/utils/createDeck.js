import {Deck} from "../classes/deck.js"

function createDeck(){
  const MAGIC_DECK_SIZE = 21
  const deck = new Deck()
  const randomCards = deck.getRandomDeck(MAGIC_DECK_SIZE)
  return [...randomCards]
}

export {createDeck}

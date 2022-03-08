import {Deck} from "../classes/deck.js";

function createDeck(){
  const deck = new Deck();
  const randomCards = deck.getRandomDeck(21)
  return [...randomCards]
}

export {createDeck}

import {Deck} from "./deck";

describe ("deck class", ()=>{
  const deck = new Deck()
  it("should have a array with 52 cards", ()=>{
    const DECK_SIZE = 52
    expect(deck.current_deck.length).toBe(DECK_SIZE)
  })

  it("should return 21 cards and let 31 cards remaining in deck", ()=>{
    const MAGIC_DECK_SIZE = 21
    const REMAINING_CARDS = 31
    const magicDeck = deck.getRandomDeck(MAGIC_DECK_SIZE)
    expect(magicDeck.length).toBe(MAGIC_DECK_SIZE)
    expect(deck.current_deck.length).toBe(REMAINING_CARDS)
  })
});

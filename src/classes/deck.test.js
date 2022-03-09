import {Deck} from "./deck"

describe ("Deck", ()=>{
  const deck = new Deck()
  it("#generateDeck", ()=>{
    const DECK_SIZE = 52
    expect(deck.current_deck).toHaveLength(DECK_SIZE)
  })

  it("#shuffleCurrentDeck", ()=>{
    deck.shuffleCurrentDeck()
    const shuffledDeck = [...deck.current_deck]
    expect(shuffledDeck).toEqual(deck.current_deck)
    expect(shuffledDeck).not.toBe(deck.current_deck)
  })

  it("#getRandomDeck", ()=>{
    const magicDeck = deck.getRandomDeck(21)
    expect(magicDeck).toHaveLength(21)
    expect(deck.current_deck).toEqual(expect.not.arrayContaining(magicDeck))
  })
})

import {createDeck} from "./createDeck"

describe ("createDeck", ()=>{
  it("creates a deck with 21 random cards", ()=>{
    const deck = createDeck()
    const MAGIC_DECK_SIZE = 21
    expect(deck).toHaveLength(MAGIC_DECK_SIZE)
  })
})

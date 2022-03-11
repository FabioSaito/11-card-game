import {Deck} from "./deck"

describe ("Deck", () => {
  const deck = new Deck()
  describe("#generateDeck", () => {
    it("creates a shuffled deck of cards with 52 items", () => {
      const DECK_SIZE = 52
      expect(deck.current_deck).toHaveLength(DECK_SIZE)
    })
  })

  describe("#shuffleCurrentDeck", () => {
    it("shuffles current deck", () => {
      deck.shuffleCurrentDeck()
      const shuffledDeck = [...deck.current_deck]
      expect(shuffledDeck).toEqual(deck.current_deck)
      expect(shuffledDeck).not.toBe(deck.current_deck)
    })
  })

  describe("#getRandomDeck", () => {
    it("picks random cards from current deck", () => {
      const magicDeck = deck.getRandomDeck(21)
      expect(magicDeck).toHaveLength(21)
      expect(deck.current_deck).toEqual(expect.not.arrayContaining(magicDeck))
    })
  })
})

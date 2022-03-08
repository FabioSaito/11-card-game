import {createDeck} from "./createDeck";

test('create deck with 21 cards', () => {
  const deck = createDeck()
  const MAGIC_DECK_SIZE = 21
  expect(deck.length).toBe(MAGIC_DECK_SIZE);
});

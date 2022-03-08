class Deck {
  CARD_SUITS = ["hearts", "spades", "diams", "clubs"];
  CARD_NUMBERS = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  current_deck = [];

  constructor() {
    this.current_deck = this.generateDeck();
    this.shuffleCurrentDeck()
  }

  generateDeck() {
    return this.CARD_SUITS.flatMap((suit) =>
      this.CARD_NUMBERS.map((n) => ({ suit, n }))
    );
  }

  shuffleCurrentDeck() {
    this.current_deck.sort(() => Math.random() - 0.5);
  }

  getRandomDeck(deckSize) {
    return Array(deckSize).fill().map( () => this.current_deck.splice(Math.floor(Math.random()*this.current_deck.length), 1)[0] )
  }
}

export {Deck};

function ShowCards(props) {
  return props.deck.map((card, index) =>
    <div key={index}> {card.suit} {card.n} </div>
  )
}

export {ShowCards}

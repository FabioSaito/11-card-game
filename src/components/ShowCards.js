import "./ShowCards.css"

function ShowCards(props) {
  return props.deck.map((card, index) =>
    <div className = {`deck__card deck__card--${card.suit}`} key={index} dangerouslySetInnerHTML={{ __html: `${card.n} &${card.suit};`}}></div>
  )
}

export {ShowCards};

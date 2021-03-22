function Card(props) {

  function handleClick() {
    props.onCardClick(props.card.link);
  }

  return (
    <div className="place">
      <button type="button" className="place__delete place__delete_shown" aria-label="Удалить элемeнт"></button>
      <button 
        onClick={handleClick}
        type="button" 
        className="place__cover-button" 
        aria-label="Увеличить картинку">
          <img className="place__cover" alt={props.card.name} src={props.card.link}/>
      </button>
      <div className="place__description">
        <h2 className="place__title">{props.card.name}</h2>
        <button type="button" className="place__like" aria-label="Добавить в избранное"></button>
        <p className="place__like-count">{props.card.likes.length}</p>
      </div> 
    </div>
  )
} 

export default Card
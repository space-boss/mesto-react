import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card'; 
import { apiConfig } from '../utils/api';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    apiConfig.getCard()
    .then((res) => {
      setInitialCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    apiConfig.likeCard(card._id, !isLiked).then((newCard) => {
      setInitialCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    apiConfig.deleteCard(card._id)
    .then(() => {
      setInitialCards(cards.filter((c) => c._id !== card._id));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div 
          onClick={props.onEditAvatar}
          className="profile__userpic-edit-button"></div>
        <img 
          src={currentUser.avatar}
          className="profile__pic" 
          alt="Фото пользователя" />
        <h1 className="profile__title">{currentUser.name}</h1>
        <button 
          type="button" 
          onClick={props.onEditProfile} 
          className="profile__edit-button" 
          aria-label="Редактировать профиль" />
        <p className="profile__subtitle">{currentUser.about}</p>
        <button 
          type="button"  
          onClick={props.onAddPlace} 
          className="profile__add-button"
          aria-label="Добавить новое место" />
      </section>

      <section className="places">
        {cards.map((card) => (
          <Card 
            card={card} 
            key={card._id} 
            onCardClick={props.onCardClick}
            onLikeClick={handleCardLike}
            onCardDelete={handleCardDelete}/>
        ))}
      </section>

    </main>
  )
}

export default Main; 
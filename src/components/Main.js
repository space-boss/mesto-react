import React from 'react';
import { apiConfig } from '../utils/api';
import Card from './Card'; 

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    apiConfig.getInfo()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  React.useEffect(() => {
    apiConfig.getCard()
    .then((res) => {
      setInitialCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  return (
    <main className="content">
      <section className="profile">
        <div 
          onClick={props.onEditAvatar}
          className="profile__userpic-edit-button"></div>
        <img 
          src={userAvatar}
          className="profile__pic" 
          alt="Фото пользователя" />
        <h1 className="profile__title">{userName}</h1>
        <button 
          type="button" 
          onClick={props.onEditProfile} 
          className="profile__edit-button" 
          aria-label="Редактировать профиль" />
        <p className="profile__subtitle">{userDescription}</p>
        <button 
          type="button"  
          onClick={props.onAddPlace} 
          className="profile__add-button"
          aria-label="Добавить новое место" />
      </section>

      <section className="places">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
        ))}
      </section>

    </main>
  )
}

export default Main; 
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, toggleAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, toggleEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, toggleZoomImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');



  function handleEditAvatarClick() {
    toggleEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    toggleEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    toggleAddPlacePopup(true);
  }

  function closeAllPopups() {
    toggleAddPlacePopup(false);
    toggleEditAvatarPopup(false);
    toggleEditProfilePopup(false);
    toggleZoomImagePopup(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    toggleZoomImagePopup(true);
  }


  return (
    <div className = "page">
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onEditAvatar = {handleEditAvatarClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
      />
      <Footer />s

      <PopupWithForm 
        name='profile' 
        title='Редактировать профиль'
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}>

        <input type="text" className="popup__input-field popup__input-field_value_name" id="profile-username" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
        <span id="profile-username-error" className="popup__input-field popup__input-field_error" />
        <input type="text" className="popup__input-field popup__input-field_value_job" id="profile-job" name="about" placeholder="О себе" required minLength={2} maxLength={200} />
        <span id="profile-job-error" className="popup__input-field popup__input-field_error" />
      </PopupWithForm>

      <PopupWithForm 
        name='place' 
        title='Новое место'
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}>

        <input type="text" className="popup__input-field popup__input-field_value_place" id="place-name" name="place" placeholder="Название" required minLength={2} maxLength={30} />
        <span id="place-name-error" className="popup__input-field popup__input-field_error" />
        <input type="url" className="popup__input-field popup__input-field_value_placeurl" id="place-url" name="link" placeholder="Ссылка на картинку" required />
        <span id="place-url-error" className="popup__input-field popup__input-field_error" />
      </PopupWithForm>

      <PopupWithForm 
        name='avatar'
        title='Обновить аватар'
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}>

       <input type="url" className="popup__input-field popup__input-field_value_userpic" id="userpic" name="avatar" placeholder="Ссылка" required />
       <span id="userpic-error" className="popup__input-field popup__input-field_error" />
      </PopupWithForm>

      <PopupWithForm 
        name='delete-confirmation' 
        title='Вы уверены?'
        onClose = {closeAllPopups}> 
        <button type="button" className="popup__submit-button popup__submit-button_delete">Да</button>
      </PopupWithForm>

      <ImagePopup 
        isOpen  = {isImagePopupOpen}
        card    = {selectedCard}
        onClose = {closeAllPopups}
      />

      <template className="template" />
    </div>
  );
}

export default App;
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { apiConfig } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, toggleAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, toggleEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, toggleZoomImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  const [currentUser, setCurrentUser] = React.useState({avatar: '', name: '', about: ''});
  /*const [cards, setInitialCards] = React.useState([]);*/


  React.useEffect(() => {
    apiConfig.getInfo()
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  /*React.useEffect(() => {
    apiConfig.getCard()
    .then((res) => {
      setInitialCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);*/
 
  function handleUpdateUser(user) {
    if (user.name !== '' && user.about !== '') {
      apiConfig.updateInfo(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  function handleUpdateAvatar(user) {
    if (user.avatar !== '') {
      apiConfig.updateAvatar(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });  
   }  
  }

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
    setSelectedCard({name: '', link: ''});
  }

  function handleCardClick(card) {
    if (card.link !== '' && card.name !== '') {
      setSelectedCard({name: card.name, link: card.link});
      toggleZoomImagePopup(true);
    }
  }
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className = "page">
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onEditAvatar = {handleEditAvatarClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick = {handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          onUpdateUser = {handleUpdateUser}
        />

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

        <EditAvatarPopup
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          onUpdateAvatar = {handleUpdateAvatar}      
        />  

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

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
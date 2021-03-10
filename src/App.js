import './App.css';



function App() {
  return (
    <div className = "App">
        <header className="header">
          <img className="header__logo" src="<%=require('./images/mesto-logo.svg')%>" alt="Логотип сервиса место" />
        </header>

        <main className="content">
          <section className="profile">
            <div className="profile__userpic-edit-button" />
            <img className="profile__pic" src="#" alt="Фото пользователя" />
            <h1 className="profile__title" />
            <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" />
            <p className="profile__subtitle" />
            <button type="button" className="profile__add-button" aria-label="Добавить новое место" />
          </section>
          <section className="places">
          </section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>

        <section className="popup popup_profile">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Закрыть форму" />
            <h3 className="popup__title">Редактировать профиль</h3>
            <form name="editValues" method="post" className="popup__form popup__form-profile" noValidate>
              <input type="text" className="popup__input-field popup__input-field_value_name" id="profile-username" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
              <span id="profile-username-error" className="popup__input-field popup__input-field_error" />
              <input type="text" className="popup__input-field popup__input-field_value_job" id="profile-job" name="about" placeholder="О себе" required minLength={2} maxLength={200} />
              <span id="profile-job-error" className="popup__input-field popup__input-field_error" />
              <input name="submit" type="submit" defaultValue="Сохранить" className="popup__submit-button" />
            </form>
          </div>
        </section>

        <section className="popup popup_place">
          <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Закрыть форму" />
            <h3 className="popup__title">Новое место</h3>
            <form name="editValues" method="post" className="popup__form popup__form-place" noValidate>
              <input type="text" className="popup__input-field popup__input-field_value_place" id="place-name" name="place" placeholder="Название" required minLength={2} maxLength={30} />
              <span id="place-name-error" className="popup__input-field popup__input-field_error" />
              <input type="url" className="popup__input-field popup__input-field_value_placeurl" id="place-url" name="link" placeholder="Ссылка на картинку" required />
              <span id="place-url-error" className="popup__input-field popup__input-field_error" />
              <input name="submit" type="submit" defaultValue="Сохранить" className="popup__submit-button popup__submit-button_place" />
            </form>
          </div>
        </section>

        <section className="popup popup_avatar">
          <div className="popup__container-avatar">
            <button type="button" className="popup__close" aria-label="Закрыть форму" />
            <h3 className="popup__title">Обновить аватар</h3>
            <form name="editValues" method="post" className="popup__form popup__form-avatar" noValidate>
              <input type="url" className="popup__input-field popup__input-field_value_userpic" id="userpic" name="avatar" placeholder="Ссылка" required />
              <span id="userpic-error" className="popup__input-field popup__input-field_error" />
              <input name="submit" type="submit" defaultValue="Сохранить" className="popup__submit-button" />
            </form>
          </div>
        </section>

        <section className="popup popup_delete-confirmation">
          <div className="popup__container-confirmation">
            <button type="button" className="popup__close" aria-label="Закрыть форму" />
            <h3 className="popup__title">Вы уверены?</h3>
            <button type="button" className="popup__submit-button popup__submit-button_delete">Да</button>
          </div>
        </section>

        <section className="popup popup_zoom" id="popup">
          <div className="popup__picture">
            <button type="button" className="popup__close" aria-label="Закрыть форму" />
            <img className="popup__img" alt="#" src="#" />
            <p className="popup__caption" />
          </div>
        </section>

        <template className="template" />
      </div>

  );
}

export default App;

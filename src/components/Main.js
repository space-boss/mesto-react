function Main(props) {

return (
  <main className="content">
    <section className="profile">
      <div 
        onClick={props.onEditAvatar}
        className="profile__userpic-edit-button" />
      <img className="profile__pic" src="#" alt="Фото пользователя" />
      <h1 className="profile__title" />
      <button 
        type="button" 
        onClick={props.onEditProfile} 
        className="profile__edit-button" 
        aria-label="Редактировать профиль" />
      <p className="profile__subtitle" />
      <button 
        type="button"  
        onClick={props.onAddPlace} 
        className="profile__add-button"
        aria-label="Добавить новое место" />
    </section>
    <section className="places"></section>
  </main>
)
}

export default Main; 
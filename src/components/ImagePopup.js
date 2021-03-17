function ImagePopup() {

  return (
    <section className="popup popup_zoom" id="popup">
    <div className="popup__picture">
      <button type="button" className="popup__close" aria-label="Закрыть форму" />
      <img className="popup__img" alt="#" src="#" />
      <p className="popup__caption" />
    </div>
  </section>
  );
}

export default ImagePopup;
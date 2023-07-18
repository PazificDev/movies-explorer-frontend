import "./InfoPopup.css"
import ok from "../../images/Popup/Ok.svg";
import reject from "../../images/Popup/Reject.svg";

const InfoPopup = ({ isEditingSuccess, setIsEditingSuccess, isPopupOpened, setIsPopupOpened, errorMessage }) => {

  const handlePopupClose = () => {
    setIsPopupOpened(!isPopupOpened)
    setIsEditingSuccess(null)
  }

  return (
    <section className={"popup popup_opened"}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={handlePopupClose}
        />
        <img
          src={isEditingSuccess ? ok : reject}
          alt={isEditingSuccess ? "ok" : "reject"}
          className="popup__info-image"
        />
        <p className="popup__info-text">
          {isEditingSuccess
            ? "Успешно изменено!"
            : errorMessage}
        </p>
      </div>
    </section>
  );
};

export default InfoPopup;

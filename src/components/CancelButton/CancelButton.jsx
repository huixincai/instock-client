import "./CancelButton.scss";

function CTAButton({ clickHandler, buttonText }) {
  return (
    <div className="CancelButton">
      <button onClick={clickHandler} className="CancelButton__button">
        {buttonText}
      </button>
    </div>
  );
}

export default CTAButton;

import "./CTAButton.scss";

function CTAButton({ clickHandler, buttonText }) {
  return (
    <div className="CTAButton">
      <button onClick={clickHandler} className="CTAButton__cta-button">
        {buttonText}
      </button>
    </div>
  );
}

export default CTAButton;

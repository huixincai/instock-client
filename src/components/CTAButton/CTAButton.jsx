import "./CTAButton.scss";

function CTAButton({ onClick, buttonText, variant = "primary" }) {
  return (
    <div className="CTAButton">
      <button onClick={onClick} className={`CTAButton__cta-button CTAButton__cta-button--${variant}`}>
        {buttonText}
      </button>
    </div>
  );
}

export default CTAButton;

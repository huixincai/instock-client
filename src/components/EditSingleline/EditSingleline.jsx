import React, { useEffect, useState } from "react";
import "./EditSingleline.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const EditSingleline = ({ label, setValue, submitClicked }) => {
  let trimmedLabel = label.replace(/\s/g, "");

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!inputValue) {
      setError(inputValue.trim() === "" && submitClicked);
    }
  }, [inputValue, submitClicked]);

  return (
    <div className="edit-item">
      <label>{label}</label>
      <input
        type="text"
        autoComplete="off"
        placeholder={label}
        name={trimmedLabel}
        value={inputValue}
        onChange={changeHandler}
        className={
          error
            ? "edit-item__input edit-item__input--error"
            : "edit-item__input"
        }
      />
      {error && (
        <div className="edit-item__error-wrapper">
          <img src={errorIcon} alt="errorIcon" />
          <p className="edit-item__error-prompt">This field is required</p>
        </div>
      )}
    </div>
  );
};

export default EditSingleline;

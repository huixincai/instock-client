import React, { useState, useEffect } from "react";
import "./EditMultiline.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const EditMultiline = ({ label, value, setValue, submitClicked, errorMsg }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  useEffect(() => {
    if (errorMsg) {
      setError(true);
    }
    if (!inputValue) {
      setError(inputValue.trim() === "" && submitClicked);
    }
  }, [submitClicked, inputValue, errorMsg]);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  const handleBlur = (e) => {
    setError(!e.target.value.trim());
  };

  return (
    <div className="edit-multiline">
      <label htmlFor={`edit${label}`}>{label}</label>
      <textarea
        type="text"
        autoComplete="off"
        placeholder={label}
        value={inputValue}
        onChange={changeHandler}
        onBlur={handleBlur}
        className={
          error
            ? "edit-multiline__input edit-multiline__input--error"
            : "edit-multiline__input"
        }
      />
      {error && (
        <div className="edit-multiline__error-wrapper">
          <img src={errorIcon} alt="error icon" />
          <p className="edit-multiline__error-msg">
            {errorMsg || "This field is required"}
          </p>
        </div>
      )}
    </div>
  );
};

export default EditMultiline;

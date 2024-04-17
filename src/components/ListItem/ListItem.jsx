import "./ListItem.scss";
import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";

const ListItem = ({ label, content, link }) => {
  return (
    <div className="label-item">
      {label && <label>{label}</label>}
      {!link && <p>{content}</p>}
      {link && (
        <div className="label-item__link-wrapper">
          <Link className="label-item__link">{content}</Link>
          <img src={arrowIcon} alt="arrow" />
        </div>
      )}
    </div>
  );
};

export default ListItem;

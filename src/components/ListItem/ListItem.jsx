import "./ListItem.scss";
import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ label, content, link }) => {
  return (
    <div className="label-item">
      {label && <label>{label}</label>}
      {!link && <p>{content}</p>}
      {link && <Link className="label-item__link">{content}</Link>}
    </div>
  );
};

export default ListItem;

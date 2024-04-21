import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit_white_24dp.svg";

import "./DetailPage.scss";

const DetailPage = ({ title, backPath, editPath, children }) => {
  return (
    <div className="detail">
      <div className="detail__page-header">
        <div className="detail__title-container">
          <Link to={backPath} className="detail__arrow">
            <img src={backArrow} alt="back arrow" />
          </Link>
          {title ? <h2>{title}</h2> : <h2>Item not found</h2>}
        </div>
        <Link to={editPath} className="detail__editicon">
          <img src={editIcon} alt="edit" />
          <div className="detail__edittext">Edit</div>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DetailPage;

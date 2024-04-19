// WarehouseDetail.js
import React from "react";
import "./WarehouseDetail.scss";

const WarehouseDetail = ({ warehouse }) => {
  if (!warehouse) return null;

  return (
    <div className="detail__wrapper">
      <div className="detail__address">
        <p className="detail__heading">WAREHOUSE ADDRESS:</p>
        <p className="detail__text-one">
          {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
        </p>
        <p className="detail__text-two">
          {warehouse.address}
          <br />
          {`${warehouse.city}, ${warehouse.country}`}
        </p>
      </div>
      <div className="detail__contact">
        <div className="detail__contact-name">
          <p className="detail__heading">CONTACT NAME:</p>
          <p className="detail__text">{warehouse.contact_name}</p>
          <p className="detail__text">{warehouse.contact_position}</p>
        </div>
        <div className="detail__contact-info">
          <p className="detail__heading">CONTACT INFORMATION:</p>
          <p className="detail__text">{warehouse.contact_phone}</p>
          <p className="detail__text">{warehouse.contact_email}</p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetail;

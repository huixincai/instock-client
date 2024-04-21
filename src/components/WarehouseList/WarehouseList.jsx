import React from "react";
import ListItem from "../ListItem/ListItem";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

import "./WarehouseList.scss";

const WarehouseList = ({ warehouses, onShowDeleteModal }) => {
  return (
    warehouses && (
      <div className="list">
        {warehouses.map((warehouse) => {
          return (
            <div className="warehouse-list" key={warehouse.id}>
              <div className="warehouse-list__info-wrapper">
                <div className="warehouse-list__left-col">
                  <div className="warehouse-list__first-row">
                    <ListItem
                      label="warehouse"
                      content={warehouse.warehouse_name}
                      link={`/warehouses/${warehouse.id}`}
                    />
                  </div>
                  <ListItem
                    label="address"
                    content={`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                  />
                </div>
                <div className="warehouse-list__right-col">
                  <div className="warehouse-list__first-row">
                    <ListItem
                      label="contact name"
                      content={warehouse.contact_name}
                    />
                  </div>
                  <ListItem
                    label="contact information"
                    content={warehouse.contact_phone}
                  />
                  <ListItem content={warehouse.contact_email} />
                </div>
              </div>
              <div className="warehouse-list__icon-wrapper">
                <img src={deleteIcon} alt="delete icon" onClick={() => {onShowDeleteModal(warehouse)}} />
                <Link to={`/warehouses/edit/${warehouse.id}`}>
                  <img src={editIcon} alt="edit icon" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default WarehouseList;

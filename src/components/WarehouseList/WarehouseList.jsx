import "./WarehouseList.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState();
  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await axios.get("http://localhost:8080/api/warehouses");
      setWarehouses(response.data);
    };
    fetchWarehouses();
  }, []);

  return (
    warehouses && (
      <>
        {warehouses.map((warehouse) => {
          return (
            <div key={warehouse.id}>
              <div className="warehouse-list">
                <div className="warehouse-list__info-wrapper">
                  <div className="warehouse-list__left-col">
                    <ListItem
                      label="warehouse"
                      content={warehouse.warehouse_name}
                    />
                    <ListItem
                      label="address"
                      content={`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                    />
                  </div>
                  <div className="warehouse-list__right-col">
                    <ListItem
                      label="contact name"
                      content={warehouse.contact_name}
                    />
                    <ListItem
                      label="contact information"
                      content={warehouse.contact_phone}
                    />
                    <ListItem content={warehouse.contact_email} />
                  </div>
                </div>
                <div className="warehouse-list__icon-wrapper">
                  <img src={deleteIcon} alt="delete icon" />
                  <img src={editIcon} alt="edit icon" />
                </div>
              </div>
            </div>
          );
        })}
      </>
    )
  );
};

export default WarehouseList;

import "./WarehouseList.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

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
            <div className="warehouse-list" key={warehouse.id}>
              <div className="warehouse-list__info-wrapper">
                <div className="warehouse-list__left-col">
                  <div className="warehouse-list__first-row">
                    <ListItem
                      label="warehouse"
                      content={warehouse.warehouse_name}
                      link={"/"}
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
                <img src={deleteIcon} alt="delete icon" />
                <img src={editIcon} alt="edit icon" />
              </div>
            </div>
          );
        })}

        <table className="warehouse-table">
          <thead>
            <tr>
              <th className="label warehouse-table__first-col">
                warehouse
                <img
                  className="warehouse-table__sort-icon"
                  src={sortIcon}
                  alt="filter icon"
                />
              </th>
              <th className="label">
                address
                <img
                  className="warehouse-table__sort-icon"
                  src={sortIcon}
                  alt="filter icon"
                />
              </th>
              <th className="label">
                contact name
                <img
                  className="warehouse-table__sort-icon"
                  src={sortIcon}
                  alt="filter icon"
                />
              </th>
              <th className="label">
                contact information
                <img
                  className="warehouse-table__sort-icon"
                  src={sortIcon}
                  alt="filter icon"
                />
              </th>
              <th className="label warehouse-table__last-col">actions</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((warehouse) => {
              return (
                <tr key={warehouse.id}>
                  <td className="warehouse-table__first-col">
                    <ListItem content={warehouse.warehouse_name} link={"/"} />
                  </td>
                  <td>
                    <ListItem
                      content={`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                    />
                  </td>
                  <td>
                    <ListItem content={warehouse.contact_name} />
                  </td>
                  <td>
                    <ListItem content={warehouse.contact_phone} />
                    <ListItem content={warehouse.contact_email} />
                  </td>
                  <td className="warehouse-table__last-col">
                    <div className="warehouse-table__icon-wrapper">
                      <img
                        className="warehouse-table__delete-icon"
                        src={deleteIcon}
                        alt="delete icon"
                      />
                      <img src={editIcon} alt="edit icon" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
  );
};

export default WarehouseList;

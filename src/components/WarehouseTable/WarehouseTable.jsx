import React from "react";
import ListItem from "../ListItem/ListItem";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";

import "./WarehouseTable.scss";

const WarehouseTable = ({ warehouses, onShowDeleteModal }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="label table__first-col">
            warehouse
            <img
              className="table__sort-icon"
              src={sortIcon}
              alt="filter icon"
            />
          </th>
          <th className="label">
            address
            <img
              className="table__sort-icon"
              src={sortIcon}
              alt="filter icon"
            />
          </th>
          <th className="label">
            contact name
            <img
              className="table__sort-icon"
              src={sortIcon}
              alt="filter icon"
            />
          </th>
          <th className="label">
            contact information
            <img
              className="table__sort-icon"
              src={sortIcon}
              alt="filter icon"
            />
          </th>
          <th className="label table__last-col">actions</th>
        </tr>
      </thead>
      <tbody>
        {warehouses.map((warehouse) => {
          return (
            <tr key={warehouse.id}>
              <td className="table__first-col">
                <ListItem
                  content={warehouse.warehouse_name}
                  link={`/warehouses/${warehouse.id}`}
                />
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
              <td className="table__last-col">
                <div className="table__icon-wrapper">
                  <img
                    className="table__delete-icon"
                    src={deleteIcon}
                    alt="delete icon"
                    onClick={() => {onShowDeleteModal(warehouse)}}
                  />
                  <Link to={`/warehouses/edit/${warehouse.id}`}>
                    <img src={editIcon} alt="edit icon" />
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WarehouseTable;

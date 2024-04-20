import React from "react";
import "./InventoryTable.scss";
import ListItem from "../ListItem/ListItem";
import StatusTag from "../StatusTag/StatusTag";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

const InventoryTable = ({ inventories }) => {
  return (
    inventories.length > 0 && (
      <table className="inventory-table">
        <thead>
          <tr>
            <th className="label inventory-table__first-col">
              INVENTORY ITEM
              <img
                className="inventory-table__sort-icon"
                src={sortIcon}
                alt="filter icon"
              />
            </th>
            <th className="label">
              CATEGORY
              <img
                className="inventory-table__sort-icon"
                src={sortIcon}
                alt="filter icon"
              />
            </th>
            <th className="label">
              STATUS
              <img
                className="inventory-table__sort-icon"
                src={sortIcon}
                alt="filter icon"
              />
            </th>
            <th className="label">
              QTY
              <img
                className="inventory-table__sort-icon"
                src={sortIcon}
                alt="filter icon"
              />
            </th>
            <th className="label">
              WAREHOUSE
              <img
                className="inventory-table__sort-icon"
                src={sortIcon}
                alt="filter icon"
              />
            </th>
            <th className="label inventory-table__last-col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => {
            return (
              <tr key={inventory.id}>
                <td className="inventory-table__first-col">
                  <ListItem
                    content={inventory.item_name}
                    link={`/inventories/${inventory.id}`}
                  />
                </td>
                <td>
                  <ListItem content={`${inventory.category}`} />
                </td>
                <td>
                  <ListItem content={<StatusTag status={inventory.status} />} />
                </td>
                <td>
                  <ListItem content={`${inventory.quantity}`} />
                </td>
                <td>
                  <ListItem content={`${inventory.warehouse_name}`} />
                </td>
                <td className="table__last-col">
                  <div className="table__icon-wrapper">
                    <img
                      className="table__delete-icon"
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
    )
  );
};

export default InventoryTable;

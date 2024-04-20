import React from "react";
import ListItem from "../ListItem/ListItem";
import StatusTag from "../StatusTag/StatusTag";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import "./InventoryList.scss";

const InventoryList = ({ inventories, onShowDeleteModal }) => {
  return (
    inventories && (
      <div className="inventory-list">
        {inventories.map((inventory) => {
          return (
            <div key={inventory.id}>
              <div className="inventory-list__info-wrapper">
                <div className="inventory-list__col inventory-list__col--left">
                  <ListItem
                    label="Inventory Iterm"
                    content={inventory.item_name}
                    link={`/inventories/${inventory.id}`}
                  />
                  <ListItem
                    label="category"
                    content={`${inventory.category}`}
                  />
                </div>
                <div className="inventory-list__col">
                  <ListItem
                    label="status"
                    content={<StatusTag status={inventory.status} />}
                  />
                  <ListItem label="QTY" content={inventory.quantity} />
                  <ListItem
                    label="warehouse"
                    content={inventory.warehouse_name}
                  />
                </div>
              </div>
              <div className="inventory-list__icon-wrapper">
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={() => onShowDeleteModal(inventory)}
                />
                <img src={editIcon} alt="edit icon" />
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default InventoryList;

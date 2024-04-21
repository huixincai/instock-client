import React from "react";
import ListItem from "../ListItem/ListItem";
import StatusTag from "../StatusTag/StatusTag";

import "./InventoryDetail.scss";

const InventoryDetail = ({ inventory }) => {
  if (!inventory) return null;

  return (
    <div className="inventory-detail">
      <div className="inventory-detail__col inventory-detail__col--left">
        <div className="inventory-detail__description">
          <ListItem label="item description:" content={inventory.description} />
        </div>
        <div className="inventory-detail__category">
          <ListItem label="category:" content={inventory.category} />
        </div>
      </div>
      <div className="inventory-detail__col inventory-detail__col--right">
        <ListItem
          label="status"
          content={<StatusTag status={inventory.status} />}
        />
        <ListItem label="QTY" content={inventory.quantity} />
        <ListItem label="warehouse" content={inventory.warehouse_name} />
      </div>
    </div>
  );
};

export default InventoryDetail;

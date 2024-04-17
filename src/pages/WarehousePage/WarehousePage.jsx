import React from "react";
import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SearchBox from "../../components/SearchBox/SearchBox";
import CTAButton from "../../components/CTAButton/CTAButton";

const WarehousePage = () => {
  return (
    <div className="warehouse-page">
      <div className="warehouse-page__page-header">
        <h2>Warehouses</h2>
        <SearchBox />
        <CTAButton buttonText="+ Add New Warehouse" />
      </div>
      <WarehouseList />
    </div>
  );
};

export default WarehousePage;

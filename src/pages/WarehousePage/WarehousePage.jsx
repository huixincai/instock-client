import React from "react";
import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SearchBox from "../../components/SearchBox/SearchBox";

const WarehousePage = () => {
  return (
    <div className="warehouse-page">
      <div className="warehouse-page__page-header">
        <h2>Warehouses</h2>
        <SearchBox />
      </div>
      <WarehouseList />
    </div>
  );
};

export default WarehousePage;

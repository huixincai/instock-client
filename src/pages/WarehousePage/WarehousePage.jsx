import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseTable from "../../components/WarehouseTable/WarehouseTable";
import SearchBox from "../../components/SearchBox/SearchBox";
import CTAButton from "../../components/CTAButton/CTAButton";

const WarehousePage = () => {
  const [warehouses, setWarehouses] = useState();
  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/warehouses"
        );
        setWarehouses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWarehouses();
  }, []);

  return (
    warehouses && (
      <div className="warehouse-page">
        <div className="warehouse-page__page-header">
          <h2>Warehouses</h2>
          <SearchBox />
          <Link className="warehouse-page__add-button" to="/warehouses/new">
            <CTAButton buttonText="+ Add New Warehouse" />
          </Link>
        </div>
        <WarehouseList warehouses={warehouses} />
        <WarehouseTable warehouses={warehouses} />
      </div>
    )
  );
};

export default WarehousePage;

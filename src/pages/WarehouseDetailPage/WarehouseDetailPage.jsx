import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./WarehouseDetailPage.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryTable from "../../components/InventoryTable/InventoryTable";

const WarehouseDetail = () => {
  const [inventories, setInventories] = useState();
  const [warehouseName, setWarehouseName] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/warehouses/${id}/inventories`
        );
        setInventories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/warehouses/${id}`
        );
        setWarehouseName(response.data.warehouse_name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWarehouse();
    fetchInventories();
  }, []);

  return (
    <div className="warehouse-detail">
      <div className="warehouse-detail__page-header">
        <Link to="/warehouses">
          <img src={backArrow} alt="back arrow" />
        </Link>
        <h2>{warehouseName ? warehouseName : "Warehouse"}</h2>
      </div>
      {inventories && <InventoryList inventories={inventories} />}
      {inventories && <InventoryTable inventories={inventories} />}
    </div>
  );
};

export default WarehouseDetail;

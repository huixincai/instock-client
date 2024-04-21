import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import WarehouseDetail from "../../components/WarehouseDetail/WarehouseDetail";
import InventoryListTable from "../../components/InventoryListTable/InventoryListTable";
import DetailPage from "../DetailPage/DetailPage";

import "./WarehouseDetailPage.scss";

const WarehouseDetailPage = () => {
  const [warehouse, setWarehouse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const [inventories, setInventories] = useState();

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/warehouses/${id}`
        );
        setWarehouse(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching warehouse details:", error);
        setError("Failed to fetch warehouse details.");
        setLoading(false);
      }
    };

    const fetchInventories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/warehouses/${id}/inventories`
        );
        setInventories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching warehouse details:", error);
        setError("Failed to fetch warehouse details.");
        setLoading(false);
      }
    };

    fetchWarehouseDetails();
    fetchInventories();
  }, [id]);

  if (loading) {
    return <div>Loading warehouse details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DetailPage
      title={warehouse?.warehouse_name}
      backPath="/warehouses"
      editPath={`/warehouses/edit/${id}`}
    >
      {warehouse && <WarehouseDetail warehouse={warehouse} />}
      <InventoryListTable
        inventories={inventories}
        setInventories={setInventories}
      />
    </DetailPage>
  );
};

export default WarehouseDetailPage;

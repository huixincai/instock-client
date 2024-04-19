import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import WarehouseDetail from "../../components/WarehouseDetail/WarehouseDetail";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit_white_24dp.svg";
import "./WarehouseDetailPage.scss";

const WarehouseDetailPage = () => {
  const [warehouse, setWarehouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

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

    fetchWarehouseDetails();
  }, [id]);

  if (loading) {
    return <div>Loading warehouse details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="detail">
      <div className="detail__page-header">
        <div className="detail__title-container">
          <Link to="/warehouses" className="detail__arrow">
            <img src={backArrow} alt="back arrow" />
          </Link>

          {warehouse ? (
            <h2>{warehouse.warehouse_name}</h2>
          ) : (
            <h2>Warehouse not found</h2>
          )}
        </div>
        <div className="detail__editicon">
          <img src={editIcon} alt="edit" />
          <div className="detail__edittext">Edit</div>
        </div>
      </div>
      {warehouse && <WarehouseDetail warehouse={warehouse} />}
    </div>
  );
};

export default WarehouseDetailPage;

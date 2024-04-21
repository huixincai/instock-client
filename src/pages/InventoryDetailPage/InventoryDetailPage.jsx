import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import InventoryDetail from "../../components/InventoryDetail/InventoryDetail";
import DetailPage from "../DetailPage/DetailPage";

import "./InventoryDetailPage.scss";

const InventoryDetailPage = () => {
  const [inventory, setInventory] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/inventories/${id}`
        );
        setInventory(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching inventory details:", error);
        setLoading(false);
      }
    };

    fetchInventoryDetails();
  }, [id]);

  if (loading) {
    return <div>Loading inventory details...</div>;
  }

  return (
    <DetailPage
      title={inventory?.item_name}
      backPath="/inventories"
      editPath={`/inventories/edit/${id}`}
    >
      {inventory && <InventoryDetail inventory={inventory} />}
    </DetailPage>
  );
};

export default InventoryDetailPage;

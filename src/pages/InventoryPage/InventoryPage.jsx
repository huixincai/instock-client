import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryTable from "../../components/InventoryTable/InventoryTable";
import SearchBox from "../../components/SearchBox/SearchBox";
import CTAButton from "../../components/CTAButton/CTAButton";


const InventoryPage = () => {
  const [inventories, setInventories] = useState();
  useEffect(() => {
    const fetchInventories = async () => {
      const response = await axios.get("http://localhost:8080/api/inventories");
      setInventories(response.data);
    };
    fetchInventories();
  }, []);

  return (
    inventories && (
      <div className="inventory-page">
        <div className="inventory-page__page-header">
          <h2>Inventory</h2>
          <SearchBox />
          <CTAButton buttonText="+ Add New Item" />
        </div>
        <InventoryList inventories={inventories} />
        <InventoryTable inventories={inventories} />
      </div>
    )
  );
};

export default InventoryPage;

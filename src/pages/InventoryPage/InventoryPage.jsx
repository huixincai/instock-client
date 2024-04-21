import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBox from "../../components/SearchBox/SearchBox";
import CTAButton from "../../components/CTAButton/CTAButton";
import InventoryListTable from "../../components/InventoryListTable/InventoryListTable";

import "./InventoryPage.scss";

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
          <Link className="inventory-page__add-button" to="/inventories/new">
            <CTAButton buttonText="+ Add New Item" />
          </Link>
        </div>
        <InventoryListTable
          inventories={inventories}
          setInventories={setInventories}
        />
      </div>
    )
  );
};

export default InventoryPage;

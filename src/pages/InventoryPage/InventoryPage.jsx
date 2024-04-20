import React, { useEffect, useState } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryTable from "../../components/InventoryTable/InventoryTable";
import SearchBox from "../../components/SearchBox/SearchBox";
import CTAButton from "../../components/CTAButton/CTAButton";
import Modal from "../../components/Modal/Modal";

import "./InventoryPage.scss";

const InventoryPage = () => {
  const [inventories, setInventories] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [inventoryToDelete, setInventoryToDelete] = useState();

  useEffect(() => {
    const fetchInventories = async () => {
      const response = await axios.get("http://localhost:8080/api/inventories");
      setInventories(response.data);
    };
    fetchInventories();
  }, []);

  const onShowDeleteModal = (inventory) => {
    setShowDeleteModal(true);
    setInventoryToDelete(inventory);
  };

  const onCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setInventoryToDelete();
  };

  const onDeleteInventory = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/inventories/${inventoryToDelete.id}`
      );
      const updatedInventories = inventories.filter(
        (inventory) => inventory.id !== inventoryToDelete.id
      );
      setInventories(updatedInventories);
      setShowDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    inventories && (
      <div className="inventory-page">
        <div className="inventory-page__page-header">
          <h2>Inventory</h2>
          <SearchBox />
          <CTAButton buttonText="+ Add New Item" />
        </div>
        <InventoryList
          inventories={inventories}
          onShowDeleteModal={onShowDeleteModal}
        />
        <InventoryTable
          inventories={inventories}
          onShowDeleteModal={onShowDeleteModal}
        />
        {showDeleteModal && (
          <Modal
            title={`Delete ${inventoryToDelete.item_name} inventory item?`}
            content={`Please confirm that you’d like to delete ${inventoryToDelete.item_name} from the inventory list.\nYou won’t be able to undo this action.`}
            onClose={onCloseDeleteModal}
            onDelete={onDeleteInventory}
          />
        )}
      </div>
    )
  );
};

export default InventoryPage;

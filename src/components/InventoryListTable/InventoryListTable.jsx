import React, { useState } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryTable from "../../components/InventoryTable/InventoryTable";
import Modal from "../../components/Modal/Modal";

import "./InventoryListTable.scss";

const InventoryListTable = ({ inventories, setInventories }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [inventoryToDelete, setInventoryToDelete] = useState();

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

  if (!inventories) {
    return;
  }

  return (
    <>
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
    </>
  );
};

export default InventoryListTable;

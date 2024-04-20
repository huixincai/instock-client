import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseTable from "../../components/WarehouseTable/WarehouseTable";
import SearchBox from "../../components/SearchBox/SearchBox";
import CTAButton from "../../components/CTAButton/CTAButton";
import Modal from "../../components/Modal/Modal";

import "./WarehousePage.scss";

const WarehousePage = () => {
  const [warehouses, setWarehouses] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState();

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

  const onShowDeleteModal = (warehouse) => {
    setShowDeleteModal(true);
    setWarehouseToDelete(warehouse);
  };

  const onCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setWarehouseToDelete();
  };

  const onDeleteWarehouse = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/warehouses/${warehouseToDelete.id}`
      );
      const updatedWarehouses = warehouses.filter(
        (warehouse) => warehouse.id !== warehouseToDelete.id
      );
      setWarehouses(updatedWarehouses);
      setShowDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

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
        <WarehouseList
          warehouses={warehouses}
          onShowDeleteModal={onShowDeleteModal}
        />
        <WarehouseTable
          warehouses={warehouses}
          onShowDeleteModal={onShowDeleteModal}
        />
        {showDeleteModal && (
          <Modal
            title={`Delete ${warehouseToDelete.warehouse_name} warehouse?`}
            content={`Please confirm that you’d like to delete the ${warehouseToDelete.warehouse_name} from the list of warehouses. You won’t be able to undo this action.`}
            onClose={onCloseDeleteModal}
            onDelete={onDeleteWarehouse}
          />
        )}
      </div>
    )
  );
};

export default WarehousePage;

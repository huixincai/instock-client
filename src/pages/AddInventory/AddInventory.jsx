import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import EditInventory from "../../components/EditInventory/EditInventory";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import "./AddInventory.scss";

const AddInventoryPage = () => {
  const [inventoryItem, setInventoryItem] = useState({
    warehouse_name: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [warehouseOptions, setWarehouseOptions] = useState([]);
  const navigate = useNavigate();

  const statusOptions = [
    {
      label: "In Stock",
      value: "In Stock",
    },
    {
      label: "Out of Stock",
      value: "Out of Stock",
    },
  ];

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const allInventoriesResponse = await axios.get(
          `http://localhost:8080/api/inventories`
        );
        const allInventoryItems = allInventoriesResponse.data;

        const uniqueCategories = [
          ...new Set(allInventoryItems.map((item) => item.category)),
        ];
        setCategoryOptions(
          uniqueCategories.map((category) => ({
            label: category,
            value: category,
          }))
        );

        const warehouseResponse = await axios.get(
          `http://localhost:8080/api/warehouses`
        );
        const warehouses = warehouseResponse.data;
        setWarehouseOptions(
          warehouses.map((warehouse) => ({
            label: warehouse.warehouse_name,
            value: warehouse.warehouse_name,
          }))
        );
        setInventoryItem((prev) => ({
          ...prev,
          category: uniqueCategories[0],
          warehouse_name: warehouses[0]?.warehouse_name,
        }));
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventoryData();
  }, []);

  const handleInputChange = (value, fieldName) => {
    setInventoryItem((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/inventories", {
        warehouse_name: inventoryItem.warehouse_name,
        item_name: inventoryItem.item_name,
        description: inventoryItem.description,
        category: inventoryItem.category,
        status: inventoryItem.status,
        quantity: inventoryItem.quantity,
      });
      navigate("/inventories");
    } catch (error) {
      console.error("Error updating inventory item:", error);
    }
  };

  return (
    <div className="add-inventory">
      <div className="add-inventory__page-header">
        <Link to="/inventories" className="back-link">
          <img src={backArrow} alt="Back" />
        </Link>

        <h2>Add Inventory Item</h2>
      </div>
      <EditInventory
        inventoryData={inventoryItem}
        handleChange={handleInputChange}
        handleSave={handleSave}
        categoryOptions={categoryOptions}
        statusOptions={statusOptions}
        warehouseOptions={warehouseOptions}
      />
    </div>
  );
};

export default AddInventoryPage;

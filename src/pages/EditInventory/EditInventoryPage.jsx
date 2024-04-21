import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import EditInventory from "../../components/EditInventory/EditInventory";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import "./EditInventoryPage.scss";

const EditInventoryPage = () => {
  const [inventoryItem, setInventoryItem] = useState({
    warehouse_name: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [warehouseOptions, setWarehouseOptions] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/inventories/${id}`
        );
        const inventoryData = response.data;

        setInventoryItem({
          warehouseName: inventoryData.warehouse_name,
          itemName: inventoryData.item_name,
          description: inventoryData.description,
          category: inventoryData.category,
          status: inventoryData.status,
          quantity: inventoryData.quantity,
        });

        const response1 = await axios.get(
          `http://localhost:8080/api/inventories`
        );
        const allInventoryItems = response1.data;

        const uniqueCategories = new Set();
        allInventoryItems.forEach((item) => {
          uniqueCategories.add(item.category);
        });

        const categoryOptions = Array.from(uniqueCategories).map(
          (category) => ({
            label: category,
            value: category,
          })
        );

        setCategoryOptions(categoryOptions);

        const uniqueStatus = new Set();
        allInventoryItems.forEach((item) => {
          uniqueStatus.add(item.status);
        });

        const statusOptions = Array.from(uniqueStatus).map((status) => ({
          label: status,
          value: status,
        }));

        setStatusOptions(statusOptions);

        const uniqueWarehouses = new Set();
        allInventoryItems.forEach((item) => {
          uniqueWarehouses.add(item.warehouse_name);
        });

        const warehouseOptions = Array.from(uniqueWarehouses).map(
          (warehouse) => ({
            label: warehouse,
            value: warehouse,
          })
        );

        setWarehouseOptions(warehouseOptions);

        setStatusOptions([
          { label: "In Stock", value: "In Stock" },
          { label: "Out of Stock", value: "Out of Stock" },
        ]);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventoryData();
  }, [id]);

  const handleInputChange = (value, fieldName) => {
    setInventoryItem((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (Object.values(inventoryItem).some((value) => value === "")) {
      console.error("All fields are required");
      return;
    }

    try {
      await axios.put(`http://localhost:8080/api/inventories/${id}`, {
        warehouse_name: inventoryItem.warehouseName,
        item_name: inventoryItem.itemName,
        description: inventoryItem.description,
        category: inventoryItem.category,
        status: inventoryItem.status,
        quantity: inventoryItem.quantity,
      });
      navigate("/inventory");
    } catch (error) {
      console.error("Error updating inventory item:", error);
    }
  };

  return (
    <div className="edit-inventory-page">
      <Link to="/inventory" className="back-link">
        <img src={backArrow} alt="Back" />
      </Link>

      <h1>Edit Inventory Item</h1>

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

export default EditInventoryPage;

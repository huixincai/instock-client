import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditWarehousePage.scss";
import CTAButton from "../../components/CTAButton/CTAButton";
import CancelButton from "../../components/CancelButton/CancelButton";
import EditWarehouseplus from "../../components/EditWarehouseplus/EditWarehouseplus";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

const EditWarehousepage = () => {
  const [warehouseData, setWarehouseData] = useState({
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });

  const [submitClicked, setSubmitClicked] = useState(false);
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchWarehouseData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/warehouses/${id}`
        );
        const { data } = response;

        setWarehouseData({
          warehouseName: data.warehouse_name,
          streetAddress: data.address,
          city: data.city,
          country: data.country,
          contactName: data.contact_name,
          position: data.contact_position,
          phoneNumber: data.contact_phone,
          email: data.contact_email,
        });
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    }
    fetchWarehouseData();
  }, [id]);

  const handleInputChange = (event, fieldName) => {
    const value = event.target.value;
    setWarehouseData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setSubmitClicked(true);

    // Check for empty fields
    if (Object.values(warehouseData).some((value) => !value)) {
      return;
    }

    try {
      await axios.put(`http://localhost:8080/api/warehouses/${id}`, {
        warehouse_name: warehouseData.warehouseName,
        address: warehouseData.streetAddress,
        city: warehouseData.city,
        country: warehouseData.country,
        contact_name: warehouseData.contactName,
        contact_position: warehouseData.position,
        contact_phone: warehouseData.phoneNumber,
        contact_email: warehouseData.email,
      });
      navigate("/warehouses");
    } catch (error) {
      if (error.response.data.type === "phone") {
        setPhoneErrorMsg(error.response.data.message);
      }
      if (error.response.data.type === "email") {
        setEmailErrorMsg(error.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSave} className="add-warehouse">
      <div className="add-warehouse__page-header">
        <Link to="/warehouses">
          <img src={backArrow} alt="back arrow" />
        </Link>
        <h2>Edit Warehouse</h2>
      </div>
      <EditWarehouseplus
        warehouseData={warehouseData}
        handleChange={handleInputChange}
        submitClicked={submitClicked}
        phoneErrorMsg={phoneErrorMsg}
        emailErrorMsg={emailErrorMsg}
      />

      <div className="add-warehouse__button-wrapper">
        <div className="add-warehouse__cancel-button">
          <CancelButton buttonText="Cancel" />
        </div>
        <div className="add-warehouse__add-button">
          <CTAButton buttonText="Save" />
        </div>
      </div>
    </form>
  );
};

export default EditWarehousepage;

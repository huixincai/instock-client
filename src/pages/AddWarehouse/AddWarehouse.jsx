import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddWarehouse.scss";
import CTAButton from "../../components/CTAButton/CTAButton";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

const AddWarehouse = () => {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [submitClicked, setSubmitClicked] = useState(false);
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const navigate = useNavigate();

  const newWarehouse = {
    warehouse_name: warehouseName,
    address: streetAddress,
    city: city,
    country: country,
    contact_name: contactName,
    contact_position: position,
    contact_phone: phoneNumber,
    contact_email: email,
  };

  const addHandler = (e) => {
    e.preventDefault();
    setSubmitClicked(true);

    if (
      !warehouseName ||
      !streetAddress ||
      !city ||
      !country ||
      !contactName ||
      !position ||
      !phoneNumber ||
      !email
    ) {
      return;
    } else {
      const fetchWarehouses = async () => {
        try {
          const response = await axios.post(
            "http://localhost:8080/api/warehouses",
            newWarehouse
          );
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
      fetchWarehouses();
    }
  };

  return (
    <form onSubmit={addHandler} className="add-warehouse">
      <div className="add-warehouse__page-header">
        <Link to="/warehouses">
          <img src={backArrow} alt="back arrow" />
        </Link>
        <h2>Add New Warehouse</h2>
      </div>
      <EditWarehouse
        props={{
          setWarehouseName: setWarehouseName,
          setStreetAddress: setStreetAddress,
          setCity: setCity,
          setCountry: setCountry,
          setContactName: setContactName,
          setPosition: setPosition,
          setPhoneNumber: setPhoneNumber,
          setEmail: setEmail,
          submitClicked: submitClicked,
          phoneErrorMsg: phoneErrorMsg,
          emailErrorMsg: emailErrorMsg,
        }}
      />
      <div className="add-warehouse__button-wrapper">
        <Link to="/" className="add-warehouse__cancel-button">
          <CTAButton buttonText="Cancel" variant="secondary" />
        </Link>
        <div className="add-warehouse__add-button">
          <CTAButton buttonText="+ Add Warehouse" />
        </div>
      </div>
    </form>
  );
};

export default AddWarehouse;

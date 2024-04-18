import React from "react";
import "./EditWarehouse.scss";
import EditSingleline from "../EditSingleline/EditSingleline";

const EditWarehouse = ({ props }) => {
  const {
    setWarehouseName,
    setStreetAddress,
    setCity,
    setCountry,
    setContactName,
    setPosition,
    setPhoneNumber,
    setEmail,
    submitClicked,
  } = props;

  return (
    <div className="edit-warehouse">
      <div className="edit-warehouse__list">
        <h3>Warehouse Details</h3>
        <EditSingleline
          label="Warehouse Name"
          setValue={setWarehouseName}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Street Address"
          setValue={setStreetAddress}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="City"
          setValue={setCity}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Country"
          setValue={setCountry}
          submitClicked={submitClicked}
        />
      </div>
      <div className="edit-warehouse__vertical-line"></div>
      <div className="edit-warehouse__list-right">
        <h3>Contact Details</h3>
        <EditSingleline
          label="Contact Name"
          setValue={setContactName}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Position"
          setValue={setPosition}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Phone Number"
          setValue={setPhoneNumber}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Email"
          setValue={setEmail}
          submitClicked={submitClicked}
        />
      </div>
    </div>
  );
};

export default EditWarehouse;

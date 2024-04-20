import React from "react";
import "./EditWarehouseplus.scss";
import EditSingleline from "../EditSingleline/EditSingleline";

const EditWarehouseplus = ({
  warehouseData,
  handleChange,
  submitClicked,
  phoneErrorMsg,
  emailErrorMsg,
}) => {
  return (
    <div className="edit-warehouse">
      <div className="edit-warehouse__list">
        <h3>Warehouse Details</h3>
        <EditSingleline
          label="Warehouse Name"
          value={warehouseData.warehouseName}
          setValue={(value) =>
            handleChange({ target: { value } }, "warehouseName")
          }
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Street Address"
          value={warehouseData.streetAddress}
          setValue={(value) =>
            handleChange({ target: { value } }, "streetAddress")
          }
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="City"
          value={warehouseData.city}
          setValue={(value) => handleChange({ target: { value } }, "city")}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Country"
          value={warehouseData.country}
          setValue={(value) => handleChange({ target: { value } }, "country")}
          submitClicked={submitClicked}
        />
      </div>
      <div className="edit-warehouse__vertical-line"></div>
      <div className="edit-warehouse__list-right">
        <h3>Contact Details</h3>
        <EditSingleline
          label="Contact Name"
          value={warehouseData.contactName}
          setValue={(value) =>
            handleChange({ target: { value } }, "contactName")
          }
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Position"
          value={warehouseData.position}
          setValue={(value) => handleChange({ target: { value } }, "position")}
          submitClicked={submitClicked}
        />
        <EditSingleline
          label="Phone Number"
          value={warehouseData.phoneNumber}
          setValue={(value) =>
            handleChange({ target: { value } }, "phoneNumber")
          }
          submitClicked={submitClicked}
          errorMsg={phoneErrorMsg}
        />
        <EditSingleline
          label="Email"
          value={warehouseData.email}
          setValue={(value) => handleChange({ target: { value } }, "email")}
          submitClicked={submitClicked}
          errorMsg={emailErrorMsg}
        />
      </div>
    </div>
  );
};

export default EditWarehouseplus;

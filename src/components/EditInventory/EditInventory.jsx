import EditSingleline from "../EditSingleline/EditSingleline";
import EditMultiline from "../EditMultiline/EditMultiline";
import DropDown from "../DropDown/DropDown";
import RadioButton from "../RadioButton/RadioButton";
import CTAButton from "../CTAButton/CTAButton";
// import CancelButton from "../CancelButton/CancelButton";
import "./EditInventory.scss";
import { Link } from "react-router-dom";

const EditInventory = ({
  inventoryData,
  handleChange,
  handleSave,
  categoryOptions,
  statusOptions,
  warehouseOptions,
}) => {
  return (
    <form className="editform" onSubmit={handleSave}>
      <div className="editform-inventory">
        <div className="editform-inventory__list">
          <h3>Item Details</h3>
          <EditSingleline
            label="Item Name"
            value={inventoryData.itemName}
            setValue={(value) => handleChange(value, "item_name")}
          />

          <EditMultiline
            label="Description"
            value={inventoryData.description}
            setValue={(value) => handleChange(value, "description")}
          />

          <DropDown
            label="Category"
            options={categoryOptions}
            value={inventoryData.category}
            onChange={(value) => handleChange(value, "category")}
          />
        </div>
        <div className="editform-inventory__vertical-line"></div>
        <div className="editform-inventory__list-right">
          <h2>Item Availability</h2>

          <RadioButton
            options={statusOptions}
            status={inventoryData.status}
            onChange={(value) => handleChange(value, "status")}
          />

          {inventoryData.status === "In Stock" && (
            <EditSingleline
              label="Quantity"
              value={String(inventoryData.quantity)}
              setValue={(value) => handleChange(value, "quantity")}
            />
          )}

          <DropDown
            label="Warehouse"
            options={warehouseOptions}
            value={inventoryData.warehouse_name}
            onChange={(value) => handleChange(value, "warehouse_name")}
          />
        </div>
      </div>

      <div className="editform__button-wrapper">
        <div className="editform__cancel-button">
          <Link to="/inventories">
            <CTAButton buttonText="Cancel" variant="secondary" />
          </Link>
        </div>
        <div className="editform__add-button">
          <CTAButton type="submit" buttonText="Save" />
        </div>
      </div>
    </form>
  );
};

export default EditInventory;

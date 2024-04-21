import { Link } from "react-router-dom";
import EditSingleline from "../EditSingleline/EditSingleline";
import EditMultiline from "../EditMultiline/EditMultiline";
import DropDown from "../DropDown/DropDown";
import RadioButton from "../RadioButton/RadioButton";
import CTAButton from "../CTAButton/CTAButton";
import CancelButton from "../CancelButton/CancelButton";
import "./EditInventory.scss";

const EditInventory = ({
  inventoryData,
  handleChange,
  handleSave,
  categoryOptions,
  statusOptions,
  warehouseOptions,
}) => {
  return (
    <form className="edit-inventory" onSubmit={handleSave}>
      <h2>Item Details</h2>
      <EditSingleline
        label="Item Name"
        value={inventoryData.itemName}
        setValue={(value) => handleChange(value, "description", "item_name")}
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

      <div className="edit-inventory__actions">
        <Link to="/inventories">
          <CancelButton buttonText="Cancel" />
        </Link>
        <CTAButton type="submit" buttonText="Save" />
      </div>
    </form>
  );
};

export default EditInventory;

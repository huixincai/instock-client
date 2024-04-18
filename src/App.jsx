import "./styles/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Footer from "./components/Footer/Footer";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="/warehouses" element={<WarehousePage />} />
        <Route path="/warehouses/new" element={<AddWarehouse />} />
        <Route path="/inventories" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

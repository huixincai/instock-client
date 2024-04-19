import "./styles/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import WarehouseDetail from "./pages/WarehouseDetail/WarehouseDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="/warehouses" element={<WarehousePage />} />
        <Route path="/warehouses/:id" element={<WarehouseDetail />} />
        <Route path="/warehouses/new" element={<AddWarehouse />} />
        <Route path="/inventories" element={<InventoryPage />} />
        <Route path="/inventories/:id" element="Inventory Detail" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

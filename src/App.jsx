import "./styles/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import WarehouseDetailPage from "./pages/WarehouseDetailPage/WarehouseDetailPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryDetailPage from "./pages/InventoryDetailPage/InventoryDetailPage";
import EditInventoryPage from "./pages/EditInventory/EditInventoryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="/warehouses" element={<WarehousePage />} />
        <Route path="/warehouses/:id" element={<WarehouseDetailPage />} />
        <Route path="/warehouses/edit/:id" element={<EditWarehousePage />} />
        <Route path="/warehouses/new" element={<AddWarehouse />} />
        <Route path="/inventories" element={<InventoryPage />} />
        <Route path="/inventories/:id" element={<InventoryDetailPage />} />
        <Route path="/inventories/edit/:id" element={<EditInventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

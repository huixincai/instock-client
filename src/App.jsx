import "./styles/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="warehouses" element={<WarehousePage />} />
        <Route path="inventories" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

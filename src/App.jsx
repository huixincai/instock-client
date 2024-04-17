import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="warehouses" element={<WarehousePage />} />
        <Route path="inventories" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

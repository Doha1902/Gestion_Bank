import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Accueil from "./pages/Accueil.jsx";
import GestionDesComptes from "./pages/GestionDesComptes.jsx";
import OperationsBancaires from "./pages/OperationsBancaires.jsx";
import Statistique from "./pages/statistique.jsx"; 
import "./styles/styles.css";



export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/GestionDesComptes" element={<GestionDesComptes />} />
          <Route path="/OperationsBancaires" element={<OperationsBancaires />} />
          <Route path="/statistique" element={<Statistique />} />
        </Routes>
      </div>
    </Router>
  );
}          

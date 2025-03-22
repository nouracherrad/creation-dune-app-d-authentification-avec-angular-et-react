import React from "react";
import { useNavigate } from "react-router-dom"; // Importez useNavigate
import "./../styles/Navbar.css";
import logo from "../assets/image/image.webp"; // Importez l'image

const Navbar = () => {
  const navigate = useNavigate(); // Créez une instance de navigate

  const handleLogout = () => {
    localStorage.removeItem("user"); // Supprimez les informations de l'utilisateur
    navigate("/login"); // Redirige vers la page de connexion
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" /> 
      </div>
      <ul className="nav-links">
        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

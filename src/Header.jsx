import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg';
import './App.css'; // Import App.css

function Header() {
  const navigate = useNavigate();

  // Navigate back to the previous page
  const handleBackHome = () => {
    navigate('/');
  };
  
  return (
    <div className="header-container">
      <img src={logo} alt="Logo" className="logo" />
      <div onClick={handleBackHome} style={{ cursor: 'pointer' }} className="banner-title">Threads List</div>
      <Link to="/threads/new" className="button">Create Thread</Link>
    </div>
  );
}

export default Header;

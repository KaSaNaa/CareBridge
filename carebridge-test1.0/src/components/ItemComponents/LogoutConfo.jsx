import React from 'react';
import './logoutconfo.css';

export default function LogoutConfo() {

  const handleLogout = () => {
    alert("Successfully logged out!");
    // Add your logout logic here
  }
  const handleCancel  = () => {
    alert("You clicked cancel");
  }

  return (
    <div className="logout-container">
      <div className="logout-head">
        <header className="lg-head">Confirmation of Logout</header>
      </div>
      <div className="logout-body">
        <p>Do you want to confirm your log-out? It will discard any unsaved changes.</p>
      </div>
      <div className="logout-button">
        <button className="lg-btn1" onClick={handleCancel}>
          Cancel
        </button>
        <button className="lg-btn2" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  )
}

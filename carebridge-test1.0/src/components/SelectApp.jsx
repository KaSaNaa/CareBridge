// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./selectApp.css";

export default function SelectApp() {
  return (
    <div className="select-app">
        <header className="head-app">Appoinment</header>
        <ul className="app-ul">
            <li><a href="book-appoinmnet">Book Appoinment</a></li>
            <li><a href="chnage-appoinmnet">Chnage Appoinment</a></li>
            <li><a href="view-appoinmnet">View Appoinment</a></li>
        </ul>
      
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
import React from 'react'
import './pprofileCMP2.css';
// import LogoutConfo from './LogoutConfo.jsx';


export default function PProfileCMP2() {

    


  return (
    <div className="p-mid-main-container">
            <div className="div-heading">
                <h1 className="p-head">Profile information</h1>
            </div>
        <div className="div-mid-main">
            <div className="div-mid-input">
                <form className="pro-input">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Deenath" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Damsinghe" />
                    </div>
                    <div className="form-group-gender">
                        <label>Select Gender</label>
                        <label className="radio-lbl"><input type="radio" name="gender" value="male" />Male</label>
                        <label className="radio-lbl"><input type="radio" name="gender" value="female" />Female</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" placeholder="0771837116" />
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <label>ddeenath@gmail.com</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthday">Birthday</label>
                        <input type="date" id="birthday" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input type="text" id="weight" placeholder="43kg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="height">Height</label>
                        <input type="text" id="height" placeholder="134cm" />
                    </div>
                    <div className="form-group">
                        <label>Blood Group</label><br />
                        <label className="radio-label"><input type="radio" name="blood" value="A+" />A+</label>
                        <label className="radio-label"><input type="radio" name="blood" value="A-" />A-</label>
                        <label className="radio-label"><input type="radio" name="blood" value="B+" />B+</label>
                        <label className="radio-label"><input type="radio" name="blood" value="B-" />B-</label>
                        <label className="radio-label"><input type="radio" name="blood" value="O+" />O+</label>
                        <label className="radio-label"><input type="radio" name="blood" value="O-" />O-</label>
                        <label className="radio-label"><input type="radio" name="blood" value="AB+" />AB+</label>
                        <label className="radio-label"><input type="radio" name="blood" value="AB-" />AB-</label>
                    </div>
                </form>
            </div>
        
            <div className="div-mid-input-al">
                <h3 className="input-h3">Describe Your Alergies</h3>
                <ul className="alergies-input-li">
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                </ul>
            </div>
        </div>
        <div className="btn-div">
            
            <button className="btn-dlt">Delete profile</button>
            <div className="down-btn">
            <button className="btn-save">Save</button>
            <button className="btn-logout" >Log Out</button> 
            </div>
        </div>
    </div>
    
  )
}


// bbbb

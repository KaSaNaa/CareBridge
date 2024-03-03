// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './pprofileCMP1.css';
import profile from "../assets/profile.jpg";

export default function PProfileCMP1() {
    const [profileImage, setProfileImage] = useState(profile);

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setProfileImage(imageUrl);
        }
    };

    return (
        <div className="p-main-container">
            <div className="p-card">
                <label htmlFor="profile-input">
                    <img className="img-class" src={profileImage} alt="profile" />
                </label>
                <input
                    id="profile-input"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
                <h3 className="p-h3">Deenath Damsinghe</h3>
                <p className="p-p">Kottawa, Pannipitiya</p>

                <div className="mid-con">
                    <div className="div-mid-pt1">
                        <p className="mid-pt1-para">Blood</p>
                        <p className="mid-pt1-para2">0+</p>
                    </div>
                    <div className="div-mid-pt1">
                        <p className="mid-pt1-para">Height</p>
                        <p className="mid-pt1-para2">173cm</p>
                    </div>
                    <div className="div-mid-pt1">
                        <p className="mid-pt1-para">Weight</p>
                        <p className="mid-pt1-para2">94kg</p>
                    </div>
                    
                </div>
            </div>
            <div className="p-alergies">
                <div className="div-top">
                    <h4 className="p-h4"><u>Allergies</u></h4>
                    </div>
                <div className="div-mid">
                <ul className="p-al-li">
                    <li>Something alaergy</li>
                    <li>Something alaergy</li>
                    <li>Something alaergy</li>
                    <li>Something alaergy</li>
                    <li>Something alaergy</li>
                    <li>Something alaergy</li>
                    <li>Something alaergy</li>
                    <li>Something alaergy</li>
                </ul>
                </div>
                <div className="div-bottom">
                <button className="al-edit">Edit</button>
                </div>

            </div>
        </div>
    );
}

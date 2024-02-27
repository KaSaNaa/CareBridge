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
                    <table className="p-table">
                        <thead>
                            <tr className="tr1">
                                <th>Blood</th>
                                <th>Weight</th>
                                <th>Height</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr2">
                                <td>O+</td>
                                <td>157kg</td>
                                <td>150cm</td>
                            </tr>
                        </tbody>
                    </table>
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

// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
// import PSideBar from '../../components/PSideBar.jsx';
import PSideBar from '../../components/ItemComponents/PSideBar.jsx';
import Profile from '../Patient/Profile.jsx';
import PAppoinment from '../Patient/PAppoinment.jsx';
import Contact from '../Patient/Contact.jsx';
import History from '../Patient/History.jsx';
import './patient.css';

export default function Patient() {
    const [currentPage, setCurrentPage] = useState('profile');

    const renderPage = () =>{
        switch (currentPage){
            case 'profile':
                return <Profile/>;
            case 'appointment':
                return <PAppoinment/>;
            case 'history':
                return <History/>;
            case 'contact':
                return <Contact/>;
            default:
                return <Profile/>
        }
    };
    const handleNavigation= (page)  =>{
        setCurrentPage(page);
    };







  return (
    <div className="patient-container">
    <div className="nav-bar">
        <PSideBar handleNavigation={handleNavigation}/>

    </div>
    <div className="content">{renderPage()}</div>
  
</div>
  )
}

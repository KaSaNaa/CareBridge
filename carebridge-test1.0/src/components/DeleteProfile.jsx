import React from 'react'
import './deleteprofile.css';

export default function DeleteProfile() {
    const handleCancelClick = () => {
        alert('Ok!')
    }
    const handleDeleteClick = ()  => {
        alert('Profile delete successfully!')
    }
  return (
    <div className="main-dlt-container">
        <div className="dlt-header">
            <h2>Confirm Deleting Account</h2>
        </div>
        <div className="dlt-body">
            <ol>
                <li>Confirmation Prompt: Are you sure you want to delete your profile? This action cannot be undone.
                </li>
                <li>Consequences: Deleting your profile will permanently remove all your data, including account 
                    information, preferences, and saved content. This data cannot be recovered.
                </li>
                <li>Alternatives: If you're experiencing issues, please consider contacting customer support for 
                    assistance before deleting your profile.
                </li>
                <li>Privacy Information: Rest assured that your privacy will be respected. Your personal information 
                    will be handled in accordance with our privacy policy.
                </li>
                <li>Timeframe: Please note that there may be a waiting period before your profile is permanently 
                    deleted to prevent impulsive decisions.
                </li>
                <li>Feedback: We value your feedback. If you have any reasons for deleting your profile, please let us know.
                </li>
                <li>Contact Information: If you have questions or concerns about the deletion process, please contact us at .
                </li>
                <li>Cancel Option: You can cancel the deletion process at any time before finalizing the action.
                </li>
            </ol>
        </div>
        <div className="dlt-btn-sec">
            <button className='dlt-btn1' onClick={handleCancelClick}>Cancel</button>
            <button className='dlt-btn2' onClick={handleDeleteClick}>Delete</button>
        </div>
      
    </div>
  )
}

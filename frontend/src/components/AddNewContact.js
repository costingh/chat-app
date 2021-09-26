import React from 'react'

function AddNewContact({showAddContactForm}) {
    return (
        <div className="add_contact__btn" onClick={showAddContactForm}>
            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            <p className="text user-profile__description">Add new contact</p>
        </div>
    )
}

export default AddNewContact

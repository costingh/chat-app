import React from 'react'

function AddNewContact({showAddContactForm}) {
    return (
        <div className="add_contact--btn" onClick={showAddContactForm}>Add new contact </div>
        
    )
}

export default AddNewContact

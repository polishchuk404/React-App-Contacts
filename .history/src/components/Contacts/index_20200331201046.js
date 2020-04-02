import React from 'react';
import Contact from '../Contact';
import './Contacts.sass';



export default function Contacts() {
  return (
    <div className="test-data row">
              <div className="input-text">
                   <input
                       onChange={handleSearchChange}
                       placeholder="Enter..."
                   />
               </div>
               <div className="input-checkbox">
                   <input 
                       type="checkbox"
                       onChange={handleSearchGenderMale}
                   />
               </div>
               <div className="input-checkbox">
                   <input 
                       type="checkbox"
                       onChange={handleSearchGenderFemale}
                   />
               </div>
               <div className="input-checkbox">
                   <input 
                       type="checkbox"
                       onChange={handleSearchGenderNoGender}
                   />
               </div>
               <div>
                   found - {contacts.length} contacts
               </div>
               <div>
                   {
                       contacts.map((contact, index) => {
                           return (
                               <Contact
                                   key={index}
                                   {...contact}
                               />
                           )
                       })
                   }
               </div>
    </div>
  ) 
}



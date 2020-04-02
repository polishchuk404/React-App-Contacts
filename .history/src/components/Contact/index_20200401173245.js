import React, { useState } from "react";
import {FaMale, FaFemale } from 'react-icons/fa';
import './Contact.sass';


export default function Contact(props) {
  const { contact } = props;
  const [isHide, setIsHide] = useState(true);

  return (
    <div className="contact" onClick={() => setIsHide(!isHide)}>
        <p className="contact-item">
            {contact.gender ? contact.gender === "female" ? <FaFemale/> : <FaMale/> : null}
            Імя: {contact.firstName}
        </p>
            {isHide ? null : (
            <>
            <p className="contact-item">Last name: {contact.lastName}</p>
            <p className="contact-item">Number: {contact.phone}</p>
            {contact.gender ? (
            <p className="contact-item">Gender: {contact.gender}</p>
            ) : null}
            </>
        )}
    </div>
  );
}


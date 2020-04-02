import React, { useState } from "react";
import {FaMale, FaFemale } from 'react-icons/fa';
import './Contact.sass';


export default function Contact(props) {
  const { contact } = props;
  const [isHide, setIsHide] = useState(false);

  return (
    <div className="contact" onClick={() => setIsHide(!isHide)}>
        <p className="contact-item">
            <span>{contact.gender ? contact.gender === "female" ? <FaFemale/> : <FaMale/> : null}</span>
            <span> {contact.firstName}</span>
            <span>{contact.lastName}</span>
        </p>
    </div>
  );
}


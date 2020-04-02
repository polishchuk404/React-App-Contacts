import React, { useState } from "react";
import {FaMale, FaFemale } from 'react-icons/fa';
import './Contact.sass';


export default function Contact(props) {
  const { contact } = props;
  const [isHide, setIsHide] = useState(false);

  return (
    <div className="contact" onClick={() => setIsHide(!isHide)}>
        <p className="contact-item">
            {contact.gender ? contact.gender === "female" ? <FaFemale/> : <FaMale/> : null}
            {contact.firstName}
            {contact.lastName}
        </p>
    </div>
  );
}


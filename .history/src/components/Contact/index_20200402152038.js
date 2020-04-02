import React, { useState } from "react";
import {FaTransgender } from 'react-icons/fa';
import {IoMdFemale, IoMdMale} from 'react-icons/io';
import './Contact.sass';


export default function Contact(props) {
  const { contact } = props;
  const [isHide, setIsHide] = useState(false);

  return (
        <p className="contact" onClick={() => setIsHide(!isHide)}>
            <span className="gender">{contact.gender ? contact.gender === "female" ? <IoMdFemale/> : <IoMdMale/> : <FaTransgender />} </span>
            <span>{contact.firstName} </span>
            <span>{contact.lastName} </span> <br/>
            <span>{contact.phone} </span>
        </p>
  );
}


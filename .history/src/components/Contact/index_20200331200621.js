import React from 'react';
import {AiFillLike } from 'react-icons/ai';
import './Contact.sass';

export default function Contact(props){
    return (
        <div>
          <li>{props.firstName}</li>
                <li>{props.lastName}</li>
                <li>{props.phone}</li>
                {
                    gender && <li>{props.gender}</li>
                }
        </div>
    );
}



import React from 'react';
import {AiFillLike } from 'react-icons/ai';
import './Contact.sass';

export default function Contact(props){
    return (
        <div>
          <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{phone}</li>
                {
                    gender && <li>{gender}</li>
                }
        </div>
    );
}



import React from 'react';
import Contact from '../Contact/Contact';
import './Contacts.sass';

export default function Posts() {
  return (
    <div className="test-data row">
      <Post authorData={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
      />
    </div>
  ) 
}



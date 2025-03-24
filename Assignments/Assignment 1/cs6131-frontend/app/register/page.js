'use client';
import './styles.css';
import { useState } from 'react';

export default function Home() {
  const handleSubmit = () => {
    alert("Congrats, you have registered! This goes no where for now..");
  }

    const [password1, setPWField1Text] = useState("");
    const [password2, setPWField2Text] = useState("");
    const [type1, setPWField1Type] = useState('password');
    const [type2, setPWField2Type] = useState('password');
    const [icon1, toggleIcon1] = useState('eye_disabled_icon.png');
    const [icon2, toggleIcon2] = useState('eye_disabled_icon.png');
  
    const eyeIcon1HandleClick = () => {
      if (type1==='password'){
         toggleIcon1('eye_enabled_icon.png');
         setPWField1Type('text')
      } else {
         toggleIcon1('eye_disabled_icon.png')
         setPWField1Type('password')
      }
   }

   const eyeIcon2HandleClick = () => {
    if (type2==='password'){
       toggleIcon2('eye_enabled_icon.png');
       setPWField2Type('text')
    } else {
       toggleIcon2('eye_disabled_icon.png')
       setPWField2Type('password')
    }
 }

 const handleIcon1MouseEnter = () => {
  if (type1 === 'password') {
    toggleIcon1('eye_enabled_icon.png');
  }
};

const handleIcon1MouseLeave = () => {
  if (type1 === 'password') {
    toggleIcon1('eye_disabled_icon.png');
  }
};

const handleIcon2MouseEnter = () => {
  if (type2 === 'password') {
    toggleIcon2('eye_enabled_icon.png');
  }
};

const handleIcon2MouseLeave = () => {
  if (type2 === 'password') {
    toggleIcon2('eye_disabled_icon.png');
  }
};


  return (
    <div id='background'>
      <form id='form' action="" type="GET">
        <div id='hyperlink-container'>
          <a id='hyperlink' href="/login">Back to Login Page</a>
        </div>
        <b id='logo'>Cat DB</b>
        <input id='input-field' type='email' placeholder='Email' style={{ top: "40%" }}></input>
        <input id='input-field' type={type1} value={password1} onChange={(e) => setPWField1Text(e.target.value)} placeholder='Password' style={{ top: "51.5%", paddingRight: "7.5%" }}></input>
        <img src={icon1} id='eye-icon' onClick={eyeIcon1HandleClick} onMouseEnter={handleIcon1MouseEnter} onMouseLeave={handleIcon1MouseLeave} style={{ top: '51.5%' }}></img>
        <input id='input-field' type={type2} value={password2} onChange={(e) => setPWField2Text(e.target.value)} placeholder='Re-enter password' style={{ top: "63%", paddingRight: "7.5%" }}></input>
        <img src={icon2} id='eye-icon' onClick={eyeIcon2HandleClick} onMouseEnter={handleIcon2MouseEnter} onMouseLeave={handleIcon2MouseLeave} style={{ top: '63%' }}></img>
        {/* TODO: change to onSubmit once functionalities in works */}
        <button id='register-button' onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}
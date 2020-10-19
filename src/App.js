import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MessageBox from "./components/MessageBox/MessageBox";
import ContactBadge from "./components/ContactBadge/ContactBadge";

const listStyle = {
  height: "90vh",
  overflowY: "scroll"
}

function App() {
  const [currentContact, setCurrentContact] = useState("");
  const contactList = useRef(null);

  useEffect(() => {
    let val = contactList.current.children[0].children[0].textContent;
    setCurrentContact(val);
  },[]);
  
  const listOnClickHandler = (e) => {
    setCurrentContact(e.target.textContent);
  }

  return (
    <div style={{overflow: "hidden"}}>
      <Navbar/>
      <div className="row">
        <div className="col-4 pt-3" style={listStyle}>
          <ul className="list-unstyled" ref={contactList} onClick={listOnClickHandler}>
            <li><ContactBadge contactName="Fuad"/></li>
            <li><ContactBadge contactName="Jessie"/></li>
            <li><ContactBadge contactName="Alexander"/></li>
            <li><ContactBadge contactName="Eugene"/></li>
            <li><ContactBadge contactName="Loyd"/></li>
            <li><ContactBadge contactName="Caleb"/></li>
          </ul>
        </div>
        <div className="col-8">
          <MessageBox contact={currentContact}/>
        </div>
      </div>
    </div>
  );
}

export default App;

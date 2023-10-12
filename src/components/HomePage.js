
import React, { useState } from "react";
import { Message } from "../classes/Message";
import { log } from "console";



const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");
  const [data, setData] = useState([]);


  function sendData() {
    setNotification("");

    if (name === "" || email === "" || message === "") {
      setNotification("Please fill all the fields");
      return;
    } else {
      setNotification(
        "Your message has beene received, please check Journal Book page"
      );
      return;
    }
      var userMessage = new Message(name, email, message)
     console.log(userMessage.inLine());
  }

  return (
    <div id="home" className="home">
      <h1> Leave us a message!</h1>
      {notification !== "" && <p>{notification}</p>}
      <div className="row">
        <label htmlFor="">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="">Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="">Message: </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="row">
        <button onClick={sendData}>Send</button>
      </div>

      <div className="row">
        <h2>Entered Data:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Name: {item.name}, Email: {item.email}, Message: {item.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default HomePage;

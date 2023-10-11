import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  function sendData() {
    setMessage('')

    if(name === '' || email === '' || feedback === '') {
      setMessage('Please fill all the fields');
      return;
    }

    const data = {
      name,
      email,
      feedback
    };

    fetch('http://localhost:3000/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(r => r.json()).then(r => {
      setMessage(r.message)
    })
  }

  return (
    <div className="feedback" id="feedback">
      <h2>Leave me a feedback!</h2>
      {message !== '' && <p>{message}</p>}
      <div className="to-complete">
        <div className="row">
          <label htmlFor="">Full Name: </label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="">Feedback: </label>
          <textarea
            name=""
            id=""
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="row">
          <button onClick={sendData}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

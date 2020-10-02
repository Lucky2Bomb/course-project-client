import React, { useEffect, useState } from 'react';
const axios = require('axios');



function App() {
  const [message, setMessage] = useState("none");
  const [serverMessage, setServerMessage] = useState("server message...");
  const [item, setItem] = useState(null);

  const messageEventHandler = () => {
    setMessage(prev => prev + " none");
  }

  const serverMessageEventHandler = async () => {
    try {
      // Worked!
      // const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(res => res.json());
      // console.log(response.drinks[1].strDrink);

      // setServerMessage(response.drinks[1].strDrink);

      const response = await fetch("http://localhost:3001").then(res => res.json());
      setServerMessage(response.message);
    } catch (error) {
      setServerMessage("error: " + error);
    }
  }

  return (
    <div className="сontainer">
      <h1>{message}</h1>
      <h1>{serverMessage}</h1>
      <button className="btn btn-secondary" onClick={messageEventHandler}>Add msg</button>
      <button className="btn btn-secondary" onClick={serverMessageEventHandler}>Call server</button>
    </div>
  );
}

export default App;

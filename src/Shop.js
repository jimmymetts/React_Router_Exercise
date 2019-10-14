import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchMessage();
    },[]);

    const [messages, setMessage] = useState([]);

    const fetchMessage = async () => {

        const data = await fetch('https://dog.ceo/api/breeds/image/random');

        const message = await data.json();
        console.log(message);
        setMessage(message);
    }

  return (
    <div>
       {messages.map(message => (
       <h1>{message.message}</h1>
       ))}
        
    </div>
  );
}

export default Shop;
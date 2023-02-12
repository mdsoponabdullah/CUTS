import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/messenger.css";

const Messenger = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        "http://localhost:3005/studentcommunity"
      );
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3005/studentcommunity", {
      message: message,
      id: 5,
    });
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="messenger">
      <div className="messages">
        {messages.map((m, index) => (
          <div key={index} className="message">
            {m.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messenger;

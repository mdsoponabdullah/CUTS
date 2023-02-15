import React, { useState } from "react";

const Message = ({ text, isReceived }) => (
  <div
    style={{
      background: isReceived ? "#eee" : "#007aff",
      color: isReceived ? "black" : "white",
      padding: "1em",
      borderRadius: "1em",
      maxWidth: "60%",
      alignSelf: isReceived ? "flex-start" : "flex-end",
      marginBottom: "1em",
    }}
  >
    {text}
  </div>
);

const Demo = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    setMessages([...messages, { text: input, isReceived: false }]);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "1em",
      }}
    >
      <div style={{ flex: 1, overflowY: "scroll" }}>
        {messages.map((message, i) => (
          <Message
            key={i}
            text={message.text}
            isReceived={message.isReceived}
          />
        ))}
      </div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "1em",
            borderRadius: "1em",
            border: "none",
            outline: "none",
            fontSize: "1em",
            width: "75%",
            marginRight: "1em",
          }}
        />
        <button
          onClick={handleSend}
          style={{ padding: "1em", borderRadius: "1em" }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Demo;

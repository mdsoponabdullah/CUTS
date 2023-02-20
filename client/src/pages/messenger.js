import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/messenger.css";
import Navbar2 from "../component/Navbar2";

const Message = ({ text, userId, user, userName }) => (
  <div
    className="messageContainer"
    style={{
      width: "100%",
      position: "relative",
      left: userId !== user.Student_id ? "67%" : "0%",
    }}
  >
    <div
      className="message"
      style={{
        background: userId !== user.Student_id ? "#eee" : "#0082e6",
        color: userId !== user.Student_id ? "black" : "#ffd991",
        

        alignSelf: userId === user.Student_Id ? "flex-start" : "flex-end",
        //float: userId===user.Student_id ? "left" : "right",
        marginBottom: "1em",
      }}
    >
      <h6 className="userName" style={{color: userId === user.Student_id ?"#3d1681" : "green",}} >{userName}</h6>
      <h3 className="text"style={{fontSize: "14px"}} >{text}</h3>
    </div>
  </div>
);

const Messenger = () => {
  ///local strorage

  const [user, setUser] = useState({});
  //const [tableName,setTableName]= useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("loginInformationOfUser");
    //const storeTableName = localStorage.getItem("tableName");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    // if(storeTableName)
    // {
    //   setTableName(storeTableName);
    // }
  }, []);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        `http://localhost:3005/studentcommunity`
      );
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        student_id: user.Student_id,
        message: message,
        Student_name: user.Student_name,
      },
    ]);
    await axios.post("http://localhost:3005/studentcommunity", {
      message: message,
      id: user.Student_id,
    });

    setMessage("");
  };
  console.log(user, messages);

  return (
    <div>
      <Navbar2 />
      <div className="messenger">
        <div className="messengerHeader"></div>
        <div className="messageBox">
          <div style={{}} className="messages">
            {messages.map((m, index) => (
              <Message
                key={index}
                user={user}
                text={m.message}
                userId={m.student_id}
                userName={m.Student_name}
              />
            ))}
          </div>
        </div>

        <div className="inputbox">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="messageInputBox"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter message"
              style={{}}
            />
            <button className="sendMessage" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messenger;

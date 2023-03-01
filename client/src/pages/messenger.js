import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/messenger.css";
import Navbar2 from "../component/Navbar2";
import Footer from "../component/footer";

const Message1 = ({ text, userId, user, userName }) => (
  <div className="outerContainerOfMessanger">
    <div
      className="messageContainer"
      style={{
        width: "100%",
        position: "relative",
        left: userId !== user.Student_id ? "57%" : "0%",
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
        <h6
          className="userName"
          style={{ color: userId === user.Student_id ? "#3d1681" : "green" }}
        >
          {userName}
        </h6>
        <h3 className="text" style={{ fontSize: "14px" }}>
          {text}
        </h3>
      </div>
    </div>
  </div>
);

const Message2 = ({ text, userId, user, userName }) => (
  <div
    className="messageContainer"
    style={{
      width: "100%",
      position: "relative",
      left: userId !== user.teacher_id ? "67%" : "0%",
    }}
  >
    <div
      className="message"
      style={{
        background: userId !== user.teacher_id ? "#eee" : "#0082e6",
        color: userId !== user.teacher_id ? "black" : "#ffd991",

        alignSelf: userId === user.teacher_Id ? "flex-start" : "flex-end",
        //float: userId===user.Student_id ? "left" : "right",
        marginBottom: "1em",
      }}
    >
      <h6
        className="userName"
        style={{ color: userId === user.teacher_id ? "#3d1681" : "green" }}
      >
        {userName}
      </h6>
      <h3 className="text" style={{ fontSize: "14px" }}>
        {text}
      </h3>
    </div>
  </div>
);

const Message3 = ({ text, userId, user, userName }) => (
  <div
    className="messageContainer"
    style={{
      width: "100%",
      position: "relative",
      float: userId !== user.staff_id ? "67%" : "0%",
    }}
  >
    <div
      className="message"
      style={{
        background: userId !== user.staff_id ? "#eee" : "#0082e6",
        color: userId !== user.staff_id ? "black" : "#ffd991",

        alignSelf: userId === user.staff_Id ? "flex-start" : "flex-end",
        //float: userId===user.Student_id ? "left" : "right",
        marginBottom: "1em",
      }}
    >
      <h6
        className="userName"
        style={{ color: userId === user.Student_id ? "#3d1681" : "green" }}
      >
        {userName}
      </h6>
      <h3 className="text" style={{ fontSize: "14px" }}>
        {text}
      </h3>
    </div>
  </div>
);

const Messenger = () => {
  ///local strorage

  const [user, setUser] = useState({});
  const [tableName, setTableName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loginInformationOfUser");
    const storeTableName = localStorage.getItem("tableName");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storeTableName) {
      setTableName(storeTableName);
    }
  }, []);
  console.log(tableName);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (tableName) {
      const fetchMessages = async () => {
        const response = await axios.get(
          `http://localhost:3005/studentcommunity?tableName=${tableName}`
        );
        setMessages(response.data);
      };
      fetchMessages();
    }
  }, [tableName]);

  if (tableName === "student") {
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
        tableName: tableName,
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
                <Message1
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
        <Footer />
      </div>
    );
  } else if (tableName === "teacher") {
    const handleSubmit = async (e) => {
      e.preventDefault();
      setMessages([
        ...messages,
        {
          teacher_id: user.teacher_id,
          message: message,
          teacher_name: user.teacher_name,
        },
      ]);
      await axios.post("http://localhost:3005/studentcommunity", {
        message: message,
        id: user.teacher_id,
        tableName: tableName,
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
                <Message2
                  key={index}
                  user={user}
                  text={m.message}
                  userId={m.teacher_id}
                  userName={m.teacher_name}
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
        <Footer />
      </div>
    );
  } else if (tableName === "staff") {
    const handleSubmit = async (e) => {
      e.preventDefault();
      setMessages([
        ...messages,
        {
          staff_id: user.staff_id,
          message: message,
          staff_name: user.staff_name,
        },
      ]);
      await axios.post("http://localhost:3005/studentcommunity", {
        message: message,
        id: user.staff_id,
        tableName: tableName,
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
                <Message3
                  key={index}
                  user={user}
                  text={m.message}
                  userId={m.staff_id}
                  userName={m.staff_name}
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
        <Footer />
      </div>
    );
  }
};

export default Messenger;

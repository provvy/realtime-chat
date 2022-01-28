import "./App.css";
import { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { CHAT_SERVER_URL } from "./env";
import Chat from "./components/Chat";
import styled from "styled-components";
import { ColorblindContext } from "./contexts/ColorblindProvider";

function App() {
  const connectChatServer = () => {
    const socket = io(CHAT_SERVER_URL, {
      transports: ["websocket"],
      path: "/",
      enabledTransports: ["ws", "wss"],
    });
    return socket;
  };

  const [messages, setMessages] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const { isColorblind } = useContext(ColorblindContext);
  const startChat = () => {
    setIsStarted(true);
  };

  useEffect(() => {
    const socket = connectChatServer();
    if (isStarted) {
      socket.onAny((type, message) => {
        if (type === "chat-message")
          setMessages((prevState) => [...prevState, message]);
        console.log(type, message);
      });
    }
    return () => {
      socket.disconnect();
    };
  }, [isStarted]);

  const submitHandler = (message) => {
    setMessages((presState) => [...presState, message]);
  };

  return (
    <div className="App">
      <Title isColorblind={isColorblind}>TWITCH-LIKE REAL TIME CHAT</Title>
      <Chat
        submitHandler={submitHandler}
        startChat={startChat}
        isStarted={isStarted}
        messages={messages}
      />
      <Author>coded by provvy</Author>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => (props.isColorblind ? "#000" : "#9147ff")};
  margin-bottom: 2rem;
`;
const Author = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.3);
`;

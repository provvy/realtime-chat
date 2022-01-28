import React, { useContext } from "react";
import styled from "styled-components";
import MessagesList from "./MessagesList";
import StartChat from "./StartChat";
import { ColorblindContext } from "../contexts/ColorblindProvider";
import { Button } from "./utils";
import MessageInput from "./MessageInput";

const ChatWrapper = styled.main`
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  height: 600px;
  padding: 1rem;
  gap: 0.5rem;
`;

const Chat = ({ messages, isStarted, startChat, submitHandler }) => {
  const { isColorblind, toggleColorblind } = useContext(ColorblindContext);
  return (
    <ChatWrapper>
      {isStarted ? (
        <>
          <MessagesList messages={messages} />
          <Button
            isColorblind={isColorblind}
            onClick={toggleColorblind}
            type="button"
          >
            Colorblind
          </Button>
          <MessageInput submitHandler={submitHandler} />
        </>
      ) : (
        <StartChat startChat={startChat} />
      )}
    </ChatWrapper>
  );
};

export default Chat;

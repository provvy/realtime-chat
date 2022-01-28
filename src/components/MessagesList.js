import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import Message from "./Message";
import { ColorblindContext } from "../contexts/ColorblindProvider";

const List = styled.ul`
  width: 100%;
  overflow-y: auto;
  flex-direction: column;
  flex: 1;
  display: flex;
  gap: 0.5rem;
  ::-webkit-scrollbar {
    width: 15px;
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background: #939598;
    border: 3px solid #fff;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px 3px #f7f7f7;
    border-radius: 20px;
  }
`;
const Warning = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WarningMessage = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.isColorblind ? "#000" : "#9644e2")};
`;

const MessagesList = ({ messages }) => {
  const scrollRef = useRef(null);
  const { isColorblind } = useContext(ColorblindContext);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  if (messages.length < 1) {
    return (
      <Warning>
        <WarningMessage isColorblind={isColorblind}>
          There are no messages yet, please wait a few seconds..
        </WarningMessage>
      </Warning>
    );
  }
  return (
    <List>
      {messages.map((message, idx) => (
        <Message key={idx} message={message} />
      ))}
      <div ref={(el) => (scrollRef.current = el)}></div>
    </List>
  );
};

export default MessagesList;

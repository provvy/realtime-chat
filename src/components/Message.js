import React, { useContext } from "react";
import styled from "styled-components";
import { ColorblindContext } from "../contexts/ColorblindProvider";

const MessageItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;
const MessageBody = styled.p`
  font-size: 16px;
  font-weight: normal;
  flex: 1;
  word-break: break-all;
`;
const Username = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.isColorblind ? "#000" : props.color)};
`;

const Message = ({ message }) => {
  const { isColorblind } = useContext(ColorblindContext);
  return (
    <MessageItem>
      <MessageBody>
        <Username isColorblind={isColorblind} color={message.user.color}>
          {message.user.name}
        </Username>
        : {message.body}
      </MessageBody>
    </MessageItem>
  );
};

export default Message;

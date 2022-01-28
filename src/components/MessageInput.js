import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./utils";
import { ColorblindContext } from "../contexts/ColorblindProvider";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Label = styled.label`
  width: 100%;
`;
const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  font-size: 16px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  padding: 0.5rem;
  outline: none;
  height: 100%;
  :focus {
    border-color: ${(props) => (props.isColorblind ? "#000" : "#9147ff")};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const MessageInput = ({ submitHandler }) => {
  const { isColorblind } = useContext(ColorblindContext);
  const [userMessage, setUserMessage] = useState("");
  const [rows, setRows] = useState("1");
  let textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    if (userMessage.length > 150) {
      setRows("5");
    } else if (userMessage.length > 40) {
      setRows("4");
    } else if (userMessage.length > 1) {
      setRows("2");
    } else {
      setRows("1");
    }
  }, [userMessage]);

  const changeHandler = (e) => {
    setUserMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim().length > 0) {
      const newMessage = {
        body: userMessage,
        user: {
          name: "You",
          color: "#CB0707",
        },
      };
      submitHandler(newMessage);
      setUserMessage("");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="user-message">
        <Textarea
          isColorblind={isColorblind}
          rows={rows}
          placeholder="Send a message!"
          ref={(el) => (textareaRef.current = el)}
          value={userMessage}
          onChange={changeHandler}
          id="user-message"
        />
      </Label>
      <ButtonContainer>
        <Button type="submit" isColorblind={isColorblind}>
          Chat
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default MessageInput;

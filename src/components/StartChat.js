import React from "react";
import styled from "styled-components";
import { Button } from "./utils";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const StartChat = ({ startChat }) => {
  return (
    <ButtonContainer>
      <Button type="button" onClick={startChat}>
        Start the Chat!
      </Button>
    </ButtonContainer>
  );
};

export default StartChat;

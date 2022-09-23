import styled from "@emotion/styled";

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  .copyright {
    font-size: 0.8rem;
    color: #868686;
  }
`;

export const Choice = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
`;

interface choiceProps {
  choice: boolean;
}

export const Menu = styled.button<choiceProps>`
  background: ${(props) => (props.choice ? "#FFEEB3" : "#FFFFFF")};
  width: 140px;
  height: 40px;
  border-radius: 30px;
  border: none;
  font-size: 1.4rem;
`;

export const Review = styled(Menu)<choiceProps>`
  background: ${(props) => (props.choice ? "#FFFFFF" : "#FFEEB3")};
`;

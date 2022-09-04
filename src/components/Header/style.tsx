import styled from "@emotion/styled";

interface sideProps {
  side: boolean;
}

export const Header = styled.header<sideProps>`
  /* width: 100vw; */
  width: ${(props) => (props.side ? "90vw" : "100vw")};
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  margin-left: 7vw;
`;

export const SignIn = styled.div`
  margin-right: 7vw;
  display: flex;
  p {
    font-size: 1.1rem;
  }
  .SingIn {
    margin-left: 40px;
  }
`;

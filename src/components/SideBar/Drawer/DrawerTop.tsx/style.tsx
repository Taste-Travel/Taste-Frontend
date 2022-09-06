import styled from "@emotion/styled";

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  height: 40vh;
`;

export const Logo = styled.div``;

export const Restaurant_Photo = styled.div`
  width: 330px;
  height: 200px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const Restaurant_Name = styled.h1`
  align-self: flex-start;
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 70px;
  padding-top: 20px;
`;

export const Restaurant_Evaluation = styled.p`
  align-self: flex-start;
  margin-left: 85px;
  padding-bottom: 20px;
  font-size: 1.3rem;
  font-weight: 500;
  p {
    display: inline;
  }
`;

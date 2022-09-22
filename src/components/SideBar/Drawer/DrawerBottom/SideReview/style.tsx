import styled from "@emotion/styled";

export const Review = styled.div``;

export const Reviews = styled.div`
  height: 460px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 340px;
  height: 130px;
  border-radius: 10px;
  box-shadow: inset 1px 1px 2px #646262;
  background: #fffbef;
  .review {
    display: flex;
    margin: 20px 0 0 15px;
  }
  .Info {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10px;
    .contents {
      margin-top: 10px;
    }
  }
`;

export const Profile = styled.div``;

export const ProfileName = styled.p``;

export const Contents = styled.p``;

export const WriteReview = styled.button`
  width: 340px;
  height: 50px;

  font-size: 1.3rem;

  background: #ffeeb3;
  border: none;
  border-radius: 30px;
  margin-bottom: 40px;
  filter: drop-shadow(1px 1px 1px #d9d9d9);
`;

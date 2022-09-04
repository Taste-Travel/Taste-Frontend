import Image from "next/image";
import * as S from "./style";

export const HeaderComponent = () => {
  const Refresh = () => {
    location.reload();
  };
  return (
    <S.Header>
      <S.Logo onClick={Refresh}>
        <Image
          src={"/images/HeadLogo.png"}
          alt="HeaderLogo"
          width={144}
          height={76}
        />
      </S.Logo>
      <S.SignIn>
        <p className="SignUp">회원가입</p>
        <p className="SingIn">로그인</p>
      </S.SignIn>
    </S.Header>
  );
};

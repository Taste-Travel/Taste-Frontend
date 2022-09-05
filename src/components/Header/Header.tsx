import Image from "next/image";
import { useSideStore } from "../../Store/Store";
import * as S from "./style";

export const HeaderComponent = () => {
  const Refresh = () => {
    location.reload();
  };

  const { sidebarOn } = useSideStore();

  return (
    <S.Header side={sidebarOn}>
      <S.Logo onClick={Refresh} side={sidebarOn}>
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

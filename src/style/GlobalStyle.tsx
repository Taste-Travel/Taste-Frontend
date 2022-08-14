import { css, Global } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smooth: antialiased;
        }

        body {
          font-family: "Apple SD Gothic Neo";
        }
      `}
    />
  );
};

export default GlobalStyle;

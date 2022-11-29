import css from "styled-jsx/css";

export default css.global`
  :root {
    --button-blue: #6c63ff;
    --theme-pink: #f9d9eb;
    --theme-pink-alt: #d4919a;
    --theme-blue: #aac6fc;
    --theme-blue-alt: #719FF0;
    --theme-green: #7fd6c2;
    --theme-green-alt: #04b486;
    --theme-yellow: #f6e049;
    --theme-yellow-alt: #dba901;
    --theme-red: #ff8578;
    --theme-red-alt: #e6a29a;
    --theme-grey: #586069;
    --dashboard-purple: #8d8eee;
    --dashboard-purple-alt: #6b6be5;
    --mainDark: #2E2E2E;
    --secondaryDark: #424242;
    --themeDark: #0d1117;
    --themeTextSecondaryDark: rgb(163 179 188);
  }

  @font-face {
    font-family: "Lato";
    src: url("/fonts/Lato-Regular.ttf");
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "LatoBold";
    src: url("/fonts/Lato-Bold.ttf");
    font-style: normal;
    font-display: swap;
  }


  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: "Lato", "sans-serif";
    background: var(--mainWhite);
    color: var(--mainDark);
    margin: 0;
    padding: 0;
  }
  button{
    font-family: "Lato", "sans-serif";
  }
  a {
    text-decoration: none;
    color: initial;
  }
`;

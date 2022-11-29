import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;

  h1 {
    font-weight: normal;
    margin: 0vh;
    font-size: 4vh;
  }
  h2 {
    font-weight: normal;
    color: var(--themeTextSecondaryDark);
    font-size: 3vh;
    margin: 0vh;
    margin-bottom: 2vh;
    margin-top: 0.5vh;
  }
  .form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .input-field {
    width: 20vw;
    outline: none;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.04) !important;
    padding: 1.5vh 2vh;
    border-radius: 1vh 0 0 1vh;
    background: linear-gradient(135deg,rgba(255,255,255,0.05) 10.93%,rgba(255,255,255,0) 90%);
    color: white;
    border-radius: 1.5vh;
    font-size: 2.8vh;
  }
  .on-error {
    margin-top: 1vh;
    font-size: 2.5vh;
    color: var(--theme-red);
  }
  .on-success {
    margin-top: 1vh;
    font-size: 2.5vh;
    color: var(--theme-green);
  }
  .submit-btn {
    width: fit-content;
    margin-left: -1vw;
    outline: none;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.04) !important;
    padding: 1.5vh 2vh;
    border-radius: 0 1.5vh 1.5vh 0;
    font-size: 2.8vh;
    background: var(--button-blue);
    cursor: pointer;
    color: white;
  }
  
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 5vh;
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .input-field {
      width: 60vw;
      padding: 2vh;
      border-radius: 1vh;
      font-size: 2.5vh;
    }
    .on-error,
    .on-success {
      font-size: 2vh;
    }
    .submit-btn {
      margin-top: 2vh;
      width: 68vw;
      margin-left: unset;
      padding: 2vh;
      border-radius: 1vh;
      font-size: 2.5vh;
      color: white;
    }
    h2 {
      font-size: 2.5vh;
    }
  }
`;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [componentState, setcomponentState] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    const options = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.EMAIL_API,
      },
    };

    axios
      .post(
        "https://api.sendinblue.com/v3/contacts",
        `{"updateEnabled":false,"email":"${email}"}`,
        options
      )
      .then((response) => {
        setcomponentState("success");
        setLoading(false);
      })
      .catch((error) => {
        setcomponentState("error");
        setLoading(false);
      });
  };

  return (
    <NewsWrapper>
      {/* <h1>Stay in the Loop!</h1> */}
      <h2>Get notified about new updates!</h2>
      <form id="sib-form" onSubmit={handleSubmit} className="form">
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          placeholder="Email"
          data-required="true"
          required
        />
        <button form="sib-form" type="submit" className="submit-btn">
          Subscribe
        </button>
      </form>
      {componentState === "error" ? (
        <div className="on-error">Subscription failed! Please try again later.</div>
      ) : componentState === "success" ? (
        <div className="on-success">Thank you for signing up!</div>
      ) : null}
    </NewsWrapper>
  );
}

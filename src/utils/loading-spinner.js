import React from 'react';
import styled from "styled-components";

const Loader = styled.div`
.loader {
  border: 3px solid black;
  border-radius: 50%;
  border-top: 3px solid #f3f3f3;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  margin-right: 10px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
}`

export default function Circle() {
    return (
        <Loader>
        <div className="loader"></div>
        </Loader>
    )
}
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  position: relative;
  width: 100%;
  height: 150px;
  margin: 10px 0;
  background-color: #ffffff87;

  word-wrap: break-word;
  box-shadow: 1px 1px 10px #0000002e;

  div {
    height: 100%;
    width: 30%;
    overflow: hidden;
    position: absolute;
  }
  div > img {
    height: 100%;
  }

  #description {
    position: absolute;
    left: 35%;
    top: 35%;
    font-size: 12px;
  }

  #price {
    position: absolute;
    left: 35%;
    bottom: 15%;
    color: #000000;
  }

  h3 {
    position: absolute;
    left: 35%;
    top: 10%;
    width: 167px;
    height: 18px;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px;
    border-radius: 15px 0 5px 0;
    outline: none;
    background-color: white;
    border: 1px solid red;

    width: 30%;
    height: 25%;
    color: red;
    font-weight: 300;
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    color: green;
    letter-spacing: -0.39px;
    border: 1px solid green;

    border-radius: 0 0 0 15px;

    font-weight: 700;
  }
`;

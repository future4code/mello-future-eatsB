import styled from "styled-components";

export const Container = styled.div`
  #userData {
    padding: 18px;
    position: absolute;
    top: 54px;

    > * {
      margin: 8px 0;
    }

    #edit {
      position: absolute;
      top: 20px;
      left: 316px;
    }
  }

  #address {
    background: #eeeeee;
    width: 100%;
    height: 76px;
    padding: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 166px;

    > * {
      margin: 5px;
    }

    p:first-of-type {
      color: #b8b8b8;
    }

    #edit {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }

  #orderBox {
    padding: 16px;
    position: absolute;
    top: 245px;

    p {
      width: 328px;
      border-bottom: 1px solid black;
      padding-bottom: 8px;
    }
  }
`;

export const Loading = styled.p`
  color: #000000;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  margin-top: 60px;
`;

export const Bar = styled.div`
    top: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 64px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #ffffff;
`;

export const TextBar = styled.p`
    width: 91px;
    height: 19px;
    color: #000000;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;

    position: absolute;
    top: 33px;
`;


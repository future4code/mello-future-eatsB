import styled from "styled-components";

export const Container = styled.div`
  #userData {
    padding: 18px;
    position: relative;

    > * {
      margin: 8px 0;
    }

    #edit {
      position: absolute;
      top: 20px;
      right: 20px;
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

    p {
      border-bottom: 1px solid black;
      padding-bottom: 5px;
    }
  }
`;

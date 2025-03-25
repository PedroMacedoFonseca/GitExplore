import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  gap: 8px;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    color: #007bff;
    transition: 0.3s;
    font-family: "Gill Sans", sans-serif;
  }

  a:hover {
    text-decoration: underline;
  }

  .remover {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }

  .remover:hover {
    background-color: darkred;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;

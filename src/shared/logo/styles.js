import styled from "styled-components";

export const Container = styled.div`
  min-width: 350px;
  height: 43px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Bungee";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;

  color: #000000;

  cursor: pointer;

  @media (max-width: 875px) {
    width: 100%;
  }
  @media (max-width: 460px) {
    width: 100%;
  }
`;

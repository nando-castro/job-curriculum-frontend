import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 148px;

  background: #ffffff;
  border-bottom: 1px solid #000000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  font-family: "Bungee";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;

  color: #000000;
`;

export const Top = styled.div`
  width: 95%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;
`;

export const Content = styled.div`
  width: 683px;
  height: 32px;

  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 875px) {
    display: none;
  }
`;
export const TextContent = styled.p`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  color: #000000;

  cursor: pointer;
`;

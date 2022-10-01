import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.div`
  width: 446px;
  height: 114px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #002e88;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;

  cursor: pointer;

  @media (max-width: 460px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  width: 100%;
  height: 50px;
  margin-bottom: 50px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #000000;

  cursor: default;
`;

export const Footer = styled.div`
  width: 100%;
  height: 266px;

  background: #737373;

  position: fixed;

  bottom: 0;
  left: 0;

  background: #737373;
`;

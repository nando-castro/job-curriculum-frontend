import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const ContainerLogin = styled.div`
  width: 585px;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const Top = styled.p`
  width: 100%;
  height: 45px;

  margin-bottom: 30px;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;

  text-align: center;

  color: #000000;

  @media (max-width: 460px) {
    margin-top: 100px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  input {
    width: 585px;
    height: 46px;

    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px;

    margin-bottom: 10px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;

    ::placeholder {
      padding-left: 12px;
    }

    @media (max-width: 875px) {
      width: 100%;
    }

    @media (max-width: 460px) {
      width: 326px;
      height: 58px;

      box-sizing: border-box;
      background: #ffffff;
      border: 1px solid #000000;
      border-radius: 5px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;

      color: #000000;
    }
  }

  @media (max-width: 460px) {
    width: 100%;
    margin-bottom: -50px;
  }
`;

export const Button = styled.div`
  width: 238px;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #002e88;
  border: 1px solid #000000;
  border-radius: 5px;

  cursor: pointer;
  color: #ffffff;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  @media (max-width: 460px) {
    box-sizing: border-box;

    width: 326px;
    height: 49px;

    background: #002e88;
    border: 1px solid #000000;
    border-radius: 5px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #2c41ff;

    @media (max-width: 460px) {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;

      color: #000000;
    }
  }

  @media (max-width: 875px) {
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: 460px) {
    height: 150px;
    flex-direction: column-reverse;
    margin-top: 80px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #000000;
  margin-top: 15px;

  @media (max-width: 460px) {
    display: none;
  }
`;

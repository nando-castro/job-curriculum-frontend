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
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Top = styled.p`
  width: 65px;
  height: 24px;

  margin-bottom: 30px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.8);
`;

export const Form = styled.form`
  width: 100%;
  height: auto;

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
  }
`;

export const Button = styled.div`
  width: 238px;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 46, 136, 0.74);
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
  }
`;

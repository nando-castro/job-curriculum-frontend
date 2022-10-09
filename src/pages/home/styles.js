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

export const OptionsContent = styled.div`
  width: 436px;
  height: 100%;

  display: flex;

  flex-direction: column;

  background: #fafafa;
  border-right: 1px solid #000000;

  div {
    width: 100%;
    height: 148px;
  }

  cursor: pointer;
`;

export const ItemContent = styled.div`
  width: 100%;
  height: 155px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #000000;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;

  text-align: center;

  color: #000000;

  img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    border-radius: 50%;
  }
`;

export const ButtonLogout = styled.div`
  width: 100%;
  height: 155px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #002e88;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;

  cursor: pointer;
`;

export const ContentResume = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-wrap: wrap;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonResume = styled.div`
  width: 250px;
  height: 359px;

  margin-top: 171px;
  margin-left: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  background: #ffffff;
  border: 1px dashed #9b9b9b;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #9b9b9b;

  cursor: pointer;

  .icon {
    font-size: 40px;
    margin-top: 10px;
  }
`;

export const Item = styled.div`
  width: 250px;
  height: 359px;

  margin-top: 171px;
  margin-left: 25px;

  display: flex;

  flex-direction: column;

  background: #ffffff;
  border: 1px solid #9b9b9b;

  cursor: pointer;
`;

export const ItemInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  font-size: 20px;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

export const ResumeTop = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResumeImage = styled.img`
  width: 20%;
  height: 100%;

  background-color: white;
`;

export const ResumeProfile = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: #005094;
`;

export const ResumeName = styled.div`
  width: auto;
  height: 20px;

  margin: 10px 8px;

  display: flex;
  align-items: center;

  font-size: 15px;
`;
export const ResumeFirstName = styled.h1`
  width: auto;
  height: 20px;

  margin: 5px 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
`;

export const ResumeLastName = styled.h1`
  width: auto;
  height: 20px;

  margin: 5px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
`;

export const ResumeOffice = styled.p`
  width: auto;
  height: 20px;

  display: flex;
  align-items: center;

  margin-left: 10px;

  font-size: 12px;
`;

export const ResumeInfos = styled.p`
  width: 90%;
  height: 15px;

  font-size: 5px;
`;

export const ResumeComunication = styled.p`
  width: auto;
  height: 10px;

  display: flex;
  justify-content: space-between;

  .icon {
    font-size: 5px;
    margin-right: 2px;
  }
`;

export const ResumeEmail = styled.p`
  width: auto;
  height: 10px;

  display: flex;
  align-items: center;

  .icon {
    font-size: 7px;
    margin-right: 2px;
  }
`;
export const ResumePhone = styled.p`
  width: auto;
  height: 10px;

  margin-left: 10px;

  display: flex;
  align-items: center;
`;
export const ResumeAddress = styled.div`
  width: auto;
  height: 100%;

  margin-left: 10px;

  display: flex;
  justify-content: end;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    p {
    }

    .icon {
      font-size: 7px;
      margin-right: 2px;
    }
  }
`;

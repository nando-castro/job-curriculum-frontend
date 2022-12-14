import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;

  flex-direction: column;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  flex-direction: column;

  overflow: auto;

  input {
    width: 548px;
    height: 46px;

    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;

    padding-left: 20px;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 50px;

  margin-bottom: 50px;

  border-bottom: 1px solid #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ContentResume = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ViewResume = styled.div`
  width: 100%;
  height: 100%;

  border-left: 1px solid #000000;
`;
export const ResumeTop = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
`;
export const ResumeImage = styled.img`
  width: 150px;
  height: 100%;
`;

export const ContentInfo = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ResumeRight = styled.div`
  width: 40%;
  height: 100%;
`;
export const ResumeLeft = styled.div`
  width: 60%;
  height: 100%;

  padding: 10px;

  border-right: 1px solid #000000;
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
  height: 40px;

  margin: 10px 8px;

  display: flex;
  align-items: center;

  font-size: 30px;
`;
export const ResumeFirstName = styled.h1`
  width: auto;
  height: 40px;

  margin: 10px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
`;

export const ResumeLastName = styled.h1`
  width: auto;
  height: 40px;

  margin: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
`;

export const ResumeOffice = styled.p`
  width: auto;
  height: 20px;

  display: flex;
  align-items: center;

  margin-left: 20px;

  font-size: 24px;
`;

export const ResumeInfos = styled.p`
  width: 90%;
  height: 60px;
`;

export const ResumeComunication = styled.p`
  width: auto;
  height: 20px;

  display: flex;
  justify-content: space-between;

  .icon {
    font-size: 10px;
    margin-right: 5px;
  }
`;

export const ResumeEmail = styled.p`
  width: auto;
  height: 20px;

  display: flex;
  align-items: center;

  .icon {
    font-size: 15px;
    margin-right: 5px;
  }
`;
export const ResumePhone = styled.p`
  width: auto;
  height: 20px;

  margin-left: 20px;

  display: flex;
  align-items: center;
`;
export const ResumeAddress = styled.div`
  width: auto;
  height: 100%;

  margin-left: 20px;

  display: flex;
  justify-content: end;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    p {
    }

    .icon {
      font-size: 15px;
      margin-right: 5px;
    }
  }
`;

export const ContainerPersonalData = styled.div`
  width: 580px;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  margin-top: 20px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #000000;

  p {
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: default;

    .icon {
      font-size: 30px;
      cursor: pointer;
    }
  }

  input {
    margin-bottom: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date {
    width: 30%;
  }
`;

export const ButtonSave = styled.div`
  width: 100px;
  height: 50px;

  border: 1px solid #000000;
  border-radius: 8px;

  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #000000;
`;

export const FormationContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 10px;
  margin-bottom: 10px;

  border-bottom: 1px solid #d9d9d9;

  font-family: "Raleway";

  h2 {
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    width: 100%;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonSaveFormation = styled.div`
  width: 100px;
  height: 50px;

  border: 1px solid #000000;
  border-radius: 8px;

  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #000000;
`;

export const ButtonAddExperience = styled.div`
  width: 100px;
  height: 50px;

  border: 1px solid #000000;
  border-radius: 8px;

  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #000000;
`;

export const ButtonAddSkill = styled.div`
  width: 100px;
  height: 50px;

  border: 1px solid #000000;
  border-radius: 8px;

  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #000000;
`;

export const ButtonAddLanguage = styled.div`
  width: 100px;
  height: 50px;

  border: 1px solid #000000;
  border-radius: 8px;

  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #000000;
`;

export const Item = styled.div`
  width: 100%;

  padding-top: 10px;
`;

export const SkillContainer = styled.div`
  width: 100%;

  padding: 10px;
  margin-bottom: 10px;

  border-bottom: 1px solid #d9d9d9;

  font-family: "Raleway";

  h2 {
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    word-wrap: break-word;
  }

  p {
    width: 90%;
  }

  .icon {
    margin-right: 5px;
  }
`;

export const LanguageContainer = styled.div`
  width: 100%;

  padding: 10px;
  margin-bottom: 10px;

  border-bottom: 1px solid #d9d9d9;

  font-family: "Raleway";

  h2 {
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    word-wrap: break-word;
  }

  li {
    width: 100%;
  }
`;

export const ButtonBack = styled.div`
  width: 100px;
  height: 40px;

  position: fixed;
  top: 5px;
  left: 5px;

  z-index: 2;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-weight: bold;

  cursor: pointer;

  background-color: #005094;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  background-color: purple;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;
export const Header = styled.div`
  width: 100%;
  height: 50px;

  background-color: gray;
`;

export const ContentResume = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: crimson;
`;
export const ViewResume = styled.div`
  width: 100%;
  height: 100%;

  background-color: cyan;
`;
export const ResumeTop = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: blue;
`;
export const ResumeImage = styled.div`
  width: 150px;
  height: 100%;

  background-color: white;
`;

export const ContentInfo = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: antiquewhite;
`;
export const ResumeRight = styled.div`
  width: 100%;
  height: 100%;

  background-color: blueviolet;
`;
export const ResumeLeft = styled.div`
  width: 100%;
  height: 100%;

  background-color: green;
`;
export const ResumeProfile = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: red;
`;

export const ResumeName = styled.div`
  width: auto;
  height: 40px;

  margin: 10px 8px;

  display: flex;
  align-items: center;

  font-size: 30px;

  background-color: white;
`;
export const ResumeFirstName = styled.h1`
  width: auto;
  height: 40px;

  margin: 10px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;

  background-color: blue;
`;

export const ResumeLastName = styled.h1`
  width: auto;
  height: 40px;

  margin: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;

  background-color: green;
`;

export const ResumeOffice = styled.p`
  width: auto;
  height: 20px;

  display: flex;
  align-items: center;

  margin-left: 20px;

  font-size: 24px;

  background-color: yellow;
`;

export const ResumeInfos = styled.p`
  width: 60%;
  height: 60px;

  background-color: pink;
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

  background-color: blue;
`;

export const ResumeEmail = styled.p`
  width: auto;
  height: 20px;

  .icon {
    font-size: 10px;
    margin-right: 5px;
  }

  background-color: blue;
`;
export const ResumePhone = styled.p`
  width: auto;
  height: 20px;

  margin-left: 20px;

  background-color: cyan;
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

    background-color: antiquewhite;

    p {
    }

    .icon {
      font-size: 15px;
      margin-right: -35px;
    }
  }

  background-color: greenyellow;
`;

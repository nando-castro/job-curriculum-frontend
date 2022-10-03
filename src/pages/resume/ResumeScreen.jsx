import {
  Container,
  Content,
  ContentInfo,
  ContentResume,
  Header,
  ResumeAddress,
  ResumeComunication,
  ResumeEmail,
  ResumeFirstName,
  ResumeImage,
  ResumeInfos,
  ResumeLastName,
  ResumeLeft,
  ResumeName,
  ResumeOffice,
  ResumePhone,
  ResumeProfile,
  ResumeRight,
  ResumeTop,
  ViewResume,
} from "./styles";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function ResumeScreen({
  firstName,
  LastName,
  picture,
  office,
  email,
  phone,
  street,
  postalCode,
  city,
}) {
  return (
    <Container>
      <Header></Header>
      <ContentResume>
        <Content>Lado 1</Content>
        <ViewResume>
          <ResumeTop>
            <ResumeImage></ResumeImage>
            <ResumeProfile>
              <ResumeName>
                <ResumeFirstName>{firstName}</ResumeFirstName>
                <ResumeLastName>{LastName}</ResumeLastName>
              </ResumeName>
              <ResumeOffice>{office}</ResumeOffice>
              <ResumeInfos>
                <ResumeAddress>
                  <ResumeComunication>
                    <ResumeEmail>
                      <MdEmail className="icon" />
                      {email}
                    </ResumeEmail>
                    <ResumePhone>
                      <FaPhoneAlt className="icon" />
                      {phone}
                    </ResumePhone>
                  </ResumeComunication>
                  <div>
                    <MdLocationOn className="icon" />
                    <p>{street}</p>
                    <p>{postalCode}</p>
                    <p>{city}</p>
                  </div>
                </ResumeAddress>
              </ResumeInfos>
            </ResumeProfile>
          </ResumeTop>
          <ContentInfo>
            <ResumeLeft></ResumeLeft>
            <ResumeRight></ResumeRight>
          </ContentInfo>
        </ViewResume>
      </ContentResume>
    </Container>
  );
}

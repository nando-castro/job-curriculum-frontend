import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Header from "../../shared/header/Header";
import {
  Button,
  ButtonResume,
  Container,
  Content,
  ContentResume,
  Footer,
  Item,
  ItemContent,
  OptionsContent,
  Text,
  ResumeAddress,
  ResumeComunication,
  ResumeEmail,
  ResumeFirstName,
  ResumeImage,
  ResumeInfos,
  ResumeLastName,
  ResumeName,
  ResumeOffice,
  ResumePhone,
  ResumeProfile,
  ResumeTop,
  ItemInfo,
} from "./styles";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaEdit } from "react-icons/fa";

import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect } from "react";
import { api } from "../../services/api";
import jwtDecode from "jwt-decode";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user, resumes, setResumes, idResume, setIdResume } = useAuth();
  // let dataUser = null;
  // if (user) {
  //   dataUser = jwtDecode(user.token);
  // }

  function login() {
    navigate("/signin");
  }

  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  function viewJobs() {
    console.log(user);
    // navigate("/jobs");
    alert("ver jobs");
  }
  function createResume() {
    setIdResume(null);
    navigate("/resume");
  }
  function viewProfile() {
    alert("ver profile");
  }
  function updateResume(id) {
    api
      .get(`resume/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setIdResume(res.data[0].id);
        navigate("/resume");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (user) {
      function getResumes() {
        api
          .get(`/resumes`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((res) => {
            setResumes(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getResumes();
    }
  }, []);

  function renderResumes() {
    if (user) {
      return resumes.map((i, index) => (
        <Item key={index}>
          <ResumeTop>
            <ResumeImage src={i.picture} />
            <ResumeProfile>
              <ResumeName>
                <ResumeFirstName>{i.firstName}</ResumeFirstName>
                <ResumeLastName>{i.lastName}</ResumeLastName>
              </ResumeName>
              <ResumeOffice>{i.office}</ResumeOffice>
              <ResumeInfos>
                <ResumeAddress>
                  <ResumeComunication>
                    <ResumeEmail>
                      <MdEmail className="icon" />
                      {i.email}
                    </ResumeEmail>
                    <ResumePhone>
                      <FaPhoneAlt className="icon" />
                      {i.numberPhone}
                    </ResumePhone>
                  </ResumeComunication>
                  <div>
                    <p>
                      <MdLocationOn className="icon" />
                      {i.address}
                    </p>
                    <p>{i.postalCode}</p>
                    <p>{i.city}</p>
                  </div>
                </ResumeAddress>
              </ResumeInfos>
            </ResumeProfile>
          </ResumeTop>
          <ItemInfo onClick={() => updateResume(i.id)}>
            <div id={i.id}>
              <FaEdit />
              Editar
            </div>
            <div>{i.title}</div>
          </ItemInfo>
        </Item>
      ));
    }
  }

  return (
    <>
      {user !== null ? (
        <Container>
          <Header />
          <OptionsContent>
            <div></div>
            <ItemContent onClick={viewProfile}>CONTA</ItemContent>
            <ItemContent onClick={createResume}>CURRICULOS</ItemContent>
            <ItemContent onClick={viewJobs}>VAGAS</ItemContent>
            <Button onClick={exitApp}>SAIR</Button>
          </OptionsContent>
          <ContentResume>
            <ButtonResume onClick={createResume}>
              CRIAR CURRICULO <IoIosAddCircleOutline className="icon" />
            </ButtonResume>
            {renderResumes()}
          </ContentResume>
        </Container>
      ) : (
        <Container>
          <Header />
          <Content>
            <Text>Uma ferramenta para ajudar voce na sua carreira</Text>
            <Button onClick={login}>CRIE SEU CURRICULO AGORA MESMO</Button>
          </Content>
          <Footer />
        </Container>
      )}
    </>
  );
}

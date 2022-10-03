import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Header from "../../shared/header/Header";
import {
  Button,
  Container,
  Content,
  Footer,
  ItemContent,
  OptionsContent,
  Text,
} from "./styles";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user } = useAuth();

  function login() {
    navigate("/signin");
  }

  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  function viewJobs() {
    // navigate("/jobs");
    alert("ver jobs");
  }
  function createResume() {
    // navigate("/resume");
    alert("criar resume");
  }
  function viewProfile() {
    // navigate("/resume");
    alert("ver profile");
  }
  return (
    <>
      {user !== null ? (
        <Container>
          <Header />
          <OptionsContent>
            <div></div>
            <ItemContent onClick={viewProfile}>
              <img
                src="http://s2.glbimg.com/h3Duok3KWVA8yaIOzZZIESkNLC4DKPsVVGWWhNMHhpNIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/02/imagem_para_sexta_51.jpg"
                alt="user"
              />
              USUARIO
            </ItemContent>
            <ItemContent onClick={createResume}>CURRICULOS</ItemContent>
            <ItemContent onClick={viewJobs}>VAGAS</ItemContent>
          </OptionsContent>
          <Content>
            <Button onClick={exitApp}>SAIR</Button>
          </Content>
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

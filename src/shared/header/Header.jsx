import { Container, Content, TextContent, Top } from "./styles";
import Logo from "../logo/Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  function viewJobs() {
    alert("Ver Vagas");
  }

  function viewSignin() {
    navigate("/signin");
  }
  return (
    <>
      {user !== null ? (
        <Container>
          <Top>
            <Logo />
          </Top>
        </Container>
      ) : (
        <Container>
          <Top>
            <Logo />
            <Content>
              <TextContent>Criar Curriculo</TextContent>
              <TextContent onClick={viewJobs}>Vagas</TextContent>
              <TextContent>Fazer Login</TextContent>
            </Content>
          </Top>
        </Container>
      )}
    </>
  );
}

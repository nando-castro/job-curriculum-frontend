import { BarBottom, Container, Content, TextContent, Top } from "./styles";
import { IoExit } from "react-icons/io5";
import Logo from "../logo/Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();
  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
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
              <TextContent>Vagas</TextContent>
              <TextContent>Fazer Login</TextContent>
            </Content>
          </Top>
        </Container>
      )}
    </>
  );
}

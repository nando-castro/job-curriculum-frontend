import { useNavigate } from "react-router-dom";
import Header from "../../shared/header/Header";
import { Button, Container, Content, Footer, Text } from "./styles";

export default function HomeScreen() {
  const navigate = useNavigate();
  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  return (
    <Container>
      <Header />
      <Content>
        <Text>Uma ferramenta para ajudar voce na sua carreira</Text>
        <Button>CRIE SEU CURRICULO AGORA MESMO</Button>
      </Content>
      <Footer />
    </Container>
  );
}

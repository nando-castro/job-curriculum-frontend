import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useState } from "react";
import { api } from "../../services/api";
import {
  Button,
  Container,
  ContainerLogin,
  Footer,
  Form,
  Line,
  Top,
} from "./styles";
import Loader from "../../shared/loading/Loader";
import Header from "../../shared/header/Header";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  if (user !== null) {
    navigate("/");
  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function login(e) {
    e.preventDefault();
    setLoading(true);
    api
      .post("signin", { ...userLogin })
      .then((res) => {
        setUser(res.data);
        const person = {
          token: res.data.token,
        };
        localStorage.setItem("userLogged", JSON.stringify(person));
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // Swal.fire({
        //   icon: "error",
        //   title: "Login inválido!",
        //   text: "Confira o seu nome de usuário e senha para validar o seu acesso.",
        //   confirmButtonColor: "#1976d2",
        // });
      });
  }

  function changeInput(e) {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      {loading ? <Loader /> : <></>}
      <Header />
      <ContainerLogin>
        <Top>ENTRAR</Top>
        <Form>
          <input
            type="email"
            placeholder="Email"
            value={userLogin.email}
            name="email"
            onChange={changeInput}
          />
          <input
            type="password"
            placeholder="Senha"
            value={userLogin.password}
            name="password"
            onChange={changeInput}
          />
        </Form>
        <Footer>
          <Link to="/signup">Não possui cadastro? Clique aqui!</Link>
          <Button className="button-login" onClick={login}>
            ENTRAR
          </Button>
        </Footer>
        <Line />
      </ContainerLogin>
    </Container>
  );
}

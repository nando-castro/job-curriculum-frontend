import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import {
  Button,
  Container,
  ContainerRegister,
  Footer,
  Form,
  Line,
  Top,
} from "./styles";
import Header from "../../shared/header/Header";
import Loader from "../../shared/loading/Loader";
// import Swal from "sweetalert2";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userRegister, setUserregister] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function register(e) {
    e.preventDefault();
    setLoading(true);

    api
      .post("/signup", { ...userRegister })
      .then(() => {
        navigate("/signin");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // if (err.response.status === 409) {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Usuário já existe",
        //     confirmButtonColor: "#1976d2",
        //   });
        //   return;
        // }
        // Swal.fire({
        //   icon: "error",
        //   title: "Preencha os campos corretamente!",
        //   confirmButtonColor: "#1976d2",
        // });
      });
  }

  function changeInput(e) {
    setUserregister({ ...userRegister, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      {loading ? <Loader /> : <></>}
      <Header />
      <ContainerRegister>
        <Top>Cadastro</Top>
        <Form>
          <input
            type="email"
            placeholder="Email"
            value={userRegister.email}
            name="email"
            onChange={changeInput}
          />
          <input
            type="password"
            placeholder="Senha"
            value={userRegister.password}
            name="password"
            onChange={changeInput}
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            value={userRegister.passwordConfirm}
            name="passwordConfirm"
            onChange={changeInput}
          />
        </Form>
        <Footer>
          <Link to="/signin">Possui Cadastro? Clique aqui!</Link>
          <Button onClick={register}>CADASTRAR</Button>
        </Footer>
        <Line />
      </ContainerRegister>
    </Container>
  );
}

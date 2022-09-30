import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export default function Logo() {
  const navigate = useNavigate();
  function home() {
    navigate("/");
  }
  return <Container onClick={home}>JOB CURRICULUM</Container>;
}

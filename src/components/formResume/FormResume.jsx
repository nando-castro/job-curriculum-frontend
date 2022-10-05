// import { useState } from "react";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { Container } from "./styles";

export default function FormResume() {
  const [resume, setResume] = useState({
    firstName: "",
    lastName: "",
  });
  function changeInput(e) {
    setResume({ ...resume, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      Form Resume
      <input
        type="texts"
        placeholder="Primeiro Nome"
        value={resume.firstName}
        name="firstName"
        onChange={changeInput}
      />
    </Container>
  );
}

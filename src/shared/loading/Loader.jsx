import { Oval } from "react-loader-spinner";
import { Container } from "./styles";

export default function Loader() {
  return (
    <Container>
      <Oval
        height="100"
        width="100"
        radisu={1}
        color="#005985"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
}

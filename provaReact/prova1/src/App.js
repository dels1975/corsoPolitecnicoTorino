import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./logo.svg";

import MyButton from "./Button.js";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          Premi quì: <MyButton lang="it" />
          <img src={logo} alt="Logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

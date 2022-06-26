import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ButtonGroup from "./ButtonGroup";

const name = ["Chess", "Poker", "Black Jack", "Go"];

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Choose Your Game</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup names={name}></ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

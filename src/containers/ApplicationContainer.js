import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import App from "../App";

const AppContainer = ({children}) => {
  return (
    <Container fluid>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default AppContainer;
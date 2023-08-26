import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function TopbarComp() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary p-3">
        <Container>
          <Link to="/" style={{ textDecoration: "white" }}>
            <Navbar.Brand>Sistemtoko</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=" ">
            <Nav className="me-auto">{""}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default TopbarComp;

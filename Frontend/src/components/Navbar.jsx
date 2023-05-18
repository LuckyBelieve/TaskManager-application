import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
          <Navbar bg="primary" variant="dark" className="nav-bar">
            <Container>
              <LinkContainer to={"/"}>
                <NavbarBrand>JUST DO IT</NavbarBrand>
              </LinkContainer>
              <Nav>
                <Link to={'/'} className="nav-link">
                  Home
                </Link>
                <Link to={'/addTask'} className="nav-link">
                  Add Task
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
    );
}
 
export default NavBar;
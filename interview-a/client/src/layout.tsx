import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

const Layout = () => (
  <>
    <NavBar />
    <Container className="main pad-t">
      <Outlet />
    </Container>
  </>
);

export default Layout;

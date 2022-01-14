import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => (
  <Container className="main pad-t">
	  <Outlet />
  </Container>
);

export default Layout;

import { useRouter } from "next/router";

import { Navbar, Nav } from "react-bootstrap";

import {
  FaBars,
  FaHome,
  FaDesktop,
  FaSlideshare,
  FaServer,
  FaRegUser,
} from "react-icons/fa";

export const NavbarComponent = () => {
  const router = useRouter();

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand onClick={() => router.push("/")}>
          <img onDragStart={(e) => e.preventDefault()} src="/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto">
            <Nav.Link
              className={router.pathname == "/" ? "active" : "link"}
              onClick={() => router.push("/")}
            >
              <FaHome /> Página inicial
            </Nav.Link>
            <Nav.Link
              className={router.pathname == "/hosting" ? "active" : "link"}
              onClick={() => router.push("/hosting")}
            >
              <FaDesktop /> Hospedagens
            </Nav.Link>
            <Nav.Link
              className={router.pathname == "/resellers" ? "active" : "link"}
              onClick={() => router.push("/resellers")}
            >
              <FaSlideshare /> Revendas
            </Nav.Link>
            <Nav.Link
              className={router.pathname == "/servers" ? "active" : "link"}
              onClick={() => router.push("/servers")}
            >
              <FaServer /> Servidores
            </Nav.Link>
          </Nav>
          <div className="client">
            <a className="clientarea" onClick={() => router.push("/")}>
              <FaRegUser /> Área do Cliente
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

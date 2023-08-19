import { NavLink } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

export function Menu() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink to={'/'}>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to={'/about'}>About</NavLink>
        </Navbar.Link>
        <Navbar.Link href="#">
          <NavLink to={'/techstack'}>TechStack</NavLink>
        </Navbar.Link>
        <Navbar.Link href="#">
          <NavLink to={'/contact'}>Contact</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

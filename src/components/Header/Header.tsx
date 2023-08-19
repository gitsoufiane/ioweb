import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="mb-16">
      <ul className="flex flex-row item-center gap-16 justify-center">
        <li className="">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/techstack'}>TechStack</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}

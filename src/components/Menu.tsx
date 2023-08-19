import { NavLink } from 'react-router-dom';

export function Menu() {
  return (
    <nav className="mb-52 relative z-[99]">
      <ul className="flex flex-row justify-center gap-16 item-center">
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/techstack'}>TechStack</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

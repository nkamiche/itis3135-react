import { NavLink } from "react-router-dom";

function SecondaryNav() {
  return (
    <nav aria-label="Secondary navigation">
      <NavLink to="/introduction">Introduction</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default SecondaryNav;

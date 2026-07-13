import { NavLink } from "react-router-dom";

function PrimaryNav() {
  return (
    <nav aria-label="Primary navigation">
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      | <NavLink to="/contract">Contract</NavLink>
    </nav>
  );
}

export default PrimaryNav;

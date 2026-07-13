import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

function Header() {
  return (
    <header>
      <h1>Neha Kamichetty&apos;s Nice Kangaroo | ITIS3135</h1>
      <p>
        <em>Building reliable, accessible, and creative web experiences.</em>
      </p>
      <PrimaryNav />
      <SecondaryNav />
    </header>
  );
}

export default Header;

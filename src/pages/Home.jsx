import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

function Home() {
  usePageTitle("Home");

  return (
    <main>
      <h2>Home</h2>

      <figure>
        <img
          src={`${import.meta.env.BASE_URL}images/neha-introduction.jpg`}
          alt="Neha Kamichetty smiling in a restaurant mirror while holding a phone."
          width="280"
        />
        <figcaption>Neha at a graduation celebration</figcaption>
      </figure>

      <p>
        My name is Neha Kamichetty. I am currently an upcoming senior at UNC Charlotte studying
        Computer Science. I enjoy swimming, art, cybersecurity, software development, and learning
        new technologies.
      </p>

      <p>
        Welcome to my ITIS 3135 course website. Use the navigation links above to explore my
        coursework and assignments.
      </p>

      <p>
        <Link to="/introduction">Learn more about me</Link>
      </p>
    </main>
  );
}

export default Home;

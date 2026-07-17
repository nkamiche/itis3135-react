import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

function Contract() {
  usePageTitle("Contract");

  return (
    <main>
      <h2>Course Contract</h2>

      <figure className="contract-image">
        <img
          src={`${import.meta.env.BASE_URL}images/course-contract.webp`}
          alt="Illustration of a signed agreement representing the course contract"
        />
        <figcaption>Signing the course contract</figcaption>
      </figure>

      <p>
        I, <Link to="/introduction">Neha Kamichetty</Link>, agree to abide by the terms of the course
        contract in my Summer 2026, ITIS3135, Web-Based Application Design and Development with my
        instructor, Professor D.I. von Briesen.
      </p>

      <p>
        I understand that all work that I do on publicly available online tools will be available to
        the world, and will not put information there that is inappropriate for schoolwork, or that I
        wish to keep private.
      </p>

      <p>
        I also understand that it is my work that counts for attendance, not logins or showing up for
        class. As such, failure to turn in assignments may show as absences.
      </p>

      <p>
        I also understand that given the structure and content of this class it&apos;s possible to find
        many examples online or even view my classmates&apos; code directly. I swear that I will only use
        these resources to learn, and will not cut and paste code except where I have properly given
        credit (i.e. external libraries) and never from my classmates.
      </p>

      <p>
        Signed: <em>Neha Kamichetty, 05/24/2026</em>
      </p>
    </main>
  );
}

export default Contract;

import { usePageTitle } from "../hooks/usePageTitle";

function About() {
  usePageTitle("About");

  return (
    <main>
      <h2>About This Course Site</h2>

      <figure className="about-course-image">
        <img
          src={`${import.meta.env.BASE_URL}images/about-web-development.webp`}
          alt="Illustration representing web development and website design"
        />
        <figcaption>
          Illustration representing the web development tools and planning used to build this course
          site.
        </figcaption>
      </figure>

      <p>
        This website was created as part of ITIS 3135: Front-End Web Application Development at UNC
        Charlotte. The course is taught by Mr. von Briesen and gives students hands-on experience
        creating professional, responsive, and accessible websites.
      </p>

      <p>
        Throughout the semester, students build multiple websites while learning HTML, CSS,
        JavaScript, accessibility, validation, version control, and other web development skills
        using modern tools and best practices.
      </p>

      <h3>Tools Used in This Course</h3>

      <ul>
        <li>Visual Studio Code (VS Code)</li>
        <li>Emmet within VS Code</li>
        <li>FileZilla for SFTP</li>
        <li>GitHub Desktop and GitHub.com</li>
        <li>Browser Developer Tools</li>
        <li>Accumulus Validator</li>
      </ul>

      <h3>Websites and Projects</h3>

      <ul>
        <li>Personal Home Portfolio</li>
        <li>This Course Site</li>
        <li>Design Firm Site</li>
        <li>Crappy Page</li>
        <li>Whimsical Product Company</li>
        <li>Student/Peer Management Tool</li>
        <li>Client Project Website</li>
      </ul>

      <p>
        <a href="https://nkamiche.github.io/itis3135/hobby/index.html">View my Hobby Site</a>
      </p>
    </main>
  );
}

export default About;

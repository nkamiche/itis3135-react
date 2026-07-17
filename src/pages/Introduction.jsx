import { usePageTitle } from "../hooks/usePageTitle";

function Introduction() {
  usePageTitle("Introduction");

  return (
    <main className="introduction-page">
      <h2 className="page-title">Introduction</h2>

      <h6 className="introduction-display-name">Neha Kamichetty | Nice Kangaroo</h6>

      <figure className="intro-photo">
        <img
          src={`${import.meta.env.BASE_URL}images/neha-introduction.jpg`}
          alt="Neha Kamichetty smiling in a restaurant mirror while holding a phone."
          width="280"
        />
        <figcaption>In a restaurant mirror</figcaption>
      </figure>

      <p className="intro-lead">
        Hello everyone! My name is Neha Kamichetty. I am currently a student at UNC Charlotte and I
        am excited to continue developing my web development skills. I enjoy learning new
        technologies, working on creative projects, and building experiences that can help me in my
        future career.
      </p>

      <ul className="intro-details">
        <li>
          <strong>Personal Background:</strong>
          I was born in India and moved to the United States when I was 5 because of my dad&apos;s job. I
          lived in Irvine, California for 3 years before moving to North Carolina where I have lived
          ever since. I enjoy spending time with friends, traveling, and exploring new opportunities.
        </li>
        <li>
          <strong>Professional Background:</strong>
          I have experience working as a tutor and interning at a startup.
        </li>
        <li>
          <strong>Academic Background:</strong>
          I am a rising senior at UNC Charlotte pursuing a Bachelor&apos;s degree in Computer Science while
          continuing to expand my technical skills.
        </li>
        <li>
          <strong>Background in this Subject:</strong>
          I previously took this course, but I wasn&apos;t able to complete the assignments due to personal
          circumstances.
        </li>
        <li>
          <strong>Primary Work Computer:</strong>
          Windows laptop.
        </li>
        <li>
          <strong>Primary Work Location:</strong>
          Home in North Carolina.
        </li>
        <li>
          <strong>Alternate Computer:</strong>
          Going to the public library near me and working on the computers there.
        </li>
        <li>
          <strong>Courses I&apos;m Taking:</strong>
          <ol>
            <li>
              ITIS 3135 &ndash; Front-End Web Application Development: To strengthen my HTML, CSS, and
              JavaScript skills. And I need the credit!
            </li>
          </ol>
        </li>
        <li>
          <strong>Funny/Interesting Item:</strong>
          I accidentally fell asleep at a 6 a.m. yoga class and woke up to the instructor laughing.
        </li>
        <li>
          <strong>Something Else to Share:</strong>
          I speak 4 languages!
        </li>
      </ul>

      <blockquote
        className="intro-quote"
        cite="https://en.wikiquote.org/wiki/Walt_Whitman"
      >
        <p>&ldquo;Be curious, not judgmental.&rdquo;</p>
        <cite>
          &mdash; <em>Walt Whitman</em>
        </cite>
      </blockquote>
    </main>
  );
}

export default Introduction;

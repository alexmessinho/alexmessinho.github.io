const highlights = [
  {
    label: "University of Miami",
    value: "M.Sc. Industrial & Systems Engineering",
    detail: "GPA 3.96",
  },
  {
    label: "Research Focus",
    value: "Team performance, SNA, optimization",
    detail: "Healthcare systems and sports analytics",
  },
  {
    label: "Energy Analytics",
    value: "DOE industrial assessment work",
    detail: "Operational efficiency recommendations",
  },
  {
    label: "Languages",
    value: "English and Spanish",
    detail: "French working proficiency",
  },
];

const experience = [
  {
    role: "Graduate Research Assistant",
    organization: "Simulation & Optimization Research Lab",
    period: "Feb 2025 - May 2026",
    copy:
      "Designed optimization models linking network structures, team coordination, scheduling strategy, and performance outcomes in healthcare systems.",
  },
  {
    role: "Senior Energy Analyst",
    organization: "University of Miami Industrial Assessment Center",
    period: "Aug 2024 - May 2026",
    copy:
      "Conducted industrial energy audits under Department of Energy programs and translated operational data into decision-ready recommendations.",
  },
  {
    role: "Consultant",
    organization: "Proyecto Cantera, Juntos por Mexico",
    period: "Feb 2023 - Jun 2023",
    copy:
      "Developed pricing, operational, fundraising, and resource allocation frameworks to strengthen program sustainability.",
  },
  {
    role: "Consultant",
    organization: "Acertramex S.A. de C.V.",
    period: "Feb 2023 - Mar 2023",
    copy:
      "Applied Lean diagnostics and root-cause analysis to propose preventive maintenance and visual control improvements.",
  },
];

const skills = [
  "Advanced data analytics",
  "Optimization modeling",
  "Simulation",
  "KPI analysis",
  "Operational efficiency",
  "Energy auditing",
  "Stakeholder alignment",
  "Executive communication",
];

const tools = [
  "Python",
  "SQL",
  "Tableau",
  "Power BI",
  "R",
  "MATLAB",
  "Minitab",
  "VBA",
  "AnyLogic",
  "OpenSim",
  "OpenCap",
  "LaTeX",
];

const education = [
  {
    school: "University of Miami",
    degree: "M.Sc. Industrial and Systems Engineering",
    detail: "Coral Gables, FL / GPA 3.96",
  },
  {
    school: "Tecnologico de Monterrey",
    degree: "B.S. Industrial and Systems Engineering",
    detail: "Mexico City, Mexico / Final grade 92.86%",
  },
  {
    school: "Macquarie University",
    degree: "Semester Abroad",
    detail: "Sydney, Australia",
  },
];

export default function Home() {
  return (
    <>
      <nav id="navbar" aria-label="Primary navigation">
        <div className="container nav-content">
          <a className="logo" href="#hero" aria-label="Alejandro home">
            ALEX.
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header id="hero">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="eyebrow">Sports Analytics / Systems / Team Performance</p>
          <h1>Alejandro Diaz Barreiro Aldana</h1>
          <p>
            Systems thinker exploring how teams, relationships, and human
            dynamics shape performance across sports analytics, healthcare
            systems, and optimization.
          </p>
          <div className="hero-btns">
            <a href="#research" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">Profile & Expertise</p>
            <h2>Where data meets human systems.</h2>
          </div>

          <div className="bento-grid">
            <article className="bento-item glass large reveal">
              <h3>About Me</h3>
              <p>
                I am a graduate Industrial and Systems Engineering student at
                the University of Miami focused on understanding how complex
                systems drive performance across high-stakes environments. My
                work turns relationships, constraints, and operating data into
                clearer decisions.
              </p>
            </article>

            <article className="bento-item glass tall reveal accent-card">
              <span className="card-kicker">Flagship Focus</span>
              <h3>Team Performance Modeling</h3>
              <p>
                Exploring how network structure, coordination, and scheduling
                shape outcomes in healthcare and elite team environments.
              </p>
            </article>

            {highlights.map((item) => (
              <article className="bento-item glass reveal" key={item.label}>
                <span className="card-kicker">{item.label}</span>
                <h3>{item.value}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="research">
          <div className="section-heading reveal">
            <p className="eyebrow">Research & Projects</p>
            <h2>Optimization, networks, and performance.</h2>
          </div>

          <div className="bento-grid research-grid">
            <article className="bento-item glass tall reveal">
              <span className="card-kicker">Research</span>
              <h3>Healthcare Systems Optimization</h3>
              <p>
                Modeling team coordination, scheduling, and structural
                relationships to improve reliability and efficiency in complex
                care environments.
              </p>
            </article>

            <article className="bento-item glass large reveal">
              <span className="card-kicker">Applied Analytics</span>
              <h3>Industrial Energy Assessment</h3>
              <p>
                Analyzing operational data from industrial facilities to
                identify inefficiencies and translate findings into practical,
                client-ready recommendations.
              </p>
              <div className="skill-cloud">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>

            <article className="bento-item glass reveal">
              <span className="card-kicker">Conferences</span>
              <h3>ACS Surgeons & Engineers 2026</h3>
              <p>Presenter / UM Research Symposium 2025 Presenter & Awardee</p>
            </article>

            <article className="bento-item glass reveal">
              <span className="card-kicker">Tools</span>
              <h3>Analytics Stack</h3>
              <p>{tools.join(" / ")}</p>
            </article>
          </div>
        </section>

        <section id="experience">
          <div className="section-heading reveal">
            <p className="eyebrow">Experience</p>
            <h2>Selected roles and work.</h2>
          </div>

          <div className="timeline glass reveal">
            {experience.map((item) => (
              <article className="timeline-row" key={item.organization}>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                </div>
                <div>
                  <h4>{item.organization}</h4>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="section-heading reveal">
            <p className="eyebrow">Education</p>
            <h2>Academic foundation.</h2>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card glass reveal" key={item.school}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container contact-content">
          <div>
            <p className="eyebrow">Let&apos;s Connect</p>
            <h2>Interested in collaboration or questions about my work?</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:alexdiazbarreiro@miami.edu">Email</a>
            <a href="https://www.linkedin.com/in/alejandro-diaz-barreiro">
              LinkedIn
            </a>
          </div>
          <p className="copyright">
            &copy; 2026 Alejandro Diaz Barreiro Aldana. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

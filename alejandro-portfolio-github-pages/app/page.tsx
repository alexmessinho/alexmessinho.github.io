const competencies = [
  "Advanced data analytics",
  "Optimization modeling",
  "Simulation",
  "KPI and performance analysis",
  "Operational efficiency",
  "Energy auditing",
  "Executive communication",
  "Stakeholder alignment",
];

const experience = [
  {
    role: "Graduate Research Assistant",
    organization: "Simulation & Optimization Research Lab, University of Miami",
    period: "Feb 2025 - May 2026",
    details:
      "Designing optimization models that connect network structures, healthcare performance, coordination, and scheduling decisions.",
  },
  {
    role: "Senior Energy Analyst",
    organization: "University of Miami Industrial Assessment Center",
    period: "Aug 2024 - May 2026",
    details:
      "Conducting Department of Energy industrial audits and translating operational data into decision-ready efficiency recommendations.",
  },
  {
    role: "Consultant",
    organization: "Proyecto Cantera, Juntos por Mexico",
    period: "Feb 2023 - Jun 2023",
    details:
      "Developed pricing, resource allocation, and fundraising frameworks to improve program sustainability.",
  },
  {
    role: "Consultant",
    organization: "Acertramex S.A. de C.V.",
    period: "Feb 2023 - Mar 2023",
    details:
      "Applied Lean diagnostics and root-cause analysis to propose maintenance, process, and visual control improvements.",
  },
];

const education = [
  {
    school: "University of Miami",
    degree: "M.Sc. Industrial and Systems Engineering",
    detail: "GPA: 3.96",
  },
  {
    school: "Tecnologico de Monterrey",
    degree: "B.S. Industrial and Systems Engineering",
    detail: "Final grade: 92.86%",
  },
  {
    school: "Macquarie University",
    degree: "Semester Abroad",
    detail: "Sydney, Australia",
  },
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

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="intro-heading">
        <nav className="topbar" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Industrial & Systems Engineering</p>
            <h1 id="intro-heading">Alejandro Diaz Barreiro Aldana</h1>
            <p className="lead">
              I turn complex systems into clear operating decisions through
              optimization, analytics, and performance modeling.
            </p>
            <div className="heroActions" aria-label="Contact links">
              <a className="button primary" href="mailto:alexdiazbarreiro@miami.edu">
                Email me
              </a>
              <a
                className="button secondary"
                href="https://www.linkedin.com/in/alejandro-diaz-barreiro"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="profilePanel" aria-label="Portfolio summary">
            <p>Miami, FL</p>
            <strong>Graduate student at the University of Miami</strong>
            <span>
              Focused on healthcare systems, energy efficiency, organizational
              design, and team performance.
            </span>
          </aside>
        </div>
      </section>

      <section className="section introSection">
        <p>
          My work sits where people, processes, and data meet. I use analytical
          models to understand how structure shapes outcomes, then translate
          that complexity into practical recommendations leaders can act on.
        </p>
      </section>

      <section className="section" id="work">
        <div className="sectionHeader">
          <p className="eyebrow">Experience</p>
          <h2>Selected Work</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={item.organization}>
              <div>
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
              </div>
              <time>{item.period}</time>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection" id="skills">
        <div className="sectionHeader">
          <p className="eyebrow">Capabilities</p>
          <h2>What I Bring</h2>
        </div>
        <div className="splitGrid">
          <div className="tagGroup" aria-label="Core competencies">
            {competencies.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="toolsPanel">
            <h3>Tools and technologies</h3>
            <p>{tools.join(" / ")}</p>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="sectionHeader">
          <p className="eyebrow">Education</p>
          <h2>Academic Foundation</h2>
        </div>
        <div className="educationGrid">
          {education.map((item) => (
            <article className="educationCard" key={item.school}>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contactBand" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build clearer decisions from complex systems.</h2>
        </div>
        <div className="contactLinks">
          <a href="mailto:alexdiazbarreiro@miami.edu">alexdiazbarreiro@miami.edu</a>
          <a href="https://www.linkedin.com/in/alejandro-diaz-barreiro">
            linkedin.com/in/alejandro-diaz-barreiro
          </a>
        </div>
      </section>
    </main>
  );
}

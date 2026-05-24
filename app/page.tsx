import {
  ArrowRight,
  BarChart3,
  FileText,
  Mail,
  Network,
  Send,
} from "lucide-react";

const heroMetrics = [
  "M.S. Industrial Engineering",
  "Thesis in team formation",
  "Sport analytics direction",
];

const researchAreas = [
  {
    title: "Sports Analytics",
    copy:
      "Using data, networks and context to understand how teams form, adapt and create collective advantage.",
  },
  {
    title: "Healthcare Systems",
    copy:
      "Studying coordination, continuity and operational reliability inside complex care environments.",
  },
  {
    title: "Mathematical Optimisation",
    copy:
      "Designing decision frameworks that balance short-term performance with long-term resilience.",
  },
  {
    title: "Social Network Analysis",
    copy:
      "Modelling relationships as performance infrastructure rather than background noise.",
  },
  {
    title: "Sports Biomechanics",
    copy:
      "Exploring how movement, constraint and human capability shape performance outcomes.",
  },
  {
    title: "Energy Analytics",
    copy:
      "Translating operational data into practical improvements for efficiency and sustainability.",
  },
];

const thesisMethods = [
  "Binary Integer Programming",
  "Social Network Analysis",
  "Robustness modelling",
  "Scenario analysis",
  "Miami Heat case study",
];

const journey = [
  "Engineering foundation",
  "Research in complex systems",
  "Surgical team optimisation",
  "Sport team formation thesis",
  "Research presentations",
  "Elite sport strategy ambition",
];

const recognition = [
  "ISE David J. Sumanth International Graduate Student Merit Award",
  "University of Miami research recognition",
  "ACS Surgeons & Engineers Conference",
  "Surgery Research Day",
  "Expo Ingenierias",
];

const focusAreas = [
  "Sports analytics",
  "Team optimisation",
  "Strategic decision-making",
  "Research-to-commercial applications",
  "Leadership systems",
];

const inspirations = [
  "Football",
  "Storytelling",
  "Surfing",
  "Hiking",
  "Messi",
  "Kobe Bryant",
  "The Beatles",
  "George Lucas",
];

export default function Home() {
  return (
    <>
      <nav id="navbar" aria-label="Primary navigation">
        <div className="container nav-content">
          <a className="logo focus-ring" href="#hero" aria-label="Alejandro home">
            ALEX.
          </a>
          <div className="nav-links">
            <a className="focus-ring" href="#thesis">Thesis</a>
            <a className="focus-ring" href="#research">Research</a>
            <a className="focus-ring" href="#journal">Journal</a>
            <a className="nav-cta focus-ring" href="#contact">
              Contact <ArrowRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>
      </nav>

      <header id="hero">
        <div className="hero-grid-layer" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="eyebrow">Sport / Systems / Human Performance</p>
          <h1>
            Performance is a <span>network.</span>
          </h1>
          <p>
            I study how teams perform, adapt and succeed through data,
            optimisation, storytelling and human connection.
          </p>
          <div className="hero-btns">
            <a href="#thesis" className="btn btn-primary focus-ring">
              Explore thesis <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a href="mailto:alexdiazbarreiro@miami.edu?subject=Portfolio%20enquiry" className="btn btn-secondary focus-ring">
              <Mail aria-hidden="true" size={17} /> Start a conversation
            </a>
          </div>
          <div className="hero-metrics" aria-label="Profile highlights">
            {heroMetrics.map((metric) => (
              <div className="metric-card glass-panel" key={metric}>
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="statement section-grid" id="philosophy">
          <div className="container statement-inner reveal">
            <p>
              Success rarely belongs to isolated talent alone. It emerges from
              the quality of relationships, the design of systems and the
              ability of people to collaborate under pressure.
            </p>
          </div>
        </section>

        <section className="container split-story" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>A systems thinker with a sports executive&apos;s lens.</h2>
          </div>
          <div className="story-grid">
            <article className="narrative-card reveal">
              <h3>The throughline</h3>
              <p>
                My work sits at the intersection of sport, optimisation,
                research, leadership and storytelling. I am drawn to moments
                where talent alone is not enough, where the structure around
                people determines what they are capable of becoming together.
              </p>
            </article>
            <article className="identity-panel glass-panel reveal" aria-label="Identity summary">
              <div className="identity-mark">ADB</div>
              <p>
                A personal brand built around analytical depth, emotional
                intelligence and long-term ambition in elite sport.
              </p>
            </article>
          </div>
        </section>

        <section className="thesis-section section-grid" id="thesis">
          <div className="container thesis-grid">
            <div className="section-heading reveal">
              <p className="eyebrow">Flagship Thesis</p>
              <h2>Formation of Teams in Sport Using Social Network Analysis</h2>
              <p>
                A research experience built around one core question: what if
                team success depends less on assembling the best individuals
                and more on designing the right relationships between them?
              </p>
            </div>

            <div className="network-stage glass-panel reveal" aria-label="Abstract team network visualisation">
              <Network className="stage-icon" aria-hidden="true" size={22} />
              <div className="network-line line-a" />
              <div className="network-line line-b" />
              <div className="network-line line-c" />
              <span className="node node-a">1</span>
              <span className="node node-b">2</span>
              <span className="node node-c">3</span>
              <span className="node node-d">4</span>
              <span className="node node-e">5</span>
              <div className="network-caption">
                <strong>Team chemistry as structure</strong>
                <p>Relationships, robustness, proficiency and continuity.</p>
              </div>
            </div>
          </div>

          <div className="container thesis-methods">
            {thesisMethods.map((method) => (
              <article className="method-card glass-panel reveal" key={method}>
                <span>{method}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="container" id="research">
          <div className="section-heading reveal">
            <p className="eyebrow">Research Atlas</p>
            <h2>Different fields, one question: how do systems perform?</h2>
          </div>

          <div className="bento-grid research-grid">
            {researchAreas.map((area, index) => (
              <article
                className={`bento-item glass-panel reveal ${index === 0 ? "large" : ""}`}
                key={area.title}
              >
                <span className="card-kicker">0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container tool-section" id="visuals">
          <div className="section-heading reveal">
            <p className="eyebrow">Interactive Direction</p>
            <h2>Visual tools that make invisible relationships legible.</h2>
          </div>
          <div className="tool-grid">
            <article className="visual-panel glass-panel reveal">
              <BarChart3 className="stage-icon" aria-hidden="true" size={22} />
              <h3>Research visualisation system</h3>
              <p>
                Future modules can translate team networks, structural
                constraints and robustness trade-offs into readable analytical
                interfaces for professional review.
              </p>
              <div className="chart-bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </article>
            <aside className="tool-sidebar reveal" aria-label="Visualisation concepts">
              <div className="glass-panel side-metric">
                <strong>Network graphs</strong>
                <p>Player interaction maps and team synergy structures.</p>
              </div>
              <div className="glass-panel side-metric">
                <strong>Trade-off charts</strong>
                <p>Robustness versus performance under constraints.</p>
              </div>
              <div className="glass-panel side-metric">
                <strong>Line-up scenarios</strong>
                <p>Optimisation demonstrations for strategic team formation.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="container journey-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Journey</p>
            <h2>A path from engineering to elite sport leadership.</h2>
          </div>
          <div className="journey-line glass-panel reveal">
            {journey.map((step, index) => (
              <article className="journey-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container" id="journal">
          <div className="section-heading reveal">
            <p className="eyebrow">Journal</p>
            <h2>Writing as a way to think in public.</h2>
          </div>
          <div className="journal-grid">
            <article className="glass-panel journal-card reveal">
              <span>Reflection</span>
              <h3>What sport teaches us about systems.</h3>
              <p>
                A space for essays on leadership, team dynamics, decision-making
                and the hidden architecture of performance.
              </p>
            </article>
            <article className="glass-panel journal-card reveal">
              <span>Observation</span>
              <h3>The human side of analytics.</h3>
              <p>
                Technical work becomes more valuable when it can be understood,
                communicated and acted upon by people.
              </p>
            </article>
          </div>
        </section>

        <section className="container recognition-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Recognition & Momentum</p>
            <h2>Signals of credibility without losing the human story.</h2>
          </div>
          <div className="recognition-list glass-panel reveal">
            {recognition.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="container current-section">
          <div className="current-grid">
            <article className="glass-panel current-card reveal">
              <p className="eyebrow">Currently Exploring</p>
              <h2>How research can become strategic advantage in sport.</h2>
              <div className="skill-cloud">
                {focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </article>
            <article className="glass-panel current-card reveal">
              <p className="eyebrow">Beyond Work</p>
              <h2>Sport, creativity, culture and the stories that shape us.</h2>
              <div className="skill-cloud">
                {inspirations.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>For research, strategy, analytics or sport leadership conversations.</h2>
            <div className="contact-details">
              <a className="focus-ring" href="mailto:alexdiazbarreiro@miami.edu">
                <Mail aria-hidden="true" size={16} /> alexdiazbarreiro@miami.edu
              </a>
              <a className="focus-ring" href="mailto:alexdiazbarreiro@miami.edu?subject=CV%20request">
                <FileText aria-hidden="true" size={16} /> Request CV
              </a>
            </div>
          </div>

          <form
            className="contact-form glass-panel"
            action="mailto:alexdiazbarreiro@miami.edu"
            method="post"
            encType="text/plain"
          >
            <label>
              Name
              <input className="focus-ring" name="name" type="text" autoComplete="name" />
            </label>
            <label>
              Email
              <input className="focus-ring" name="email" type="email" autoComplete="email" />
            </label>
            <label>
              Message
              <textarea className="focus-ring" name="message" rows={5} />
            </label>
            <button className="btn btn-primary focus-ring" type="submit">
              Open email draft <Send aria-hidden="true" size={16} />
            </button>
          </form>
        </div>
        <p className="container copyright">
          &copy; 2026 Alejandro Diaz Barreiro Aldana. Built as a living archive
          of research, sport, systems and story.
        </p>
      </footer>
    </>
  );
}

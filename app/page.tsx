const principles = [
  "Human connection",
  "Systems thinking",
  "Team performance",
  "Strategic storytelling",
];

const metrics = [
  "M.S. Industrial Engineering",
  "Social Network Analysis",
  "Team optimization",
  "Sports strategy",
];

const researchAreas = [
  {
    title: "Sports Analytics",
    copy:
      "Using data, networks, and context to understand how teams form, adapt, and create collective advantage.",
  },
  {
    title: "Healthcare Systems",
    copy:
      "Studying coordination, continuity, and operational reliability inside complex care environments.",
  },
  {
    title: "Mathematical Optimization",
    copy:
      "Designing decision frameworks that balance short-term performance with long-term resilience.",
  },
  {
    title: "Social Network Analysis",
    copy:
      "Modeling relationships as performance infrastructure rather than background noise.",
  },
  {
    title: "Sports Biomechanics",
    copy:
      "Exploring how movement, constraint, and human capability shape performance outcomes.",
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
  "Robustness modeling",
  "Scenario analysis",
  "Miami Heat case study",
];

const journey = [
  "Undergraduate engineering foundation",
  "Research beginnings in complex systems",
  "Surgical team optimization",
  "Master's thesis on sport team formation",
  "Conferences, recognition, and field-building",
  "Future vision in elite sport strategy",
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
  "Team optimization",
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
          <a className="logo" href="#hero" aria-label="Alejandro home">
            ALEX.
          </a>
          <div className="nav-links">
            <a href="#thesis">Thesis</a>
            <a href="#research">Research</a>
            <a href="#journal">Journal</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header id="hero">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="eyebrow">Sport / Systems / Human Performance</p>
          <h1>Performance is a network.</h1>
          <p>
            I study how teams perform, adapt, and succeed through data,
            optimization, storytelling, and human connection.
          </p>
          <div className="hero-identity">
            <span>Alejandro Diaz Barreiro Aldana</span>
            <span>University of Miami</span>
            <span>Future sports strategy & analytics leader</span>
          </div>
          <div className="hero-btns">
            <a href="#thesis" className="btn btn-primary">
              Explore the thesis
            </a>
            <a href="#philosophy" className="btn btn-secondary">
              Read the philosophy
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="statement" id="philosophy">
          <div className="container statement-inner reveal">
            <p>
              Success rarely belongs to isolated talent alone. It emerges from
              the quality of relationships, the design of systems, and the
              ability of people to collaborate under pressure.
            </p>
          </div>
        </section>

        <section className="container rhythm-section">
          <div className="metrics-grid">
            {metrics.map((item) => (
              <div className="metric glass reveal" key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="container split-story" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>A systems thinker with a sports executive&apos;s lens.</h2>
          </div>
          <div className="story-grid">
            <article className="glass narrative-card reveal">
              <h3>The throughline</h3>
              <p>
                My work sits at the intersection of sport, optimization,
                research, leadership, and storytelling. I am drawn to moments
                where talent alone is not enough, where the structure around
                people determines what they are capable of becoming together.
              </p>
            </article>
            <article className="glass portrait-card reveal" aria-label="Portrait placeholder">
              <div className="portrait-mark">ADB</div>
              <p>
                A personal brand built around analytical depth, emotional
                intelligence, and long-term ambition in elite sport.
              </p>
            </article>
          </div>
        </section>

        <section className="thesis-section" id="thesis">
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

            <div className="network-stage glass reveal" aria-label="Abstract team network visualization">
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
                <p>Relationships, robustness, proficiency, and continuity.</p>
              </div>
            </div>
          </div>

          <div className="container thesis-methods">
            {thesisMethods.map((method) => (
              <article className="method-card glass reveal" key={method}>
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
                className={`bento-item glass reveal ${index === 0 ? "large" : ""}`}
                key={area.title}
              >
                <span className="card-kicker">0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container visual-section" id="visuals">
          <div className="section-heading reveal">
            <p className="eyebrow">Interactive Direction</p>
            <h2>Visual tools that make invisible relationships legible.</h2>
          </div>
          <div className="visual-grid">
            <article className="glass visual-card reveal">
              <h3>Network graphs</h3>
              <p>Player interaction maps and team synergy structures.</p>
            </article>
            <article className="glass visual-card reveal">
              <h3>Trade-off charts</h3>
              <p>Robustness versus performance under different constraints.</p>
            </article>
            <article className="glass visual-card reveal">
              <h3>Lineup scenarios</h3>
              <p>Optimization demonstrations for strategic team formation.</p>
            </article>
          </div>
        </section>

        <section className="container journey-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Journey</p>
            <h2>A path from engineering to elite sport leadership.</h2>
          </div>
          <div className="journey-line glass reveal">
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
            <article className="glass journal-card reveal">
              <span>Reflection</span>
              <h3>What sport teaches us about systems.</h3>
              <p>
                A space for essays on leadership, team dynamics, decision-making,
                and the hidden architecture of performance.
              </p>
            </article>
            <article className="glass journal-card reveal">
              <span>Observation</span>
              <h3>The human side of analytics.</h3>
              <p>
                Technical work becomes more valuable when it can be understood,
                communicated, and acted upon by people.
              </p>
            </article>
          </div>
        </section>

        <section className="container recognition-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Recognition & Momentum</p>
            <h2>Signals of credibility without losing the human story.</h2>
          </div>
          <div className="recognition-list glass reveal">
            {recognition.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="container current-section">
          <div className="current-grid">
            <article className="glass current-card reveal">
              <p className="eyebrow">Currently Exploring</p>
              <h2>How research can become strategic advantage in sport.</h2>
              <div className="skill-cloud">
                {focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </article>
            <article className="glass current-card reveal">
              <p className="eyebrow">Beyond Work</p>
              <h2>Sport, creativity, culture, and the stories that shape us.</h2>
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
        <div className="container contact-content">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>For research, strategy, analytics, or sport leadership conversations.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:alexdiazbarreiro@miami.edu">Email</a>
            <a href="https://www.linkedin.com/in/alejandro-diaz-barreiro">
              LinkedIn
            </a>
            <span className="disabled-link" aria-label="CV download link coming soon">
              CV coming soon
            </span>
          </div>
          <p className="copyright">
            &copy; 2026 Alejandro Diaz Barreiro Aldana. Built as a living archive
            of research, sport, systems, and story.
          </p>
        </div>
      </footer>
    </>
  );
}

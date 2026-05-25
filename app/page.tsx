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
  "Team formation thesis",
  "Sports analytics direction",
];

const researchAreas = [
  {
    title: "Sports Analytics",
    copy:
      "I study sport as a living system, where data only becomes useful when it explains relationships, pressure and collective behaviour.",
  },
  {
    title: "Social Network Analysis",
    copy:
      "I map the connections between people so team structure becomes visible, measurable and easier to discuss.",
  },
  {
    title: "Mathematical Optimisation",
    copy:
      "I use optimisation to move from intuition to structured decision-making when teams face constraints and trade-offs.",
  },
  {
    title: "Healthcare Systems",
    copy:
      "I apply the same systems lens to care environments, where coordination and continuity shape outcomes.",
  },
  {
    title: "Storytelling",
    copy:
      "I translate technical work into clear narratives so people can understand the decision, not just the model.",
  },
  {
    title: "Strategy",
    copy:
      "I connect research with long-term thinking, especially where performance depends on people working as one system.",
  },
];

const thesisMethods = [
  "Binary Integer Programming",
  "Social Network Analysis",
  "Robustness modelling",
  "Scenario analysis",
  "Miami Heat case study",
];

const tools = [
  { name: "Python", mark: "Py" },
  { name: "SQL", mark: "SQL" },
  { name: "R", mark: "R" },
  { name: "MATLAB", mark: "M" },
  { name: "Tableau", mark: "T" },
  { name: "Power BI", mark: "BI" },
  { name: "AnyLogic", mark: "AL" },
  { name: "LaTeX", mark: "TeX" },
  { name: "Excel", mark: "XL" },
  { name: "VBA", mark: "VBA" },
];

const schoolLinks = [
  {
    name: "Greengates School",
    logo: "/assets/greengates.png",
    url: "https://www.greengates.edu.mx/",
  },
  {
    name: "Tec de Monterrey",
    logo: "/assets/tec.png",
    url: "https://tec.mx/en/engineering-and-sciences/bs-in-industrial-engineering",
  },
  {
    name: "University of Miami Industrial Engineering",
    logo: "/assets/um.png",
    url: "https://ise.coe.miami.edu/",
  },
];

const journey = [
  {
    step: "01",
    title: "Engineering foundation",
    copy:
      "I learned to break complex problems into systems, constraints and decisions that people can act on.",
  },
  {
    step: "02",
    title: "Research in complex systems",
    copy:
      "I started looking at organisations as living networks where structure shapes what teams can achieve.",
  },
  {
    step: "03",
    title: "Surgical team optimisation",
    copy:
      "I applied optimisation thinking to healthcare environments, where coordination affects safety, flow and performance.",
  },
  {
    step: "04",
    title: "Sport team formation thesis",
    copy:
      "I turned the same lens toward sport, using network science to study team chemistry as a measurable structure.",
  },
  {
    step: "05",
    title: "Research presentations",
    copy:
      "I learned to translate technical work into clear stories for academic, professional and cross-disciplinary audiences.",
  },
  {
    step: "06",
    title: "Elite sport strategy ambition",
    copy:
      "I am building toward leadership roles where analytics, human dynamics and long-term strategy shape performance.",
  },
];

const recognition = [
  "Research presentation",
  "Conference moment",
  "Award recognition",
  "Poster session",
  "Team discussion",
];

const accolades = [
  {
    label: "News feature",
    title: "Optimizing the Operating Room",
    copy:
      "A University of Miami College of Engineering story connected to surgical team optimisation and systems research.",
    href: "https://news.miami.edu/coe/stories/2026/02/optimizing-the-operating-room.html",
  },
  {
    label: "Research experience",
    title: "Simulation Optimization Research Lab",
    copy:
      "SimLab at the University of Miami anchors research in simulation, optimisation and resilient complex systems.",
    href: "https://simlab.coe.miami.edu/index.html",
  },
];

const storyCards = [
  {
    label: "Currently exploring",
    title: "How research becomes strategic advantage in sport",
    copy:
      "I am following the path from model to conversation to decision, because the best analytical work changes how people see the game.",
    beats: ["Question", "Model", "Conversation", "Decision"],
  },
  {
    label: "Beyond work",
    title: "Sport, creativity and the stories that shape ambition",
    copy:
      "Football, music, travel and film keep reminding me that performance is emotional as much as technical.",
    beats: ["Football", "Music", "Film", "Perspective"],
  },
];

export default function Home() {
  return (
    <>
      <nav id="navbar" aria-label="Primary navigation">
        <div className="container nav-content">
          <a className="logo focus-ring" href="#hero" aria-label="Alejandro home">
            ADBA
          </a>
          <div className="nav-links">
            <a className="focus-ring" href="#thesis">Thesis</a>
            <a className="focus-ring" href="#research">Research</a>
            <a className="focus-ring" href="#journey">Journey</a>
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
            I study the <span>structure behind performance.</span>
          </h1>
          <p>
            I connect sports analytics, optimisation, research and storytelling
            to understand how teams become more than the sum of their parts.
          </p>
          <div className="hero-btns">
            <a href="#thesis" className="btn btn-primary focus-ring">
              Explore thesis <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              href="mailto:alexdiazbarreiro@gmail.com?subject=Portfolio%20enquiry"
              className="btn btn-secondary focus-ring"
            >
              <Mail aria-hidden="true" size={17} /> Start a conversation
            </a>
          </div>
          <div className="hero-metrics" aria-label="Profile highlights">
            {heroMetrics.map((metric) => (
              <div className="metric-card surface-panel" key={metric}>
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
              I keep returning to one idea: talent matters, but connection
              determines what talent can become.
            </p>
          </div>
        </section>

        <section className="container split-story" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>I build my work around people, systems and the story between them.</h2>
          </div>
          <div className="story-grid">
            <article className="narrative-card reveal">
              <h3>The throughline</h3>
              <p>
                I do not see analytics as a scoreboard after the fact. I see it
                as a way to ask better questions while the story is still being
                written. My work starts with sport, moves through systems and
                ends with the people who have to make decisions under pressure.
              </p>
            </article>
            <article className="identity-panel surface-panel reveal" aria-label="Identity summary">
              <img
                className="headshot"
                src="/assets/headshot.jpg"
                alt="Alejandro Diaz Barreiro Aldana headshot"
              />
              <div className="identity-mark">ADBA</div>
              <p>
                I want the work to feel rigorous, but also human. Behind every
                model sits a team, a coach, a leader and a decision.
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
                The thesis asks a practical question with strategic weight:
                what changes when we stop treating a team as a list of
                individuals and start treating it as a network of relationships?
              </p>
              <a
                className="text-link focus-ring"
                href="https://scholarship.miami.edu/esploro/outputs/991033074554102976"
              >
                Read the thesis <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>

            <div className="network-stage surface-panel reveal" aria-label="Dynamic team chemistry visualisation">
              <Network className="stage-icon" aria-hidden="true" size={22} />
              <div className="network-pulse pulse-a" />
              <div className="network-pulse pulse-b" />
              <div className="network-line line-a" />
              <div className="network-line line-b" />
              <div className="network-line line-c" />
              <div className="network-line line-d" />
              <span className="node node-a">Guard</span>
              <span className="node node-b">Wing</span>
              <span className="node node-c">Big</span>
              <span className="node node-d">Connector</span>
              <span className="node node-e">Sixth</span>
              <div className="network-caption">
                <strong>Team chemistry as structure</strong>
                <p>
                  The visual shows roles as connected decision points, not
                  isolated players. Stronger links suggest continuity,
                  familiarity and shared context.
                </p>
              </div>
            </div>
          </div>

          <div className="container thesis-methods">
            {thesisMethods.map((method) => (
              <article className="method-card surface-panel reveal" key={method}>
                <span>{method}</span>
              </article>
            ))}
          </div>

          <div className="container tools-carousel-wrap">
            <p className="eyebrow">Tools Used</p>
            <div className="tools-carousel surface-panel" aria-label="Tools carousel">
              <div className="tools-track">
                {[...tools, ...tools].map((tool, index) => (
                  <div className="tool-logo" key={`${tool.name}-${index}`}>
                    <span>{tool.mark}</span>
                    <small>{tool.name}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="research">
          <div className="section-heading reveal">
            <p className="eyebrow">Research Atlas</p>
            <h2>Different fields, one question: how do systems perform?</h2>
          </div>

          <div className="research-grid-balanced">
            {researchAreas.map((area, index) => (
              <article className="research-card surface-panel reveal" key={area.title}>
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
            <h2>Making the model understandable before making it impressive.</h2>
          </div>
          <div className="explain-grid">
            <article className="explain-panel surface-panel reveal">
              <BarChart3 className="stage-icon" aria-hidden="true" size={22} />
              <h3>From question to decision</h3>
              <p>
                A reader should be able to follow the work without knowing the
                mathematics. This section turns the thesis logic into a simple
                sequence: define the team, map relationships, test line-ups and
                compare trade-offs.
              </p>
              <div className="explain-flow" aria-label="Visual explanation flow">
                <span>Team</span>
                <span>Network</span>
                <span>Line-up</span>
                <span>Trade-off</span>
              </div>
            </article>
            <aside className="tool-sidebar reveal" aria-label="Visualisation concepts">
              <div className="surface-panel side-metric">
                <strong>1. Map the relationships</strong>
                <p>Show who connects with whom and where familiarity already exists.</p>
              </div>
              <div className="surface-panel side-metric">
                <strong>2. Test possible teams</strong>
                <p>Compare line-ups under tactical, social and structural constraints.</p>
              </div>
              <div className="surface-panel side-metric">
                <strong>3. Explain the trade-off</strong>
                <p>Make performance and robustness visible enough to discuss.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="container journey-section" id="journey">
          <div className="journey-heading reveal">
            <p className="eyebrow">Journey</p>
            <div className="journey-title-row">
              <h2>A path from engineering to elite sport leadership.</h2>
              <div className="school-logo-row" aria-label="Education links">
                {schoolLinks.map((school) => (
                  <a
                    className="school-logo focus-ring"
                    href={school.url}
                    key={school.name}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={school.name}
                  >
                    <img src={school.logo} alt="" />
                  </a>
                ))}
              </div>
            </div>
            <p>
              Each step adds a layer: engineering discipline, research depth,
              healthcare systems, sport analytics, communication and strategic
              ambition.
            </p>
          </div>
          <div className="timeline-panel surface-panel reveal">
            {journey.map((step) => (
              <article className="timeline-step" key={step.step}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container recognition-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Recognition & Momentum</p>
            <h2>Moments that will become a visual archive.</h2>
          </div>
          <div className="accolades-grid reveal">
            {accolades.map((item) => (
              <a
                className="accolade-card surface-panel focus-ring"
                href={item.href}
                key={item.title}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <strong>
                  Open link <ArrowRight aria-hidden="true" size={15} />
                </strong>
              </a>
            ))}
          </div>
          <div className="photo-carousel surface-panel reveal" aria-label="Recognition photo placeholders">
            <div className="photo-track">
              {[...recognition, ...recognition].map((item, index) => (
                <figure className="photo-placeholder" key={`${item}-${index}`}>
                  <div />
                  <figcaption>{item}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="container current-section">
          <div className="story-unfold">
            {storyCards.map((card, index) => (
              <article className="story-card surface-panel reveal" key={card.label}>
                <span>0{index + 1}</span>
                <p className="eyebrow">{card.label}</p>
                <h2>{card.title}</h2>
                <p>{card.copy}</p>
                <div className="story-beats" aria-label={`${card.label} story beats`}>
                  {card.beats.map((beat) => (
                    <span key={beat}>{beat}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>For research, strategy, analytics or sport leadership conversations.</h2>
            <div className="contact-details">
              <a className="focus-ring" href="mailto:alexdiazbarreiro@gmail.com">
                <Mail aria-hidden="true" size={16} /> alexdiazbarreiro@gmail.com
              </a>
              <a
                className="focus-ring"
                href="https://www.linkedin.com/in/alejandro-diaz-barreiro/"
              >
                <ArrowRight aria-hidden="true" size={16} /> LinkedIn
              </a>
              <a className="focus-ring" href="mailto:alexdiazbarreiro@gmail.com?subject=CV%20request">
                <FileText aria-hidden="true" size={16} /> Request CV
              </a>
            </div>
          </div>

          <form
            className="contact-form surface-panel"
            action="mailto:alexdiazbarreiro@gmail.com"
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

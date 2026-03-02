// src/app/page.tsx

const links = [
  { label: "GitHub", href: "https://github.com/erichuangreal" },    // replace later
  { label: "LinkedIn", href: "https://www.linkedin.com/in/erichuanguw/" },  // replace later
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="text-xs font-semibold tracking-widest text-white/70 uppercase">
        {title}
      </h2>
      <div className="mt-3 space-y-2 text-sm text-white/75">{children}</div>
    </section>
  );
}

function Item({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle?: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-2">
      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/45" />
      <div className="leading-snug">
        <div className="font-medium text-white/85">{title}</div>
        {subtitle ? <div className="text-white/60">{subtitle}</div> : null}
      </div>
    </div>
  );

  return href ? (
    <a
      className="block rounded-xl px-3 py-2 transition hover:bg-white/6"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    <div className="rounded-xl px-3 py-2">{inner}</div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
}: {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}) {
  const hasGithub = github && github !== "#";
  const hasDemo = demo && demo !== "#";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:bg-white/10 hover:shadow-[0_0_24px_rgba(59,130,246,0.10)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-white/90">{title}</h3>

        {(hasGithub || hasDemo) && (
          <div className="flex shrink-0 gap-2">
            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                GitHub
              </a>
            )}

            {hasDemo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-blue-300/20 bg-blue-500/15 px-3 py-1 text-xs text-blue-200 transition hover:bg-blue-500/25"
              >
                Demo
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-2 text-sm text-white/65">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* abstract gradient background */}
      <div className="fixed inset-0 -z-10 bg-[#070A12]" />
      <div className="fixed inset-0 -z-10 opacity-70 blur-3xl bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(168,85,247,0.28),transparent_42%),radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.16),transparent_45%)]" />

      {/* card */}
      <div className="mx-auto flex max-w-3xl justify-center px-4 py-16">
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          {/* header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-lg font-semibold text-white/90">Eric Huang</div>

              <div className="mt-1 text-sm text-white/70">
                Computer Engineering @ University of Waterloo
              </div>

              <div className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
                I build data-driven systems that bridge software engineering, AI/ML,
                and real-world deployment.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* content */}
          <Section title="Experience">
            <Item title="Software Developer — AppFounder (Jun 2024 – Sep 2025)" />
            <Item title="Autonomy Software Developer — Waterloo Aerial Robotics Group (Sep 2025 – Present)" />
          </Section>

          <Section title="Projects">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ProjectCard
                title="PerspectiveConnect"
                description="A speech analysis pipeline extracting acoustic features and integrating LLM-based feedback for real-time presentation coaching."
                tags={["Python", "Pandas", "MySQL", "LLM"]}
                github="https://github.com/erichuangreal/perspectiveconnect"
                demo="https://pc.appfounder.ca/"
              />
              <ProjectCard
                title="GrowWiseAI"
                description="An ML-driven tree survivability system combining predictive modeling with real-world environmental data and explainable AI."
                tags={["Python", "XGBoost", "Scikit-learn", "Gemini API"]}
                github="https://github.com/erichuangreal/GrowWiseAI"
                demo="https://github.com/erichuangreal/GrowWiseAI"
              />
              <ProjectCard
                title="TopSet"
                description="A full-stack workout analytics platform that transforms raw user input into structured insights and adaptive coaching logic."
                tags={["React", "Node.js", "MySQL", "Analytics"]}
                github="https://github.com/erichuangreal/Topset"
                demo="https://topset.erichuangreal.dev/"
              />
              <ProjectCard
                title="Upright"
                description="Real-time posture monitoring system using motion sensors and a 3D digital twin to deliver intelligent alignment feedback."
                tags={["JavaScript", "Sensors", "3D"]}
                github="https://github.com/erichuangreal/Upright"
                demo="https://upright.erichuangreal.dev/"
              />
              <ProjectCard
                title="circadia"
                description="Arduino-based hospital environment control system using sensors, PWM, and MOSFET power stages for real-time sound, lighting, and heating regulation."
                tags={["C/C++", "Arduino", "Embedded"]}
                github="https://github.com/erichuangreal/circadia"
              />
              <ProjectCard
                title="maxaboard-embedded-linux-metal-detector"
                description="Custom Yocto-based embedded Linux distribution with BitBake, OP-TEE integration, and kernel-level debugging for MaxABoard deployment."
                tags={["Embedded Linux", "Yocto", "C"]}
                github="https://github.com/erichuangreal/maxaboard-embedded-linux-metal-detector"
              />
              <ProjectCard
                title="WARG Autonomy Stack"
                description="A ROS2-based autonomy system integrating perception, navigation, and deployment-ready CI workflows for aerial robotics."
                tags={["ROS2", "Docker", "YOLO", "Computer Vision"]}
              />
            </div>
          </Section>

          <Section title="Competitions">
            <Item
              title="International Young Physicists’ Tournament — Team Canada"
              subtitle="Bronze (Budapest, Hungary)"
            />
          </Section>

          <Section title="Skills">
            <div className="space-y-1 px-3 text-white/70">
              <div>Python • Java • C/C++ • TypeScript • Bash</div>
              <div>React • Node/Express • FastAPI/Flask • Tailwind</div>
              <div>MySQL/Postgres • ETL • NumPy/Pandas/Matplotlib</div>
              <div>ROS2 • Raspberry Pi • OpenCV/YOLO</div>
              <div>Docker • Git • CI/CD</div>
            </div>
          </Section>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
            © {new Date().getFullYear()} erichuang.dev
          </div>
        </div>
      </div>
    </main>
  );
}
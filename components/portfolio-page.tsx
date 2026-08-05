import Image from "next/image";
import type { ReactNode } from "react";
import { SectionNav, type SectionNavItem } from "@/components/section-nav";

const sectionNavItems: SectionNavItem[] = [
  { id: "robotics", label: "Robotics" },
  { id: "products", label: "Products" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const images = {
  headshot: "/images/headshot.png",
  columbia: "/images/Columbia.png", // Columbia crown crest
  a2r: "/images/tinympc.jpg",
  artaic: "/images/artaic-tiles.jpg",
  pacbotMaze: "/images/pacbot-maze.jpg",
  pacbotRobot: "/images/pacbot-robot.jpg",
  unscripted: "/images/unscripted-network.png",
  dexter: "/images/Dexter.png",
  beetcode: "/images/beetcode.png",
  aiSafety: "/images/ai-safety-results.png",
  spectator: "/images/projects_spec.png",
  almaworks: "/images/projects_core.jpeg",
  uiDesign: "/images/ui_design.png",
  claude: "/images/projects_claude.png",
};

type Entry = {
  title: string;
  role?: string;
  summary: ReactNode;
  link?: string;
  image?: string;
  /** Two-up media band — used where one photo can't carry the project. */
  imagePair?: [string, string];
  /** Fully custom media band, e.g. an inline diagram. */
  media?: ReactNode;
  initials?: string;
  tags?: string[];
};

// Robotics & Systems — the lead pillar. Firmware, vision, autonomy, kernel work.
const roboticsEntries: Entry[] = [
  {
    title: "A2R Lab",
    role: "Research",
    summary:
      "Worked on Crazyflie drone firmware in C/C++, optimized tinyMPC for model predictive control, and integrated the system with Crazyswarm2 on ROS 2.",
    link: "https://github.com/paeb37/a2r-crazyflie-firmware",
    image: images.a2r,
    tags: ["Robotics", "C/C++"],
  },
  {
    title: "Artaic",
    role: "Engineering Intern",
    summary:
      "Built a YOLOv5 model to classify mosaic tile types at 90% accuracy, automating the manual inspection every assembled mosaic went through before shipping.",
    image: images.artaic,
    tags: ["Computer vision", "YOLOv5"],
  },
  {
    title: "PacBot 2024",
    role: "Software Team",
    summary:
      "Built the A* pathfinding for 2024 PacBot competition (robot that plays Pac-Man autonomously on a physical maze). Also started on a deep Q-learning policy.",
    imagePair: [images.pacbotMaze, images.pacbotRobot],
    tags: ["Pathfinding", "Deep Q-learning"],
  },
  {
    title: "Operating Systems",
    role: "Coursework",
    summary: (
      <>
        Built a process tracker, custom scheduler, and a file system in C, down
        at the kernel level. Team project with{" "}
        <a
          href="https://gist.github.com/technology08/72c9d498f84410ef3715f24ff256f139"
          target="_blank"
          rel="noreferrer"
          className="text-accent transition-colors hover:text-accent-strong"
        >
          Connor Espenshade
        </a>
        .
      </>
    ),
    media: <FilesystemDiagram />,
    tags: ["C", "Kernel"],
  },
];

// Products — zero to one, with real users.
const productEntries: Entry[] = [
  {
    title: "Unscripted",
    role: "Founder",
    summary:
      "Building an AI career coaching platform to help people network more effectively.",
    image: images.unscripted,
    tags: ["AI", "Career coaching"],
  },
  {
    title: "Dexter",
    role: "Co-Founder",
    summary:
      "Built an AI redaction tool for consulting slide decks, saving ~125 hours per consultant annually. Piloted with two major consultancies, and refined across 15+ consultant interviews to fit real workflows.",
    image: images.dexter,
    tags: ["AI", "Consulting"],
  },
  {
    title: "Beetcode",
    role: "Co-Founder",
    summary:
      "Built and shipped a browser extension that gives LeetCode hints, reaching 200+ users organically.",
    link: "https://beetcodeai.com/",
    image: images.beetcode,
    tags: ["Browser extension", "LeetCode"],
  },
  {
    title: "AI Safety",
    role: "Research",
    summary:
      "Tested whether synthetic document fine-tuning reduces chain of thought honesty in Qwen3 and DeepSeek. Both models lost task accuracy and slipped from 100% to 95% faithfulness. Selected for the BlueDot AI Safety cohort.",
    image: images.aiSafety,
    tags: ["PyTorch", "Evaluation"],
  },
];

type ExperienceRow = {
  period: string;
  org: string;
  role: string;
  summary: string;
  kind: string;
};

// Engineering first, consulting last — the eye should read "engineer who also
// consults", not the reverse.
const experience: ExperienceRow[] = [
  {
    period: "2024",
    org: "FluidityIQ",
    role: "Software Engineering Intern",
    summary:
      "Deployed a patent-search vectorizer via Azure CI/CD, cutting API latency 6x. Built an LLM patent summarizer with modular model-swapping.",
    kind: "Startup",
  },
  {
    period: "2023",
    org: "Capco",
    role: "Software Engineering Intern",
    summary:
      "Fixed 66% of open bugs in a major U.S. bank's permissions service; work integrated into client systems.",
    kind: "Mid-size",
  },
  {
    period: "2025 —",
    org: "MBB Consulting",
    role: "Technology & Digital",
    summary:
      "Optimized factory initiatives across procurement and supply chain for an industrial-goods client; proposed AI implementation plan to senior client leadership; received Digital tag for tech specialization.",
    kind: "Consulting",
  },
];

type Activity = {
  title: string;
  role: string;
  summary: string;
  image: string;
};

// Nested under Columbia — keeps the imagery at a fraction of the height cards
// took, without losing the visual texture entirely.
const activities: Activity[] = [
  {
    title: "Columbia Spectator",
    role: "Head of Product",
    summary:
      "Led a cross-functional product team across three of Spectator's digital products - CULPA, theSHAFT, and the mobile app - running user interviews, defining features, and shipping with engineering.",
    image: images.spectator,
  },
  {
    title: "Almaworks / CORE",
    role: "Director",
    summary:
      "Mentored 30+ early-stage Columbia founders - connecting them with the right alumni mentors and investors, and helping them sharpen their pitches across five Demo Days.",
    image: images.almaworks,
  },
  {
    title: "Columbia CS Department",
    role: "Teaching Assistant",
    summary:
      "Mentored 25 students a semester building full-stack apps in Flask and jQuery, and introduced a Figma-first workflow that cut development time 50%. Supported 600+ students through office hours and grading.",
    image: images.uiDesign,
  },
  {
    title: "Claude Builder Club",
    role: "Ambassador",
    summary:
      "Co-founded a hands-on LLM builder community with Anthropic and ran workshops on prompt design, evaluation, and model experimentation - teaching peers to build with AI.",
    image: images.claude,
  },
];

export function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:items-start lg:gap-14">
          {/* Identity + nav — short, sticky, pinned to the top area. */}
          <aside className="lg:sticky lg:top-12 lg:self-start">
            <div className="space-y-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border bg-surface">
                <Image
                  src={images.headshot}
                  alt="Brandon Pae headshot"
                  fill
                  priority
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground">
                  Brandon Pae
                </h1>
                <p className="max-w-xs text-sm leading-6 text-muted">
                  I work at the intersection between hardware, software, and
                  people.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Robotics", "Systems", "Technical PM"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <dl className="grid gap-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-border/70 pb-2">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-right text-foreground">Boston, MA</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Email</dt>
                  <dd className="text-right">
                    <a
                      href="mailto:pae.brandon@columbia.edu"
                      className="text-accent transition-colors hover:text-accent-strong"
                    >
                      pae.brandon@columbia.edu
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/files/Brandon_T_Pae_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-accent/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
                >
                  Resume
                </a>
                {/* Icon-only so the row fits on one line — aria-label carries
                    the accessible name the visible text used to. */}
                <a
                  href="https://github.com/paeb37"
                  aria-label="GitHub"
                  title="GitHub"
                  className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.82 1.19 1.85 1.19 3.11 0 4.43-2.7 5.41-5.26 5.7.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/brandon-pae"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
              </div>

              <div className="hidden space-y-3 lg:block">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                  Navigation
                </p>
                <SectionNav items={sectionNavItems} />
              </div>
            </div>
          </aside>

          {/* Long-form content. */}
          <div className="mt-12 space-y-16 lg:mt-0 lg:space-y-20">
            <section id="about" className="scroll-mt-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
                About
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground">
                My background is in bridging{" "}
                <span className="text-accent">hardware and software</span>. I
                modernized autonomous drone firmware at Columbia&apos;s A2R Lab,
                and have built machine vision for a production line, autonomous
                navigation for competition robotics, and low-level systems in C.
                Alongside that I&apos;ve taken products from zero to one and
                worked client-facing on enterprise technology.
              </p>
            </section>

            <section
              id="robotics"
              data-section-id
              className="scroll-mt-12 space-y-6"
            >
              <SectionHeader
                title="Robotics & Systems"
                description="Firmware and control, machine vision, autonomy, low-level systems."
              />
              <div className="grid gap-5 sm:grid-cols-2">
                {roboticsEntries.map((entry) => (
                  <ProjectCard key={entry.title} entry={entry} />
                ))}
              </div>
            </section>

            <section
              id="products"
              data-section-id
              className="scroll-mt-12 space-y-6"
            >
              <SectionHeader
                title="Products"
                description="Built, shipped, and put in front of real users."
              />
              <div className="grid gap-5 sm:grid-cols-2">
                {productEntries.map((entry) => (
                  <ProjectCard key={entry.title} entry={entry} />
                ))}
              </div>
            </section>

            <section
              id="experience"
              data-section-id
              className="scroll-mt-12 space-y-6"
            >
              <SectionHeader
                title="Experience"
                description="Software engineering, then enterprise technology consulting."
              />
              <div className="divide-y divide-border">
                {experience.map((role) => (
                  <div
                    key={role.org}
                    className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-6"
                  >
                    <p className="font-mono text-[11px] tracking-[0.08em] text-muted tabular-nums">
                      {role.period}
                    </p>
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">
                        {role.org} — {role.role}
                      </p>
                      <p className="mt-0.5 text-sm leading-6 text-muted">
                        {role.summary}
                      </p>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {role.kind}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="education"
              data-section-id
              className="scroll-mt-12 space-y-6"
            >
              <SectionHeader
                title="Education"
                description="Columbia, and what I did outside of class while I was there."
              />

              <div className="overflow-hidden rounded-lg border border-border bg-surface">
                <div className="grid grid-cols-[auto_1fr] gap-5 p-5">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border bg-background">
                    <Image
                      src={images.columbia}
                      alt="Columbia University"
                      fill
                      sizes="56px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                      Columbia University
                    </h3>
                    <p className="mt-0.5 text-[15px] text-foreground">
                      B.S. Computer Science,{" "}
                      <em className="italic">cum laude</em> — Minor in
                      Entrepreneurship
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      3.99 GPA · 2022 – 2026
                    </p>
                    <p className="mt-2.5 text-[13px] leading-6 text-muted">
                      Operating Systems · Advanced Programming in C · Parallel
                      Optimization for Robotics · VR/AR in Unity · Artificial
                      Intelligence · Natural Language Processing
                    </p>
                  </div>
                </div>

                <div className="border-t border-border bg-background p-5">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                    Activities & Leadership
                  </p>
                  <div className="grid gap-4 border-l-2 border-accent/60 pl-5 sm:grid-cols-2 sm:gap-x-8">
                    {activities.map((activity) => (
                      <div
                        key={activity.title}
                        className="grid grid-cols-[44px_1fr] gap-3"
                      >
                        <div className="relative h-11 w-11 overflow-hidden rounded-md border border-border bg-surface">
                          <Image
                            src={activity.image}
                            alt={activity.title}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-baseline gap-2">
                            <p className="text-[15px] font-semibold text-foreground">
                              {activity.title}
                            </p>
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                              {activity.role}
                            </span>
                          </div>
                          <p className="mt-1 text-[13px] leading-6 text-muted">
                            {activity.summary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ entry }: { entry: Entry }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-40 border-b border-border bg-background">
        <CardMedia entry={entry} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        {entry.role ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            {entry.role}
          </p>
        ) : null}
        <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
          {entry.link ? (
            <a
              href={entry.link}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              {entry.title}
            </a>
          ) : (
            entry.title
          )}
        </h3>
        <p className="text-sm leading-6 text-muted">{entry.summary}</p>
        {entry.tags ? (
          <div className="mt-auto flex flex-wrap gap-2 pt-1">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function CardMedia({ entry }: { entry: Entry }) {
  if (entry.media) {
    return <>{entry.media}</>;
  }

  if (entry.imagePair) {
    const [primary, secondary] = entry.imagePair;

    return (
      <div className="grid h-full grid-cols-[1.5fr_1fr] gap-px bg-border">
        {[primary, secondary].map((src) => (
          <div key={src} className="relative bg-background">
            <Image
              src={src}
              alt={entry.title}
              fill
              sizes="(min-width: 640px) 20vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <EntryMedia
      image={entry.image}
      initials={entry.initials}
      alt={entry.title}
      sizes="(min-width: 640px) 40vw, 100vw"
    />
  );
}

function EntryMedia({
  image,
  initials,
  alt,
  sizes,
  priority,
}: {
  image?: string;
  initials?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-accent/8 font-serif text-3xl font-semibold text-accent">
      {initials}
    </div>
  );
}

/**
 * The filesystem we built, drawn rather than photographed — the whiteboard
 * sketch it came from was an angled phone shot that wouldn't hold up at card
 * size. Colors come from the theme tokens so it tracks the palette.
 */
function FilesystemDiagram() {
  const blocks = [
    { label: "superblock", accent: true },
    { label: "inode store", accent: false },
    { label: "data block 0", accent: false },
    { label: "data block 1", accent: false },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center p-3">
      <svg
        viewBox="0 0 330 150"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Filesystem layout: superblock, inode store, and data blocks on disk, linked to a directory entry and file contents."
        className="h-full w-full font-mono"
      >
        <text x="16" y="13" fontSize="6.5" letterSpacing="1.2" className="fill-muted">
          ON DISK
        </text>
        <text x="198" y="13" fontSize="6.5" letterSpacing="1.2" className="fill-muted">
          RESOLVED
        </text>

        {blocks.map((block, index) => {
          const y = 22 + index * 28;

          return (
            <g key={block.label}>
              <rect x="16" y={y} width="112" height="28" className="fill-surface" />
              <rect
                x="16"
                y={y}
                width="112"
                height="28"
                fill="none"
                strokeWidth="1"
                className={block.accent ? "stroke-accent/70" : "stroke-border"}
              />
              <text
                x="26"
                y={y + 18}
                fontSize="8"
                className={block.accent ? "fill-accent" : "fill-muted"}
              >
                {block.label}
              </text>
            </g>
          );
        })}

        {[
          "M128 64 C 160 64, 168 44, 198 44",
          "M128 92 C 160 92, 168 102, 198 102",
          "M128 120 C 160 120, 168 112, 198 112",
        ].map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            strokeWidth="0.9"
            className="stroke-accent/60"
          />
        ))}

        <rect x="198" y="26" width="112" height="36" className="fill-surface" />
        <rect
          x="198"
          y="26"
          width="112"
          height="36"
          fill="none"
          strokeWidth="1"
          className="stroke-accent/70"
        />
        <text x="208" y="42" fontSize="8" className="fill-accent">
          dentry
        </text>
        <text x="208" y="55" fontSize="8" className="fill-muted">
          hello.txt
        </text>

        <rect x="198" y="82" width="112" height="46" className="fill-surface" />
        <rect
          x="198"
          y="82"
          width="112"
          height="46"
          fill="none"
          strokeWidth="1"
          className="stroke-border"
        />
        <text x="208" y="102" fontSize="8" className="fill-muted">
          file contents
        </text>
        <text x="208" y="115" fontSize="8" className="fill-muted">
          of hello.txt
        </text>
      </svg>
    </div>
  );
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="border-b border-border pb-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="max-w-md text-sm leading-6 text-muted">{description}</p>
      </div>
    </header>
  );
}

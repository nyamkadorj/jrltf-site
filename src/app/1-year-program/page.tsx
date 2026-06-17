const roadmap = [
  {
    step: "01",
    title: "Entrance / Challenger",
    months: "Before Month 1",
    focus: "Preparation",
    description:
      "Begins with the 70-Day Spiritual Life Habit Tracker, parent involvement, interview, and first assessment.",
  },
  {
    step: "02",
    title: "Join Rank",
    months: "Months 1–2",
    focus: "Start with God",
    description:
      "Members begin basic God-centered habits, daily reporting, reflection, and small acts of service at home.",
  },
  {
    step: "03",
    title: "Foundation Rank",
    months: "Months 3–5",
    focus: "Family Foundation",
    description:
      "Members build true character first in the family through discipline, integrity, filial heart, and responsibility.",
  },
  {
    step: "04",
    title: "Growth Rank",
    months: "Months 6–9",
    focus: "Community Growth",
    description:
      "Members expand their good influence through teamwork, service, and responsibility in the Blessed family community.",
  },
  {
    step: "05",
    title: "Ownership Rank",
    months: "Months 10–12",
    focus: "Role Model",
    description:
      "Members become role models who initiate, lead, and multiply a culture of heart beyond themselves.",
  },
];

const rankCards = [
  {
    title: "Join Rank",
    theme: "I begin with God and my parents.",
    sphere: "Self + Parents",
    outcome:
      "The member starts the Jr.LTF path by learning how to connect with God, report honestly, and serve at home.",
    badges: [
      {
        name: "Family Faith Badge",
        text: "Starts and ends the day with God through prayer, reporting, or reflection.",
      },
      {
        name: "Daily Reporting Badge",
        text: "Shares daily growth honestly with parents or a trusted adult.",
      },
      {
        name: "Shimjung Service Badge",
        text: "Practices small acts of love at home without needing to be asked.",
      },
    ],
  },
  {
    title: "Foundation Rank",
    theme: "I build true character first in my family.",
    sphere: "Family / Home",
    outcome:
      "The member becomes more reliable at home through faith habits, self-discipline, respect, responsibility, and service.",
    badges: [
      {
        name: "Vertical Alignment 1",
        text: "Keeps God and parents at the center of daily choices.",
      },
      {
        name: "Core Values 1",
        text: "Practices Living for the Greater Good, Ownership, Teamwork, and Dream Big at home.",
      },
      {
        name: "Character Practice 1",
        text: "Builds sincerity, humility, gratitude, integrity, merit, and simple planning.",
      },
    ],
  },
  {
    title: "Growth Rank",
    theme: "I expand good influence to others.",
    sphere: "Community",
    outcome:
      "The member begins to serve beyond the home, works with others, and takes responsibility in group settings.",
    badges: [
      {
        name: "Vertical Alignment 2",
        text: "Connects personal goals to God’s dream and the family mission.",
      },
      {
        name: "Core Values 2",
        text: "Practices core values through service, teamwork, and community responsibility.",
      },
      {
        name: "Character Practice 2",
        text: "Shows character under group expectations, correction, and shared responsibility.",
      },
    ],
  },
  {
    title: "Ownership Rank",
    theme: "I become a role model who creates culture.",
    sphere: "School / Society",
    outcome:
      "The member becomes a visible example who can initiate, lead, support younger members, and multiply a culture of heart.",
    badges: [
      {
        name: "Vertical Alignment 3",
        text: "Lives with clear identity as God’s son or daughter and takes ownership of God’s dream.",
      },
      {
        name: "Core Values 3",
        text: "Leads with Living for the Greater Good, Ownership, Teamwork, and Dream Big.",
      },
      {
        name: "Character Practice 3",
        text: "Shows mature character under challenge, pressure, responsibility, and public expectation.",
      },
    ],
  },
];

const coreValues = [
  {
    value: "Living for the Greater Good",
    foundation: "Serves family members and helps at home without seeking reward.",
    growth: "Serves younger children, peers, or community members with sincere heart.",
    ownership: "Initiates service or culture-building actions beyond personal comfort.",
  },
  {
    value: "Ownership",
    foundation: "Takes responsibility for personal habits, space, schedule, and assigned duties.",
    growth: "Takes responsibility in a team or project without waiting to be pushed.",
    ownership: "Sees what needs to be done and acts with ownership even when it is difficult.",
  },
  {
    value: "Teamwork",
    foundation: "Cooperates with siblings and parents and avoids unnecessary conflict.",
    growth: "Builds unity, listens well, and helps the team succeed.",
    ownership: "Raises others, supports weaker members, and protects team unity.",
  },
  {
    value: "Dream Big",
    foundation: "Sets one personal growth goal connected to becoming God’s son or daughter.",
    growth: "Joins or helps create a project that benefits others.",
    ownership: "Leads a meaningful project with vision, planning, and result.",
  },
];

const characterBadges = [
  {
    title: "CP1. Sincerity",
    text: "Reports honestly and offers real effort, even when the result is not perfect.",
  },
  {
    title: "CP2. Humility",
    text: "Receives correction, learns from mistakes, and avoids blaming others.",
  },
  {
    title: "CP3. Gratitude",
    text: "Recognizes God’s grace and expresses appreciation to parents, siblings, and others.",
  },
  {
    title: "CP4. Integrity",
    text: "Chooses what is right even when no one is watching.",
  },
  {
    title: "CP5. Earning Merit",
    text: "Shows growth through repeated practice and real results, not words only.",
  },
  {
    title: "CP6. Strategic Thinking",
    text: "Makes a plan, practices it, reflects, and improves step by step.",
  },
];

const badgeProcess = [
  "Practice",
  "Reflection",
  "Evidence",
  "Verification",
  "Recognition",
];

const evaluationSources = [
  "Self-reflection",
  "Parent confirmation",
  "Leader observation",
  "Peer feedback",
  "Evidence log",
];

export default function OneYearProgramPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
            Jr.LTF 1-Year Program
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Badge Earning System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            A long-term growth path that helps Jr.LTF members become true sons
            and daughters of Heavenly Father, beginning in the family and
            expanding to the community, school, and society.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <HeroPoint
              title="Start in the Home"
              text="Leadership begins with faith, filial heart, daily habits, and responsibility in the family."
            />
            <HeroPoint
              title="Grow Through Practice"
              text="Badges are earned through repeated action, reflection, and visible growth."
            />
            <HeroPoint
              title="Become an Owner"
              text="The goal is not collecting badges, but becoming a role model who lives for the greater good."
            />
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Purpose"
            title="Why We Use Badges"
            text="The Jr.LTF badge system gives children, parents, and leaders a clear way to understand growth. Badges are not rewards for simple attendance. They recognize real progress in heart, habits, responsibility, character, and leadership."
          />

          <div className="mt-8 rounded-2xl border-l-8 border-blue-700 bg-blue-50 p-6">
            <p className="text-lg font-semibold text-slate-900">
              Important Standard
            </p>
            <p className="mt-2 text-slate-700">
              A badge is earned when a member shows repeated practice, honest
              reflection, visible growth, and confirmation from parents and
              leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Growth Map"
            title="1-Year Jr.LTF Badge Roadmap"
            text="The same character components are practiced throughout the year. What changes is the level of consistency, responsibility, and ownership."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {roadmap.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-slate-900">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-blue-700">
                  {item.months}
                </p>

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {item.focus}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rank Completion Formula */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Completion Rule"
            title="How a Rank Is Completed"
            text="Each rank has clear badge requirements and ends with a standard evaluation."
          />

          <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white shadow-xl">
            <p className="text-xl font-bold leading-10 md:text-2xl">
              1 Vertical Alignment Badge
              <span className="mx-3 text-yellow-400">+</span>
              4 Core Value Badges
              <span className="mx-3 text-yellow-400">+</span>
              6 Character Practice Badges
              <span className="mx-3 text-yellow-400">+</span>
              Standard Evaluation
              <span className="mx-3 text-yellow-400">=</span>
              Rank Completed
            </p>
          </div>
        </div>
      </section>

      {/* Ranks */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Ranks"
            title="Ranks and Expected Outcomes"
            text="Each rank helps members grow from basic participation to deeper ownership."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {rankCards.map((rank) => (
              <div
                key={rank.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-2 w-20 rounded-full bg-blue-700" />

                <h3 className="text-2xl font-bold text-slate-900">
                  {rank.title}
                </h3>

                <p className="mt-2 font-semibold text-blue-800">
                  “{rank.theme}”
                </p>

                <p className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  {rank.sphere}
                </p>

                <p className="mt-5 leading-7 text-slate-600">
                  {rank.outcome}
                </p>

                <div className="mt-6 space-y-3">
                  {rank.badges.map((badge) => (
                    <div
                      key={badge.name}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <p className="font-bold text-slate-900">{badge.name}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {badge.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge Categories */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Badge Categories"
            title="Three Types of Badges"
            text="All badges connect to the same goal: helping each member grow as a true son or daughter of God and become a leader of true character."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="1. Vertical Alignment"
              text="Growing in relationship with Heavenly Father and parents through prayer, reporting, filial heart, respect, and seeking guidance."
            />
            <InfoCard
              title="2. Core Values"
              text="Practicing Living for the Greater Good, Ownership, Teamwork, and Dream Big in real life."
            />
            <InfoCard
              title="3. Character Practice"
              text="Building visible character through sincerity, humility, gratitude, integrity, earning merit, and strategic thinking."
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Core Values"
            title="Core Value Badge Progression"
            text="Each core value is practiced at a deeper level as the member moves through the ranks."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
            <div className="hidden grid-cols-4 bg-slate-900 text-white md:grid">
              <TableHead text="Core Value" />
              <TableHead text="Foundation Rank" />
              <TableHead text="Growth Rank" />
              <TableHead text="Ownership Rank" />
            </div>

            {coreValues.map((item) => (
              <div
                key={item.value}
                className="grid gap-0 border-t border-slate-200 md:grid-cols-4"
              >
                <TableCell strong text={item.value} />
                <TableCell text={item.foundation} />
                <TableCell text={item.growth} />
                <TableCell text={item.ownership} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Practice Badges */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Character"
            title="Character Practice Badges"
            text="These badges help members build the inner qualities needed for true leadership."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {characterBadges.map((badge) => (
              <InfoCard key={badge.title} title={badge.title} text={badge.text} />
            ))}
          </div>
        </div>
      </section>

      {/* How Badges Are Earned */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Process"
            title="How Badges Are Earned"
            text="Every badge follows the same process so children, parents, and leaders know what to expect."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {badgeProcess.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                  {index + 1}
                </div>
                <p className="font-bold text-slate-900">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-l-8 border-yellow-400 bg-yellow-50 p-6">
            <p className="font-semibold text-slate-900">Simple Rule</p>
            <p className="mt-2 text-slate-700">
              No badge should be given only because someone attended an
              activity. A badge should show real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Evidence"
            title="What Can Be Submitted"
            text="Evidence helps leaders and parents see whether the member’s growth is real, repeated, and visible."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ListCard
              title="Personal Evidence"
              items={[
                "Daily or weekly tracker",
                "Reflection journal",
                "Prayer or reporting record",
                "Personal growth goal and progress notes",
                "Before-and-after reflection",
              ]}
            />

            <ListCard
              title="External Confirmation"
              items={[
                "Parent confirmation",
                "Leader observation",
                "Peer feedback",
                "Project result or service report",
                "Short testimony from someone who received help",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Badge Levels */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Levels"
            title="Badge Levels"
            text="A member can grow in the same badge over time. This helps leaders recognize progress without rushing."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Practicing"
              text="The member is beginning to understand and try. They may still need reminders, but show sincere effort."
            />
            <InfoCard
              title="Consistent"
              text="The member repeats the habit without constant reminders. Parents and leaders can see stable growth."
            />
            <InfoCard
              title="Model"
              text="The member influences others through example. Younger members or peers can learn from this person."
            />
          </div>
        </div>
      </section>

      {/* Evaluation */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Evaluation"
            title="Standard Evaluation"
            text="After completing the required badges for a rank, the member goes through a standard evaluation. This helps the program stay fair, clear, and focused on real growth."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ListCard title="Evaluation Sources" items={evaluationSources} />
            <ListCard
              title="Evaluation Focus"
              items={[
                "Identity as a son or daughter of God",
                "Filial heart toward parents",
                "Daily God-centered habits",
                "Living for the greater good",
                "Responsibility and ownership",
                "Ability to work with others",
                "Growth through challenge",
              ]}
            />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Pass"
              text="The member completed the standard and may move to the next rank."
            />
            <InfoCard
              title="Guided Growth"
              text="The member continues with specific guidance and practices before moving forward."
            />
            <InfoCard
              title="Re-evaluation"
              text="The member tries again after a set period, usually 30–60 days."
            />
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-yellow-400">
            Final Goal
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Becoming an Owner of God’s Dream
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Jr.LTF members are called to grow from basic participation to true
            ownership. They begin by building faith and character in the home,
            then expand that heart to their community, school, and society. The
            badge system helps make that growth visible, guided, and meaningful.
          </p>
        </div>
      </section>
    </main>
  );
}

function HeroPoint({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/80">{text}</p>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-slate-600">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableHead({ text }: { text: string }) {
  return <div className="p-4 text-sm font-bold">{text}</div>;
}

function TableCell({
  text,
  strong = false,
}: {
  text: string;
  strong?: boolean;
}) {
  return (
    <div className="border-t border-slate-200 p-4 text-sm leading-6 md:border-t-0 md:border-l">
      <p className={strong ? "font-bold text-slate-900" : "text-slate-600"}>
        {text}
      </p>
    </div>
  );
}
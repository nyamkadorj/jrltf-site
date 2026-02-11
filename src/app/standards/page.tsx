// src/app/standards/page.tsx
import React from "react";

type StandardItem = {
  title: string;
  entranceTitle: string;
  entrance: string[];
  objectiveTitle: string;
  objectives: string[];
};

const STANDARDS: StandardItem[] = [
  {
    title: "Identity",
    entranceTitle: "Spiritually awake to one’s identity:",
    entrance: [
      "Have a clear awareness of identity as a son or daughter of God, nurtured through a solid family and spiritual foundation",
      "Have a clear awareness of what is God’s Dream.",
      "(Note: Jr.LTF isn't a place to “find God”; it needs to happen in the home).",
      "Seeks to deepen the relationship with Heavenly Father",
    ],
    objectiveTitle: "Owning Identity:",
    objectives: [
      "Deepen the vertical relationship with Heavenly Father built upon filial piety toward one's own parents.",
      "Live as a true son/daughter of God by embodying His character of living for the greater good (culture of heart).",
      "Committed to take responsibility in one’s providential role, aligning with the centrality of God’s providence, and advancing it through oneself and one’s family as His instrument.",
      "e.g, Identity: I am True son/daugther of God, a member of the Blessed family who is an extended member of the True Family, I am a continuation of the Providential figures, God's work of Providence will move through my family and me, so I am the owner",
    ],
  },
  {
    title: "Right Motivation driven by True Love and Filial Piety",
    entranceTitle: "Has a filial heart towards parents",
    entrance: [
      "Demonstrates a filial heart toward parents, expressed through respect, openness to guidance and seek to understand parents’ expectations.",
      "Shows respect towards siblings and elders (uncles, aunts)",
      "Desire to contribute to God's Providence:",
      "Desires to become a true leader who could represent God",
      "Desires to expand one's capabilities as God’s instrument.",
      "Practice of True Love:",
      "Practicing “living for the sake of others” at home, school and communities, uplifting others using God given strengths (e.g. serving, supporting or leading activities in their school, blessed family community or local community)",
    ],
    objectiveTitle: `Owning "Inside-Out":`,
    objectives: [
      "Owning the motivation that grows from “inside-out”, rooted first in connecting one’s heart with Heavenly Father and their Parents, as the greatest source of motivation.",
      "(e.g., relationships that are guided by heart rather than intellect or physical desire, cultivating a breakthrough mindset)",
      "Deepen filial heart by establishing proper vertical order in the family, seeking parental guidance through daily practices such as reporting, reflecting on the day, and reviewing one's growth together with parents.",
      "Living up every day to God and one’s parents’ expectations by clearly understanding God's expectations for humanity and one’s parents' expectations for them.",
      "Embodies True Love",
      "One’s thoughts, actions, behaviours, and attitude are grounded in the culture of the heart",
      "Living for the greater good through selfless motivations and actions in everyday life in the home, community, and in the school, and for the society (e.g., through supporting parents, siblings, and community members without being asked, and doing public services)",
      "Use of God-given strengths to live for the greater good (e.g., proper use of men’s strength not to show up but for those who needed, use of talent for greater purposes that benefit others)",
    ],
  },
  {
    title: "Self-discipline (Self-mastery)",
    entranceTitle: "Basic God-centered life habits:",
    entrance: [
      "Have basic spiritual practices established at home, such as the habit of praying/reporting to God, reflect key moments of the day, sharing it to family members, journal, and understand the importance of doing every action with jungsung.",
      "Demonstrates a sense of integrity, expressed through honesty and right motivation.",
    ],
    objectiveTitle: "Uphold the lifestyle of integrity and self-mastery",
    objectives: [
      "Carry out self-mastery and live with Integrity by strengthening a God-centered lifestyle through a vertical relationship with Heavenly Father and one’s Parents",
      "Demonstrate self-mastery through honest self-reflection of having gratitude and humility before Heavenly Father.",
      "Demonstrate God-centered lifestyle and habits in daily practices",
      "(e.g., keeping the right motivation and honesty even when no one is watching; being responsible for their surrounding areas, keep their space, environment and clothes clean, wake up early, etc; recognize and practice HDH with family as a key component of their spiritual lifestyle; setting daily schedules (proper use of time) aligned to their goals to live with purpose and consistent growth; maintaining purity of mind and heart by preparing themselves to be best for their future spouses; being disciplined in areas such as horizontal relationships, phone use and internet use.)",
    ],
  },
  {
    title: "Growth through Challenge",
    entranceTitle: "Willing to be challenged:",
    entrance: [
      "Self-motivated to grow spiritually and in all dimensions—physical, mental, and emotional—beyond their comfort zone.",
    ],
    objectiveTitle: "Culture of excellence:",
    objectives: [
      "By prioritizing spiritual excellence, one's mind, body, and actions are all built on a spiritual foundation, committing to face and overcome one’s weaknesses/improvement points (as a result, excellence is shown in academics, sports, and community activities)",
      "(e.g., with the motivation of - to do and to be best for Heavenly Father)",
      "Challenge one’s limitations as an opportunity to grow as filial sons/daughters of God",
    ],
  },
  {
    title: "Role model/Excellence",
    entranceTitle: "Motivation to set the bar high:",
    entrance: [
      "Practice thinking and acting beyond oneself, embracing the mindset that “It is not about me.”",
      "Sense of responsibility towards younger siblings:",
      "Aim to set a good example for younger siblings",
    ],
    objectiveTitle: "Leader has to be a self-motivated engine",
    objectives: [
      "Stand and serve as a role model through living for the greater good with a vertical relationship with Heavenly Father and one’s parents.",
      "Self-motivated to set the bar higher for God and His dream by living with the mindset of “It is not about me”",
      "Takes responsibility and initiatives, and shows best exemplary practices for one's younger siblings and takes accountability for their growth. (e.g., leading the younger generation’s program: high->middle-> elementary->pre-school with responsibility and commitment)",
      "Continuously invest in others to develop their potential to fulfill God's and parents' expectations.",
    ],
  },
  {
    title: "Parents’ Leadership Role",
    entranceTitle: "Parents as the main educators of children’s spiritual growth:",
    entrance: [
      "Parents and family, are willing to walk together with their children through this leadership course.",
      "Parents are focused on children’s spiritual life; in other words, a child who has strong parents’ support for becoming a public leader",
    ],
    objectiveTitle: "Has Parental guidance:",
    objectives: [
      "Parents teach and guide their children for spiritual growth by first aligning themselves to God’s Dream, Values, and Goals",
      "Parents proactively provide feedback based on daily reports, reflect together  for continuous spiritual growth, and teach them to embrace challenges (e.g., when children report their day to parents, parents shall reflect together and guide spiritually for their growth through daily activities, challenges, life habits, school activities etc.)",
      "Parents set the examples of leadership through daily life as their main educators.",
    ],
  },
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export default function StandardsPage() {
  return (
    <div className="bg-white">
      {/* Top band (same as your site style) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-white" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">
            Jr.LTF Standards
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">Standards</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Entrance standards clarify who this program is for, and Objectives describe who members
            are expected to become and achieve through the program.
          </p>
        </div>
      </section>

      {/* Accordion cards */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="space-y-4">
          {STANDARDS.map((s, idx) => (
            <details
              key={s.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              open={idx === 0}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
                    {s.title}
                  </h2>

                  {/* simple chevron */}
                  <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 group-open:bg-white">
                    <span className="group-open:hidden">Open</span>
                    <span className="hidden group-open:inline">Close</span>
                  </span>
                </div>
              </summary>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* Entrance */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Entrance Standard
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">
                    {s.entranceTitle}
                  </h3>
                  <List items={s.entrance} />
                </div>

                {/* Objectives */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Objectives on Program Standard
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">
                    {s.objectiveTitle}
                  </h3>
                  <List items={s.objectives} />
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

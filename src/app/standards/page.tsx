import Accordion from "../../components/Accordion";

function pretty(text: string) {
  // formatting only (no wording changes): make the table text readable
  return text
    .replace(/ \-/g, "\n-") // " -" -> newline bullet
    .replace(/:\-/g, ":\n-") // ":-" -> ":\n-"
    .replace(/\)\-/g, ")\n-"); // ")-" -> ")\n-"
}

const standards = [
  {
    category: "Spiritual Identity",
    entrance:
      "Spiritually awake to their identity: -Have a solid family and spiritual foundation, rooted in understanding one’s identity as God’s son/daughter, and understanding of God’s Dream (*Jr.LTF isn't a place to “begin” faith; it needs to happen in the home).",
    objectives:
      "Owning Spiritual Identity:-Establishing a direct and sincere relationship with Heavenly Father, built upon filial piety toward one´s parents. -Live as True son/daughter of God embodying His character by taking initiative and responsibility as providential figure, aligning to the central figure, and advancing God’s providence through one’s family and using one's fullest capacity as His instrument. (e.g., I am True son/daugther of God, member of Blessed family who is an extended member of the True Family, I am a continuation of the Providential figures, God's work of Providence will move through my family and me, so I am the owner)",
  },
  {
    category: "Motivation based on Filial Piety",
    entrance:
      "Has a filial heart towards parents -Seek to understand their parents’ expectations-Shows respect towards siblings and elders (uncles, aunts)",
    objectives:
      "Desire to contribute to God's Providence:-Seek to become a leader for God’s Providence-Desires to expand one's capabilities as God’s instrument.Motivation happens \"Inside-Out\": -Their biggest motivation is rooted in developing a heart-centered relationship with Heavenly Father and their parents. Being guided by that relationship they cultivate a breakthrough mindsetLiving by God’s and parents’ expectations:-Understand God's expectation for humanity and what is their parents' expectation for them while taking responsibility to embody these expectations in daily life.-Recognize their own strength and based on that lead initiatives that strengthen families, inspiring others to strive for higher standards -Cultivates filial heart by actions such as: reporting, reflecting and reviewing one's growth with parents. Always keeping parental guidance.",
  },
  {
    category: "Practice of True Love",
    entrance:
      "Initial motivation based on True love:-Uplifts others by practicing “living for the sake of others” (e.g. Helping at home; serving, supporting or leading activities in their school, blessed families or local communities)",
    objectives:
      "Embodies True Love-Understands that True Love is the motivation behind God’s actions and seeks to embody it through their own thoughts, attitudes and actions-Actively lives for the greater good by acting selflessly and inspiring others to create a positive impact",
  },
  {
    category: "Self-discipline (Self-mastery)",
    entrance:
      "Has basic God-centered life habits:-Should have basic spiritual practices established at home, such as the habit of praying/reporting to God, reflecting key moments of the day, sharing to family members, journaling, and understanding the importance of heart of jungsung in every action.-Demonstrates a sense of integrity, expressed through honesty and right motivation",
    objectives:
      "Attain self-mastery and lives with Integrity maintaining a God-centered lifestyle:-Self-mastery requires honest self-reflection which is achieved through the cultivation of gratitude and humility. Gratitude helps recognize and use the strengths properly, and humility allows one to identify areas of growth, understanding that there is always more to offer to Heavenly Father. -Demonstrate God-centered lifestyle and habits in daily practices (e.g., keeping the right motivation and honesty even when no one is watching; being responsible for their surrounding areas, keep their space, environment and clothes clean, wake up early, etc; practice of self-mastery; recognize and practice HDH with family as a key component of their spiritual lifestyle; setting daily schedules (proper use of time) aligned to their goals to live with purpose and consistent growth; maintaining purity of mind and heart by preparing themselves to be best for their future spouses; being disciplined in areas such as horizontal relationships, phone use and internet use.)",
  },
  {
    category: "Growth through Challenge",
    entrance:
      "Willing to be challenged:-Seeks to deepen relationship with God-Self-motivated to grow spiritually",
    objectives:
      "Pursuing spiritual excellence:-By prioritizing spiritual life they develop a strong inner foundation aligning with God that gives them the strength to overcome personal challenges. With this foundation they can excel in other areas, such as sports, academics, etc. -Understands the necessity to be excellent in all aspects in order to properly serve Heavenly Father",
  },
  {
    category: "Role Model",
    entrance:
      "Motivation to set the bar high:-Do not bring a self-centered mindset; instead focus on \"It is not about me.\" Sense of responsibility towards younger siblings:-Aim to set a good example for younger siblings",
    objectives:
      "Being a Self-motivated engine:-Have a self-motivated mindset in order keep on challenging themselves, seeking growth to actively contribute to God’s Dream-Strive to fulfill the roles towards their siblings, based first on the proper vertical relationship with parents-Showing good examples for younger siblings. (e.g., leading the younger generation’s program: high->middle-> elementary->pre-school with responsibility and commitment)",
  },
  {
    category: "Parents' involvement",
    entrance:
      "Parents as the main educators of children’s spiritual growth: -Family involvement, including parents who are willing to walk together with their children in this leadership course.-Parents are focused in children’s spiritual life, in other words a child who has strong parents’ guidance and support for becoming a public leader",
    objectives:
      "Has Parental guidance:- Parents continuously provide feedback based on daily reports, reflect together, and guide for continuous spiritual growth. (e.g., when children report their day to parents, parents shall reflect together and guide spiritually for their growth through daily activities, challenges, life habits, school activities etc.)-Parents set the examples of leadership through daily life as their main educators.",
  },
];

export default function StandardsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Standards</h1>
        <p className="mt-4 text-slate-600">
          Entrance standards clarify who this program is for, and Objectives
          describe who members are expected to become and achieve through the program.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {standards.map((s, i) => (
          <Accordion key={s.category} title={s.category} defaultOpen={i === 0}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                  Entrance Standard
                </p>
                <p className="mt-3 whitespace-pre-line text-sm text-slate-700">
                  {pretty(s.entrance)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                  Objectives on Program standard
                </p>
                <p className="mt-3 whitespace-pre-line text-sm text-slate-700">
                  {pretty(s.objectives)}
                </p>
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

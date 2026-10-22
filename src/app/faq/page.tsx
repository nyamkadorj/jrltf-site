
import Accordion from "../../components/Accordion";

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-[#001530]">

      {/* Header */}
      <div className="max-w-3xl">
        <div className="mb-4 h-1 w-12 rounded-full bg-[#D4AF37]" />

        <h1 className="text-4xl font-bold text-[#002040]">
          Commonly asked questions
        </h1>

        <p className="mt-4 leading-relaxed text-[#40536A]">
          This section addresses common questions from parents and youth
          regarding Jr.LTF and the recruitment process.
        </p>
      </div>

      {/* Parents */}
      <section className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-[#F4E5AE] bg-[#FFF8E7] text-xl">
            👨‍👩‍👧
          </div>

          <h2 className="text-xl font-semibold text-[#002040]">
            For Parents
          </h2>
        </div>

        <div className="space-y-4">
          <Accordion title="What is the purpose of Jr.LTF?">
            <p className="text-sm leading-relaxed text-[#40536A]">
              Jr.LTF is a year-based spiritual leadership training program designed
              to support the growth of youth as role-model sons and daughters who
              take ownership in realizing God’s dream.
            </p>
          </Accordion>

          <Accordion title="Is Jr.LTF focused on performance or growth?">
            <p className="text-sm leading-relaxed text-[#40536A]">
              The program emphasizes spiritual growth, character development,
              and responsibility rather than competition or comparison.
            </p>
          </Accordion>

          <Accordion title="What is expected of parents during the program?">
            <p className="text-sm leading-relaxed text-[#40536A]">
              Parents are the primary educators of their children and are expected
              to walk together with them, offering guidance, feedback, and support
              throughout the program.
            </p>
          </Accordion>
        </div>
      </section>

      {/* Youth */}
      <section className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-[#F4E5AE] bg-[#FFF8E7] text-xl">
            🌱
          </div>

          <h2 className="text-xl font-semibold text-[#002040]">
            For Youth (Candidates)
          </h2>
        </div>

        <div className="space-y-4">
          <Accordion title="Is Jr.LTF a competition?">
            <p className="text-sm leading-relaxed text-[#40536A]">
              Jr.LTF is not a competition. It is a journey of growth that challenges
              each participant according to their own readiness and commitment.
            </p>
          </Accordion>

          <Accordion title="What if I am not selected this year?">
            <p className="text-sm leading-relaxed text-[#40536A]">
              Not being selected does not mean failure. It can become an opportunity
              to continue growing through guidance from parents, chapters, and peers.
            </p>
          </Accordion>

          <Accordion title="What kind of challenges will I face?">
            <p className="text-sm leading-relaxed text-[#40536A]">
              Challenges may include spiritual disciplines, physical activities,
              responsibility at home, and efforts to live for the sake of others.
            </p>
          </Accordion>
        </div>
      </section>

      {/* Closing accent */}
      <div className="mx-auto mt-14 h-px w-20 bg-[#D4AF37]/60" />
    </div>
  );
}

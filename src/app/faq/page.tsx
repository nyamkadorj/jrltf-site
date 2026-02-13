import Accordion from "../../components/Accordion";

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Common asked questions</h1>
        <p className="mt-4 text-slate-600">
          This section addresses common questions from parents and youth
          regarding Jr.LTF and the recruitment process.
        </p>
      </div>

      {/* Parents */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">For Parents</h2>

        <div className="space-y-4">
          <Accordion title="What is the purpose of Jr.LTF?">
            <p className="text-sm text-slate-700">
              Jr.LTF is a year-based spiritual leadership training program designed
              to support the growth of youth as role-model sons and daughters who
              take ownership in realizing God’s dream.
            </p>
          </Accordion>

          <Accordion title="Is Jr.LTF focused on performance or growth?">
            <p className="text-sm text-slate-700">
              The program emphasizes spiritual growth, character development,
              and responsibility rather than competition or comparison.
            </p>
          </Accordion>

          <Accordion title="What is expected of parents during the program?">
            <p className="text-sm text-slate-700">
              Parents are the primary educators of their children and are expected
              to walk together with them, offering guidance, feedback, and support
              throughout the program.
            </p>
          </Accordion>
        </div>
      </div>

      {/* Youth */}
      <div className="mt-14">
        <h2 className="mb-4 text-xl font-semibold">For Youth (Candidates)</h2>

        <div className="space-y-4">
          <Accordion title="Is Jr.LTF a competition?">
            <p className="text-sm text-slate-700">
              Jr.LTF is not a competition. It is a journey of growth that challenges
              each participant according to their own readiness and commitment.
            </p>
          </Accordion>

          <Accordion title="What if I am not selected this year?">
            <p className="text-sm text-slate-700">
              Not being selected does not mean failure. It can become an opportunity
              to continue growing through guidance from parents, chapters, and peers.
            </p>
          </Accordion>

          <Accordion title="What kind of challenges will I face?">
            <p className="text-sm text-slate-700">
              Challenges may include spiritual disciplines, physical activities,
              responsibility at home, and efforts to live for the sake of others.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

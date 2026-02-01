import FlowSteps from "../../components/FlowSteps";

import Timeline, { TimelineItem } from "../../components/Timeline";
<div className="mt-12">
  <FlowSteps />
</div>

export default function RecruitmentPage() {
  const items: TimelineItem[] = [
    {
      title: "HQ Alignment & Local Orientation",
      dateLabel: "March",
      body: "HQ meets with Chapter Representatives to align on the purpose, standards, and flow. Chapter representatives then meet with parents and youth to explain expectations and support readiness.",
      bullets: [
        "HQ briefing with chapter reps",
        "Local orientation for parents and candidates",
      ],
    },
    {
      title: "Recommendations & Evidence Submission",
      dateLabel: "By April 15",
      body: "Chapter Representatives submit recommendation letters for potential candidates, along with required application materials that show readiness to grow through the program.",
      bullets: [
        "Recommendation letter + supporting evidence",
        "Application form (parent & candidate sections)",
      ],
    },
    {
      title: "Interviews & Growth-through-Challenge Checks",
      dateLabel: "From April 16",
      body: "Interviews are conducted with candidates and parents (separately). Physical challenge and goal-setting activities are completed and reported through the chapter representative.",
      bullets: [
        "Candidate interview (separate)",
        "Parent interview (separate)",
        "Running challenge + goal extension after interview",
      ],
    },
    {
      title: "Final Assessment & Announcement",
      dateLabel: "By May 15",
      body: "HQ and Chapter Representatives hold a final assessment meeting. Final candidates are selected and announced. Parents complete the agreement process for participation.",
      bullets: [
        "Final assessment meeting (HQ + chapters)",
        "Announcement of selected candidates",
        "Parent agreement form completed",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Recruitment & Selection Process</h1>
        <p className="mt-4 text-slate-600">
          This process is designed to support each candidate’s spiritual growth
          and help families and chapters confirm readiness to join Jr.LTF.
        </p>
      </div>

      <div className="mt-12">
        <Timeline items={items} />
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold">If a candidate is not selected</h2>
        <p className="mt-2 text-slate-600">
          Not being selected is not the end. It can become a guided growth path.
          Chapters and Jr.LTF members can help candidates continue building
          spiritual habits, discipline, and readiness for the next opportunity.
        </p>
      </div>
    </div>
  );
}

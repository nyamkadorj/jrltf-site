import HorizontalTimeline, { HItem } from "../../components/HorizontalTimeline";

export default function ProgramPage() {
  // Initial version (NOT from Excel)
  const items: HItem[] = [
    {
      month: "Jan-Feb, 2026",
      title: "Announcement of Jr. LTF program, purpose, and entrance standard",
      description: "",
    },
    {
      month: "After announcement",
      title:
        "Field-by-field and family-by-family preparation according to Jr.LTF’s purpose and entrance standards",
      description: "",
    },
    {
      month: "April-May, 2026",
      title:
        "Selection period (selection process will be conducted according to entrance standards)",
      description: "",
    },
    {
      month: "Late Jul, early Aug",
      title: "Kick-off WS in Mongolia (selected participants will join)",
      description: "",
    },
    {
      month: "Sep, 2026 - Jan, 2027 (until next God's Day)",
      title:
        "1st Half of the Year starting in their respective field and home (Half-year is a mid-way checkpoint of programs and evaluations)",
      description: "",
    },
    {
      month: "Jan, 2027 (After God's day) - Jul, 2027",
      title: "2nd Half of the Year at field/home",
      description: "",
    },
    {
      month: "Jul-Aug, 2027",
      title: "Final Evaluation",
      description: "",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Program</h1>
        <p className="mt-4 text-slate-600">
          Jr.LTF is a year-based program that begins with an international kick-off
          workshop and continues through structured growth in the home and local field.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold">Key Timelines</h2>
        <div className="mt-8">
          <HorizontalTimeline items={items} />
        </div>
      </div>
    </div>
  );
}

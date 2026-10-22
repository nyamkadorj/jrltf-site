
import Link from "next/link";

const BADGES_LINK =
  "https://script.google.com/macros/s/AKfycbwr1Mcmt8YOxkjOzotdM1y8T13vWHMGWIkWPBVrh55v83b-uizFjmtS5S_8nptO6TA/exec";

export default function BadgesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="px-6 pb-20 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              <span>✨</span>
              Jr.LTF Growth Journey
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              🏅 Merit Badges
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Small steps, meaningful growth.
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              The Jr.LTF Merit Badge System encourages members to
              develop good habits, strengthen their relationship
              with Heavenly Father and their families, and grow
              through meaningful challenges and experiences.
            </p>
          </div>

          {/* Main content */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* About */}
            <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                  🌱
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Why Merit Badges?
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Learning through action
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="mb-2 font-semibold">
                    Build Good Habits
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    Practice consistency, self-discipline, and
                    responsibility through everyday activities.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="mb-2 font-semibold">
                    Grow in True Character
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    Put spiritual principles and core values into
                    action at home, school, and in the community.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="mb-2 font-semibold">
                    Take Ownership
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    Set meaningful goals, embrace challenges,
                    and take responsibility for personal growth
                    with guidance from parents and leaders.
                  </p>
                </div>
              </div>
            </section>

            {/* Explore */}
            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                  📚
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Explore Merit Badges
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your badge journey starts here
                  </p>
                </div>
              </div>

              <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm leading-7 text-slate-700">
                  Explore the available Merit Badges, learn
                  about their requirements, and discover
                  opportunities to challenge yourself and
                  develop your God-given potential.
                </p>
              </div>

              <a
                href={BADGES_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[150px] items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    🏅
                  </div>

                  <div>
                    <span className="mb-2 inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      Explore Badges
                    </span>

                    <h3 className="text-lg font-semibold text-slate-900">
                      Merit Badge System
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      View badges, descriptions, and requirements
                    </p>
                  </div>
                </div>

                <span className="text-2xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900">
                  →
                </span>
              </a>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-center text-sm leading-7 text-slate-600">
                  Every badge is an opportunity to grow closer
                  to God, strengthen your character, and
                  become a better son or daughter,
                  brother or sister, and leader.
                </p>
              </div>
            </section>
          </div>

          {/* Bottom note */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-sm leading-7 text-slate-500">
              Remember: Merit Badges are not simply rewards
              for completing tasks. They represent meaningful
              steps toward becoming a person of true character
              who lives for the greater good.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


const BADGES_LINK =
  "https://script.google.com/macros/s/AKfycbwr1Mcmt8YOxkjOzotdM1y8T13vWHMGWIkWPBVrh55v83b-uizFjmtS5S_8nptO6TA/exec";

export default function BadgesPage() {
  return (
    <main className="min-h-screen bg-white text-[#001530]">
      <section className="px-6 pb-20 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-5xl">

          {/* Hero */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-[#D4AF37]" />

            <div className="inline-flex items-center gap-2 rounded-full border border-[#F4E5AE] bg-[#FFF8E7] px-4 py-2 text-sm font-semibold text-[#A77D1E]">
              <span>✨</span>
              Jr.LTF Growth Journey
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#002040] sm:text-5xl">
              🏅 Merit Badges
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-[#A77D1E] sm:text-lg">
              Small steps, meaningful growth.
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#40536A]">
              The Jr.LTF Merit Badge System encourages members to
              develop good habits, strengthen their relationship
              with Heavenly Father and their families, and grow
              through meaningful challenges and experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* Why Merit Badges */}
            <section className="rounded-[2rem] border border-[#DCE5ED] bg-[#EFF5F9] p-7 shadow-sm sm:p-8">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F4E5AE] bg-[#FFF8E7] text-2xl shadow-sm">
                  🌱
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#002040]">
                    Why Merit Badges?
                  </h2>

                  <p className="mt-1 text-sm text-[#40536A]">
                    Learning through action
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                {/* Good Habits */}
                <div className="rounded-2xl border border-[#DCE5ED] bg-white p-5 transition-all duration-200 hover:border-[#D4AF37]/60 hover:shadow-sm">
                  <h3 className="mb-2 font-semibold text-[#002040]">
                    Build Good Habits
                  </h3>

                  <p className="text-sm leading-7 text-[#40536A]">
                    Practice consistency, self-discipline, and
                    responsibility through everyday activities.
                  </p>
                </div>

                {/* True Character */}
                <div className="rounded-2xl border border-[#DCE5ED] bg-white p-5 transition-all duration-200 hover:border-[#D4AF37]/60 hover:shadow-sm">
                  <h3 className="mb-2 font-semibold text-[#002040]">
                    Grow in True Character
                  </h3>

                  <p className="text-sm leading-7 text-[#40536A]">
                    Put spiritual principles and core values into
                    action at home, school, and in the community.
                  </p>
                </div>

                {/* Ownership */}
                <div className="rounded-2xl border border-[#DCE5ED] bg-white p-5 transition-all duration-200 hover:border-[#D4AF37]/60 hover:shadow-sm">
                  <h3 className="mb-2 font-semibold text-[#002040]">
                    Take Ownership
                  </h3>

                  <p className="text-sm leading-7 text-[#40536A]">
                    Set meaningful goals, embrace challenges,
                    and take responsibility for personal growth
                    with guidance from parents and leaders.
                  </p>
                </div>
              </div>
            </section>

            {/* Explore Merit Badges */}
            <section className="rounded-[2rem] border border-[#DCE5ED] bg-white p-7 shadow-sm sm:p-8">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F4E5AE] bg-[#FFF8E7] text-2xl">
                  📚
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#002040]">
                    Explore Merit Badges
                  </h2>

                  <p className="mt-1 text-sm text-[#40536A]">
                    Your badge journey starts here
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-6 rounded-2xl border border-[#F4E5AE] bg-[#FFF8E7] p-5">
                <p className="text-sm leading-7 text-[#40536A]">
                  Explore the available Merit Badges, learn
                  about their requirements, and discover
                  opportunities to challenge yourself and
                  develop your God-given potential.
                </p>
              </div>

              {/* Merit Badge System Link */}
              <a
                href={BADGES_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[150px] items-center justify-between gap-4 rounded-3xl border border-[#D4AF37]/50 bg-[#EFF5F9] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#FFF8E7] hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#F4E5AE] bg-white text-3xl shadow-sm">
                    🏅
                  </div>

                  <div>
                    <span className="mb-2 inline-block rounded-full bg-[#002040] px-3 py-1 text-xs font-semibold text-white">
                      Explore Badges
                    </span>

                    <h3 className="text-lg font-semibold text-[#002040]">
                      Merit Badge System
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#40536A]">
                      View badges, descriptions, and requirements
                    </p>
                  </div>
                </div>

                <span className="shrink-0 text-2xl text-[#A77D1E] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Closing Message */}
              <div className="mt-6 rounded-2xl bg-[#EFF5F9] p-5">
                <p className="text-center text-sm leading-7 text-[#40536A]">
                  Every badge is an opportunity to grow closer
                  to God, strengthen your character, and
                  become a better son or daughter,
                  brother or sister, and leader.
                </p>
              </div>
            </section>
          </div>

          {/* Bottom Note */}
          <div className="mx-auto mt-12 max-w-3xl text-center">

            <div className="mx-auto mb-5 h-px w-20 bg-[#D4AF37]/60" />

            <p className="text-sm leading-7 text-[#40536A]">
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

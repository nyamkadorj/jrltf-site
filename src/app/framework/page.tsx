"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: EASE },
};

export default function FrameworkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Standards-style header */}
      <motion.div {...fadeUp} className="max-w-3xl">
        <h1 className="text-4xl font-bold">Framework</h1>
        <p className="mt-4 text-slate-600">Integrated Framework</p>
      </motion.div>

      {/* BIG BLOCKS: 1–4 */}
      <div className="mt-10 space-y-8">
        {/* 1 */}
        <BigBlock title="1. Identity / Vertical Alignment">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GrayBox>
              At the foundation, our youth should first understand <b>who they are</b> and actively
              cultivate their relationship with God. By understanding their identity as sons and
              daughters of God, they can then freely choose to participate in realizing God’s dream
              of One Family under God, one family at a time. Identity is the starting point that
              gives meaning and direction to everything else.
            </GrayBox>

            <SmallStack>
              <SmallBox>
                Participate in realizing <br />
                “What God intended?
              </SmallBox>
            </SmallStack>
          </div>
        </BigBlock>

        {/* 2 */}
        <BigBlock title="2. Culture Building (as leader)">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GrayBox>
              As sons and daughters of God, we are actively participating in creating a shift in
              culture.
            </GrayBox>

            <SmallStack>
              <SmallBox>A culture where God is at the center</SmallBox>
              <SmallBox>
                A culture where we are motivated to live for the sake of others (culture of heart)
                and a culture of excellence (the driver to do and be our best for heavenly father).
              </SmallBox>
              <SmallBox>
                A culture where we are living to embody God’s truth, righteousness, goodness and
                True Love in our everyday life.
              </SmallBox>
            </SmallStack>
          </div>
        </BigBlock>

        {/* 3 */}
        <BigBlock title="3. Standards">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GrayBox>
              The Jr. Leadership Task Force program is guided by clear standards that support our
              youth in growing as true sons and daughters of God. These standards help them take
              ownership of God’s will and develop as leaders who are prepared to bring positive
              transformation to society.
            </GrayBox>

            <SmallStack>
              <ListBox>
                <ol className="space-y-2">
                  <li>1. Identity</li>
                  <li>2. Motivation based on Filial Piety</li>
                  <li>3. Practice of True Love</li>
                  <li>
                    4. Self-Discipline (Self-mastery)
                    <br />
                    with cultivation of gratitude and humility
                  </li>
                  <li>5. Growth through Challenge</li>
                  <li>6. Role Model</li>
                  <li>7. Parents’ Involvement</li>
                </ol>
              </ListBox>

              <SmallBox>
                Culture shift/
                <br />
                build based
                <br />
                on standard
              </SmallBox>

              <SmallBox>
                Become/raise
                <br />
                standards /
                <br />
                qualities
              </SmallBox>
            </SmallStack>
          </div>
        </BigBlock>

        {/* Transition sentence (from PNG) */}
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-slate-200 bg-white px-6 py-4 text-center text-sm font-medium text-slate-700 shadow-sm"
        >
          The Core Values framework is a simple yet profound way to live out these standards on a
          daily basis.
        </motion.div>

        {/* 4 */}
        <BigBlock title="4. Core Values Framework">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GrayBox>
              “Core Values” serve as the framework:
              <br />
              for both the education we provide (cognitive and experiential) and the culture of
              heart we seek to build.
            </GrayBox>

            <SmallStack>
              <ListBox>
                <ol className="space-y-2">
                  <li>1. Living for the Greater Good</li>
                  <li>2. Ownership</li>
                  <li>3. Teamwork</li>
                  <li>4. Dream Big</li>
                </ol>
              </ListBox>

              <SmallBox>Practice</SmallBox>

              <GrayBox>
                Through practicing these values, our youth learn to become change-makers and
                leaders who embody God’s ideal in their homes, schools, communities, and ultimately
                in society.
              </GrayBox>
            </SmallStack>
          </div>
        </BigBlock>
      </div>
    </div>
  );
}

/* ---------- components ---------- */

function BigBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      {...fadeUp}
      className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
    >
      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center text-xl font-semibold text-slate-900 shadow-sm">
        {title}
      </div>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}

function GrayBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...fadeUp}
      className="rounded-3xl border border-slate-200 bg-slate-100 px-6 py-6 text-center text-sm leading-relaxed text-slate-800 shadow-sm"
    >
      {children}
    </motion.div>
  );
}

function SmallStack({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

function SmallBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...fadeUp}
      className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-center text-sm text-slate-800 shadow-sm"
    >
      {children}
    </motion.div>
  );
}

function ListBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      {...fadeUp}
      className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-800 shadow-sm"
    >
      {children}
    </motion.div>
  );
}

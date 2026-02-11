export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
        <p className="font-medium text-slate-900">
          Junior Leadership Task Force (Jr.LTF)
        </p>
        <p className="mt-2 max-w-3xl">
          A program for spiritual growth and leadership training—raising young leaders who
          take ownership in realizing God's dream— One Family under God, one family at a time.
        </p>
        <p className="mt-6">© {new Date().getFullYear()} Jr.LTF</p>
      </div>
    </footer>
  );
}

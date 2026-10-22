
export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/30 bg-[#002040]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-[#D8E3ED]">
        
        {/* Gold accent */}
        <div className="mb-5 h-[3px] w-12 rounded-full bg-[#D4AF37]" />

        {/* Program name */}
        <p className="font-semibold text-white">
          Junior Leadership Task Force (Jr.LTF)
        </p>

        {/* Program description */}
        <p className="mt-2 max-w-3xl leading-relaxed text-[#D8E3ED]">
          A program for spiritual growth and leadership training—raising young leaders who
          take ownership in realizing God's dream— One Family under God, one family at a time.
        </p>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/15 pt-5">
          <p className="text-xs text-[#B4C5D7]">
            © {new Date().getFullYear()} Jr.LTF
          </p>
        </div>
      </div>
    </footer>
  );
}

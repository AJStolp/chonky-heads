export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-white">Chonky Heads LLC</p>
            <p className="mt-1 text-sm text-white/40">Wisconsin</p>
          </div>
          <a
            href="mailto:ChonkyHeads@proton.me"
            className="text-sm text-white/60 transition-colors hover:text-orange-400"
          >
            ChonkyHeads@proton.me
          </a>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Chonky Heads LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

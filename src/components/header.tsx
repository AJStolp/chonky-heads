export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          Chonky Heads
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="#products"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

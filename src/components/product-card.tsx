interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  techNote: string;
  ctaLabel: string;
  ctaHref?: string;
}

export default function ProductCard({
  name,
  tagline,
  description,
  status,
  techNote,
  ctaLabel,
  ctaHref,
}: ProductCardProps) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-gray-900 p-6 transition-colors hover:border-white/10 md:p-8">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              status === "live" ? "bg-emerald-400" : "bg-amber-400"
            }`}
          />
          <span
            className={`text-xs font-medium uppercase tracking-wider ${
              status === "live" ? "text-emerald-400" : "text-amber-400"
            }`}
          >
            {status === "live" ? "Live" : "Coming Soon"}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm font-medium text-orange-400">{tagline}</p>
        <p className="mt-4 leading-relaxed text-white/60">{description}</p>
        <p className="mt-3 text-xs text-white/30">{techNote}</p>
      </div>

      <div className="mt-6">
        {ctaHref ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {ctaLabel}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/40">
            {ctaLabel}
          </span>
        )}
      </div>
    </div>
  );
}

import Header from "@/components/header";
import ProductCard from "@/components/product-card";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="px-4 pb-24 pt-32 sm:px-6 md:pb-32 md:pt-40 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-white md:text-6xl">
              I build software
              <br />
              that works.
            </h1>
            <p className="animate-fade-up-delay-1 mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Chonky Heads is a one-man software studio in Wisconsin, building
              tools for how people read, learn, and understand land.
            </p>
            <div className="animate-fade-up-delay-2 mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
          </div>
        </section>

        {/* Products */}
        <section id="products" className="px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="animate-fade-up text-2xl font-bold text-white md:text-3xl">
              What I&apos;m Working On
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="animate-fade-up-delay-1 flex">
                <ProductCard
                  name="unChonk"
                  tagline="Just unChonk.it"
                  description="A text-to-speech web app and Chrome extension that reads any webpage aloud with premium AI voices, real-time word highlighting, and customizable playback. Pay as you go."
                  status="live"
                  techNote="Listen to anything on the web"
                  ctaLabel="Visit unchonk.com"
                  ctaHref="https://www.unchonk.com"
                />
              </div>
              <div className="animate-fade-up-delay-2 flex">
                <ProductCard
                  name="BNDRYIQ"
                  tagline="Property Intelligence"
                  description="Aerial video generation, interactive maps, land analysis, and a drone pilot marketplace. Understand any property from every angle."
                  status="coming-soon"
                  techNote="Know your land before you buy it"
                  ctaLabel="Coming Soon"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="animate-fade-up mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Small studio. Big ideas.
              </h2>
              <p className="mt-4 leading-relaxed text-white/60">
                Based in Wisconsin, Chonky Heads builds software at the
                intersection of accessibility and intelligence. We believe the
                best tools are the ones that get out of your way.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

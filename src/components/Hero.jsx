import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] lg:min-h-screen bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[70vh] lg:min-h-screen">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10" />
        <div className="relative z-10 max-w-2xl py-24 lg:py-40">
          <p className="uppercase tracking-widest text-xs text-neutral-600">Psychology Portfolio</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight">
            Farah Najwa
          </h1>
          <p className="mt-4 text-neutral-700 text-base sm:text-lg leading-relaxed">
            Aspiring psychology undergraduate focused on cognitive science, research methods, and human behaviour.
            Dedicated to rigorous inquiry, ethical practice, and community impact.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800"
            >
              Get in touch
            </a>
            <a
              href="#cv"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
    return (
      <section className="min-h-screen bg-grid opacity-60 flex flex-col justify-center items-center text-center px-4 text-white">
        <div className="mb-4 bg-grid text-sm  px-3 py-1 rounded-full">
          ⭐ scout is currently in beta →
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          AI for teams building <br /> what's next.
        </h1>
        <p className="mt-4 text-lg max-w-xl text-white/80">
          Scout gives you the tools to build custom agents and workflows in record time.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-medium">
          Get Started →
        </button>
      </section>
    );
  }
  
import {
  FiSlack,
  FiSettings,
  FiDatabase,
  FiZap,
  FiInbox,
  FiMessageCircle,
} from "react-icons/fi";

export default function TrustedBy() {
  return (
    <section className="px-6 py-24 grid-contrast-strong stars-base relative">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto space-y-6">
        <div className="flex  flex-wrap justify-center gap-6">
          <FeatureCard
            title="AI where you work"
            description="Deploy Scout Apps to Slack or Discord."
            icon={<FiSlack className="w-4 h-4 text-white/60" />}
            className="flex-1  min-w-[280px] max-w-[350px] h-auto"
          >
            <div className="flex  justify-between items-center">
              <span className="text-xs bg-white/10 px-2 py-1 rounded">Slack</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">Discord</span>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Customize your AI"
            description="Build custom workflows and apps in minutes."
            icon={<FiSettings className="w-4 h-4 text-white/60" />}
            className="flex-1 min-w-[280px] max-w-[300px] h-auto"
          >
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-black/30 border border-white/10 px-3 py-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Value"
                className="w-full bg-black/30 border border-white/10 px-3 py-2 rounded text-sm"
              />
              <div className="flex gap-2 flex-wrap mt-2">
                {["Text", "LLM", "Web", "HTTP"].map((label) => (
                  <button
                    key={label}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full"
                  >
                    {label}
                  </button>
                ))}
                <button className="text-xs bg-white text-black px-3 py-1 rounded-full">
                  Save
                </button>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Access to the right data"
            description="Control what your AI knows and what it forgets."
            icon={<FiDatabase className="w-4 h-4 text-white/60" />}
            className="flex-1 min-w-[280px] max-w-[300px] h-auto"
          >
            <div className="space-y-2">
              <div className="text-xs text-white/70 bg-black/30 border border-white/10 p-2 rounded">
                This is a sample data output which we can replace.
              </div>
              <div className="flex gap-2">
                <button className="text-xs text-red-500 bg-black border border-amber-50 px-3 py-1 rounded">
                  Delete
                </button>
                <button className="text-xs bg-white text-black px-3 py-1 rounded">
                  Save
                </button>
              </div>
            </div>
          </FeatureCard>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <FeatureCard
            title="Accelerate your product"
            description="Use Scout API to enable AI-features for your customers."
            icon={<FiZap className="w-4 h-4 text-white/60" />}
            className="flex-1 min-w-[280px] max-w-[300px] h-auto"
          >
            <div className="flex justify-end">
              <span className="text-xs bg-white/10 px-2 py-1 rounded">AI</span>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Automate your work"
            description="Connect your existing tools and eliminate the busy work."
            icon={<FiMessageCircle className="w-4 h-4 text-white/60" />}
            className="flex-1 min-w-[280px] max-w-[300px] h-auto"
          >
            <div className="space-y-2 text-xs">
              <div className="bg-black/30 border border-white/10 p-2 rounded">
                Feature request on Slack
              </div>
              <div className="text-blue-400 underline cursor-pointer">
                Linear ticket for that feature
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="An Inbox with superpowers"
            description="Curate responses and review results for each interaction."
            icon={<FiInbox className="w-4 h-4 text-white/60" />}
            className="flex-1 min-w-[280px] max-w-[350px] h-auto"
          >
            <div className="space-y-2 text-xs">
              <div className="bg-black/30 border border-white/10 p-2 rounded">
                Thanks Scout. You just saved me a bunch of time.
              </div>
              <div className="bg-black/30 border border-white/10 p-2 rounded">
                How do I replay a previous app run?
              </div>
              <div className="flex gap-2">
                <button className="bg-white text-black px-3 py-1 rounded">Yes</button>
                <button className="bg-white text-black px-3 py-1 rounded">No</button>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, children, icon, className }) {
  return (
    <div className={`bg-gradient-to-bl from-[#413345]/95 to-black/95 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-black/40 transition ${className}`}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-white/70">{description}</p>
      {children}
    </div>
  );
}

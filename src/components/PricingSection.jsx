import { FaStar, FaCheckCircle, FaBriefcase, FaCheck, FaHeadphones, FaPlus } from "react-icons/fa";

const plans = [
  {
    name: "HOBBY",
    price: "$0",
    description: "Great for personal use or a first step to explore the Scout platform.",
    features: [
      "100 Interactions (GPT-3.5 Only)",
      "Deploy 1 App",
      "Connect 1 Collection",
      "10GB of Storage",
      "Community Support (Discord)",
    ],
    button: "Sign Up",
    icon: FaCheckCircle,
    highlight: false,
    iconColor: "text-green-400",
  },
  {
    name: "PRO",
    price: "$50",
    description: "Perfect for building and scaling models with limited context.",
    features: [
      "Unlimited Interactions",
      "$0.09 per Interaction",
      "Deploy 10 Apps",
      "Connect 10 Collections",
      "1TB of Storage",
      "Community & Email Support",
    ],
    button: "Sign Up",
    icon: FaStar,
    highlight: true,
    iconColor: "text-purple-400",
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    description: "For large scale models with large and ever-changing context.",
    features: [
      "Unlimited Interactions",
      "Custom Interaction Pricing",
      "Unlimited Apps",
      "Unlimited Collections",
      "Unlimited Storage",
      "Dedicated Support",
    ],
    button: "Request Access",
    icon: FaBriefcase,
    highlight: false,
    iconColor: "text-blue-400",
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 px-4  min-h-screen">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">A plan for every need.</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Whether you are just starting or require massive scale, we have a solution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
          ))}
        </div>

        <div className="bg-[#2d292e] rounded-xl overflow-hidden border border-gray-800 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
            <div className="p-6 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaHeadphones className="text-white w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Dedicated Support</h3>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm">
                Get hands-on help from a dedicated support engineer to scope your models and deploy with confidence.
              </p>

              <div>
                <h4 className="text-xs font-semibold text-gray-500 mb-2 tracking-wider uppercase">
                  What's Included
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    "Shared Slack Channel",
                    "Prompt Engineering Guidance",
                    "Dedicated Support Engineer",
                    "Context Sourcing Guidance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="text-gray-600 mt-1">
                        <FaCheck />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-bl from-[#413345]/95 to-black/95 p-6 flex flex-col justify-center items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <FaPlus className="w-3 h-3" />
                </div>
                <span className="text-xs text-gray-400 font-medium">ADD ON</span>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-white">$750</div>
                <div className="text-xs text-gray-500">monthly</div>
              </div>

              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                Request Access
              </button>

              <p className="text-xs text-gray-500 text-center">
                No long term contract obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ name, price, description, features, button, icon: Icon, highlight, iconColor }) {
  return (
    <div
      className={`relative rounded-lg p-6 space-y-4 transition-all
        ${highlight
          ? "bg-gradient-to-bl from-[#413345]/95 to-gray-950/95 backdrop-blur-3xl"
          : "bg-black rounded-3xl hover:bg-gray-750"}`
      }
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-[#413345]/95 to-gray-950/95 backdrop-blur-3xl text-white text-xs px-4 py-1 rounded-full font-semibold">
          MOST POPULAR
        </div>
      )}

      <div className="flex items-center w-fit px-2 rounded-full bg-[#413345] gap-3">
        <div className={`w-6 h-6 flex items-center  justify-center ${iconColor}`}>
          <Icon />
        </div>
        <h3 className="text-sm font-bold text-white tracking-wider">{name}</h3>
      </div>

      <div className="text-3xl font-bold text-white">{price}</div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      <button
        className={`w-full py-2.5 rounded-full font-medium transition-colors text-sm
          ${highlight
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-gray-900  shadow-2xl text-white hover:bg-gray-700"}`
        }
      >
        {button}
      </button>

      <ul className="space-y-3 pt-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="text-gray-600 mt-1">
              <FaCheck />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

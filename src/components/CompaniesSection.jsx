import {
    FaChartBar,
    FaBolt,
    FaDatabase,
    FaCogs,
    FaCheckCircle,
    FaBuilding,
  } from "react-icons/fa";
  import {
    MdDeveloperMode,
    MdViewModule,
  } from "react-icons/md";
  
  export default function CompaniesSection() {
    const companies = [
      { name: "STATSIG", icon: <FaChartBar className="w-4 h-4 text-gray-400" /> },
      { name: "Deno", icon: <MdDeveloperMode className="w-4 h-4 text-gray-400" /> },
      { name: "Modal", icon: <MdViewModule className="w-4 h-4 text-gray-400" /> },
      { name: "hyper", icon: <FaBolt className="w-4 h-4 text-gray-400" /> },
      { name: "evidence", icon: <FaDatabase className="w-4 h-4 text-gray-400" /> },
      { name: "dagster", icon: <FaCogs className="w-4 h-4 text-gray-400" /> },
      { name: "case status", icon: <FaCheckCircle className="w-4 h-4 text-gray-400" /> },
      { name: "DTG SOUTH", icon: <FaBuilding className="w-4 h-4 text-gray-400" /> },
    ];
  
    return (
      <section className="relative py-24 px-6 overflow-hidden bg-black">
        {/* <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div> */}
  
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-4">
            {companies.slice(0, 4).map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 border border-white/10 bg-black/30 hover:bg-black/40 transition duration-300"
              >
                {company.icon}
                <span className="text-gray-400 font-medium text-sm tracking-wide ml-2">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
  
          <h2 className="text-xl md:text-2xl font-semibold text-white my-10 leading-relaxed">
            Used by teams at Statsig, Deno, Dagster, Evidence and more.
          </h2>
  
          <div className="grid grid-cols-4">
            {companies.slice(4).map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 border border-white/10 bg-black/30 hover:bg-black/40 transition duration-300"
              >
                {company.icon}
                <span className="text-gray-400 font-medium text-sm tracking-wide ml-2">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
export default function Footer() {
    return (
      <footer className=" container mx-auto text-white border-t border-white/10 px-6 py-10">
              {/* <div className="absolute bg-grid inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div> */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
  
          <div className="md:col-span-2 space-y-4">
            <div className="text-xl font-bold">Scout</div>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Features</li>
              <li>Pricing</li>
              <li>Docs</li>
              <li>Blog</li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">Solutions</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Slack Bot</li>
              <li>Discord Bot</li>
              <li>Command</li>
              <li>Onsite Chat</li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
  
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <div>© 2024 Scout. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <ExternalLinkIcon />
            <XIcon />
            <LinkedInIcon />
          </div>
        </div>
      </footer>
    );
  }
  
  function ExternalLinkIcon() {
    return <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">↗</div>;
  }
  function XIcon() {
    return <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">X</div>;
  }
  function LinkedInIcon() {
    return <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">in</div>;
  }
  
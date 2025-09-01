export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 container mx-auto text-white font-sans flex flex-col">

      <header className="h-14 px-6 flex items-center justify-between border-b border-white/10 bg-black/40">
        <div className="text-lg font-bold">Acme</div>
        <div className="text-white/50 text-xl">⋮</div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        <aside className="w-64 bg-black/30 border-r border-white/10 p-6 flex flex-col justify-between">
          <nav className="space-y-3 text-sm">
            <div className="text-white/80 font-semibold">Inbox</div>
            <div>Analytics</div>
            <div>Collections</div>
            <div>Integrations</div>
            <div>Templates</div>
            <div>Settings</div>
          </nav>
          <div>
            <div className="text-xs text-white/60 mt-6">Apps</div>
            <div className="mt-2 space-y-2 text-sm">
              <div className="bg-white/10 px-2 py-1 rounded">Statsbot</div>
              <div>Chief</div>
              <div>Docs</div>
              <div>Accounting</div>
            </div>
          </div>
        </aside>

        <main className="flex-1 grid grid-cols-[2fr_1fr] border-l border-white/10">
          
          <section className="p-6 space-y-6 border-r border-white/10">
            <h2 className="text-lg font-semibold">Statsbot</h2>

            <div className="space-y-4">
              <Input label="User Name" placeholder="T user_name" />
              <Input label="Profile" placeholder="F_profile" />
              <div className="flex gap-4">
                <button className="bg-white text-black px-4 py-2 rounded font-medium">Run</button>
                <button className="bg-white/10 px-4 py-2 rounded border border-white/20 font-medium">Clear & Run</button>
              </div>
            </div>

            <div className="space-y-4">
              <ActionBlock title="Get Context From Website" label="Website" />
              <ActionBlock title="Save" label="Cache" />
              <ActionBlock title="Generate Response" label="GPT-4 turbo" />
            </div>
          </section>

          <aside className="p-6 space-y-6">
            <h3 className="text-lg font-semibold">Generate Response</h3>
            <Input label="Slug" placeholder="output" />
            <Input label="Message" placeholder="Add an optional display message" />
            <Input label="Condition" placeholder="If {{inputs.input}} is True" />
            <Input label="Model" placeholder="GPT-4 turbo" />
            <div className="flex gap-4">
              <Input label="Temperature" type="number" defaultValue={0.7} />
              <Input label="Max Tokens" type="number" defaultValue={400} />
            </div>
            <Input label="Response Type" placeholder="Text" />
            <div>
              <label className="block text-sm mb-1">Prompt</label>
              <textarea className="bg-black/20 border border-white/10 px-3 py-2 rounded w-full h-24" placeholder="Enter prompt..." />
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = "text", defaultValue }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="bg-black/20 border border-white/10 px-3 py-2 rounded w-full"
      />
    </div>
  );
}

function ActionBlock({ title, label }) {
  return (
    <div className="bg-black/20 border border-white/10 p-4 rounded">
      <div className="flex justify-between items-center">
        <div className="font-medium">{title}</div>
        <div className="text-white/50">⮞</div>
      </div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}

import { useState } from "react";
import {
  LayoutDashboard,
  Mail,
  ShieldAlert,
  Globe,
  FileSearch,
  Search,
  Settings,
  Menu,
  X,
} from "lucide-react";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import EmailAnalysis from "./pages/EmailAnalysis";
import Geolocation from "./pages/Geolocation";
import Forensics from "./pages/Forensics";
import Investigations from "./pages/Investigations";
function Dashboard() {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          Security Dashboard
        </h1>

        <p className="mt-1 text-sm text-[#8b98a7]">
          AI-powered email threat detection, geolocation and forensic intelligence.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            EMAILS ANALYZED
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            1,248
          </p>

          <p className="mt-2 text-xs text-[#22c55e]">
            +12.5% this week
          </p>
        </div>

        <div className="rounded-xl border border-[#5a2529] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            THREATS DETECTED
          </p>

          <p className="mt-3 text-3xl font-bold text-[#ef4444]">
            87
          </p>

          <p className="mt-2 text-xs text-[#ef4444]">
            Requires attention
          </p>
        </div>

        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            SUSPICIOUS EMAILS
          </p>

          <p className="mt-3 text-3xl font-bold text-[#f59e0b]">
            143
          </p>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Under investigation
          </p>
        </div>

        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            SECURITY STATUS
          </p>

          <p className="mt-3 text-3xl font-bold text-[#22c55e]">
            ACTIVE
          </p>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Monitoring enabled
          </p>
        </div>

      </div>

      <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820] p-6">

        <h2 className="font-semibold text-white">
          Security Monitoring
        </h2>

        <p className="mt-1 text-sm text-[#8b98a7]">
          E Threat AI is ready to analyze suspicious email activity.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#22c55e]" />

          <span className="text-sm text-[#8b98a7]">
            All monitoring systems operational
          </span>
        </div>

      </div>
    </main>
  );
}


function Placeholder({ title, description }) {
  return (
    <main className="p-8">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-1 text-sm text-[#8b98a7]">
          {description}
        </p>
      </div>

      <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-dashed border-[#26313c] bg-[#111820]">

        <div className="text-center">

          <ShieldAlert
            size={45}
            className="mx-auto mb-4 text-[#4f8cff]"
          />

          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-2 text-sm text-[#8b98a7]">
            Module ready for development.
          </p>

        </div>

      </div>

    </main>
  );
}


function App() {

  const [activePage, setActivePage] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Email Analysis",
      icon: Mail,
    },
    {
      name: "Threat Intelligence",
      icon: ShieldAlert,
    },
    {
      name: "Geolocation",
      icon: Globe,
    },
    {
      name: "Forensics",
      icon: FileSearch,
    },
    {
      name: "Investigations",
      icon: Search,
    },
  ];


  const renderPage = () => {

    switch (activePage) {

      case "Dashboard":
        return <Dashboard />;

      case "Email Analysis":
  return <EmailAnalysis />;

      case "Threat Intelligence":
  return <ThreatIntelligence />;

      case "Geolocation":
  return <Geolocation />;

      case "Forensics":
  return <Forensics />;

      case "Investigations":
  return <Investigations />;

      default:
        return <Dashboard />;

    }
  };


  return (
    <div className="min-h-screen bg-[#080c11] text-white">

      {/* SIDEBAR */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-64
          border-r border-[#26313c]
          bg-[#0b0f14]
          transition-transform
          lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* LOGO */}

        <div className="flex h-16 items-center justify-between border-b border-[#26313c] px-5">

          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-[#17273e] p-2">
              <ShieldAlert
                size={21}
                className="text-[#4f8cff]"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                E THREAT AI
              </p>

              <p className="text-[10px] text-[#596776]">
                EMAIL SECURITY
              </p>
            </div>

          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden"
          >
            <X size={20} />
          </button>

        </div>


        {/* NAVIGATION */}

        <nav className="space-y-1 p-3">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const active = activePage === item.name;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActivePage(item.name);
                  setMobileOpen(false);
                }}
                className={`
                  flex w-full items-center gap-3
                  rounded-lg px-3 py-3
                  text-sm transition
                  ${
                    active
                      ? "bg-[#17273e] text-[#4f8cff]"
                      : "text-[#8b98a7] hover:bg-[#111820] hover:text-white"
                  }
                `}
              >

                <Icon size={18} />

                {item.name}

              </button>
            );

          })}

        </nav>


        {/* SETTINGS */}

        <div className="absolute bottom-0 w-full border-t border-[#26313c] p-3">

          <button
            onClick={() => {
              setActivePage("Settings");
              setMobileOpen(false);
            }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#8b98a7] hover:bg-[#111820] hover:text-white"
          >

            <Settings size={18} />

            Settings

          </button>

        </div>

      </aside>


      {/* MAIN */}

      <div className="lg:ml-64">

        {/* MOBILE TOP BAR */}

        <header className="flex h-16 items-center border-b border-[#26313c] bg-[#0b0f14] px-4 lg:hidden">

          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-[#8b98a7]"
          >
            <Menu size={22} />
          </button>

          <span className="ml-3 font-semibold">
            E THREAT AI
          </span>

        </header>


           {/* TOP RIGHT STATUS BAR */}

        <div className="flex h-16 items-center justify-end gap-3 border-b border-[#26313c] bg-[#0b0f14] px-6">

          {/* ONLINE STATUS */}

          <div className="flex items-center gap-2 rounded-lg border border-[#26313c] bg-[#111820] px-4 py-2">

            <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />

            <span className="text-sm text-[#8b98a7]">
              Online
            </span>

          </div>


          {/* ACCOUNT */}

          <button
            className="flex items-center gap-3 rounded-lg border border-[#26313c] bg-[#111820] px-4 py-2 hover:bg-[#17202a]"
          >

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#17273e] text-xs font-bold text-[#4f8cff]">
              V
            </div>

            <div className="text-left">

              <p className="text-xs font-semibold text-white">
                Vedika
              </p>

              <p className="text-[10px] text-[#596776]">
                Administrator
              </p>

            </div>

          </button>

        </div>


        {/* CURRENT PAGE */}

        {renderPage()}

        {renderPage()}

      </div>

    </div>
  );
}


export default App;

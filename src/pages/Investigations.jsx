import { useState } from "react";
import {
  Search,
  Plus,
  ShieldAlert,
  FileSearch,
  Globe,
  Mail,
  Clock,
  User,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react";

function Investigations() {
  const [showForm, setShowForm] = useState(false);

  const [cases, setCases] = useState([
    {
      id: "INV-2026-001",
      title: "Suspicious Microsoft Security Email",
      severity: "Critical",
      status: "In Progress",
      source: "Email Analysis",
      date: "28 Aug 2026",
    },
    {
      id: "INV-2026-002",
      title: "Malicious IP Investigation",
      severity: "High",
      status: "Open",
      source: "Geolocation",
      date: "27 Aug 2026",
    },
    {
      id: "INV-2026-003",
      title: "Phishing Domain Investigation",
      severity: "Medium",
      status: "Resolved",
      source: "Threat Intelligence",
      date: "25 Aug 2026",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    severity: "Medium",
    description: "",
  });

  const createInvestigation = () => {
    if (!form.title.trim()) return;

    const newCase = {
      id: `INV-2026-${String(cases.length + 1).padStart(3, "0")}`,
      title: form.title,
      severity: form.severity,
      status: "Open",
      source: "Manual Investigation",
      date: "29 Aug 2026",
    };

    setCases([newCase, ...cases]);

    setForm({
      title: "",
      severity: "Medium",
      description: "",
    });

    setShowForm(false);
  };

  return (
    <main className="p-8">

      {/* HEADER */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <h1 className="text-2xl font-bold text-white">
            Investigations
          </h1>

          <p className="mt-1 text-sm text-[#8b98a7]">
            Manage security cases, evidence and investigation activity.
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#4f8cff] px-5 py-3 text-sm font-medium text-white hover:bg-[#3d78e6]"
        >
          <Plus size={17} />
          New Investigation
        </button>

      </div>


      {/* STATISTICS */}
      <div className="mb-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            TOTAL CASES
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {cases.length}
          </p>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Security investigations
          </p>
        </div>


        <div className="rounded-xl border border-[#5a2529] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            CRITICAL
          </p>

          <p className="mt-3 text-3xl font-bold text-[#ef4444]">
            {cases.filter((item) => item.severity === "Critical").length}
          </p>

          <p className="mt-2 text-xs text-[#ef4444]">
            Requires immediate attention
          </p>
        </div>


        <div className="rounded-xl border border-[#4a3920] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            IN PROGRESS
          </p>

          <p className="mt-3 text-3xl font-bold text-[#f59e0b]">
            {cases.filter((item) => item.status === "In Progress").length}
          </p>

          <p className="mt-2 text-xs text-[#f59e0b]">
            Active investigations
          </p>
        </div>


        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">
          <p className="text-xs text-[#596776]">
            RESOLVED
          </p>

          <p className="mt-3 text-3xl font-bold text-[#22c55e]">
            {cases.filter((item) => item.status === "Resolved").length}
          </p>

          <p className="mt-2 text-xs text-[#22c55e]">
            Closed investigations
          </p>
        </div>

      </div>


      {/* SEARCH / FILTER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#596776]"
          />

          <input
            placeholder="Search investigations..."
            className="w-full rounded-lg border border-[#26313c] bg-[#111820] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#596776] focus:border-[#4f8cff]"
          />

        </div>

        <select className="rounded-lg border border-[#26313c] bg-[#111820] px-4 py-3 text-sm text-[#8b98a7] outline-none">
          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <select className="rounded-lg border border-[#26313c] bg-[#111820] px-4 py-3 text-sm text-[#8b98a7] outline-none">
          <option>All Severity</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

      </div>


      {/* CASE LIST */}
      <div className="rounded-xl border border-[#26313c] bg-[#111820]">

        <div className="border-b border-[#26313c] p-5">

          <h2 className="font-semibold text-white">
            Investigation Cases
          </h2>

          <p className="mt-1 text-xs text-[#8b98a7]">
            Security incidents currently tracked by E Threat AI.
          </p>

        </div>


        <div className="divide-y divide-[#26313c]">

          {cases.map((item) => (

            <div
              key={item.id}
              className="p-5 transition hover:bg-[#0d141b]"
            >

              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

                <div className="flex gap-4">

                  <div className="rounded-lg bg-[#17273e] p-3">

                    <FileSearch
                      size={20}
                      className="text-[#4f8cff]"
                    />

                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <span
                        className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                          item.severity === "Critical"
                            ? "bg-[#3a1719] text-[#ef4444]"
                            : item.severity === "High"
                            ? "bg-[#3a1719] text-[#ef4444]"
                            : item.severity === "Medium"
                            ? "bg-[#3a2b16] text-[#f59e0b]"
                            : "bg-[#17273e] text-[#4f8cff]"
                        }`}
                      >
                        {item.severity}
                      </span>

                    </div>

                    <p className="mt-1 text-xs text-[#596776]">
                      {item.id}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#8b98a7]">

                      <span className="flex items-center gap-1">
                        <FileSearch size={13} />
                        {item.source}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {item.date}
                      </span>

                    </div>

                  </div>

                </div>


                <div className="flex items-center gap-3">

                  <span
                    className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs ${
                      item.status === "Resolved"
                        ? "bg-[#14251b] text-[#22c55e]"
                        : item.status === "In Progress"
                        ? "bg-[#3a2b16] text-[#f59e0b]"
                        : "bg-[#17273e] text-[#4f8cff]"
                    }`}
                  >

                    {item.status === "Resolved" ? (
                      <CheckCircle size={13} />
                    ) : (
                      <AlertTriangle size={13} />
                    )}

                    {item.status}

                  </span>

                  <button className="rounded-lg border border-[#26313c] px-4 py-2 text-xs text-[#8b98a7] hover:bg-[#17202a] hover:text-white">
                    View Case
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* NEW INVESTIGATION MODAL */}
      {showForm && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

          <div className="w-full max-w-lg rounded-xl border border-[#26313c] bg-[#111820]">

            <div className="flex items-center justify-between border-b border-[#26313c] p-5">

              <div>

                <h2 className="font-semibold text-white">
                  Create Investigation
                </h2>

                <p className="mt-1 text-xs text-[#8b98a7]">
                  Create a new security investigation case.
                </p>

              </div>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-[#596776] hover:bg-[#17202a] hover:text-white"
              >
                <X size={18} />
              </button>

            </div>


            <div className="space-y-5 p-5">

              <div>

                <label className="mb-2 block text-xs font-medium text-[#8b98a7]">
                  CASE TITLE
                </label>

                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter investigation title"
                  className="w-full rounded-lg border border-[#26313c] bg-[#0b0f14] p-3 text-sm text-white outline-none placeholder:text-[#596776] focus:border-[#4f8cff]"
                />

              </div>


              <div>

                <label className="mb-2 block text-xs font-medium text-[#8b98a7]">
                  SEVERITY
                </label>

                <select
                  value={form.severity}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      severity: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-[#26313c] bg-[#0b0f14] p-3 text-sm text-white outline-none focus:border-[#4f8cff]"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>

              </div>


              <div>

                <label className="mb-2 block text-xs font-medium text-[#8b98a7]">
                  DESCRIPTION
                </label>

                <textarea
                  rows="5"
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe the security incident..."
                  className="w-full resize-none rounded-lg border border-[#26313c] bg-[#0b0f14] p-3 text-sm text-white outline-none placeholder:text-[#596776] focus:border-[#4f8cff]"
                />

              </div>


              <div className="flex justify-end gap-3">

                <button
                  onClick={() => setShowForm(false)}
                  className="rounded-lg border border-[#26313c] px-5 py-2.5 text-sm text-[#8b98a7] hover:bg-[#17202a] hover:text-white"
                >
                  Cancel
                </button>

                <button
                  onClick={createInvestigation}
                  className="flex items-center gap-2 rounded-lg bg-[#4f8cff] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3d78e6]"
                >
                  <Plus size={16} />
                  Create Case
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Investigations;

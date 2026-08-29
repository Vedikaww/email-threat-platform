import {
  Globe,
  MapPin,
  Search,
  ShieldAlert,
  Server,
  Activity,
  ExternalLink,
  Navigation,
} from "lucide-react";

function Geolocation() {
  return (
    <main className="p-8">

      {/* PAGE HEADER */}
      <div className="mb-8">

        <h1 className="text-2xl font-bold text-white">
          Geolocation Intelligence
        </h1>

        <p className="mt-1 text-sm text-[#8b98a7]">
          Identify and investigate the geographic origin of suspicious email activity.
        </p>

      </div>


      {/* SEARCH BAR */}
      <div className="mb-6 rounded-xl border border-[#26313c] bg-[#111820] p-5">

        <div className="flex flex-col gap-3 md:flex-row">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#596776]"
            />

            <input
              type="text"
              placeholder="Enter IP address, domain or hostname..."
              className="w-full rounded-lg border border-[#26313c] bg-[#0b0f14] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#596776] focus:border-[#4f8cff]"
            />

          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3d78e6]">

            <Search size={17} />

            Investigate

          </button>

        </div>

      </div>


      {/* MAIN GRID */}
      <div className="grid gap-6 xl:grid-cols-3">


        {/* MAP */}
        <div className="overflow-hidden rounded-xl border border-[#26313c] bg-[#111820] xl:col-span-2">

          <div className="flex items-center justify-between border-b border-[#26313c] p-5">

            <div>

              <h2 className="font-semibold text-white">
                Threat Origin Map
              </h2>

              <p className="mt-1 text-xs text-[#8b98a7]">
                Geographic distribution of suspicious activity
              </p>

            </div>

            <div className="flex items-center gap-2 text-xs text-[#8b98a7]">

              <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />

              High Risk

            </div>

          </div>


          {/* MAP AREA */}
          <div className="relative h-[500px] overflow-hidden bg-[#0b1117]">

            {/* MAP GRID */}

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#26313c 1px, transparent 1px), linear-gradient(90deg, #26313c 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />


            {/* ABSTRACT CONTINENT SHAPES */}

            <div className="absolute left-[12%] top-[22%] h-32 w-48 rotate-[-8deg] rounded-[45%] bg-[#16232d] opacity-90" />

            <div className="absolute left-[26%] top-[48%] h-40 w-28 rotate-[15deg] rounded-[45%] bg-[#16232d]" />

            <div className="absolute left-[47%] top-[25%] h-28 w-40 rotate-[5deg] rounded-[45%] bg-[#16232d]" />

            <div className="absolute left-[63%] top-[48%] h-36 w-48 rotate-[-12deg] rounded-[45%] bg-[#16232d]" />

            <div className="absolute left-[78%] top-[24%] h-28 w-32 rotate-[10deg] rounded-[45%] bg-[#16232d]" />


            {/* CONNECTION LINES */}

            <div className="absolute left-[22%] top-[34%] h-px w-[52%] rotate-[5deg] bg-[#4f8cff] opacity-40" />

            <div className="absolute left-[31%] top-[55%] h-px w-[38%] rotate-[-10deg] bg-[#ef4444] opacity-40" />


            {/* THREAT MARKER 1 */}

            <div className="absolute left-[23%] top-[31%]">

              <div className="relative">

                <div className="absolute -inset-3 animate-ping rounded-full bg-[#ef4444] opacity-20" />

                <div className="relative rounded-full bg-[#ef4444] p-2 shadow-lg shadow-red-500/30">

                  <MapPin
                    size={18}
                    className="text-white"
                  />

                </div>

              </div>

            </div>


            {/* THREAT MARKER 2 */}

            <div className="absolute left-[57%] top-[43%]">

              <div className="relative">

                <div className="absolute -inset-3 rounded-full bg-[#f59e0b] opacity-20" />

                <div className="relative rounded-full bg-[#f59e0b] p-2">

                  <MapPin
                    size={18}
                    className="text-white"
                  />

                </div>

              </div>

            </div>


            {/* THREAT MARKER 3 */}

            <div className="absolute left-[76%] top-[28%]">

              <div className="relative">

                <div className="absolute -inset-3 rounded-full bg-[#ef4444] opacity-20" />

                <div className="relative rounded-full bg-[#ef4444] p-2">

                  <MapPin
                    size={18}
                    className="text-white"
                  />

                </div>

              </div>

            </div>


            {/* MAP LEGEND */}

            <div className="absolute bottom-5 left-5 rounded-lg border border-[#26313c] bg-[#0b0f14]/90 p-4 backdrop-blur">

              <p className="mb-3 text-xs font-medium text-white">
                MAP LEGEND
              </p>

              <div className="space-y-2 text-xs text-[#8b98a7]">

                <div className="flex items-center gap-2">

                  <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />

                  Critical threat

                </div>

                <div className="flex items-center gap-2">

                  <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />

                  Suspicious activity

                </div>

              </div>

            </div>


            {/* MAP CONTROLS */}

            <div className="absolute right-5 top-5 flex flex-col overflow-hidden rounded-lg border border-[#26313c] bg-[#0b0f14]">

              <button className="border-b border-[#26313c] p-3 text-[#8b98a7] hover:bg-[#17202a] hover:text-white">
                +
              </button>

              <button className="p-3 text-[#8b98a7] hover:bg-[#17202a] hover:text-white">
                −
              </button>

            </div>

          </div>

        </div>


        {/* IP DETAILS */}
        <div className="rounded-xl border border-[#26313c] bg-[#111820]">

          <div className="border-b border-[#26313c] p-5">

            <h2 className="font-semibold text-white">
              Selected Indicator
            </h2>

            <p className="mt-1 text-xs text-[#8b98a7]">
              Suspicious IP intelligence
            </p>

          </div>


          <div className="p-5">

            {/* IP */}
            <div className="mb-5 rounded-lg border border-[#5a2529] bg-[#211417] p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-[#3a1719] p-2">

                  <ShieldAlert
                    size={20}
                    className="text-[#ef4444]"
                  />

                </div>

                <div>

                  <p className="text-xs text-[#8b98a7]">
                    IP ADDRESS
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    185.220.101.42
                  </p>

                </div>

              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-[#ef4444]">

                <Activity size={14} />

                High Risk Indicator

              </div>

            </div>


            {/* DETAILS */}

            <div className="space-y-4">

              <div className="flex items-start gap-3">

                <Globe
                  size={17}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    Country
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Germany
                  </p>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Frankfurt
                  </p>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Server
                  size={17}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    ISP / Network
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Example Hosting GmbH
                  </p>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Navigation
                  size={17}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    Coordinates
                  </p>

                  <p className="mt-1 text-sm text-white">
                    50.1109° N, 8.6821° E
                  </p>

                </div>

              </div>

            </div>


            {/* ACTION */}

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[#26313c] px-4 py-3 text-sm text-[#4f8cff] transition hover:bg-[#17273e]">

              <ExternalLink size={16} />

              Investigate Indicator

            </button>

          </div>

        </div>

      </div>


      {/* RECENT IPs */}

      <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820] p-6">

        <div className="mb-5">

          <h2 className="font-semibold text-white">
            Recent Suspicious Indicators
          </h2>

          <p className="mt-1 text-xs text-[#8b98a7]">
            Recently observed IP addresses associated with suspicious emails
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-[#26313c] text-xs text-[#596776]">

                <th className="pb-3 font-medium">
                  IP ADDRESS
                </th>

                <th className="pb-3 font-medium">
                  LOCATION
                </th>

                <th className="pb-3 font-medium">
                  ISP
                </th>

                <th className="pb-3 font-medium">
                  RISK
                </th>

                <th className="pb-3 font-medium">
                  LAST SEEN
                </th>

              </tr>

            </thead>


            <tbody>

              <tr className="border-b border-[#1d2731]">

                <td className="py-4 text-sm font-medium text-white">
                  185.220.101.42
                </td>

                <td className="py-4 text-sm text-[#8b98a7]">
                  Frankfurt, Germany
                </td>

                <td className="py-4 text-sm text-[#8b98a7]">
                  Example Hosting
                </td>

                <td className="py-4">

                  <span className="rounded-md bg-[#3a1719] px-2 py-1 text-xs text-[#ef4444]">
                    HIGH
                  </span>

                </td>

                <td className="py-4 text-sm text-[#596776]">
                  2 min ago
                </td>

              </tr>


              <tr className="border-b border-[#1d2731]">

                <td className="py-4 text-sm font-medium text-white">
                  103.87.212.19
                </td>

                <td className="py-4 text-sm text-[#8b98a7]">
                  Mumbai, India
                </td>

                <td className="py-4 text-sm text-[#8b98a7]">
                  Example Networks
                </td>

                <td className="py-4">

                  <span className="rounded-md bg-[#3a2b16] px-2 py-1 text-xs text-[#f59e0b]">
                    MEDIUM
                  </span>

                </td>

                <td className="py-4 text-sm text-[#596776]">
                  8 min ago
                </td>

              </tr>


              <tr>

                <td className="py-4 text-sm font-medium text-white">
                  45.142.212.61
                </td>

                <td className="py-4 text-sm text-[#8b98a7]">
                  Amsterdam, Netherlands
                </td>

                <td className="py-4 text-sm text-[#8b98a7]">
                  Example Cloud
                </td>

                <td className="py-4">

                  <span className="rounded-md bg-[#3a1719] px-2 py-1 text-xs text-[#ef4444]">
                    HIGH
                  </span>

                </td>

                <td className="py-4 text-sm text-[#596776]">
                  14 min ago
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>


      {/* INTELLIGENCE SOURCES */}

      <div className="mt-6 grid gap-5 md:grid-cols-3">

        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

          <div className="flex items-center gap-3">

            <Globe
              size={20}
              className="text-[#4f8cff]"
            />

            <p className="text-sm font-medium text-white">
              IP Geolocation
            </p>

          </div>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Geographic location and network information.
          </p>

        </div>


        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

          <div className="flex items-center gap-3">

            <ShieldAlert
              size={20}
              className="text-[#4f8cff]"
            />

            <p className="text-sm font-medium text-white">
              Threat Intelligence
            </p>

          </div>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Reputation and malicious activity indicators.
          </p>

        </div>


        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

          <div className="flex items-center gap-3">

            <Activity
              size={20}
              className="text-[#4f8cff]"
            />

            <p className="text-sm font-medium text-white">
              Activity Correlation
            </p>

          </div>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Correlates indicators across security events.
          </p>

        </div>

      </div>

    </main>
  );
}

export default Geolocation;
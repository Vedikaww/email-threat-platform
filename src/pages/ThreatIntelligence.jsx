import {
  ShieldAlert,
  ShieldCheck,
  Globe,
  Link,
  Server,
  Search,
  Activity,
  AlertTriangle,
  Database,
  ExternalLink,
  Clock,
} from "lucide-react";

function ThreatIntelligence() {
  return (
    <main className="p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          Threat Intelligence
        </h1>

        <p className="mt-1 text-sm text-[#8b98a7]">
          Investigate indicators, reputation data and known threat activity.
        </p>
      </div>


      {/* SEARCH */}
      <div className="mb-6 rounded-xl border border-[#26313c] bg-[#111820] p-5">

        <div className="flex flex-col gap-3 md:flex-row">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#596776]"
            />

            <input
              type="text"
              placeholder="Search IP address, domain, URL or hash..."
              className="w-full rounded-lg border border-[#26313c] bg-[#0b0f14] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#596776] focus:border-[#4f8cff]"
            />

          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-medium text-white hover:bg-[#3d78e6]">

            <Search size={17} />

            Lookup Indicator

          </button>

        </div>

      </div>


      {/* THREAT OVERVIEW */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {/* THREAT SCORE */}
        <div className="rounded-xl border border-[#5a2529] bg-[#111820] p-5">

          <div className="flex items-center justify-between">

            <p className="text-xs text-[#596776]">
              THREAT SCORE
            </p>

            <ShieldAlert
              size={20}
              className="text-[#ef4444]"
            />

          </div>

          <div className="mt-3 flex items-end gap-2">

            <span className="text-3xl font-bold text-[#ef4444]">
              92
            </span>

            <span className="mb-1 text-sm text-[#596776]">
              / 100
            </span>

          </div>

          <p className="mt-2 text-xs text-[#ef4444]">
            Critical risk
          </p>

        </div>


        {/* MALICIOUS INDICATORS */}
        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

          <div className="flex items-center justify-between">

            <p className="text-xs text-[#596776]">
              MALICIOUS IOCs
            </p>

            <AlertTriangle
              size={20}
              className="text-[#f59e0b]"
            />

          </div>

          <p className="mt-3 text-3xl font-bold text-white">
            24
          </p>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Detected indicators

          </p>

        </div>


        {/* ACTIVE THREATS */}
        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

          <div className="flex items-center justify-between">

            <p className="text-xs text-[#596776]">
              ACTIVE THREATS
            </p>

            <Activity
              size={20}
              className="text-[#ef4444]"
            />

          </div>

          <p className="mt-3 text-3xl font-bold text-white">
            8
          </p>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Currently monitored
          </p>

        </div>


        {/* INTELLIGENCE SOURCES */}
        <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

          <div className="flex items-center justify-between">

            <p className="text-xs text-[#596776]">
              INTELLIGENCE SOURCES
            </p>

            <Database
              size={20}
              className="text-[#4f8cff]"
            />

          </div>

          <p className="mt-3 text-3xl font-bold text-white">
            6
          </p>

          <p className="mt-2 text-xs text-[#8b98a7]">
            Connected sources
          </p>

        </div>

      </div>


      {/* SELECTED INDICATOR */}
      <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820]">

        <div className="flex items-center justify-between border-b border-[#26313c] p-5">

          <div>

            <h2 className="font-semibold text-white">
              Selected Indicator
            </h2>

            <p className="mt-1 text-xs text-[#8b98a7]">
              Aggregated threat intelligence
            </p>

          </div>

          <span className="flex items-center gap-2 rounded-md bg-[#3a1719] px-3 py-1.5 text-xs text-[#ef4444]">

            <ShieldAlert size={14} />

            MALICIOUS

          </span>

        </div>


        <div className="grid gap-6 p-6 lg:grid-cols-3">


          {/* INDICATOR */}
          <div className="lg:col-span-1">

            <p className="text-xs text-[#596776]">
              INDICATOR
            </p>

            <div className="mt-3 rounded-lg border border-[#5a2529] bg-[#211417] p-4">

              <div className="flex items-center gap-3">

                <Globe
                  size={20}
                  className="text-[#ef4444]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    IP ADDRESS
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    185.220.101.42
                  </p>

                </div>

              </div>

            </div>

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#26313c] py-3 text-sm text-[#4f8cff] hover:bg-[#17273e]">

              <ExternalLink size={16} />

              Open Investigation

            </button>

          </div>


          {/* REPUTATION */}
          <div>

            <p className="text-xs text-[#596776]">
              REPUTATION
            </p>

            <div className="mt-3 space-y-3">

              <div className="flex items-center justify-between rounded-lg bg-[#0b0f14] p-4">

                <span className="text-sm text-[#8b98a7]">
                  IP Reputation
                </span>

                <span className="text-sm font-medium text-[#ef4444]">
                  Malicious
                </span>

              </div>


              <div className="flex items-center justify-between rounded-lg bg-[#0b0f14] p-4">

                <span className="text-sm text-[#8b98a7]">
                  Abuse Reports
                </span>

                <span className="text-sm font-medium text-white">
                  47
                </span>

              </div>


              <div className="flex items-center justify-between rounded-lg bg-[#0b0f14] p-4">

                <span className="text-sm text-[#8b98a7]">
                  First Seen
                </span>

                <span className="text-sm text-white">
                  12 Aug 2026
                </span>

              </div>

            </div>

          </div>


          {/* LOCATION */}
          <div>

            <p className="text-xs text-[#596776]">
              NETWORK INTELLIGENCE
            </p>

            <div className="mt-3 space-y-3">

              <div className="flex items-center gap-3 rounded-lg bg-[#0b0f14] p-4">

                <Globe
                  size={18}
                  className="text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    LOCATION
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Frankfurt, Germany
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-3 rounded-lg bg-[#0b0f14] p-4">

                <Server
                  size={18}
                  className="text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    NETWORK
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Example Hosting GmbH
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-3 rounded-lg bg-[#0b0f14] p-4">

                <Clock
                  size={18}
                  className="text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    LAST OBSERVED
                  </p>

                  <p className="mt-1 text-sm text-white">
                    2 minutes ago
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* IOC TABLE */}
      <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820]">

        <div className="border-b border-[#26313c] p-5">

          <h2 className="font-semibold text-white">
            Indicators of Compromise
          </h2>

          <p className="mt-1 text-xs text-[#8b98a7]">
            Threat indicators discovered during email analysis
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-[#26313c] text-xs text-[#596776]">

                <th className="px-5 py-4 font-medium">
                  TYPE
                </th>

                <th className="px-5 py-4 font-medium">
                  INDICATOR
                </th>

                <th className="px-5 py-4 font-medium">
                  REPUTATION
                </th>

                <th className="px-5 py-4 font-medium">
                  SOURCE
                </th>

                <th className="px-5 py-4 font-medium">
                  LAST SEEN
                </th>

              </tr>

            </thead>


            <tbody>

              <tr className="border-b border-[#1d2731]">

                <td className="px-5 py-4 text-sm text-[#8b98a7]">
                  IP
                </td>

                <td className="px-5 py-4 text-sm font-medium text-white">
                  185.220.101.42
                </td>

                <td className="px-5 py-4">

                  <span className="rounded-md bg-[#3a1719] px-2 py-1 text-xs text-[#ef4444]">
                    MALICIOUS
                  </span>

                </td>

                <td className="px-5 py-4 text-sm text-[#8b98a7]">
                  Threat Feed
                </td>

                <td className="px-5 py-4 text-sm text-[#596776]">
                  2 min ago
                </td>

              </tr>


              <tr className="border-b border-[#1d2731]">

                <td className="px-5 py-4 text-sm text-[#8b98a7]">
                  DOMAIN
                </td>

                <td className="px-5 py-4 text-sm font-medium text-white">
                  example-mail.com
                </td>

                <td className="px-5 py-4">

                  <span className="rounded-md bg-[#3a1719] px-2 py-1 text-xs text-[#ef4444]">
                    MALICIOUS
                  </span>

                </td>

                <td className="px-5 py-4 text-sm text-[#8b98a7]">
                  Domain Feed
                </td>

                <td className="px-5 py-4 text-sm text-[#596776]">
                  8 min ago
                </td>

              </tr>


              <tr>

                <td className="px-5 py-4 text-sm text-[#8b98a7]">
                  URL
                </td>

                <td className="px-5 py-4 text-sm font-medium text-white">
                  secure-account-verification.example
                </td>

                <td className="px-5 py-4">

                  <span className="rounded-md bg-[#3a2b16] px-2 py-1 text-xs text-[#f59e0b]">
                    SUSPICIOUS
                  </span>

                </td>

                <td className="px-5 py-4 text-sm text-[#8b98a7]">
                  URL Intelligence
                </td>

                <td className="px-5 py-4 text-sm text-[#596776]">
                  14 min ago
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>


      {/* SOURCES */}
      <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820] p-6">

        <div className="mb-5">

          <h2 className="font-semibold text-white">
            Intelligence Sources
          </h2>

          <p className="mt-1 text-xs text-[#8b98a7]">
            Sources contributing to the threat assessment
          </p>

        </div>


        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

            <div className="flex items-center gap-3">

              <Database
                size={19}
                className="text-[#4f8cff]"
              />

              <div>

                <p className="text-sm font-medium text-white">
                  IP Reputation
                </p>

                <p className="mt-1 text-xs text-[#22c55e]">
                  Connected
                </p>

              </div>

            </div>

          </div>


          <div className="rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

            <div className="flex items-center gap-3">

              <Globe
                size={19}
                className="text-[#4f8cff]"
              />

              <div>

                <p className="text-sm font-medium text-white">
                  Geolocation
                </p>

                <p className="mt-1 text-xs text-[#22c55e]">
                  Connected
                </p>

              </div>

            </div>

          </div>


          <div className="rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

            <div className="flex items-center gap-3">

              <Link
                size={19}
                className="text-[#4f8cff]"
              />

              <div>

                <p className="text-sm font-medium text-white">
                  URL Intelligence
                </p>

                <p className="mt-1 text-xs text-[#22c55e]">
                  Connected
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* STATUS */}
      <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#26313c] bg-[#111820] p-5">

        <ShieldCheck
          size={20}
          className="text-[#22c55e]"
        />

        <div>

          <p className="text-sm font-medium text-white">
            Intelligence analysis complete
          </p>

          <p className="text-xs text-[#8b98a7]">
            Indicator data has been correlated across available sources.
          </p>

        </div>

      </div>

    </main>
  );
}

export default ThreatIntelligence;
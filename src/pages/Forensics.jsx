import {
  Search,
  FileSearch,
  Mail,
  User,
  Globe,
  ShieldCheck,
  ShieldAlert,
  Link,
  Clock,
  CheckCircle,
  AlertTriangle,
  Fingerprint,
} from "lucide-react";

function Forensics() {
  return (
    <main className="p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          Forensic Intelligence
        </h1>

        <p className="mt-1 text-sm text-[#8b98a7]">
          Analyze email evidence, headers, indicators and forensic activity.
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
              placeholder="Search email ID, sender, IP address or evidence ID..."
              className="w-full rounded-lg border border-[#26313c] bg-[#0b0f14] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#596776] focus:border-[#4f8cff]"
            />

          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-medium text-white hover:bg-[#3d78e6]">

            <FileSearch size={17} />

            Analyze Evidence

          </button>

        </div>

      </div>


      {/* EVIDENCE HEADER */}
      <div className="mb-6 rounded-xl border border-[#26313c] bg-[#111820]">

        <div className="flex items-center justify-between border-b border-[#26313c] p-5">

          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-[#17273e] p-2">

              <Mail
                size={20}
                className="text-[#4f8cff]"
              />

            </div>

            <div>

              <h2 className="font-semibold text-white">
                Email Evidence
              </h2>

              <p className="text-xs text-[#8b98a7]">
                Evidence ID: EVT-2026-08421
              </p>

            </div>

          </div>


          <span className="flex items-center gap-2 rounded-md bg-[#3a1719] px-3 py-1.5 text-xs text-[#ef4444]">

            <ShieldAlert size={14} />

            HIGH RISK

          </span>

        </div>


        <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-4">

          <div>
            <p className="text-xs text-[#596776]">
              SENDER
            </p>

            <p className="mt-1 text-sm text-white">
              security-alert@example-mail.com
            </p>
          </div>

          <div>
            <p className="text-xs text-[#596776]">
              RECIPIENT
            </p>

            <p className="mt-1 text-sm text-white">
              analyst@company.com
            </p>
          </div>

          <div>
            <p className="text-xs text-[#596776]">
              SUBJECT
            </p>

            <p className="mt-1 text-sm text-white">
              Urgent Account Verification
            </p>
          </div>

          <div>
            <p className="text-xs text-[#596776]">
              RECEIVED
            </p>

            <p className="mt-1 text-sm text-white">
              28 Aug 2026, 21:42
            </p>
          </div>

        </div>

      </div>


      {/* ANALYSIS GRID */}
      <div className="grid gap-6 xl:grid-cols-2">


        {/* HEADER ANALYSIS */}
        <div className="rounded-xl border border-[#26313c] bg-[#111820]">

          <div className="border-b border-[#26313c] p-5">

            <h2 className="font-semibold text-white">
              Header Analysis
            </h2>

            <p className="mt-1 text-xs text-[#8b98a7]">
              Authentication and origin information
            </p>

          </div>


          <div className="space-y-4 p-5">

            {/* ORIGIN IP */}
            <div className="flex items-center justify-between rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

              <div className="flex items-center gap-3">

                <Globe
                  size={18}
                  className="text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    ORIGIN IP
                  </p>

                  <p className="mt-1 text-sm text-white">
                    185.220.101.42
                  </p>

                </div>

              </div>

              <span className="text-xs text-[#ef4444]">
                Suspicious
              </span>

            </div>


            {/* SPF */}
            <div className="flex items-center justify-between rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={18}
                  className="text-[#22c55e]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    SPF
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Sender Policy Framework
                  </p>

                </div>

              </div>

              <span className="flex items-center gap-1 text-xs text-[#22c55e]">
                <CheckCircle size={13} />
                PASS
              </span>

            </div>


            {/* DKIM */}
            <div className="flex items-center justify-between rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

              <div className="flex items-center gap-3">

                <Fingerprint
                  size={18}
                  className="text-[#f59e0b]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    DKIM
                  </p>

                  <p className="mt-1 text-sm text-white">
                    DomainKeys Identified Mail
                  </p>

                </div>

              </div>

              <span className="flex items-center gap-1 text-xs text-[#f59e0b]">
                <AlertTriangle size={13} />
                FAIL
              </span>

            </div>


            {/* DMARC */}
            <div className="flex items-center justify-between rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

              <div className="flex items-center gap-3">

                <ShieldAlert
                  size={18}
                  className="text-[#ef4444]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    DMARC
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Domain-based Authentication
                  </p>

                </div>

              </div>

              <span className="flex items-center gap-1 text-xs text-[#ef4444]">
                <ShieldAlert size={13} />
                FAIL
              </span>

            </div>

          </div>

        </div>


        {/* URL ANALYSIS */}
        <div className="rounded-xl border border-[#26313c] bg-[#111820]">

          <div className="border-b border-[#26313c] p-5">

            <h2 className="font-semibold text-white">
              URL & Domain Analysis
            </h2>

            <p className="mt-1 text-xs text-[#8b98a7]">
              Extracted indicators from the email
            </p>

          </div>


          <div className="p-5">

            <div className="mb-4 rounded-lg border border-[#5a2529] bg-[#211417] p-4">

              <div className="flex items-start gap-3">

                <Link
                  size={18}
                  className="mt-0.5 text-[#ef4444]"
                />

                <div className="min-w-0">

                  <p className="text-xs text-[#596776]">
                    SUSPICIOUS URL
                  </p>

                  <p className="mt-1 break-all text-sm text-white">
                    https://secure-account-verification.example
                  </p>

                </div>

              </div>

            </div>


            <div className="space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-sm text-[#8b98a7]">
                  Domain Reputation
                </span>

                <span className="rounded-md bg-[#3a1719] px-2 py-1 text-xs text-[#ef4444]">
                  MALICIOUS
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-[#8b98a7]">
                  Domain Age
                </span>

                <span className="text-sm text-white">
                  17 days
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-[#8b98a7]">
                  SSL Certificate
                </span>

                <span className="text-sm text-[#f59e0b]">
                  Suspicious
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-[#8b98a7]">
                  Threat Score
                </span>

                <span className="font-semibold text-[#ef4444]">
                  92 / 100
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* TIMELINE */}
      <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820]">

        <div className="border-b border-[#26313c] p-5">

          <h2 className="font-semibold text-white">
            Evidence Timeline
          </h2>

          <p className="mt-1 text-xs text-[#8b98a7]">
            Chronological forensic events
          </p>

        </div>


        <div className="p-6">

          <div className="relative space-y-7">

            {/* EVENT 1 */}
            <div className="flex gap-4">

              <div className="relative">

                <div className="rounded-full bg-[#17273e] p-2">

                  <Mail
                    size={16}
                    className="text-[#4f8cff]"
                  />

                </div>

              </div>

              <div>

                <p className="text-sm font-medium text-white">
                  Email received
                </p>

                <p className="mt-1 text-xs text-[#8b98a7]">
                  Message entered the monitored mailbox.
                </p>

                <p className="mt-1 text-xs text-[#596776]">
                  21:42:08
                </p>

              </div>

            </div>


            {/* EVENT 2 */}
            <div className="flex gap-4">

              <div className="rounded-full bg-[#17273e] p-2">

                <FileSearch
                  size={16}
                  className="text-[#4f8cff]"
                />

              </div>

              <div>

                <p className="text-sm font-medium text-white">
                  Header analysis completed
                </p>

                <p className="mt-1 text-xs text-[#8b98a7]">
                  Authentication records and origin IP extracted.
                </p>

                <p className="mt-1 text-xs text-[#596776]">
                  21:42:11
                </p>

              </div>

            </div>


            {/* EVENT 3 */}
            <div className="flex gap-4">

              <div className="rounded-full bg-[#3a1719] p-2">

                <ShieldAlert
                  size={16}
                  className="text-[#ef4444]"
                />

              </div>

              <div>

                <p className="text-sm font-medium text-white">
                  Threat detected
                </p>

                <p className="mt-1 text-xs text-[#8b98a7]">
                  Suspicious URL and authentication failure detected.
                </p>

                <p className="mt-1 text-xs text-[#596776]">
                  21:42:14
                </p>

              </div>

            </div>


            {/* EVENT 4 */}
            <div className="flex gap-4">

              <div className="rounded-full bg-[#17273e] p-2">

                <User
                  size={16}
                  className="text-[#4f8cff]"
                />

              </div>

              <div>

                <p className="text-sm font-medium text-white">
                  Investigation created
                </p>

                <p className="mt-1 text-xs text-[#8b98a7]">
                  Evidence linked to investigation INV-2026-019.
                </p>

                <p className="mt-1 text-xs text-[#596776]">
                  21:43:02
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* FOOTER STATUS */}
      <div className="mt-6 flex items-center justify-between rounded-xl border border-[#26313c] bg-[#111820] p-5">

        <div className="flex items-center gap-3">

          <CheckCircle
            size={20}
            className="text-[#22c55e]"
          />

          <div>

            <p className="text-sm font-medium text-white">
              Forensic analysis completed
            </p>

            <p className="text-xs text-[#8b98a7]">
              Evidence has been preserved for investigation.
            </p>

          </div>

        </div>

        <span className="text-xs text-[#596776]">
          Evidence integrity verified
        </span>

      </div>

    </main>
  );
}

export default Forensics;
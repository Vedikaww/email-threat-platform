import {
  Mail,
  Upload,
  Search,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Globe,
  Link,
  User,
  Clock,
  Fingerprint,
  CheckCircle,
  XCircle,
  Activity,
} from "lucide-react";

function EmailAnalysis() {
  return (
    <main className="p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          Email Threat Analysis
        </h1>

        <p className="mt-1 text-sm text-[#8b98a7]">
          Analyze suspicious emails and identify potential security threats.
        </p>
      </div>


      {/* INPUT SECTION */}
      <div className="rounded-xl border border-[#26313c] bg-[#111820] p-6">

        <div className="mb-5 flex items-center gap-3">

          <div className="rounded-lg bg-[#17273e] p-2">
            <Mail size={20} className="text-[#4f8cff]" />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Submit Email for Analysis
            </h2>

            <p className="text-xs text-[#8b98a7]">
              Upload an email file or paste its contents below.
            </p>
          </div>

        </div>


        {/* UPLOAD */}
        <div className="mb-5 rounded-lg border border-dashed border-[#344252] bg-[#0b0f14] p-8 text-center">

          <Upload
            size={30}
            className="mx-auto mb-3 text-[#4f8cff]"
          />

          <p className="text-sm font-medium text-white">
            Upload suspicious email
          </p>

          <p className="mt-1 text-xs text-[#596776]">
            Supported formats: .eml, .msg
          </p>

          <button className="mt-4 rounded-lg border border-[#344252] px-5 py-2 text-sm text-[#8b98a7] hover:bg-[#17202a] hover:text-white">
            Choose File
          </button>

        </div>


        {/* EMAIL TEXT */}
        <div>

          <label className="mb-2 block text-xs font-medium text-[#8b98a7]">
            OR PASTE EMAIL CONTENT
          </label>

          <textarea
            rows="7"
            placeholder="Paste email headers and message content here..."
            className="w-full resize-none rounded-lg border border-[#26313c] bg-[#0b0f14] p-4 text-sm text-white outline-none placeholder:text-[#596776] focus:border-[#4f8cff]"
          />

        </div>


        {/* ANALYZE */}
        <div className="mt-5 flex justify-end">

          <button className="flex items-center gap-2 rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-medium text-white hover:bg-[#3d78e6]">

            <Search size={17} />

            Analyze Email

          </button>

        </div>

      </div>


      {/* ANALYSIS RESULT */}
      <div className="mt-6">

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h2 className="font-semibold text-white">
              Analysis Results
            </h2>

            <p className="mt-1 text-xs text-[#8b98a7]">
              AI-powered threat assessment
            </p>
          </div>

          <span className="flex items-center gap-2 rounded-md bg-[#3a1719] px-3 py-1.5 text-xs font-medium text-[#ef4444]">

            <ShieldAlert size={14} />

            THREAT DETECTED

          </span>

        </div>


        {/* TOP CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">


          {/* THREAT SCORE */}
          <div className="rounded-xl border border-[#5a2529] bg-[#111820] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-[#596776]">
                THREAT SCORE
              </p>

              <ShieldAlert
                size={19}
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

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#26313c]">

              <div className="h-full w-[92%] rounded-full bg-[#ef4444]" />

            </div>

          </div>


          {/* CLASSIFICATION */}
          <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-[#596776]">
                CLASSIFICATION
              </p>

              <Activity
                size={19}
                className="text-[#f59e0b]"
              />

            </div>

            <p className="mt-3 text-xl font-bold text-white">
              Phishing
            </p>

            <p className="mt-2 text-xs text-[#8b98a7]">
              Confidence: 96.4%
            </p>

          </div>


          {/* ORIGIN */}
          <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-[#596776]">
                ORIGIN IP
              </p>

              <Globe
                size={19}
                className="text-[#4f8cff]"
              />

            </div>

            <p className="mt-3 text-lg font-bold text-white">
              185.220.101.42
            </p>

            <p className="mt-2 text-xs text-[#8b98a7]">
              Frankfurt, Germany
            </p>

          </div>


          {/* INDICATORS */}
          <div className="rounded-xl border border-[#26313c] bg-[#111820] p-5">

            <div className="flex items-center justify-between">

              <p className="text-xs text-[#596776]">
                INDICATORS
              </p>

              <AlertTriangle
                size={19}
                className="text-[#f59e0b]"
              />

            </div>

            <p className="mt-3 text-2xl font-bold text-white">
              7
            </p>

            <p className="mt-2 text-xs text-[#8b98a7]">
              Suspicious indicators found
            </p>

          </div>

        </div>


        {/* DETAILS */}
        <div className="mt-5 grid gap-6 xl:grid-cols-2">


          {/* SENDER ANALYSIS */}
          <div className="rounded-xl border border-[#26313c] bg-[#111820]">

            <div className="border-b border-[#26313c] p-5">

              <h3 className="font-semibold text-white">
                Sender Analysis
              </h3>

              <p className="mt-1 text-xs text-[#8b98a7]">
                Identity and origin information
              </p>

            </div>


            <div className="space-y-4 p-5">

              <div className="flex items-start gap-3">

                <User
                  size={18}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div className="min-w-0">

                  <p className="text-xs text-[#596776]">
                    DISPLAY NAME
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Microsoft Security Team
                  </p>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div className="min-w-0">

                  <p className="text-xs text-[#596776]">
                    EMAIL ADDRESS
                  </p>

                  <p className="mt-1 break-all text-sm text-white">
                    security-alert@example-mail.com
                  </p>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Globe
                  size={18}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    ORIGIN
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Frankfurt, Germany
                  </p>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Clock
                  size={18}
                  className="mt-0.5 text-[#4f8cff]"
                />

                <div>

                  <p className="text-xs text-[#596776]">
                    RECEIVED
                  </p>

                  <p className="mt-1 text-sm text-white">
                    28 Aug 2026, 21:42:08
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* AUTHENTICATION */}
          <div className="rounded-xl border border-[#26313c] bg-[#111820]">

            <div className="border-b border-[#26313c] p-5">

              <h3 className="font-semibold text-white">
                Email Authentication
              </h3>

              <p className="mt-1 text-xs text-[#8b98a7]">
                SPF, DKIM and DMARC verification
              </p>

            </div>


            <div className="space-y-3 p-5">

              <div className="flex items-center justify-between rounded-lg bg-[#0b0f14] p-4">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={18}
                    className="text-[#22c55e]"
                  />

                  <span className="text-sm text-white">
                    SPF
                  </span>

                </div>

                <span className="flex items-center gap-1 text-xs text-[#22c55e]">
                  <CheckCircle size={13} />
                  PASS
                </span>

              </div>


              <div className="flex items-center justify-between rounded-lg bg-[#0b0f14] p-4">

                <div className="flex items-center gap-3">

                  <Fingerprint
                    size={18}
                    className="text-[#f59e0b]"
                  />

                  <span className="text-sm text-white">
                    DKIM
                  </span>

                </div>

                <span className="flex items-center gap-1 text-xs text-[#f59e0b]">
                  <AlertTriangle size={13} />
                  FAIL
                </span>

              </div>


              <div className="flex items-center justify-between rounded-lg bg-[#0b0f14] p-4">

                <div className="flex items-center gap-3">

                  <ShieldAlert
                    size={18}
                    className="text-[#ef4444]"
                  />

                  <span className="text-sm text-white">
                    DMARC
                  </span>

                </div>

                <span className="flex items-center gap-1 text-xs text-[#ef4444]">
                  <XCircle size={13} />
                  FAIL
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* INDICATORS */}
        <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820]">

          <div className="border-b border-[#26313c] p-5">

            <h3 className="font-semibold text-white">
              Detected Indicators
            </h3>

            <p className="mt-1 text-xs text-[#8b98a7]">
              Suspicious artifacts extracted from the email
            </p>

          </div>


          <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">


            <div className="rounded-lg border border-[#5a2529] bg-[#211417] p-4">

              <div className="flex items-center gap-2">

                <Link
                  size={17}
                  className="text-[#ef4444]"
                />

                <span className="text-xs text-[#596776]">
                  URL
                </span>

              </div>

              <p className="mt-2 break-all text-sm text-white">
                secure-account-verification.example
              </p>

              <p className="mt-2 text-xs text-[#ef4444]">
                Malicious
              </p>

            </div>


            <div className="rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

              <div className="flex items-center gap-2">

                <Globe
                  size={17}
                  className="text-[#4f8cff]"
                />

                <span className="text-xs text-[#596776]">
                  IP ADDRESS
                </span>

              </div>

              <p className="mt-2 text-sm text-white">
                185.220.101.42
              </p>

              <p className="mt-2 text-xs text-[#ef4444]">
                High Risk
              </p>

            </div>


            <div className="rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

              <div className="flex items-center gap-2">

                <Globe
                  size={17}
                  className="text-[#4f8cff]"
                />

                <span className="text-xs text-[#596776]">
                  DOMAIN
                </span>

              </div>

              <p className="mt-2 text-sm text-white">
                example-mail.com
              </p>

              <p className="mt-2 text-xs text-[#f59e0b]">
                Suspicious
              </p>

            </div>


            <div className="rounded-lg border border-[#26313c] bg-[#0b0f14] p-4">

              <div className="flex items-center gap-2">

                <Fingerprint
                  size={17}
                  className="text-[#4f8cff]"
                />

                <span className="text-xs text-[#596776]">
                  FINGERPRINT
                </span>

              </div>

              <p className="mt-2 break-all text-sm text-white">
                9f2a7c84e1d93b
              </p>

              <p className="mt-2 text-xs text-[#8b98a7]">
                Message identifier
              </p>

            </div>

          </div>

        </div>


        {/* AI SUMMARY */}
        <div className="mt-6 rounded-xl border border-[#26313c] bg-[#111820] p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-lg bg-[#17273e] p-3">

              <ShieldAlert
                size={24}
                className="text-[#4f8cff]"
              />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                AI Analysis Summary
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8b98a7]">
                The analyzed email exhibits multiple characteristics
                associated with phishing activity. Authentication failures,
                suspicious domain information, and a high-risk originating
                IP address were detected.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-md bg-[#3a1719] px-3 py-1.5 text-xs text-[#ef4444]">
                  Phishing
                </span>

                <span className="rounded-md bg-[#3a2b16] px-3 py-1.5 text-xs text-[#f59e0b]">
                  Suspicious Domain
                </span>

                <span className="rounded-md bg-[#3a1719] px-3 py-1.5 text-xs text-[#ef4444]">
                  Authentication Failure
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default EmailAnalysis;
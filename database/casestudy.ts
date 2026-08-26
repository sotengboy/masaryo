export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  approach: string;
  duration: string;
  focus: string;
  problem: string;
  goal: string;
  solution: string;
  result: string;
  challenges: string;
  learned: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Service Hub",
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    role: "System Design - Full Stack Development",
    duration: "Project Development",
    focus: "Ticketing System & SLA",
    slug: "service-hub",
    description:
      "A maintenance platform that connects customers, engineers, and management in a single system.",
    problem: `
      <p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
          The business needed a reliable way to manage the
          maintenance history of its devices. Maintenance activities
          were not always recorded consistently, making it difficult
          to understand what had been repaired, replaced, or serviced
          on a specific device.
        </p>

        <p class="mt-4 leading-8 text-slate-600 dark:text-zinc-400">
          This created another operational risk: maintenance teams
          could potentially perform repairs or replace parts without
          sufficient visibility or traceability. The business needed
          to know not only when a device was serviced, but also what
          activity was performed and which parts were involved.
        </p>

        <div class="mt-8 rounded-xl border border-dashed border-slate-300 p-6 dark:border-zinc-700">
          <p class="text-sm font-semibold">
            Core business problem
          </p>

          <p class="mt-3 leading-7 text-slate-600 dark:text-zinc-400">
            How can the business maintain a reliable history of
            device maintenance while preventing unknown or
            unauthorized maintenance and part replacement activities?
          </p>
        </div>`,
    goal: `
    <p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
          The goal was to build a centralized service platform that
          could provide complete visibility into device maintenance
          activities while establishing a controlled workflow for
          technicians and service partners.
        </p>

        <ul class="mt-6 space-y-3 text-slate-600 dark:text-zinc-400">
          <li>
            Maintain a complete maintenance history for every device
          </li>
          <li>
            Record every service and part replacement activity
          </li>
          <li>
            Identify the technician and service partner responsible
          </li>
          <li>
            Prevent undocumented maintenance activities
          </li>
          <li>
            Provide visibility into the current condition of devices
          </li>
          <li>
            Give business owners access to maintenance reports
          </li>
        </ul>`,
    approach: `
    <p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
          I designed the platform around the concept of a device
          service lifecycle. Instead of treating each maintenance
          request as an isolated transaction, every service activity
          becomes part of the device's historical record.
        </p>

        <div class="my-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div class="flex flex-col items-center gap-3 text-center text-sm">

            <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
              Device
            </div>

            <span class="text-slate-400">
              ↓
            </span>

            <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
              Service Request
            </div>

            <span class="text-slate-400">
              ↓
            </span>

            <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
              Technician / Service Partner
            </div>

            <span class="text-slate-400">
              ↓
            </span>

            <div class="flex flex-col gap-3 sm:flex-row">
              <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
                Maintenance Activity
              </div>

              <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
                Part Replacement
              </div>
            </div>

            <span class="text-slate-400">
              ↓
            </span>

            <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
              Maintenance History
            </div>

          </div>
        </div>

        <p class="leading-8 text-slate-600 dark:text-zinc-400">
          This structure allowed the system to connect the current
          service activity with the historical state of each device,
          making maintenance information easier to audit and review.
        </p>
    `,

    solution: `
    <p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
          I implemented a service workflow where maintenance
          activities are connected to service requests and device
          records. Instead of allowing technicians to independently
          modify device information, maintenance changes become part
          of an auditable service process.
        </p>

        <div class="mt-8 rounded-xl border border-dashed border-slate-300 p-6 font-mono text-sm dark:border-zinc-700">

          <p>
            service.request
          </p>

          <div class="mt-4 space-y-2 text-slate-600 dark:text-zinc-400">

            <p>
              <span class="text-slate-900 dark:text-zinc-100">
                device
              </span>{" "}
              → Target device
            </p>

            <p>
              <span class="text-slate-900 dark:text-zinc-100">
                technician
              </span>{" "}
              → Responsible technician
            </p>

            <p>
              <span class="text-slate-900 dark:text-zinc-100">
                maintenance
              </span>{" "}
              → Performed activity
            </p>

            <p>
              <span class="text-slate-900 dark:text-zinc-100">
                parts
              </span>{" "}
              → Replaced components
            </p>

            <p>
              <span class="text-slate-900 dark:text-zinc-100">
                history
              </span>{" "}
              → Permanent service record
            </p>

          </div>
        </div>

        <p class="mt-6 leading-8 text-slate-600 dark:text-zinc-400">
          This created a clear relationship between the device,
          service request, technician, maintenance activity, and
          replaced parts. As a result, changes to a device could be
          traced back to a specific service activity.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">

          <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
            <p class="text-lg font-semibold">
              Before
            </p>

            <p class="mt-3 text-sm leading-6 text-slate-500 dark:text-zinc-400">
              Maintenance information could become fragmented and
              difficult to verify.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
            <p class="text-lg font-semibold">
              After
            </p>

            <p class="mt-3 text-sm leading-6 text-slate-500 dark:text-zinc-400">
              Every maintenance activity is connected to a service
              request and preserved as part of the device history.
            </p>
          </div>

        </div>
    `,
    result: `
    <p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
          The platform gave the business a centralized view of device
          maintenance and created a more traceable workflow for
          service activities. Maintenance history could be reviewed
          without relying on fragmented records or manual tracking.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-3">

          <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
            <p class="text-3xl font-bold">
              1
            </p>

            <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">
              Centralized maintenance history
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
            <p class="text-3xl font-bold">
              100%
            </p>

            <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">
              Traceable service activities
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
            <p class="text-3xl font-bold">
              1
            </p>

            <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">
              Source of maintenance records
            </p>
          </div>

        </div>

        <p class="mt-6 text-sm leading-7 text-slate-500 dark:text-zinc-400">
          The platform also established a stronger foundation for
          reporting, auditing, and monitoring device service history
          as the number of managed devices grows.
        </p>
    `,
    challenges: `
    <div class="mt-8 space-y-8">

          <div>
            <h3 class="text-lg font-semibold">
              Maintaining Device History
            </h3>

            <p class="mt-2 leading-7 text-slate-600 dark:text-zinc-400">
              Each maintenance activity needed to be associated with
              the correct device and preserved as part of its
              historical record. The system needed to avoid losing
              previous maintenance information when the device
              received a new service.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold">
              Tracking Part Replacement
            </h3>

            <p class="mt-2 leading-7 text-slate-600 dark:text-zinc-400">
              Part replacement required more than simply updating the
              current device state. The system needed to retain what
              part was replaced, when it was replaced, and which
              service activity caused the replacement.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold">
              Service Activity Traceability
            </h3>

            <p class="mt-2 leading-7 text-slate-600 dark:text-zinc-400">
              The business needed visibility into who performed each
              maintenance activity. This required connecting service
              requests, technicians, service partners, and device
              records within the same workflow.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold">
              Preventing Unknown Activities
            </h3>

            <p class="mt-2 leading-7 text-slate-600 dark:text-zinc-400">
              A major challenge was ensuring that maintenance and
              replacement activities could be traced back to a valid
              service request instead of appearing as unexplained
              changes to the device.
            </p>
          </div>

        </div>
    `,
    learned: `
    <p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
          This project reinforced the importance of designing
          business systems around traceability rather than simply
          storing the latest state of an entity.
        </p>

        <p class="mt-4 leading-8 text-slate-600 dark:text-zinc-400">
          A device is not only defined by its current condition. Its
          maintenance history, service activities, and replaced parts
          provide important context for understanding how that
          condition was reached.
        </p>

        <p class="mt-4 leading-8 text-slate-600 dark:text-zinc-400">
          Designing the workflow around this principle made the
          platform more useful for both day-to-day operations and
          long-term accountability.
        </p>
    `,
  },
  {
    title: "Whatsapp Chatbot",
    technologies: [
      "Next.js",
      "Firebase",
      "Whatsapp Business API",
      "AI",
      "MongoDB",
    ],
    role: "System Design - Full Stack Development",
    duration: "Project Development",
    focus: "Automation & Conversation Management",
    slug: "whatsapp-chatbot",
    description:
      "A maintenance platform that connects customers, engineers, and management in a single system.",
    problem:
      "The business needed a way to manage WhatsApp conversations from a single platform while automating repetitive customer interactions.",
    goal: "The goal was to build a platform that could:<ul class='list-disc pl-5'><li>receive WhatsApp messages through webhooks</li><li>automatically process incoming conversations</li><li>provide human takeover when necessary</li><li>manage products/customer data</li><li>integrate with existing business workflows</li><ul>",
    approach: `I designed the system around an event-driven workflow. Incoming WhatsApp messages are received through webhooks, processed by the backend, and then routed either to an AI automated response or a human agent.
      <div class="my-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <div class="flex flex-col items-center gap-3 text-center text-sm">
                    <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
                      WhatsApp
                    </div>

                    <span class="text-slate-400">↓</span>

                    <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
                      Webhook
                    </div>

                    <span class="text-slate-400">↓</span>

                    <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
                      Backend
                    </div>

                    <span class="text-slate-400">↓</span>

                    <div class="flex flex-col gap-3 sm:flex-row">
                      <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
                       AI Automation
                      </div>

                      <div class="rounded-lg border border-slate-200 bg-white px-5 py-3 dark:border-zinc-700 dark:bg-zinc-950">
                        Human Agent
                      </div>
                    </div>
                  </div>
                </div>
      `,

    solution: `<p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
                  I introduced a conversation state that determines whether a
                  conversation is currently controlled by AI powered automation or by a
                  human agent.
                </p>

                <div class="mt-6 rounded-xl border border-dashed border-slate-300 p-6 font-mono text-sm dark:border-zinc-700">
                  <p class="dark:text-white">conversation.mode</p>

                  <div class="mt-4 space-y-2 text-slate-600 dark:text-zinc-400">
                    <p>
                      <span class="text-slate-900 dark:text-zinc-100">
                        "AUTO"
                      </span>{" "}
                      → Bot responds
                    </p>

                    <p>
                      <span class="text-slate-900 dark:text-zinc-100">
                        "HUMAN"
                      </span>{" "}
                      → Agent responds
                    </p>
                  </div>
                </div>

                <p class="mt-6 leading-8 text-slate-600 dark:text-zinc-400">
                  This approach kept the automation logic independent from the
                  human support workflow while making the conversation state
                  explicit and easier to manage.
                </p>`,
    result: `
      <p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
                  The resulting platform provided a centralized way to manage
                  WhatsApp conversations while allowing AI automated and human
                  interactions to coexist within the same workflow.
                </p>

                <div class="mt-8 grid gap-4 sm:grid-cols-3">
                  <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
                    <p class="text-3xl font-bold">24/7</p>
                    <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                      AI Automated responses
                    </p>
                  </div>

                  <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
                    <p class="text-3xl font-bold">1</p>
                    <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                      Centralized platform
                    </p>
                  </div>

                  <div class="rounded-xl border border-slate-200 p-5 dark:border-zinc-800">
                    <p class="text-3xl font-bold">∞</p>
                    <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                      Room to scale
                    </p>
                  </div>
                </div>
    `,
    challenges: `
      <div class="mt-8 space-y-8">
    
                  <div>
                    <h3 class="text-lg font-semibold dark:text-white">
                      Message Synchronization
                    </h3>

                    <p class="mt-2 leading-7 text-slate-600 dark:text-zinc-400">
                      Incoming messages could arrive rapidly and needed to be
                      processed without creating duplicate conversations or
                      responses.
                    </p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold dark:text-white">
                      Human Takeover
                    </h3>

                    <p class="mt-2 leading-7 text-slate-600 dark:text-zinc-400">
                      AI Automated responses needed to stop immediately when an
                      agent took control of a conversation.
                    </p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold dark:text-white">
                      Third-Party API Reliability
                    </h3>

                    <p class="mt-2 leading-7 text-slate-600 dark:text-zinc-400">
                      External API failures and webhook retries needed to be
                      handled carefully to prevent duplicated messages and
                      inconsistent conversation states.
                    </p>
                  </div>
                </div>
    `,
    learned: `<p class="mt-5 leading-8 text-slate-600 dark:text-zinc-400">
                  This project reinforced that integrating third-party APIs is
                  not only about making an API call work. Reliability, retries,
                  state management, and failure handling become equally
                  important once a system is used in production.
                </p>`,
  },
];

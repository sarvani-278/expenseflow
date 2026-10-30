
import {
  TrendingDown,
  BarChart3,
  Receipt,
  RefreshCw,
  Download,
  ShieldCheck,
  Database,
  Container,
  Github,
  Linkedin,
  Wallet,
  Code2,
} from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard & Analytics',
    description:
      'View spending summaries, category breakdowns, monthly trends, and budget status.',
  },
  {
    icon: Receipt,
    title: 'Expense Management',
    description:
      'Add, edit, delete, search, filter, and categorize expense records.',
  },
  {
    icon: Wallet,
    title: 'Budget Tracking',
    description:
      'Set category budgets, monitor spending, and identify overspending.',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Expenses',
    description:
      'Manage recurring payment templates and track upcoming expenses.',
  },
  {
    icon: Download,
    title: 'Export Reports',
    description:
      'Export expense records to CSV and PDF for convenient reporting.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication',
    description:
      'Access expense records through a user authentication system.',
  },
];

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'Docker',
  'Docker Compose',
  'Tailwind CSS',
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1117]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-gray-900">
              <TrendingDown className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold">ExpenseFlow</span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="hidden text-sm text-gray-300 transition hover:text-white sm:block"
            >
              Features
            </a>
            <a
              href="#tech-stack"
              className="hidden text-sm text-gray-300 transition hover:text-white sm:block"
            >
              Tech Stack
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden px-5 py-24 text-center sm:py-32"
      >
        <div className="pointer-events-none absolute left-1/4 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <TrendingDown className="h-4 w-4 text-blue-400" />
            Personal Expense Management
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Manage your money.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Understand your spending.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            ExpenseFlow is a full-stack expense tracker that helps you record
            transactions, manage budgets, monitor recurring expenses, and
            understand your spending through interactive analytics.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#features"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
            >
              Explore Features
            </a>
            <a
              href="#run-locally"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Run Locally
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Features
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything in one place
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Organize transactions, monitor budgets, and review your financial
              activity through a single dashboard.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#161b22] p-6 transition hover:border-white/20"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section
        id="tech-stack"
        className="border-y border-white/10 bg-[#12161d] px-5 py-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 flex justify-center">
            <Code2 className="h-8 w-8 text-blue-400" />
          </div>

          <h2 className="text-3xl font-bold">Technology Stack</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Built using modern web technologies for the frontend, backend,
            database, and containerized deployment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-5 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 p-5">
              <Code2 className="mb-3 h-6 w-6 text-blue-400" />
              <h3 className="font-semibold">Frontend</h3>
              <p className="mt-2 text-sm text-gray-400">
                React and TypeScript provide the interactive user interface.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <Database className="mb-3 h-6 w-6 text-green-400" />
              <h3 className="font-semibold">Backend & Database</h3>
              <p className="mt-2 text-sm text-gray-400">
                Node.js, Express.js, and MongoDB handle API requests and
                application data.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-5">
              <Container className="mb-3 h-6 w-6 text-sky-400" />
              <h3 className="font-semibold">Deployment</h3>
              <p className="mt-2 text-sm text-gray-400">
                Docker and Docker Compose run the application services in
                containers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Run Locally */}
      <section id="run-locally" className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Getting Started
            </p>
            <h2 className="text-3xl font-bold">Run ExpenseFlow Locally</h2>
            <p className="mt-4 text-gray-400">
              Follow these steps to start the application using Docker.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#161b22] p-6">
              <h3 className="mb-3 font-semibold">1. Clone the repository</h3>
              <pre className="overflow-x-auto rounded-xl bg-black/30 p-4 text-sm leading-7 text-green-300">
                <code>{`git clone <your-repository-url>\ncd expense-tracker`}</code>
              </pre>
              <p className="mt-3 text-sm text-gray-400">
                Replace the repository URL with your GitHub repository URL
                after you upload your project.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#161b22] p-6">
              <h3 className="mb-3 font-semibold">
                2. Build and start the services
              </h3>
              <pre className="overflow-x-auto rounded-xl bg-black/30 p-4 text-sm leading-7 text-green-300">
                <code>docker compose up --build</code>
              </pre>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#161b22] p-6">
              <h3 className="mb-3 font-semibold">3. Open the application</h3>
              <p className="text-sm leading-6 text-gray-400">
                Once the containers are running, open the frontend in your
                browser.
              </p>
              <a
                href="http://localhost:3000"
                className="mt-3 inline-block font-medium text-blue-400 hover:text-blue-300"
              >
                http://localhost:3000
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#161b22] p-6">
              <h3 className="mb-3 font-semibold">4. Load demo data</h3>
              <pre className="overflow-x-auto rounded-xl bg-black/30 p-4 text-sm leading-7 text-green-300">
                <code>{`docker compose exec server npm run seed`}</code>
              </pre>
              <p className="mt-3 text-sm text-gray-400">
                Run this command from a second terminal after the services have
                started. Avoid reseeding unnecessarily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold">ExpenseFlow</p>
            <p className="mt-1 text-sm text-gray-500">
              Developed by Sarvani Mikkilineni
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/sarvani-701"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarvani's GitHub profile"
              className="text-gray-400 transition hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/sarvani-mikkilineni-b80969340/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarvani's LinkedIn profile"
              className="text-gray-400 transition hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          ExpenseFlow — Expense Tracking and Budget Management
        </p>
      </footer>
    </main>
  );
}

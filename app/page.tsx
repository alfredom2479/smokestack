import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Layers01Icon,
  Layout01Icon,
  Link01Icon,
  Share01Icon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Link01Icon,
    title: "One page, every link",
    description:
      "Drop in URLs, socials, files, and resources. Visitors tap once—no hunting through bios or DMs.",
  },
  {
    icon: Layers01Icon,
    title: "Stacks for any topic",
    description:
      "Run separate pages for your band, side project, reading list, or team onboarding. SmokeStack is not tied to a single “creator” mold.",
  },
  {
    icon: Layout01Icon,
    title: "Built for your use case",
    description:
      "Events, portfolios, documentation hubs, or personal bookmarks—shape the page around what you’re sharing, not the other way around.",
  },
  {
    icon: Share01Icon,
    title: "Share a single URL",
    description:
      "Put one short link in your profile, email signature, or QR code. Updates to your stack stay in sync everywhere.",
  },
] as const;

const useCases = [
  "Creators & artists",
  "Small teams",
  "Communities",
  "Educators",
  "Open source",
  "Pop-up events",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,146,60,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(234,88,12,0.08),transparent)]"
      />

      <header className="relative z-10 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-baseline gap-1.5 font-semibold tracking-tight"
          >
            <span className="text-lg text-white">Smoke</span>
            <span className="text-lg text-amber-500">Stack</span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" size="sm" className="text-zinc-400" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button size="sm" className="bg-amber-500 text-zinc-950 hover:bg-amber-400" asChild>
              <Link href="/signup">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-24">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
              Link pages for any topic—not just one profile
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your links,{" "}
              <span className="bg-gradient-to-r from-amber-200 to-orange-400 bg-clip-text text-transparent">
                stacked
              </span>{" "}
              and shared.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400">
              SmokeStack is a link aggregator like the “link in bio” tools you know—except
              built for every kind of stack: side projects, teams, hobbies, and one-off
              events. Curate URLs on a clean page and send people one memorable link.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="bg-amber-500 px-6 text-base text-zinc-950 hover:bg-amber-400"
                asChild
              >
                <Link href="/signup">Create your stack</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10" asChild>
                <Link href="#how-it-works">How it works</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Free to start · No credit card for early access
            </p>
          </div>

          <div className="mt-16 lg:mt-0">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-600/10 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl shadow-black/50 ring-1 ring-white/5 backdrop-blur-sm">
                <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="size-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 ring-2 ring-white/10" />
                  <div>
                    <p className="font-medium text-white">your-name</p>
                    <p className="text-xs text-zinc-500">smokestack.app/your-name</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Latest release",
                    "Tour dates",
                    "Merch store",
                    "Press kit",
                  ].map((label) => (
                    <li key={label}>
                      <div className="flex cursor-default items-center justify-center rounded-xl border border-white/10 bg-zinc-800/80 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-amber-500/30 hover:bg-zinc-800">
                        {label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-y border-white/5 bg-zinc-900/40 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Like Linktree—without the single-lane box
              </h2>
              <p className="mt-4 text-lg text-zinc-400">
                Spin up focused link pages for whatever you’re promoting. Swap the stack
                when the campaign changes; keep the same short URL or branch into new ones.
              </p>
            </div>
            <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon, title, description }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-white/10 bg-zinc-950/50 p-6 transition-colors hover:border-amber-500/20"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    <HugeiconsIcon icon={icon} className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
              Made for more than influencers
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-zinc-400">
              If you have more than one link worth sharing, you have a use case.
            </p>
            <ul className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
              {useCases.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/5 bg-gradient-to-b from-amber-500/10 to-transparent py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to stack your links?
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Build a page in minutes. Point your audience to one URL—whether it’s for work,
              play, or something in between.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-amber-500 px-8 text-base text-zinc-950 hover:bg-amber-400"
                asChild
              >
                <Link href="/signup">Get started free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} SmokeStack</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

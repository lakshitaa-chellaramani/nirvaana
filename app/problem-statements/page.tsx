'use client';

import Link from 'next/link';
import VintageCard from '@/components/VintageCard';
import RetroHeading from '@/components/RetroHeading';
import {
  CodeIcon,
  BrainIcon,
  PuzzleIcon,
  TrophyIcon,
  GlobeIcon
} from '@/components/TechIcons';

export default function ProblemStatements() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Header Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Dark retro background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-800/90 to-black"></div>
        <div className="absolute inset-0 retro-grid opacity-40"></div>
        <div className="absolute inset-0 tech-dots opacity-30"></div>
        <div className="absolute inset-0 scanlines opacity-60"></div>
        <div className="absolute inset-0 vhs-effect"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <RetroHeading level={1} color="text-yellow-300">
              PROBLEM STATEMENTS
            </RetroHeading>
            <p className="text-lg md:text-xl text-gray-200 mt-4 font-bold">
              Choose Your Track. Build the Future.
            </p>

            {/* Back to Home Button */}
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-vintage-orange border-4 border-vintage-darkBrown text-vintage-darkBrown font-bold text-base md:text-lg retro-text hover:bg-vintage-yellow hover:scale-110 transition-all duration-300"
                style={{
                  boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.3)',
                  textDecoration: 'none'
                }}
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Software Track */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vintage-teal to-vintage-purple"></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-15"></div>
        <div className="absolute inset-0 circuit-board opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <CodeIcon className="w-12 h-12 md:w-16 md:h-16 text-vintage-yellow" />
              <RetroHeading level={2} color="text-vintage-yellow">
                SOFTWARE TRACK
              </RetroHeading>
            </div>

            <VintageCard color="cream" className="text-vintage-darkBrown">
              <h3 className="retro-text text-xl md:text-2xl text-vintage-purple mb-6">
                The Attention Recession
              </h3>

              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Problem:</h4>
                  <p>You watch tutorials, read articles, save posts, bookmark threads, but when you actually need that knowledge, it's gone. Your brain is a leaky bucket in the age of information overload.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">You've experienced this:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Watched a 2-hour tutorial on Sunday, can't remember it by Wednesday</li>
                    <li>Saved 1000+ posts you'll never revisit</li>
                    <li>Had a brilliant insight from a podcast, but can't recall which episode or what exactly was said</li>
                    <li>Spent 40 minutes searching for that one article you read months ago, gave up</li>
                  </ul>
                  <p className="mt-3">Your "saved" folder is a graveyard. Your notes app is digital hoarding. The information you need is trapped somewhere in your digital history—inaccessible when you actually need it.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Challenge:</h4>
                  <p>Build a software system that doesn't just help people consume content, it helps them <strong>actually retain and retrieve knowledge when they need it</strong>, across ALL content types (videos, articles, podcasts, tweets, conversations).</p>
                  <p className="mt-2">Not another note-taking app. Not another bookmark manager. Something that fundamentally changes how humans interact with information in the digital age.</p>
                </div>

                <div className="bg-vintage-orange/20 p-4 rounded-lg border-2 border-vintage-orange">
                  <h4 className="font-bold text-lg text-vintage-purple mb-2">The Twist:</h4>
                  <p>Your system must surface the right knowledge at the right moment WITHOUT the user actively searching for it. It must work across platforms, capture without friction, and genuinely aid retention, not just storage.</p>
                </div>
              </div>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* Blockchain Track */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vintage-brown to-vintage-darkBrown"></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-15"></div>
        <div className="absolute inset-0 vhs-effect"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <PuzzleIcon className="w-12 h-12 md:w-16 md:h-16 text-vintage-orange" />
              <RetroHeading level={2} color="text-vintage-orange">
                BLOCKCHAIN TRACK
              </RetroHeading>
            </div>

            <VintageCard color="yellow" className="text-vintage-darkBrown">
              <h3 className="retro-text text-xl md:text-2xl text-vintage-maroon mb-6">
                The Gold Trust Problem
              </h3>

              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Problem:</h4>
                  <p>Zaveri Bazaar, one of India's oldest gold markets, runs on trust and tradition. But that trust is fragile.</p>
                  <p className="mt-2">You buy gold worth ₹2 lakhs. How do you know:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>The purity is actually what they claim?</li>
                    <li>You're getting fair market pricing?</li>
                    <li>This will have good resale/buyback value?</li>
                    <li>It's not mixed with cheaper metals?</li>
                  </ul>
                  <p className="mt-3">You're relying entirely on the jeweller's word. No way to verify. No standard system. Just trust.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Reality:</h4>
                  <p>And when that trust breaks, through one bad experience, one scam story, one purity doubt, entire businesses lose credibility. Small jewellers suffer. Customers get exploited.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                    <li>Customers have no independent way to verify gold authenticity at purchase</li>
                    <li>Pricing lacks transparency (making charges, wastage charges vary wildly)</li>
                    <li>Buyback policies differ across jewellers with no standards</li>
                    <li>Small jewellers struggle to compete with big brands on trust alone</li>
                    <li>Forgery and adulteration concerns persist despite hallmarking</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Challenge:</h4>
                  <p>Reimagine how technology can bring <strong>trust, traceability, and transparency</strong> to the gold trade, from purchase to resale, without losing the human touch and cultural essence that define places like Zaveri Bazaar.</p>
                </div>

                <div className="bg-vintage-purple/20 p-4 rounded-lg border-2 border-vintage-purple">
                  <h4 className="font-bold text-lg text-vintage-purple mb-2">The Twist:</h4>
                  <p>Your solution must work for BOTH customers seeking assurance AND small jewellers competing on trust. How do you empower both sides? How do you make every gram of gold truly verifiable, fair, and future-ready?</p>
                </div>
              </div>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* AI/ML Track */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vintage-purple to-vintage-pink"></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-15"></div>
        <div className="absolute inset-0 floating-orbs"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <BrainIcon className="w-12 h-12 md:w-16 md:h-16 text-vintage-cream" />
              <RetroHeading level={2} color="text-vintage-cream">
                AI / ML TRACK
              </RetroHeading>
            </div>

            <VintageCard color="cream" className="text-vintage-darkBrown">
              <h3 className="retro-text text-xl md:text-2xl text-vintage-purple mb-6">
                The Enterprise Knowledge Resurrection System
              </h3>

              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Problem:</h4>
                  <p>In the gleaming conference room of TechCorp, Sarah Chen watched her best engineer pack his desk. Mark had been with the company for eight years, eight years of debugging impossible problems, navigating vendor relationships, and knowing exactly which button to press when the legacy payment system threw its cryptic errors.</p>
                  <p className="mt-2">In two weeks, he'd be gone. And with him, thousands of hours of irreplaceable institutional knowledge.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Reality:</h4>
                  <p>This scene repeats across companies 47 million times per year in the US alone, hemorrhaging $31.5 billion in lost productivity and tribal knowledge.</p>
                  <p className="mt-2">New hires stumble in the dark for 6-12 months, reinventing wheels and repeating mistakes that veterans solved years ago. The knowledge exists, scattered across:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Slack threads no one can find</li>
                    <li>Email chains buried in archives</li>
                    <li>Coffee conversations that never got documented</li>
                    <li>Someone's head who just left the company</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Challenge:</h4>
                  <p>Build a system that captures, preserves, and resurrects institutional knowledge, the REAL knowledge about how your company actually works. Not sanitized employee handbooks, but actual protocols, workarounds, war stories, and wisdom.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Vision:</h4>
                  <p>When a new product manager asks, "How do we handle angry enterprise customers who threaten to churn?"</p>
                  <p className="mt-2">Your system doesn't return a generic FAQ. It surfaces:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>The three-year email thread where the sales team negotiated with a Fortune 500 client</li>
                    <li>The Slack conversation where legal approved the compromise language</li>
                    <li>The Zoom transcript where the CEO explained the strategic rationale</li>
                    <li>The exact context and judgment calls that worked</li>
                  </ul>
                </div>

                <div className="bg-vintage-teal/20 p-4 rounded-lg border-2 border-vintage-teal">
                  <h4 className="font-bold text-lg text-vintage-purple mb-2">The Twist:</h4>
                  <p>Your system must extract knowledge from departing employees BEFORE they leave, weaving together a living knowledge graph that surfaces relevant wisdom exactly when and where it's needed—not when someone remembers to search for it.</p>
                  <p className="mt-2 font-bold">This isn't about document management. This is about resurrecting institutional memory.</p>
                </div>
              </div>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* Hardware Track */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vintage-orange to-vintage-wine"></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-15"></div>
        <div className="absolute inset-0 diagonal-lines"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <TrophyIcon className="w-12 h-12 md:w-16 md:h-16 text-vintage-yellow" />
              <RetroHeading level={2} color="text-vintage-yellow">
                HARDWARE TRACK
              </RetroHeading>
            </div>

            <VintageCard color="orange" className="text-vintage-darkBrown">
              <h3 className="retro-text text-xl md:text-2xl text-vintage-purple mb-6">
                Smart Grid Load Management System
              </h3>

              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Problem:</h4>
                  <p>It's 7 PM on a summer evening in Mumbai. Air conditioners roar to life across the city. The power grid strains. Voltage drops in some areas while transformers overheat in others. Within minutes, entire neighborhoods plunge into darkness.</p>
                  <p className="mt-2">This isn't a failure of power generation, there's enough electricity. It's a failure of <strong>distribution intelligence</strong>.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Reality:</h4>
                  <p>Modern power grids face a crisis:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Fluctuating demand (everyone turns on ACs at 7 PM, solar panels go dark at sunset)</li>
                    <li>Growing renewable integration (solar and wind are unpredictable)</li>
                    <li>Uneven load distribution (some feeders overloaded, others underutilized)</li>
                    <li>Static control systems that can't adapt in real-time</li>
                  </ul>
                  <p className="mt-3 font-bold">The result:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Voltage instability</li>
                    <li>Overheating and equipment stress</li>
                    <li>Energy losses reaching 20-30%</li>
                    <li>Cascading blackouts</li>
                  </ul>
                  <p className="mt-3">Traditional systems use manual control, humans watching meters and throwing switches. By the time they react, the damage is done.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Challenge:</h4>
                  <p>Design an <strong>IoT-based Smart Grid Load Management System</strong> that monitors and optimizes power distribution in real-time. Not just collecting data, actively preventing failures before they happen.</p>
                  <p className="mt-3">Your solution must handle:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dynamic load variations (rush hour vs. midnight)</li>
                    <li>Renewable energy unpredictability (clouds blocking solar, wind dying down)</li>
                    <li>Real-time decision-making (milliseconds matter)</li>
                    <li>Scalability (from housing societies to entire cities)</li>
                  </ul>
                </div>

                <div className="bg-vintage-yellow/30 p-4 rounded-lg border-2 border-vintage-maroon">
                  <h4 className="font-bold text-lg text-vintage-purple mb-2">The Twist:</h4>
                  <p>You're not just building a monitoring system. You're building an intelligent distribution brain that predicts, adapts, and optimizes, turning a dumb grid into a smart one.</p>
                </div>
              </div>
            </VintageCard>
          </div>
        </div>
      </section>

      {/* IoT Track */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vintage-maroon to-vintage-darkBrown"></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-15"></div>
        <div className="absolute inset-0 vhs-effect"></div>
        <div className="spotlight-effect"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <GlobeIcon className="w-12 h-12 md:w-16 md:h-16 text-vintage-cream" />
              <RetroHeading level={2} color="text-vintage-cream">
                IoT TRACK
              </RetroHeading>
            </div>

            <VintageCard color="pink" className="text-vintage-darkBrown">
              <h3 className="retro-text text-xl md:text-2xl text-vintage-maroon mb-6">
                Smart City Traffic and Vehicle Monitoring System
              </h3>

              <div className="space-y-4 text-base leading-relaxed">
                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Problem:</h4>
                  <p>It's 8:30 AM on a Monday in Mumbai. You're stuck in traffic on the Western Express Highway. The signal ahead has been red for 3 minutes straight—no cars crossing the empty perpendicular road. Behind you, an ambulance is trapped, siren wailing helplessly.</p>
                  <p className="mt-2">Two kilometers away, a bus breaks down in the middle lane. No one knows until traffic backs up for 20 minutes. The driver didn't see the engine warning that appeared yesterday.</p>
                  <p className="mt-2">At Bandra-Worli Sea Link, a car swerves recklessly at 120 kmph. No camera catches it. No alert is sent. Until there's an accident.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Reality:</h4>
                  <p>Modern cities are choking:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Congestion:</strong> Peak hour traffic wastes 200+ hours per person annually in major Indian cities</li>
                    <li><strong>Accidents:</strong> 1.5 lakh deaths annually in India—many preventable with faster response or early warnings</li>
                    <li><strong>Fleet Inefficiency:</strong> Public buses and logistics vehicles operate blindly—no real-time health monitoring, route optimization, or predictive maintenance</li>
                    <li><strong>Reactive Systems:</strong> Traffic management relies on humans watching CCTV feeds and manually adjusting signals</li>
                  </ul>
                  <p className="mt-3 font-bold">The infrastructure exists. The vehicles exist. But they don't talk to each other.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-vintage-maroon mb-2">The Challenge:</h4>
                  <p>Design an <strong>IoT-based Smart City Traffic and Vehicle Monitoring System</strong> that creates an intelligent mobility ecosystem where roads, vehicles, and control systems communicate in real-time to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Optimize traffic flow dynamically</li>
                    <li>Prevent accidents before they happen</li>
                    <li>Monitor vehicle health continuously</li>
                    <li>Enable smarter fleet operations</li>
                  </ul>
                </div>

                <div className="bg-vintage-orange/30 p-4 rounded-lg border-2 border-vintage-orange">
                  <h4 className="font-bold text-lg text-vintage-purple mb-2">The Twist:</h4>
                  <p>You're not just monitoring traffic—you're building a <strong>nervous system for the city</strong> where every vehicle, signal, and sensor feeds intelligence to prevent chaos, not just react to it.</p>
                </div>
              </div>
            </VintageCard>

            {/* Bottom Register Button */}
            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-vintage-yellow border-4 border-vintage-darkBrown text-vintage-darkBrown font-bold text-lg md:text-xl retro-text hover:bg-vintage-orange hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.3)',
                  textDecoration: 'none'
                }}
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import VintageCard from '@/components/VintageCard';
import RetroHeading from '@/components/RetroHeading';
import CassetteIcon from '@/components/CassetteIcon';
import VinylRecord from '@/components/VinylRecord';
import {
  BrainIcon,
  GlobeIcon,
  TrophyIcon,
  PuzzleIcon,
  MagnifyIcon,
  CodeIcon,
  StereoIcon,
  CameraIcon,
  HeadphoneIcon,
  FilmIcon,
  VHSIcon
} from '@/components/TechIcons';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Retro Tech Background Layers */}
        <div className="absolute inset-0 retro-grid"></div>
        <div className="absolute inset-0 tech-dots opacity-50"></div>
        <div className="absolute inset-0 scanlines"></div>
        <div className="absolute inset-0 vhs-effect"></div>

        {/* Accent glow lines */}
        <div className="absolute top-0 left-1/4 glow-line-vertical hidden md:block" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-0 right-1/4 glow-line-vertical hidden md:block" style={{ animationDelay: '2s' }}></div>

        {/* Floating vintage elements - positioned safely within viewport */}
        <VinylRecord className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-24 md:h-24 opacity-20 hidden sm:block animate-float-slow text-vintage-purple" style={{ animationDelay: '0.5s' }} />
        <CassetteIcon className="absolute top-40 right-4 md:right-20 w-24 h-24 md:w-32 md:h-32 opacity-15 animate-float-slow hidden sm:block text-vintage-teal" style={{ animationDelay: '1s' }} />
        <VinylRecord className="absolute bottom-32 right-8 md:right-32 w-16 h-16 md:w-20 md:h-20 opacity-15 hidden sm:block animate-float-slow text-vintage-orange" style={{ animationDelay: '1.5s' }} />
        <CassetteIcon className="absolute bottom-20 left-8 md:left-32 w-20 h-20 md:w-28 md:h-28 opacity-10 animate-float-slow hidden sm:block text-vintage-pink" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 z-10 max-w-full">
          <div className="text-center">
            {/* Main Vinyl Record - Dramatic entrance */}
            <div className="mb-8 flex justify-center animate-hidden animate-scale-rotate-in">
              <VinylRecord className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl" />
            </div>

            {/* Title - Slides down with glow */}
            <h1 className="retro-text text-4xl md:text-7xl text-vintage-purple mb-4 animate-hidden animate-slide-in-down delay-400" style={{ textShadow: '0 0 30px rgba(123, 44, 191, 0.6)' }}>
              NIRVAANA
            </h1>

            {/* Subtitle - Glowing pulse effect */}
            <div className="retro-text text-xl md:text-3xl text-vintage-orange mb-6 animate-hidden animate-glow-pulse delay-700" style={{
              textShadow: '0 0 20px rgba(255, 140, 66, 0.8), 0 0 40px rgba(255, 140, 66, 0.6), 0 0 60px rgba(255, 140, 66, 0.4)'
            }}>
              BACK TO THE 90s
            </div>

            {/* Presenter text - Pops in */}
            <p className="text-lg md:text-2xl text-vintage-brown font-bold mb-8 max-w-2xl mx-auto animate-hidden animate-pop-in delay-1000">
              DJS IEEE X GDG DJSCE PRESENTS
            </p>

            {/* Event Cards - Slide in from sides with stagger */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <VintageCard color="teal" className="text-center animate-hidden animate-slide-in-left delay-1200 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="retro-text text-sm md:text-base">DAY 1</div>
                <div className="text-xl md:text-2xl font-bold mt-2">IDEATHON</div>
              </VintageCard>

              <VintageCard color="pink" className="text-center animate-hidden animate-slide-in-right delay-1200 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="retro-text text-sm md:text-base">DAY 2</div>
                <div className="text-xl md:text-2xl font-bold mt-2">TheCipher</div>
              </VintageCard>
            </div>

            {/* Scroll indicator - Bounces in last */}
            <div className="animate-hidden animate-bounce-in delay-1500">
              <div className="text-vintage-darkBrown text-3xl animate-bounce inline-block">↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Day 1: Ideathon Section */}
      <section className="py-20 bg-gradient-to-b from-vintage-cream to-vintage-yellow relative overflow-hidden">
        <div className="absolute inset-0 circuit-board opacity-30"></div>
        <div className="absolute inset-0 tech-dots opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <CassetteIcon className="w-24 h-24 md:w-32 md:h-32 text-vintage-teal animate-float drop-shadow-lg" />
            </div>
            <RetroHeading level={1} color="text-vintage-teal">
              DAY 1: IDEATHON
            </RetroHeading>
            <p className="text-lg md:text-xl text-vintage-darkBrown mb-4 font-bold">
              Powered by IEEE x GDG
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Get ready to ignite your imagination and bring your boldest ideas to life!
              Our Ideathon marks the thrilling start of this collaborative tech fest, where innovation meets impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Preliminary Round */}
            <VintageCard color="orange" className="transform hover:scale-105 transition-transform animate-slide-in-up neon-border">
              <div className="mb-4 flex justify-center">
                <BrainIcon className="w-16 h-16 text-vintage-purple" />
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Preliminary Round
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                Submit your PPT presentation showcasing your groundbreaking idea.
                The best <strong>50 teams</strong> will make it to the next stage — where creativity takes center stage!
              </p>
            </VintageCard>

            {/* Round 1: Domain Showdown */}
            <VintageCard color="yellow" className="transform hover:scale-105 transition-transform animate-slide-in-up delay-200 neon-border">
              <div className="mb-4 flex justify-center">
                <GlobeIcon className="w-16 h-16 text-vintage-teal" />
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Round 1: Domain Showdown
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-3">
                The shortlisted teams will be divided across <strong>5 exciting domains</strong>, with 10 teams per domain:
              </p>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>AI/ML</li>
                <li>Software</li>
                <li>Blockchain</li>
                <li>Hardware</li>
                <li>IoT</li>
              </ul>
              <p className="text-sm md:text-base mt-3">
                Each team will present their idea offline before an expert panel.
              </p>
            </VintageCard>

            {/* Round 2: Grand Finale */}
            <VintageCard color="purple" className="transform hover:scale-105 transition-transform animate-slide-in-up delay-400 neon-border">
              <div className="mb-4 flex justify-center">
                <TrophyIcon className="w-16 h-16 text-vintage-yellow" />
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4">
                Round 2: Grand Finale
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                From all domains, the <strong>Top 10 teams</strong> will battle it out in the final round —
                pitching their refined ideas for glory, recognition, and amazing opportunities.
                <strong className="block mt-3">3 Winners</strong> will be crowned!
              </p>
            </VintageCard>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg md:text-xl text-vintage-brown font-bold">
              Step up, think big, and let your ideas shape the future.
            </p>
            <p className="retro-text text-sm md:text-base text-vintage-purple mt-4">
              Are you ready to innovate?
            </p>
          </div>
        </div>
      </section>

      {/* Day 2: TheCipher Section */}
      <section className="py-20 text-vintage-cream relative overflow-hidden">
        {/* Multiple layered backgrounds for rich maroon aesthetic */}
        <div className="absolute inset-0 maroon-gradient-animated"></div>
        <div className="absolute inset-0 radial-burst"></div>
        <div className="absolute inset-0 diagonal-lines"></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-15"></div>
        <div className="absolute inset-0 vhs-effect"></div>

        {/* Moving spotlight effects */}
        <div className="spotlight-effect"></div>
        <div className="spotlight-effect" style={{ animationDelay: '10s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <VinylRecord className="w-24 h-24 md:w-32 md:h-32 animate-float text-vintage-wine" />
            </div>
            <RetroHeading level={1} color="text-vintage-yellow">
              DAY 2: TheCipher
            </RetroHeading>
            <p className="text-lg md:text-xl mb-4 font-bold text-vintage-cream">
              A Vintage Quest for the Brilliant Mind
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Step back in time to the golden age of mystery and intellect — where every clue hides a secret,
              every puzzle a story, and only the sharpest minds prevail.
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              Welcome to <strong>TheCipher</strong>, a thrilling vintage-inspired decoding adventure
              that will challenge your logic, wit, and teamwork through three captivating rounds of brain-twisting brilliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Round 1: Switchboard Puzzle */}
            <VintageCard color="cream" className="transform hover:scale-105 transition-transform animate-slide-in-left neon-border-maroon bg-vintage-cream">
              <div className="mb-4 flex justify-center">
                <PuzzleIcon className="w-16 h-16 text-vintage-wine" />
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Round 1
              </h3>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-vintage-maroon">
                The Switchboard Puzzle
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-vintage-darkBrown">
                The challenge begins with <strong>50 teams of 3</strong>, each attempting to decipher an intricate
                switchboard puzzle straight out of a retro detective&apos;s desk. Crack the code, connect the dots,
                and secure your path to the next mystery.
              </p>
            </VintageCard>

            {/* Round 2: Split Challenge */}
            <VintageCard color="yellow" className="transform hover:scale-105 transition-transform animate-slide-in-up delay-200 neon-border-maroon">
              <div className="mb-4 flex justify-center">
                <MagnifyIcon className="w-16 h-16 text-vintage-wine" />
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Round 2
              </h3>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-vintage-maroon">
                The Split Challenge
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-vintage-darkBrown">
                Only <strong>25 teams</strong> advance — but beware, the plot thickens! Teams will be split apart,
                forcing members to solve a puzzling twist individually yet in sync. Trust, communication, and clarity
                will be your secret weapons in this test of synergy.
              </p>
            </VintageCard>

            {/* Round 3: Final Bid */}
            <VintageCard color="orange" className="transform hover:scale-105 transition-transform animate-slide-in-right delay-400 neon-border-maroon">
              <div className="mb-4 flex justify-center">
                <CodeIcon className="w-16 h-16 text-vintage-wine" />
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Round 3
              </h3>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-vintage-maroon">
                The Final Bid
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-vintage-darkBrown mb-3">
                The ultimate test awaits the <strong>Top 6 teams</strong>. Here, intelligence meets strategy
                as you face coding challenges — but there&apos;s a catch!
              </p>
              <p className="text-sm md:text-base leading-relaxed text-vintage-darkBrown">
                You&apos;ll have to <strong>bid for the questions</strong> you want to attempt. Wager wisely,
                code swiftly, and prove your mettle as the final cipher master!
              </p>
              <p className="text-sm md:text-base mt-3 font-bold text-vintage-purple">
                3 Winners will emerge victorious!
              </p>
            </VintageCard>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg md:text-xl font-bold">
              Dust off your detective hats, polish your logic lenses, and prepare to decode the past to define the future.
            </p>
            <p className="retro-text text-sm md:text-base text-vintage-yellow mt-4">
              Can you break TheCipher before time runs out?
            </p>
          </div>
        </div>
      </section>

      {/* Theme Elements Section */}
      <section className="py-20 bg-vintage-cream relative overflow-hidden">
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <RetroHeading level={2} color="text-vintage-brown">
              THEME ELEMENTS
            </RetroHeading>
            <p className="text-lg md:text-xl text-vintage-darkBrown font-bold">
              Experience the Authentic 90s Vibe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 animate-bounce-in delay-100 group cursor-pointer">
              <div className="mb-3 flex justify-center group-hover:animate-scale-breath">
                <StereoIcon className="w-16 h-16 md:w-20 md:h-20 text-vintage-purple drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">Stereos</p>
            </div>
            <div className="text-center p-4 animate-bounce-in delay-200 group cursor-pointer">
              <div className="mb-3 flex justify-center">
                <CassetteIcon className="w-16 h-16 md:w-20 md:h-20 text-vintage-orange animate-float-3d drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">Cassettes</p>
            </div>
            <div className="text-center p-4 animate-bounce-in delay-300 group cursor-pointer">
              <div className="mb-3 flex justify-center">
                <VinylRecord className="w-16 h-16 md:w-20 md:h-20 text-vintage-brown animate-rotate-glow drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">Vinyl Records</p>
            </div>
            <div className="text-center p-4 animate-bounce-in delay-400 group cursor-pointer">
              <div className="mb-3 flex justify-center group-hover:animate-float-3d">
                <CameraIcon className="w-16 h-16 md:w-20 md:h-20 text-vintage-teal drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">Kodak Cameras</p>
            </div>
            <div className="text-center p-4 animate-bounce-in delay-500 group cursor-pointer">
              <div className="mb-3 flex justify-center group-hover:animate-scale-breath">
                <HeadphoneIcon className="w-16 h-16 md:w-20 md:h-20 text-vintage-pink drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">Walkmans</p>
            </div>
            <div className="text-center p-4 animate-bounce-in delay-600 group cursor-pointer">
              <div className="mb-3 flex justify-center">
                <HeadphoneIcon className="w-16 h-16 md:w-20 md:h-20 text-vintage-purple animate-float-3d drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">Headphones</p>
            </div>
            <div className="text-center p-4 animate-bounce-in delay-700 group cursor-pointer">
              <div className="mb-3 flex justify-center group-hover:animate-rotate-glow">
                <FilmIcon className="w-16 h-16 md:w-20 md:h-20 text-vintage-yellow drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">Film Rolls</p>
            </div>
            <div className="text-center p-4 animate-bounce-in delay-800 group cursor-pointer">
              <div className="mb-3 flex justify-center group-hover:animate-scale-breath">
                <VHSIcon className="w-16 h-16 md:w-20 md:h-20 text-vintage-brown drop-shadow-lg" />
              </div>
              <p className="text-sm md:text-base font-bold">VHS Tapes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vintage-darkBrown text-vintage-cream py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <RetroHeading level={2} color="text-vintage-orange">
              NIRVAANA
            </RetroHeading>

            <div className="flex flex-wrap justify-center gap-8 my-8">
              <div>
                <h4 className="font-bold text-lg mb-2 text-vintage-yellow">Presented By</h4>
                <p className="text-sm md:text-base">DJS IEEE</p>
                <p className="text-sm md:text-base">GDG DJSCE</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2 text-vintage-yellow">Event Theme</h4>
                <p className="text-sm md:text-base">Back to the 90s</p>
                <p className="text-sm md:text-base">Retro Tech Fest</p>
              </div>
            </div>

            <div className="border-t border-vintage-brown pt-6 mt-6">
              <p className="text-sm opacity-80">
                © 2025 NIRVAANA - DJS IEEE X GDG DJSCE. All rights reserved.
              </p>
              <p className="text-xs mt-2 opacity-60 retro-text">
                Powered by vintage vibes and modern innovation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

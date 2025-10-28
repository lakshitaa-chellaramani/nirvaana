'use client';

import VintageCard from '@/components/VintageCard';
import RetroHeading from '@/components/RetroHeading';
import CassetteIcon from '@/components/CassetteIcon';
import VinylRecord from '@/components/VinylRecord';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
        <div className="absolute inset-0 cassette-pattern opacity-10"></div>

        {/* Floating vintage elements */}
        <VinylRecord className="absolute top-20 left-10 w-24 h-24 opacity-30 hidden md:block" />
        <CassetteIcon className="absolute top-40 right-20 w-32 h-32 opacity-20 animate-float hidden md:block" />
        <VinylRecord className="absolute bottom-32 right-32 w-20 h-20 opacity-25 hidden md:block" />
        <CassetteIcon className="absolute bottom-20 left-32 w-28 h-28 opacity-15 animate-float hidden md:block" />

        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <VinylRecord className="w-32 h-32 md:w-48 md:h-48" />
            </div>

            <h1 className="retro-text text-4xl md:text-7xl text-vintage-purple mb-4 animate-blink">
              NIRVAANA
            </h1>

            <div className="retro-text text-xl md:text-3xl text-vintage-orange mb-6 neon-glow">
              BACK TO THE 90s
            </div>

            <p className="text-lg md:text-2xl text-vintage-brown font-bold mb-8 max-w-2xl mx-auto">
              DJS IEEE X GDG DJSCE PRESENTS
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <VintageCard color="teal" className="text-center">
                <div className="retro-text text-sm md:text-base">DAY 1</div>
                <div className="text-xl md:text-2xl font-bold mt-2">IDEATHON</div>
              </VintageCard>

              <VintageCard color="pink" className="text-center">
                <div className="retro-text text-sm md:text-base">DAY 2</div>
                <div className="text-xl md:text-2xl font-bold mt-2">TheCipher</div>
              </VintageCard>
            </div>

            <div className="animate-bounce">
              <div className="text-vintage-darkBrown text-2xl">↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Day 1: Ideathon Section */}
      <section className="py-20 bg-gradient-to-b from-vintage-cream to-vintage-yellow relative">
        <div className="absolute inset-0 opacity-5">
          <CassetteIcon className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <CassetteIcon className="w-24 h-24 md:w-32 md:h-32 text-vintage-teal animate-float" />
            </div>
            <RetroHeading level={1} color="text-vintage-teal">
              DAY 1: IDEATHON
            </RetroHeading>
            <p className="text-lg md:text-xl text-vintage-darkBrown mb-4">
              Powered by IEEE x GDG
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Get ready to ignite your imagination and bring your boldest ideas to life! ⚡
              Our Ideathon marks the thrilling start of this collaborative tech fest, where innovation meets impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Preliminary Round */}
            <VintageCard color="orange" className="transform hover:scale-105 transition-transform">
              <div className="mb-4">
                <span className="retro-text text-lg md:text-xl text-vintage-purple">🧠</span>
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
            <VintageCard color="yellow" className="transform hover:scale-105 transition-transform">
              <div className="mb-4">
                <span className="retro-text text-lg md:text-xl text-vintage-purple">🌍</span>
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
            <VintageCard color="purple" className="transform hover:scale-105 transition-transform">
              <div className="mb-4">
                <span className="retro-text text-lg md:text-xl text-vintage-yellow">🏆</span>
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
              Step up, think big, and let your ideas shape the future. 🚀
            </p>
            <p className="retro-text text-sm md:text-base text-vintage-purple mt-4">
              Are you ready to innovate?
            </p>
          </div>
        </div>
      </section>

      {/* Day 2: TheCipher Section */}
      <section className="py-20 bg-gradient-to-b from-vintage-purple to-vintage-pink text-white relative">
        <div className="absolute inset-0 opacity-5">
          <VinylRecord className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <VinylRecord className="w-24 h-24 md:w-32 md:h-32 animate-float" />
            </div>
            <RetroHeading level={1} color="text-vintage-yellow">
              DAY 2: TheCipher
            </RetroHeading>
            <p className="text-lg md:text-xl mb-4 font-bold">
              A Vintage Quest for the Brilliant Mind
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Step back in time to the golden age of mystery and intellect — where every clue hides a secret,
              every puzzle a story, and only the sharpest minds prevail. 🕵️‍♀️✨
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              Welcome to <strong>TheCipher</strong>, a thrilling vintage-inspired decoding adventure
              that will challenge your logic, wit, and teamwork through three captivating rounds of brain-twisting brilliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Round 1: Switchboard Puzzle */}
            <VintageCard color="yellow" className="transform hover:scale-105 transition-transform">
              <div className="mb-4">
                <span className="retro-text text-lg md:text-xl text-vintage-purple">🧩</span>
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Round 1
              </h3>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-vintage-brown">
                The Switchboard Puzzle
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-vintage-darkBrown">
                The challenge begins with <strong>50 teams of 3</strong>, each attempting to decipher an intricate
                switchboard puzzle straight out of a retro detective&apos;s desk. Crack the code, connect the dots,
                and secure your path to the next mystery.
              </p>
            </VintageCard>

            {/* Round 2: Split Challenge */}
            <VintageCard color="orange" className="transform hover:scale-105 transition-transform">
              <div className="mb-4">
                <span className="retro-text text-lg md:text-xl text-vintage-purple">🔍</span>
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Round 2
              </h3>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-vintage-brown">
                The Split Challenge
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-vintage-darkBrown">
                Only <strong>25 teams</strong> advance — but beware, the plot thickens! Teams will be split apart,
                forcing members to solve a puzzling twist individually yet in sync. Trust, communication, and clarity
                will be your secret weapons in this test of synergy.
              </p>
            </VintageCard>

            {/* Round 3: Final Bid */}
            <VintageCard color="teal" className="transform hover:scale-105 transition-transform">
              <div className="mb-4">
                <span className="retro-text text-lg md:text-xl text-vintage-purple">💻</span>
              </div>
              <h3 className="retro-text text-base md:text-lg mb-4 text-vintage-darkBrown">
                Round 3
              </h3>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-vintage-brown">
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
              Dust off your detective hats, polish your logic lenses, and prepare to decode the past to define the future. 🕰️
            </p>
            <p className="retro-text text-sm md:text-base text-vintage-yellow mt-4">
              Can you break TheCipher before time runs out? ⏳
            </p>
          </div>
        </div>
      </section>

      {/* Theme Elements Section */}
      <section className="py-20 bg-vintage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <RetroHeading level={2} color="text-vintage-brown">
              THEME ELEMENTS
            </RetroHeading>
            <p className="text-lg md:text-xl text-vintage-darkBrown">
              Experience the Authentic 90s Vibe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-4xl md:text-6xl mb-3">📻</div>
              <p className="text-sm md:text-base font-bold">Stereos</p>
            </div>
            <div className="text-center p-4">
              <div className="mb-3">
                <CassetteIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto text-vintage-brown" />
              </div>
              <p className="text-sm md:text-base font-bold">Cassettes</p>
            </div>
            <div className="text-center p-4">
              <div className="mb-3">
                <VinylRecord className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
              </div>
              <p className="text-sm md:text-base font-bold">Vinyl Records</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl md:text-6xl mb-3">📷</div>
              <p className="text-sm md:text-base font-bold">Kodak Cameras</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl md:text-6xl mb-3">🎧</div>
              <p className="text-sm md:text-base font-bold">Walkmans</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl md:text-6xl mb-3">🎵</div>
              <p className="text-sm md:text-base font-bold">Headphones</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl md:text-6xl mb-3">🎞️</div>
              <p className="text-sm md:text-base font-bold">Film Rolls</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl md:text-6xl mb-3">📼</div>
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

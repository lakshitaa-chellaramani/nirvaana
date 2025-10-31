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

        {/* Floating vintage elements - positioned safely within viewport */}
        {/* Top row */}
        <VinylRecord className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-24 md:h-24 opacity-15 hidden sm:block animate-float-slow text-vintage-purple" style={{ animationDelay: '0.5s' }} />
        <CameraIcon className="absolute top-16 left-1/4 w-16 h-16 md:w-20 md:h-20 opacity-10 hidden lg:block animate-float-slow text-vintage-orange" style={{ animationDelay: '1.2s' }} />
        <StereoIcon className="absolute top-24 right-1/4 w-20 h-20 md:w-24 md:h-24 opacity-12 hidden lg:block animate-float-slow text-vintage-teal" style={{ animationDelay: '2.5s' }} />
        <CassetteIcon className="absolute top-40 right-4 md:right-20 w-24 h-24 md:w-32 md:h-32 opacity-12 animate-float-slow hidden sm:block text-vintage-teal" style={{ animationDelay: '1s' }} />

        {/* Middle row */}
        <HeadphoneIcon className="absolute top-1/3 left-8 w-14 h-14 md:w-18 md:h-18 opacity-8 hidden md:block animate-float-slow text-vintage-pink" style={{ animationDelay: '3s' }} />
        <FilmIcon className="absolute top-1/3 right-8 w-14 h-14 md:w-18 md:h-18 opacity-8 hidden md:block animate-float-slow text-vintage-yellow" style={{ animationDelay: '3.5s' }} />

        {/* Bottom row */}
        <VHSIcon className="absolute bottom-40 left-12 md:left-24 w-18 h-18 md:w-22 md:h-22 opacity-10 hidden md:block animate-float-slow text-vintage-brown" style={{ animationDelay: '4s' }} />
        <VinylRecord className="absolute bottom-32 right-8 md:right-32 w-16 h-16 md:w-20 md:h-20 opacity-12 hidden sm:block animate-float-slow text-vintage-orange" style={{ animationDelay: '1.5s' }} />
        <CassetteIcon className="absolute bottom-20 left-8 md:left-32 w-20 h-20 md:w-28 md:h-28 opacity-10 animate-float-slow hidden sm:block text-vintage-pink" style={{ animationDelay: '2s' }} />
        <CameraIcon className="absolute bottom-16 right-1/4 w-16 h-16 md:w-20 md:h-20 opacity-8 hidden lg:block animate-float-slow text-vintage-purple" style={{ animationDelay: '4.5s' }} />

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

            {/* Register Button */}
            <div className="animate-hidden animate-bounce-in delay-1500 mb-8">
              <a
                href="https://unstop.com/o/7RXoQZB?lb=duhGhN7m&utm_medium=Share&utm_source=gdgdjs39093&utm_campaign=Competitions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-vintage-orange border-4 border-vintage-darkBrown text-vintage-darkBrown font-bold text-lg md:text-xl retro-text hover:bg-vintage-yellow hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.3)',
                  textDecoration: 'none'
                }}
              >
                REGISTER HERE
              </a>
            </div>

            {/* Scroll indicator - Bounces in last */}
            <div className="animate-hidden animate-bounce-in delay-1500">
              <div className="text-vintage-darkBrown text-3xl animate-bounce inline-block">↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Day 1: Ideathon Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Stunning animated background layers */}
        <div className="absolute inset-0 teal-gradient-animated"></div>
        <div className="absolute inset-0 orange-waves"></div>
        <div className="absolute inset-0 floating-orbs"></div>
        <div className="absolute inset-0 circuit-board opacity-20"></div>
        <div className="absolute inset-0 tech-dots opacity-15"></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <CassetteIcon className="w-24 h-24 md:w-32 md:h-32 text-vintage-purple animate-icon-wobble drop-shadow-2xl" />
            </div>
            <RetroHeading level={1} color="text-vintage-purple">
              DAY 1: IDEATHON
            </RetroHeading>

            {/* Event Date and Prize Pool */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className="border-2 border-vintage-orange rounded-lg px-6 py-2 bg-black/20 text-vintage-orange font-bold text-base md:text-lg">
                6th November
              </div>
              <div className="border-2 border-vintage-teal rounded-lg px-6 py-2 bg-black/20 text-vintage-teal font-bold text-base md:text-lg">
                Prize Pool: ₹14,000
              </div>
            </div>

            <p className="text-lg md:text-xl text-vintage-darkBrown mb-4 font-bold">
              Powered by IEEE x GDG
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-vintage-darkBrown">
              Get ready to ignite your imagination and bring your boldest ideas to life!
              Our Ideathon marks the thrilling start of this collaborative tech fest, where innovation meets impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Preliminary Round */}
            <VintageCard color="orange" className="animate-slide-in-up trace-border text-vintage-purple">
              <div className="mb-4 flex justify-center">
                <BrainIcon className="w-16 h-16 text-vintage-purple animate-icon-dance-1" />
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
            <VintageCard color="yellow" className="animate-slide-in-up delay-200 trace-border text-vintage-teal">
              <div className="mb-4 flex justify-center">
                <GlobeIcon className="w-16 h-16 text-vintage-teal animate-icon-spin" />
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
            <VintageCard color="purple" className="animate-slide-in-up delay-400 trace-border text-vintage-orange">
              <div className="mb-4 flex justify-center">
                <TrophyIcon className="w-16 h-16 text-vintage-yellow animate-icon-dance-2" />
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
            <p className="text-xl md:text-2xl text-vintage-purple mt-4 font-bold" style={{ textShadow: 'none' }}>
              Are you ready to innovate?
            </p>

            {/* Register Button for Ideathon */}
            <div className="mt-8">
              <a
                href="https://unstop.com/o/7RXoQZB?lb=duhGhN7m&utm_medium=Share&utm_source=gdgdjs39093&utm_campaign=Competitions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-vintage-teal border-4 border-vintage-purple text-vintage-cream font-bold text-lg md:text-xl retro-text hover:bg-vintage-purple hover:text-vintage-teal hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.3)',
                  textDecoration: 'none'
                }}
              >
                REGISTER NOW
              </a>
            </div>
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
              <VinylRecord className="w-24 h-24 md:w-32 md:h-32 animate-icon-spin text-vintage-wine drop-shadow-2xl" />
            </div>
            <RetroHeading level={1} color="text-vintage-yellow">
              DAY 2: TheCipher
            </RetroHeading>

            {/* Event Date and Prize Pool */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className="border-2 border-vintage-wine rounded-lg px-6 py-2 bg-black/20 text-vintage-wine font-bold text-base md:text-lg">
                7th November
              </div>
              <div className="border-2 border-vintage-yellow rounded-lg px-6 py-2 bg-black/20 text-vintage-yellow font-bold text-base md:text-lg">
                Prize Pool: ₹9,500
              </div>
            </div>

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
            <VintageCard color="cream" className="animate-slide-in-left trace-border text-vintage-maroon bg-vintage-cream">
              <div className="mb-4 flex justify-center">
                <PuzzleIcon className="w-16 h-16 text-vintage-wine animate-icon-wobble" />
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
            <VintageCard color="yellow" className="animate-slide-in-up delay-200 trace-border text-vintage-wine">
              <div className="mb-4 flex justify-center">
                <MagnifyIcon className="w-16 h-16 text-vintage-wine animate-icon-dance-1" />
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
            <VintageCard color="orange" className="animate-slide-in-right delay-400 trace-border text-vintage-yellow">
              <div className="mb-4 flex justify-center">
                <CodeIcon className="w-16 h-16 text-vintage-wine animate-icon-dance-2" />
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

            {/* Register Button for TheCipher */}
            <div className="mt-8">
              <a
                href="https://unstop.com/o/7RXoQZB?lb=duhGhN7m&utm_medium=Share&utm_source=gdgdjs39093&utm_campaign=Competitions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-vintage-wine border-4 border-vintage-yellow text-vintage-cream font-bold text-lg md:text-xl retro-text hover:bg-vintage-yellow hover:text-vintage-maroon hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.3)',
                  textDecoration: 'none'
                }}
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Elements Section */}
      <section className="py-20 bg-gradient-to-b from-vintage-darkBrown to-vintage-brown text-vintage-cream relative overflow-hidden">
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="absolute inset-0 tech-dots opacity-5"></div>
        <div className="absolute inset-0 vhs-effect"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <RetroHeading level={2} color="text-vintage-yellow">
              VINTAGE TECH AESTHETIC
            </RetroHeading>
            <p className="text-lg md:text-xl text-vintage-cream font-bold mt-4">
              Immerse yourself in the golden era of analog technology
            </p>
            <p className="text-base md:text-lg text-vintage-cream/80 mt-2 max-w-3xl mx-auto">
              Step back into the 1990s with authentic retro equipment, classic designs, and nostalgic vibes
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main showcase - Horizontal list */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border-2 border-vintage-orange p-6 bg-black/30 backdrop-blur-sm animate-fade-in hover:border-vintage-yellow transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <VinylRecord className="w-16 h-16 text-vintage-orange animate-rotate-glow" />
                  <div>
                    <h3 className="text-xl font-bold text-vintage-yellow retro-text">VINYL</h3>
                    <p className="text-sm text-vintage-cream/80">Classic Records</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-vintage-teal p-6 bg-black/30 backdrop-blur-sm animate-fade-in delay-100 hover:border-vintage-yellow transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <CassetteIcon className="w-16 h-16 text-vintage-teal animate-float-3d" />
                  <div>
                    <h3 className="text-xl font-bold text-vintage-yellow retro-text">CASSETTES</h3>
                    <p className="text-sm text-vintage-cream/80">Mixtape Era</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-vintage-purple p-6 bg-black/30 backdrop-blur-sm animate-fade-in delay-200 hover:border-vintage-yellow transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <VHSIcon className="w-16 h-16 text-vintage-purple animate-icon-wobble" />
                  <div>
                    <h3 className="text-xl font-bold text-vintage-yellow retro-text">VHS</h3>
                    <p className="text-sm text-vintage-cream/80">Video Tapes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary items - Compact list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-vintage-orange/50 p-4 bg-black/20 backdrop-blur-sm text-center animate-fade-in delay-300 hover:border-vintage-orange transition-colors duration-300">
                <CameraIcon className="w-12 h-12 mx-auto mb-2 text-vintage-orange" />
                <p className="text-sm font-bold text-vintage-cream">Kodak Cameras</p>
              </div>

              <div className="border border-vintage-teal/50 p-4 bg-black/20 backdrop-blur-sm text-center animate-fade-in delay-400 hover:border-vintage-teal transition-colors duration-300">
                <StereoIcon className="w-12 h-12 mx-auto mb-2 text-vintage-teal" />
                <p className="text-sm font-bold text-vintage-cream">Boomboxes</p>
              </div>

              <div className="border border-vintage-pink/50 p-4 bg-black/20 backdrop-blur-sm text-center animate-fade-in delay-500 hover:border-vintage-pink transition-colors duration-300">
                <HeadphoneIcon className="w-12 h-12 mx-auto mb-2 text-vintage-pink" />
                <p className="text-sm font-bold text-vintage-cream">Walkmans</p>
              </div>

              <div className="border border-vintage-yellow/50 p-4 bg-black/20 backdrop-blur-sm text-center animate-fade-in delay-600 hover:border-vintage-yellow transition-colors duration-300">
                <FilmIcon className="w-12 h-12 mx-auto mb-2 text-vintage-yellow" />
                <p className="text-sm font-bold text-vintage-cream">Film Rolls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-vintage-cream text-vintage-darkBrown relative overflow-hidden">
        <div className="absolute inset-0 retro-grid opacity-5"></div>
        <div className="absolute inset-0 tech-dots opacity-10"></div>
        <div className="absolute inset-0 scanlines opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <RetroHeading level={2} color="text-vintage-purple">
              FREQUENTLY ASKED QUESTIONS
            </RetroHeading>
            <p className="text-lg md:text-xl text-vintage-brown font-bold mt-4">
              Got questions? We've got answers!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Ideathon FAQs */}
            <div className="mb-12">
              <h3 className="retro-text text-xl md:text-2xl text-vintage-teal mb-8 text-center border-b-4 border-vintage-teal pb-4">
                DAY 1: IDEATHON
              </h3>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <VintageCard color="orange" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-purple mb-3">
                    Q: What is the team size for the Ideathon?
                  </h4>
                  <p className="text-base leading-relaxed">
                    Teams can consist of <strong>2-4 members</strong>. You can register as an individual and we'll help you find teammates, or come with your pre-formed team.
                  </p>
                </VintageCard>

                {/* FAQ 2 */}
                <VintageCard color="yellow" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-purple mb-3">
                    Q: What should we submit in the Preliminary Round?
                  </h4>
                  <p className="text-base leading-relaxed">
                    Submit a <strong>PowerPoint presentation (PPT)</strong> that clearly explains your idea, its innovation, feasibility, and potential impact. The best 50 teams will be shortlisted for Round 1.
                  </p>
                </VintageCard>

                {/* FAQ 3 */}
                <VintageCard color="purple" className="trace-border text-vintage-cream">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-yellow mb-3">
                    Q: Which domains are available for Round 1?
                  </h4>
                  <p className="text-base leading-relaxed">
                    The 50 shortlisted teams will be divided across <strong>5 domains</strong>: AI/ML, Software, Blockchain, Hardware, and IoT. Each domain will have 10 teams competing.
                  </p>
                </VintageCard>

                {/* FAQ 4 */}
                <VintageCard color="teal" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-purple mb-3">
                    Q: How will teams be evaluated?
                  </h4>
                  <p className="text-base leading-relaxed">
                    Teams will be evaluated on <strong>innovation, feasibility, impact, and presentation quality</strong>. Expert judges will assess your idea based on creativity, technical soundness, and real-world application potential.
                  </p>
                </VintageCard>

                {/* FAQ 5 */}
                <VintageCard color="pink" className="trace-border text-vintage-darkBrown">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-purple mb-3">
                    Q: Will there be mentorship or guidance during the event?
                  </h4>
                  <p className="text-base leading-relaxed">
                    Yes! Industry experts and mentors will be available during the offline rounds to provide guidance, answer questions, and help refine your ideas.
                  </p>
                </VintageCard>

                {/* FAQ 6 */}
                <VintageCard color="orange" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-purple mb-3">
                    Q: How many teams make it to the Grand Finale?
                  </h4>
                  <p className="text-base leading-relaxed">
                    From all 5 domains, the <strong>Top 10 teams</strong> will advance to Round 2 (Grand Finale), where they'll compete for the top 3 positions.
                  </p>
                </VintageCard>

                {/* FAQ 7 */}
                <VintageCard color="yellow" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-purple mb-3">
                    Q: Is there a registration fee?
                  </h4>
                  <p className="text-base leading-relaxed">
                    Please check the official registration page for the latest information on fees and registration details.
                  </p>
                </VintageCard>

                {/* FAQ 8 */}
                <VintageCard color="purple" className="trace-border text-vintage-cream">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-yellow mb-3">
                    Q: What is the prize pool for the Ideathon?
                  </h4>
                  <p className="text-base leading-relaxed">
                    The total prize pool for Day 1 Ideathon is <strong>₹14,000</strong>, which will be distributed among the top 3 winning teams!
                  </p>
                </VintageCard>
              </div>
            </div>

            {/* TheCipher FAQs */}
            <div className="mb-12">
              <h3 className="retro-text text-xl md:text-2xl text-vintage-wine mb-8 text-center border-b-4 border-vintage-wine pb-4">
                DAY 2: TheCipher
              </h3>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <VintageCard color="cream" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-maroon mb-3">
                    Q: What is the team composition for TheCipher?
                  </h4>
                  <p className="text-base leading-relaxed text-vintage-darkBrown">
                    Each team must have <strong>exactly 3 members</strong>. Up to 50 teams will participate in Round 1, with only the sharpest minds advancing through each round.
                  </p>
                </VintageCard>

                {/* FAQ 2 */}
                <VintageCard color="yellow" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-maroon mb-3">
                    Q: Are programming skills required for TheCipher?
                  </h4>
                  <p className="text-base leading-relaxed">
                    Programming skills are <strong>required for Round 3</strong> (The Final Bid), where you'll face coding challenges. However, Rounds 1 and 2 focus on logic, puzzles, and problem-solving skills.
                  </p>
                </VintageCard>

                {/* FAQ 3 */}
                <VintageCard color="orange" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-maroon mb-3">
                    Q: Will internet access be provided during the event?
                  </h4>
                  <p className="text-base leading-relaxed">
                    Internet access rules will be specified for each round. Round 3 may have specific guidelines regarding internet usage during coding challenges.
                  </p>
                </VintageCard>

                {/* FAQ 4 */}
                <VintageCard color="teal" className="trace-border">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-maroon mb-3">
                    Q: How does the bidding system work in Round 3?
                  </h4>
                  <p className="text-base leading-relaxed">
                    In the Final Bid, teams will <strong>bid for coding questions</strong> they want to attempt. Strategic bidding is crucial - choose questions wisely based on your team's strengths and the points at stake!
                  </p>
                </VintageCard>

                {/* FAQ 5 */}
                <VintageCard color="pink" className="trace-border text-vintage-darkBrown">
                  <h4 className="font-bold text-lg md:text-xl text-vintage-maroon mb-3">
                    Q: What is the prize pool for TheCipher?
                  </h4>
                  <p className="text-base leading-relaxed">
                    The total prize pool for Day 2 TheCipher is <strong>₹9,500</strong>, which will be awarded to the top 3 teams who successfully decode all challenges!
                  </p>
                </VintageCard>
              </div>
            </div>

            {/* Contact/More Info */}
            <div className="text-center mt-16">
              <VintageCard color="purple" className="text-vintage-cream">
                <h4 className="retro-text text-lg md:text-xl text-vintage-yellow mb-4">
                  Still have questions?
                </h4>
                <p className="text-base mb-6">
                  For more information, please check the official registration page or contact the organizing team.
                </p>
                <a
                  href="https://unstop.com/o/7RXoQZB?lb=duhGhN7m&utm_medium=Share&utm_source=gdgdjs39093&utm_campaign=Competitions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-vintage-yellow border-4 border-vintage-cream text-vintage-purple font-bold text-base md:text-lg retro-text hover:bg-vintage-cream hover:text-vintage-purple hover:scale-110 transition-all duration-300"
                  style={{
                    boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.3)',
                    textDecoration: 'none'
                  }}
                >
                  VISIT REGISTRATION PAGE
                </a>
              </VintageCard>
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

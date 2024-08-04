import HeroAvatar from '@/components/assets/hero-avatar'

const HeroSection = () => {
  return (
    <main id="main" className="flex justify-center">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-10 lg:px-10">
        <div className="relative -z-10">
          <div className="absolute inset-3 animate-pulse rounded-full bg-verdant-blue blur-3xl" />
          <HeroAvatar className="relative" />
        </div>
        <section className="flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-black tracking-wider text-verdant-fg">
            Heya! I&apos;m{' '}
            <span className="text-verdant-blue transition duration-200 hover:scale-105">
              Ambareesh
            </span>
            !
          </h1>
          <div className="text-base leading-relaxed text-verdant-fg-dark">
            A <span className="text-verdant-orange">Full Stack Developer</span>{' '}
            from Kerala, India. I am passionate about crafting web applications
            and proficient in various programming languages, including{' '}
            <span className="text-verdant-blue transition-all duration-200 hover:scale-105">
              JavaScript
            </span>
            , <span className="text-verdant-red">TypeScript</span>,{' '}
            <span className="text-verdant-purple">Python</span>. Moreover, I am
            well-versed in a range of web development frameworks and tools, such
            as <span className="text-verdant-orange">React.js</span>,{' '}
            <span className="text-verdant-blue">Next.js</span> etc.
            Additionally, my expertise extends to database management systems
            like <span className="text-verdant-green">MongoDB</span> and{' '}
            <span className="text-verdant-purple">MySQL</span>. With a dedicated
            focus on delivering high-quality solutions, I am excited about
            contributing to the ever-evolving field of{' '}
            <span className="text-verdant-green">web</span> development.
          </div>
        </section>
      </div>
    </main>
  )
}

export default HeroSection

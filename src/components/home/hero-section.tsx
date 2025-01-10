import HeroAvatar from '@/components/assets/hero-avatar'

const HeroSection = () => {
  return (
    <main id="main" className="flex justify-center">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-10 lg:px-10">
        <div
        // className="relative -z-20"
        >
          {/* <div className="absolute inset-8 hidden animate-pulse bg-verdant-blue blur-3xl dark:block" /> */}
          <HeroAvatar
          // className="relative"
          />
        </div>
        <section className="flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-black tracking-wider text-verdant-bg dark:text-verdant-fg">
            Heya! I&apos;m{' '}
            <span className="text-verdant-blue selection:text-verdant-red">
              Ambareesh
            </span>
            !
          </h1>
          <div className="text-base leading-relaxed text-verdant-bg dark:text-verdant-fg-dark">
            A versatile{' '}
            <span className="text-verdant-orange">Full Stack Developer</span>{' '}
            from Kerala, India, specializing in building and deploying scalable
            web applications. With expertise in{' '}
            <span className="text-verdant-green transition-all duration-200 hover:scale-105">
              JavaScript
            </span>
            , <span className="text-verdant-red">TypeScript</span>,{' '}
            <span className="text-verdant-green">Python</span>, and modern
            frameworks like <span className="text-verdant-blue">React.js</span>{' '}
            and <span className="text-verdant-orange">Next.js</span>, I deliver
            efficient and user-friendly solutions. My experience includes
            managing databases such as{' '}
            <span className="text-verdant-green">MongoDB</span> and{' '}
            <span className="text-verdant-purple">MySQL</span>, and deploying
            applications using modern cloud solutions like{' '}
            <span className="text-verdant-red">AWS</span> and containerization
            tools like <span className="text-verdant-blue">Docker</span>. I am
            dedicated to developing high-quality software and excel in dynamic,
            collaborative environments.
          </div>
        </section>
      </div>
    </main>
  )
}

export default HeroSection

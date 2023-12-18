'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, RecursivePartial, IOptions } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'
import ParticlesConfig from './config/particles-config'

const options = ParticlesConfig as RecursivePartial<IOptions>

const ParticlesBg = () => {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container) => {}

  if (init) {
    return <Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} />
  }

  return <></>
}

export default ParticlesBg

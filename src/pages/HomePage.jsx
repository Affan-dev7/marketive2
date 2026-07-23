import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Proof from '../components/Proof'
import Pricing from '../components/Pricing'
import FinalCta from '../components/FinalCta'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <Process />
      <Services />
      <Portfolio />
      <Proof />
      <Pricing />
      <FinalCta />
    </>
  )
}

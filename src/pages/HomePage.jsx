import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
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
      <Portfolio />
      <Services />
      <FinalCta />
    </>
  )
}

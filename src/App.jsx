import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

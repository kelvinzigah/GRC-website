import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { ServiceTimes } from './components/sections/ServiceTimes'
import { Values } from './components/sections/Values'
import { Outreach } from './components/sections/Outreach'
import { Events } from './components/sections/Events'
import { Media } from './components/sections/Media'
import { Gallery } from './components/sections/Gallery'
import { Connect } from './components/sections/Connect'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceTimes />
        <Values />
        <Outreach />
        <Events />
        <Media />
        <Gallery />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

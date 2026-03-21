import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { ServiceTimes } from '../components/sections/ServiceTimes';
import { Values } from '../components/sections/Values';
import { Outreach } from '../components/sections/Outreach';
import { Events } from '../components/sections/Events';
import { Media } from '../components/sections/Media';
import { Gallery } from '../components/sections/Gallery';
import { Connect } from '../components/sections/Connect';
import { Contact } from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
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
    </>
  );
}

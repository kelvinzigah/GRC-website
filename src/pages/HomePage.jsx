import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { ServiceTimes } from '../components/sections/ServiceTimes';
import { Values } from '../components/sections/Values';
import { PhotoReel } from '../components/sections/PhotoReel';
import { Outreach } from '../components/sections/Outreach';
import { Events } from '../components/sections/Events';
import { FeaturedEpisode } from '../components/sections/FeaturedEpisode';
import { Gallery } from '../components/sections/Gallery';
import { JoinTeam } from '../components/sections/JoinTeam';
import { Connect } from '../components/sections/Connect';
import { Contact } from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServiceTimes />
      <Values />
      <PhotoReel />
      <Outreach />
      <Events />
      <FeaturedEpisode />
      <Gallery />
      <JoinTeam />
      <Connect />
      <Contact />
    </>
  );
}

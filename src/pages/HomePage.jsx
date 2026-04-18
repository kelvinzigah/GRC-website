import { Hero } from '../components/sections/Hero';
import { InfoBar } from '../components/sections/InfoBar';
import { Values } from '../components/sections/Values';
import { PhotoReel } from '../components/sections/PhotoReel';
import { Outreach } from '../components/sections/Outreach';
import { Events } from '../components/sections/Events';
import { FeaturedEpisode } from '../components/sections/FeaturedEpisode';
import { Contact } from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBar />
      <Values />
      <PhotoReel />
      <Outreach />
      <Events />
      <FeaturedEpisode />
      <Contact />
    </>
  );
}

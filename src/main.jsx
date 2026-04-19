import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { RootLayout } from './components/layout/RootLayout';
import HomePage from './pages/HomePage';

// Inner pages: lazy-loaded to keep homepage bundle fast
const OurStoryPage = lazy(() => import('./pages/about/OurStoryPage'));
const VisionValuesPage = lazy(() => import('./pages/about/VisionValuesPage'));
const MeetTheTeamPage = lazy(() => import('./pages/about/MeetTheTeamPage'));
const MinistriesPage = lazy(() => import('./pages/ministries/MinistriesPage'));
const MinistryDetailPage = lazy(() => import('./pages/ministries/MinistryDetailPage'));
const MissionsPage = lazy(() => import('./pages/ministries/MissionsPage'));
const FoodDrivePage = lazy(() => import('./pages/ministries/FoodDrivePage'));
const StreetEvangelismPage = lazy(() => import('./pages/ministries/StreetEvangelismPage'));
const EventsPage = lazy(() => import('./pages/events/EventsPage'));
const MediaPage = lazy(() => import('./pages/media/MediaPage'));
const SermonsPage = lazy(() => import('./pages/media/SermonsPage'));
const PodcastPage = lazy(() => import('./pages/media/PodcastPage'));
const ServePage = lazy(() => import('./pages/serve/ServePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-cream" />}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about/our-story" element={<OurStoryPage />} />
              <Route path="about/vision-values" element={<VisionValuesPage />} />
              <Route path="about/meet-the-team" element={<MeetTheTeamPage />} />
              <Route path="ministries" element={<MinistriesPage />} />
              <Route path="ministries/missions" element={<MissionsPage />} />
              <Route path="ministries/food-drive" element={<FoodDrivePage />} />
              <Route path="ministries/street-evangelism" element={<StreetEvangelismPage />} />
              <Route path="ministries/:slug" element={<MinistryDetailPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="media/sermons" element={<SermonsPage />} />
              <Route path="media/podcast" element={<PodcastPage />} />
              <Route path="serve" element={<ServePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
);

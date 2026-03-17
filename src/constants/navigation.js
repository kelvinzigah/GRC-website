export const NAV_LINKS_LEFT = [
  {
    key: 'about',
    labelKey: 'nav.about',
    href: '#about',
    dropdown: [
      { key: 'our-story', labelKey: 'nav.ourStory', href: '#about' },
      { key: 'vision-values', labelKey: 'nav.visionValues', href: '#values' },
      { key: 'meet-team', labelKey: 'nav.meetTeam', href: '#about' },
    ],
  },
  {
    key: 'ministries',
    labelKey: 'nav.ministries',
    href: '#values',
    dropdown: [
      { key: 'bible-study', labelKey: 'nav.bibleStudy', href: '#services' },
      { key: 'evangelism', labelKey: 'nav.evangelism', href: '#outreach' },
      { key: 'community-outreach', labelKey: 'nav.communityOutreach', href: '#outreach' },
      { key: 'youth', labelKey: 'nav.youth', href: '#events' },
    ],
  },
  { key: 'events', labelKey: 'nav.events', href: '#events' },
  {
    key: 'media',
    labelKey: 'nav.media',
    href: '#media',
    dropdown: [
      { key: 'sermons', labelKey: 'nav.sermons', href: '#media' },
      { key: 'podcast', labelKey: 'nav.podcast', href: '#media' },
    ],
  },
];

export const NAV_LINKS_RIGHT = [
  { key: 'give', labelKey: 'nav.give', href: '#connect' },
  { key: 'visit', labelKey: 'nav.visitUs', href: '#services' },
];

export const SECTION_IDS = [
  'hero',
  'about',
  'services',
  'values',
  'outreach',
  'events',
  'media',
  'gallery',
  'connect',
  'contact',
];

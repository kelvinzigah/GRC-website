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
    href: '#ministries',
    dropdown: [
      { key: 'food-drive', labelKey: 'nav.foodDrive', href: '#ministries' },
      { key: 'street-evangelism', labelKey: 'nav.streetEvangelism', href: '#ministries' },
      { key: 'small-groups', labelKey: 'nav.smallGroups', href: '#ministries' },
      { key: 'discipleship-mentorship', labelKey: 'nav.discipleshipMentorship', href: '#ministries' },
      { key: 'youth-mentorship', labelKey: 'nav.youthMentorship', href: '#ministries' },
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
  'ministries',
  'events',
  'media',
  'gallery',
  'connect',
  'contact',
];

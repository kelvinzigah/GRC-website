export const NAV_LINKS_LEFT = [
  {
    key: 'about',
    labelKey: 'nav.about',
    href: '#about',
    type: 'hash',
    routePrefix: '/about',
    dropdown: [
      { key: 'our-story', labelKey: 'nav.ourStory', href: '/about/our-story', type: 'route' },
      { key: 'vision-values', labelKey: 'nav.visionValues', href: '/about/vision-values', type: 'route' },
      { key: 'meet-team', labelKey: 'nav.meetTeam', href: '/about/meet-the-team', type: 'route' },
    ],
  },
  {
    key: 'ministries',
    labelKey: 'nav.ministries',
    href: '#ministries',
    type: 'hash',
    routePrefix: '/ministries',
    dropdown: [
      { key: 'food-drive', labelKey: 'nav.foodDrive', href: '/ministries/food-drive', type: 'route' },
      { key: 'street-evangelism', labelKey: 'nav.streetEvangelism', href: '/ministries/street-evangelism', type: 'route' },
      { key: 'small-groups', labelKey: 'nav.smallGroups', href: '/ministries/small-groups', type: 'route' },
      { key: 'discipleship-mentorship', labelKey: 'nav.discipleshipMentorship', href: '/ministries/discipleship-mentorship', type: 'route' },
      { key: 'youth-mentorship', labelKey: 'nav.youthMentorship', href: '/ministries/youth-mentorship', type: 'route' },
      { key: 'missions', labelKey: 'nav.missions', href: '/ministries/missions', type: 'route' },
    ],
  },
  { key: 'events', labelKey: 'nav.events', href: '/events', type: 'route' },
  {
    key: 'media',
    labelKey: 'nav.media',
    href: '#media',
    type: 'hash',
    routePrefix: '/media',
    dropdown: [
      { key: 'sermons', labelKey: 'nav.sermons', href: '/media/sermons', type: 'route' },
      { key: 'podcast', labelKey: 'nav.podcast', href: '/media/podcast', type: 'route' },
    ],
  },
];

export const NAV_LINKS_RIGHT = [
  { key: 'give', labelKey: 'nav.give', href: '/#contact', type: 'hash' },
  { key: 'visit', labelKey: 'nav.visitUs', href: '/#contact', type: 'hash' },
];

export const SECTION_IDS = [
  'hero',
  'about',
  'our-story',
  'services',
  'values',
  'ministries',
  'events',
  'media',
  'gallery',
  'connect',
  'contact',
];

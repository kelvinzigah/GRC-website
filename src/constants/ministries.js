export const MINISTRY_DATA = [
  {
    slug: 'food-drive',
    i18nKey: 'ministries.foodDrive',
    image: '/images/homeless_outreach_1.jpg',
    gradient: 'from-burgundy to-amber',
  },
  {
    slug: 'street-evangelism',
    i18nKey: 'ministries.streetEvangelism',
    image: '/images/evangelism_pic_1.jpg',
    gradient: 'from-burgundy-dark to-burgundy',
  },
  {
    slug: 'small-groups',
    i18nKey: 'ministries.smallGroups',
    image: '/images/community_2.jpg',
    gradient: 'from-amber-dark to-gold',
    heroStyle: 'cinematic',
  },
  {
    slug: 'discipleship-mentorship',
    i18nKey: 'ministries.discipleshipMentorship',
    image: '/images/evangelism_3.jpg',
    gradient: 'from-burgundy to-burgundy-dark',
    heroStyle: 'cinematic',
    objectFit: 'contain',
  },
  {
    slug: 'youth-mentorship',
    i18nKey: 'ministries.youthMentorship',
    image: '/images/evangelism_2.jpg',
    gradient: 'from-gold to-amber',
    heroStyle: 'cinematic',
    objectFit: 'contain',
  },
];

export function getMinistryBySlug(slug) {
  return MINISTRY_DATA.find((m) => m.slug === slug) ?? null;
}

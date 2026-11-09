/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://rishika0925.github.io/wedding-invitation/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Rakshit & Rishika — We're getting married",
    description:
      "Join Rakshit & Rishika on 11th of December 2026",
  },
  couple: {
    partnerA: "Rakshit",
    partnerB: "Rishika",
  },
  hashtag: "#RakshitWedsRishika",
  weddingDateIso: "2026-12-11T19:00:00+05:30",
  displayDate: "11 December 2026",
  city: "Dibai, Bulandshahr, U.P",
  music: {
    src: "music/celebration.wav",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "Together with their families",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A note from us",
    heading: "Please celebrate with us",
    paragraphs: [
      "A single bus ticket, an unexpected meeting, and a story we never imagined would become our forever.",
      "Through countless moments, endless conversations, and cherished memories, we found love and a home in each other, and now invite you to celebrate the beginning of our forever.",
    ],
    signOff: "With all our love",
  },
  countdown: {
    heading: "Until we say I do",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The day is here",
    arrivedMessage: "The celebrations have begun. We cannot wait to see you.",
  },
  lineup: {
    eyebrow: "The celebrations",
    heading: "Event line-up",
    mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "haldi and mehendi",
      title: "Haldi and Mehendi",
      date: "10 December 2026",
      time: "12:00 PM",
      venue: "J.P. Palace Banquet Hall, Dibai, Bulandshahr, Uttar Pradesh",
      note: "Turmeric, mehendi, laughter, and clothes you do not mind staining. Dress code: Green" ,
      accent: "marigold",
      mapsUrl: "https://share.google/2I3qFD5Ve54wqXooX",
    },
    {
      id: "sangeet",
      title: "Sangeet",
      date: "10 December 2026",
      time: "4:00 PM",
      venue: "J.P. Palace Banquet Hall, Dibai, Bulandshahr, Uttar Pradesh",
      note: "Family performances, dhol, and dancing until the stars blur.",
      accent: "sapphire",
      mapsUrl: "https://share.google/2I3qFD5Ve54wqXooX",
    },
    {
      id: "lagan",
      title: "Lagan Tika",
      date: "11 December 2026",
      time: "5 PM",
      venue: "K.D. FARM Banquet Hall, Dibai Khurd, Uttar Pradesh",
      note: "An auspicious celebration of tilak, shagun, family traditions, and heartfelt blessings.",
      accent: "lotus",
      mapsUrl: "https://share.google/MTqfaNDdaW92cfduH",
    },
    {
      id: "wedding",
      title: "Wedding",
      date: "11 December 2026",
      time: "7 PM",
      venue: "K.D. FARM Banquet Hall, Dibai Khurd, Uttar Pradesh",
      note: "The varmala, sacred vows, and seven pheras as we begin our forever. Please be seated before the muhurat.",
      accent: "ruby",
      mapsUrl: "https://share.google/MTqfaNDdaW92cfduH",
    },
  ],
  venue: {
    eyebrow: "Find us",
    heading: "The wedding venue",
    name: "K.D. FARM",
    addressLines: [
  "Banquet Hall, Dibai,",
  "Bulandshahr, Uttar Pradesh 203393,",
  "India",
],
    directions:
      "The venue is approximately 151 km away via NH 334C, with an estimated travel time of 3 hours and 14 minutes. Alternatively, you can take SH 18 and NH 334C, covering 143 km. Valet will be waiting at the main gate.",
    mapsCta: "Open in Google Maps",
    mapsUrl: "https://share.google/MTqfaNDdaW92cfduH",
    loadMapLabel: "Load the map",
    mapTitle: "Map of K.D. FARM",
    embedUrl:
      "https://share.google/MTqfaNDdaW92cfduH",
    facadeCaption: "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },
  gallery: {
    eyebrow: "A few frames",
    heading: "From our story so far",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    photos: [
      {
        src: "photos/1.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
      {
        src: "photos/2.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
      {
        src: "photos/3.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
      {
        src: "photos/4.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
      {
        src: "photos/5.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
      {
        src: "photos/6.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
      {
        src: "photos/7.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
      {
        src: "photos/8.jpeg",
        alt: "Rakshit & Rishika",
        width: 800,
        height: 600,
      },
    ],
  },
  footer: {
    closing: "We cannot wait to celebrate with you.",
    crafted: "With love, from our little corner of the internet.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "countdown", label: "When" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
];

export default site;

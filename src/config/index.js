module.exports = {
  siteTitle: 'Szymon Koniarek | Web Designer',
  siteDescription:
    'Szymon Koniarek is a Web Designer & Developer based in Wroclaw, PL who specializes in creating exceptional, high-quality websites and applications.',
  siteKeywords:
    'Szymon Koniarek, Koniarek, Koniarek, koniarek, UX Designer, UI Designer, designer, front-end engineer, web developer, javascript, europe, poland, wroclaw',
  siteUrl: 'https://skxdesigns.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Szymon Koniarek',
  location: 'Wroclaw, PL',
  email: 'info@skxdesigns.com',
  github: 'https://github.com/koniarek',
  twitterHandle: '@koniarek',
  socialMedia: [
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/koniarek',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/szymonkoniarek/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ks.finearts/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/szymon_abstract/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/koniarek',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/szymon-koniarek/',
    },
    {
      name: 'Codesandbox',
      url: 'https://codesandbox.io/u/koniarek',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/koniarek'
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0e1340',
  darkNavyColor: '#0e1340',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

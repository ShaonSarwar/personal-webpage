const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  homepage: 'https://mdshaon.vercel.app/',
  title: 'MS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'MD SHAON',
  role: 'Digital Marketing Specialist',
  
  description:
    `Maximize your online presence and reach your target audience with our expertly crafted Google Ads, Facebook Ads, and Search Engine Optimization (SEO) strategies. 
    With a proven track record of delivering results, we specialize in driving qualified traffic to your website and increasing conversions.`,
  social: {
    linkedin: 'https://www.linkedin.com/in/shaonsarwar/',
    github: 'https://github.com/ShaonSarwar',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Buzz Cabs',
    description:
      'WEB & SEO Project',
    stack: ['SEO', 'Local SEO', 'Web Design',],
    livePreview: 'https://buzzcabs.co.uk/',
  },
  {
    name: 'Z Cars',
    description:
      'WEB & SEO Project',
    stack: ['SEO', 'Local SEO', 'Web Design',],
    livePreview: 'https://zcars.taxi/',
  },
  {
    name: 'KL Tint Studio',
    description:
      'Complete Digital Marketing Project',
      stack: ['Google Ads', 'Facebook Ads', 'Google Ads','SEO', 'Local SEO', 'Web Design',],
      livePreview: 'https://kltintstudio.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Google Ads',
  'Facebook Ads',
  'Search Engine Optimization(SEO)',
  'Keywords Research',
  'Wordpress',
  'Web Design',
  'Local SEO',
  'Google Analytics',
  'Conversion Tracking',
  'Facebook Pixel',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fastrankonline@gmail.com',
  phone: '+8801405816758',
}

export { header, about, projects, skills, contact }

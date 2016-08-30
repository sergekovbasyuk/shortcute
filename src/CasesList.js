import React from 'react';

let CasesList = [
  {
    imgSmall: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544737/1_Pinstans_nzbjzw.jpg',
    imgMiddle: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283690/shortcute/pinstants_md.jpg',
    imgLarge: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283691/shortcute/pinstants_lg.jpg',
    imgFeatured: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471284701/shortcute/pinstants/mockups.jpg',
    imgCase: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471284702/shortcute/pinstants/shots.jpg',
    title: 'Pinstants',
    description: 'Responsive website with dashboard for London based employment service startup.',
    background: 'Researching, UI and UX designing for fast growing London based employment service startup named Pinstant which helps match the right talent with the right opportunity.',
    task: 'To provide responsive website design with internal pages including dashboard in extremely short terms and follow freshy-modern-corporate style. The website should give clients an opportunity to search and add vacancies.',
    deliverables: 'Check this awesome 545 PSD’s , Buddy'
  },
  {
    imgSmall: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544736/2_Smoliar_sxwd6k.jpg',
    imgMiddle: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283690/shortcute/smoliar_md.jpg',
    imgLarge: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283690/shortcute/smoliar_lg.jpg',
    imgFeatured: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419529/shortcute/smoliar/mockups.jpg',
    imgCase: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419530/shortcute/smoliar/shots.jpg',
    title: 'Alexei Smoliar',
    description: 'A known movie director assistant\'s responsive website.',
    background: 'The client is a known movie director assistant which has a great credits list that includes famous movies (mostly over CIS countries) and partnerships with respected directors.',
    task: 'Make a stylish responsive website design with kind of cinema industry and raw working process spirit. The site aims to represent our client as a high-class professional (who he really is), conveniently provide info about projects, gear, plans, schedule — all about his entire working life.',
    deliverables: 'The website is visual-content-centered with its full width bg stylish photos, videos of backstage and generally made in dark colors flavored with faded-gold h1 font. The main page is designed like a slide show, information appears on cards, which replace one another with some animation when user scrolling.'
  },
  {
    imgSmall: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544738/3_Minute_Of_Life_a0sina.jpg',
    imgMiddle: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283691/shortcute/minuteoflife_md.jpg',
    imgLarge: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283691/shortcute/minuteoflife_lg.jpg',
    imgFeatured: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471515055/shortcute/minutesoflife/mockups.jpg',
    imgCase: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471421677/shortcute/minutesoflife/shots.jpg',
    title: 'Minute of Life',
    description: 'The goal was to create an ultimately friendly interface suitable for users of all ages.',
    background: 'Our client is Brainberry Global — augmented reality team that has launched a video messenger which features leaving video messages on physical objects. The very first version of website was launched back in 2014 and in the end of 2015 it was decided to make a redesign of service and the guys turned to us.',
    task: 'We were asked to create an extremely friendly interface suitable for users of all ages. The most important and difficult milestone was to create the video editor ui — it had to include all functions and had no even a shadow of complexity. Our team was given a prototype and a logo.',
    deliverables: 'Obvious navigation and info hierarchy, big comfortable and easy-to-notice buttons, extremely familiar social features section includes feed, messaging etc, pretty blue backgrounds — all this make UI friendly af.'
  },
  {
    imgSmall: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544736/4_Dubai_lzaozt.jpg',
    imgMiddle: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283690/shortcute/silver_md.jpg',
    imgLarge: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283692/shortcute/silver_lg.jpg',
    imgFeatured: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419315/shortcute/dubai/mockups.jpg',
    imgCase: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419316/shortcute/dubai/shots.jpg',
    title: 'Dubai Table',
    description: 'Our client wanted a design for his app named Dubai Table that helps people to find best restaurants in Dubai.',
    background: 'The client is a startup that aims to impelement new services in not-so-crowded UAE app market.',
    task: 'The goal was to create an ultimately friendly interface suitable for users of all ages. The most important and difficult milestone was to create a video editor ui — it had to include all functions and had no even a shadow of complexity. Our team was given a prototype and a logo.',
    deliverables: 'Simple navigation, rich filtering abilities and useful venue info makes this app necessary for Dubai visitors as well as for locals. Designed in Sketch app.'
  },
  {
    imgSmall: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544736/5_Kuan_tueq4d.jpg',
    imgMiddle: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283690/shortcute/kuan_md.jpg',
    imgLarge: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283690/shortcute/kuan_lg.jpg',
    imgFeatured: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419383/shortcute/kuan/mockups.jpg',
    imgCase: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419384/shortcute/kuan/shots.jpg',
    title: 'Kuan',
    description: 'Our goal was to create business style website for Chinese financial start-up in extremely short terms.',
    background: 'Kuan Inc. is a London-Hong Kong based Financial Technology (Fintech) company offering Peer-to-Peer (P2P) foreign exchange services for businesses trading between Europe and Asia.',
    task: 'The client needed a responsive landing page and a massive dashboard with lots of functions that will allow clients to manage their finances.',
    deliverables: 'Modern business&tech style designs with an extensive set of internal pages and a dashboard. Since the website supposed to provide lots of data tables and long-reads, it’s equipped with nice and comfortable to use font set that allows user easy to navigate and detect the desired information among its abundance.'
  },
  {
    imgSmall: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1472544736/6_Sammy_Icon_s8shpa.jpg',
    imgMiddle: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283691/shortcute/sammyicon_md.jpg',
    imgLarge: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471283691/shortcute/sammyicon_lg.jpg',
    imgFeatured: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419465/shortcute/sammyicon/mockups.jpg',
    imgCase: 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1471419465/shortcute/sammyicon/shots.jpg',
    title: 'Sammy Icon',
    description: 'The goal was to create an ultimately friendly interface suitable for users of all ages.',
    background: 'Sammy Icon is a known underwear manufacturer spread over the world: USA, Italy, Germany, Sweden, Canada, Russia, Ukraine and so on. The very first was designed by our team back in the days, so this time the client was needed a redesign. The audience: progressive youth and middle-aged males and females.',
    task: 'To make a responsive e-commerce website from scratch. Team was given only an information architecture flowchart.',
    deliverables: 'Clean online shop designs with vivid content that is easy-to-use and suitable to brand’s audience. UI elements were made simple and not so bright or colorful, just with white and navy colors to not to distract user’s attention from shop’s content.'
  }
];

export default CasesList;

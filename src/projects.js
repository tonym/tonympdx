import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const projects = [
  {
    brief: 'A website of craft cocktail recipes featuring local ingredients',
    client: 'Mouse and Moon Creations',
    company: 'Mouse and Moon Creations',
    description: (
      <div>
        <Typography paragraph>
          The Portland Pour began as an art project, then it became a website with recipes, features and stories promoting local craft distilling and modern cocktail culture.
          It still features the art of Mouse and Moon, along with the products and brands of Portland's vibrant beverage community.
        </Typography>
        <Typography paragraph>
          My job, in addition to creating the pictures and writing most of the articles, is to design the website.
          The application is a React/Redux front end using Material Design with a Ghost blog on the back end.
          The Portland Pour is completely headless, and relies on the Ghost Content API for our articles and posts.
        </Typography>
        <Typography paragraph>
          For SEO and performance, the front end is a hybrid app, meaning the first view is rendered on the server using Node.js and Express.
          The rest is client side React.
          Redux is used to maintain state, and Frontload allows a server rendered view to pass a state object to the client.
        </Typography>
        <Typography paragraph>
          <Link href="https://medium.com/@tony.m.pdx/building-a-blog-with-react-node-and-ghost-1991325b3cd5" target="_blank" rel="noopener noreferrer">Read more about how The Portland Pour was built.</Link>
        </Typography>
        <Typography paragraph>
          <Link href="https://www.theportlandpour.com/" target="_blank" rel="noopener noreferrer">Visit The Portland Portland Pour</Link>
        </Typography>
      </div>),
    featuredImage: '/assets/images/webshare-lo001-20.jpg',
    media: [],
    name: 'The Portland Pour',
    subTypes: ['creative', 'ux', 'design', 'photography', 'writing'],
    type: 'development',
  },
  {
    brief: 'Social media/website content for local producers',
    client: 'Mouse and Moon Creations',
    company: 'Mouse and Moon Creations',
    description: '',
    featuredImage: '/assets/images/webshare-lo001-2.jpg',
    media: [
      'https://images.squarespace-cdn.com/content/v1/59e64dee12abd9856008f5d2/1558733614582-SPCX61Z249NLK3RYW69V/ke17ZwdGBToddI8pDm48kMW2m2RZZhZkflAJDculq4J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdqC1IaL936TVnGuysIX8XV6FX5VyVeTKz0kAdy2sSvyguvgCERZpXNZ8mcSs3tIUA/archive__webshare_001-38.jpg',
      'https://images.squarespace-cdn.com/content/v1/59e64dee12abd9856008f5d2/1558733620584-8TH9YTB8B4CR6J24IBCR/ke17ZwdGBToddI8pDm48kMW2m2RZZhZkflAJDculq4J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdqC1IaL936TVnGuysIX8XV6FX5VyVeTKz0kAdy2sSvyguvgCERZpXNZ8mcSs3tIUA/archive__webshare_001-40.jpg',
      'https://images.squarespace-cdn.com/content/v1/59e64dee12abd9856008f5d2/1558733631924-VKNIH60OT1LMY135W7JY/ke17ZwdGBToddI8pDm48kMW2m2RZZhZkflAJDculq4J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdqC1IaL936TVnGuysIX8XV6FX5VyVeTKz0kAdy2sSvyguvgCERZpXNZ8mcSs3tIUA/archive__webshare_001-41.jpg',
      'https://images.squarespace-cdn.com/content/v1/59e64dee12abd9856008f5d2/1558738644794-RDEHGRIKXAMV4PFJUU84/ke17ZwdGBToddI8pDm48kGdXwE-vebEpgb33VwdtsTxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyFXBTrd8RtdLuD2xTt52BcbibHP9HAWTuiNyjdIhZkDRmM2LuhCrpPu_cqK6msTYI/moscow-mule-cocktail.jpg'
    ],
    name: 'Food photography',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'Product display for a local distillery tasting room',
    client: 'Bull Run Distillery',
    company: 'Mouse and Moon Creations',
    description: (
      <div>
        <Typography paragraph>
          Bull Run Distillery approached us about selling tee shirts in their tasting room.
          Of course, we were happy to oblige, but they also wanted a display card to go with them.
          My first instinct was to follow the style common among food to table or grain to glass marketing.
          Sincere, small, rural, but that's not what resulted.
          Instead we chose to go retro, use a vintage look that reflects a vintage bar from the days when bartenders wore handlebar mustaches and sleeve garters and string ties.
          Only with a contemporary model and garment.
        </Typography>
      </div>
    ),
    featuredImage: '/assets/images/get-a-shirt.jpg',
    media: [],
    name: 'Product display',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'UX interaction design for a CTMS',
    client: 'University of Chicago',
    company: 'Bad Rabbit',
    description: '',
    featuredImage: '/assets/images/sirb.comp.2.png',
    media: [],
    name: 'Clinical trial management system',
    subTypes: [],
    type: 'ux'
  },
  {
    brief: 'Product photography for a local Portland client',
    client: 'The Bitter Housewife',
    company: 'Mouse and Moon Creations',
    description: (
      <div>
        <Typography>
          Cocktail kits created by The Bitter Housewife, and photographed by Mouse and Moon Creations for the 2018 holiday season.
        </Typography>
      </div>
    ),
    featuredImage: '/assets/images/webshare-lo001-38.jpg',
    media: [],
    name: 'Cocktail kits',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'Product photography for an end user training course',
    client: 'Blue Wing',
    company: 'Mouse and Moon Creations',
    description: '',
    featuredImage: '/assets/images/blue-wing-delaware-county-1-0-tp9400.jpg',
    media: [],
    name: 'Training material',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'Mobile application for use with a digital mural in the doctor\'s office',
    client: 'Children\'s Hospital of Philadelphia',
    company: 'Bad Rabbit',
    description: '',
    featuredImage: '/assets/images/picturethis.jpg',
    media: [],
    name: 'Mobile application',
    subTypes: [],
    type: 'development'
  },
  {
    brief: 'A collection of local products perfect for holiday giving',
    client: 'Mouse and Moon Creations',
    company: 'Mouae and Moon Creations',
    description: (
      <div>
        <Typography paragraph>
          The Portland Pour 2018 Holiday Gift Guide was a project all on it's own.
          With the goal of showcasing all the wonderful beverage products of Portland, it meant alot of coordination between companies and brands as we photographed all the items, and wrote about each one, all with the assistance of the marketing directors of the companies involved.
          The result was a listing of some of the most respected products in Portland, and a marketing item for each brand to use free of charge.
          In the spirit of the holidays, it was a gift to the community that I was proud to work on.
        </Typography>
      </div>
    ),
    featuredImage: '/assets/images/webshare-lo001-37.jpg',
    media: [],
    name: 'Holiday gift guide',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'A gallery art series',
    client: '',
    company: 'Mouse and Moon Creations',
    description: (
      <div>
        <Typography paragraph>
          My last (probably) gallery series from 2017/2018, a series of surreal conceptual images dealing with the concepts of acknowledgement, empowerment, acceptance and respect.
        </Typography>
      </div>
    ),
    featuredImage: '/assets/images/webshare-lo001-28.jpg',
    media: [],
    name: 'Acknowledgement',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'Component kits for React',
    client: 'VF Design',
    company: 'Mouse and Moon Creations',
    description: (
      <div>
        <Typography paragraph>
          In 2017 I embarked on a project to create a design system, and a component kit for React.
          The components are targeted at specific website types, such as an admin interface, a blog, an online store, etc.
          Our goal at the time was to descrease development time for software clients, and we were able to create something that we still use in house on our projects, and occassionally on client properties.
        </Typography>
      </div>
    ),
    featuredImage: '/assets/images/puzzle.jpg',
    media: [],
    name: 'UI component kit for React',
    subTypes: [],
    type: 'development'
  },
  {
    brief: 'Pre-render server for React',
    client: 'Mouse and Moon Creations',
    company: 'Mouse and Moon Creations',
    description: '',
    featuredImage: '/assets/images/express.png',
    media: [],
    name: 'Express/Node server for React',
    subTypes: [],
    type: 'development'
  },
  {
    brief: 'A social network for CT professionals',
    client: 'Bad Rabbit',
    company: 'Bad Rabbit',
    description: '',
    featuredImage: '/assets/images/connections.png',
    media: [],
    name: 'Professional networking app',
    subTypes: [],
    type: 'ux'
  },
  {
    brief: 'Product photography for a cosmetics client',
    client: 'Omnia Cosmetics',
    company: 'Mouse and Moon Creations',
    description: '',
    featuredImage: '/assets/images/webshare-lo001-43.jpg',
    media: [],
    name: 'Omnia Cosmetics',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'A training management app for CT compliance',
    client: 'Bad Rabbit',
    company: 'Bad Rabbit',
    description: '',
    featuredImage: '/assets/images/training.png',
    media: [],
    name: 'Training management app',
    subTypes: [],
    type: 'ux'
  },
  {
    brief: 'The original Mouse and Moon',
    client: 'Mouse and Moon Creations',
    company: 'Mouse and Moon Creations',
    description: '',
    featuredImage: '/assets/images/webshare-lo001-31.jpg',
    media: [],
    name: 'Victorian fairy tales',
    subTypes: [],
    type: 'creative'
  },
  {
    brief: 'An aggregation app for CT managers',
    client: 'Children\'s Hospital of Philadelphia',
    company: 'Bad Rabbit',
    description: '',
    featuredImage: '/assets/images/piac.png',
    media: [],
    name: 'Compliance management app',
    subTypes: [],
    type: 'development'
  },
  {
    brief: 'A React front end for a news aggregation app',
    client: 'Dlvrit',
    company: 'Dlvrit',
    description: '',
    featuredImage: '/assets/images/dlvrit.png',
    media: [],
    name: 'React front end',
    subTypes: [],
    type: 'development'
  },
  {
    brief: 'A front end for a standards compliance app',
    client: 'Kavi',
    company: 'Kavi',
    description: '',
    featuredImage: '/assets/images/workspace.png',
    media: [],
    name: 'Standards compliance app',
    subTypes: [],
    type: 'development'
  }
];

export default projects;
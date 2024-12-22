import dynamic from 'next/dynamic';

const Cta = dynamic(() => import('../../blocks/Cta'), {
  ssr: true,
});
const CtaCommandLine = dynamic(() => import('../../blocks/CtaCommandLine'), {
  ssr: true,
});
const Faq = dynamic(() => import('../../blocks/Faq'), {
  ssr: true,
});
const TripDetails = dynamic(() => import('../../blocks/TripDetails'), {
  ssr: true,
});
const Social = dynamic(() => import('../../blocks/Social'), {
  ssr: true,
});
const ParalaxGalery = dynamic(() => import('../../blocks/ParalaxGalery'), {
  ssr: false,
});
const AboutWithImages = dynamic(() => import('../../blocks/AboutWithImages'), {
  ssr: true,
});
const Offers = dynamic(() => import('../../blocks/Offers'), {
  ssr: true,
});
const DropLabs = dynamic(() => import('../../blocks/DropLabs'), {
  ssr: false,
});
const Reviews = dynamic(() => import('../../blocks/Reviews'), {
  ssr: true,
});
const Banner = dynamic(() => import('../../blocks/Banner'), {
  ssr: true,
});
const Features = dynamic(() => import('../../blocks/Features'), {
  ssr: true,
});
const PrimaryBanner = dynamic(() => import('../../blocks/PrimaryBanner'), {
  ssr: true,
});
const FeaturesWithImages = dynamic(
  () => import('../../blocks/FeaturesWithImages'),
  {
    ssr: true,
  }
);
const Hero = dynamic(() => import('../../blocks/Hero'), {
  ssr: true,
});
const LogoClouds = dynamic(() => import('../../blocks/LogoClouds'), {
  ssr: true,
});
const Details = dynamic(() => import('../../blocks/Details'), {
  ssr: true,
});
const Contact = dynamic(() => import('../../blocks/Contact'), {
  ssr: true,
});
const TopTrips = dynamic(() => import('../../blocks/TopTrips'), {
  ssr: true,
});
const About = dynamic(() => import('../../blocks/About'), {
  ssr: true,
});
const Pricing = dynamic(() => import('../../blocks/Pricing'), {
  ssr: true,
});
const RelatedArticles = dynamic(() => import('../../blocks/RelatedArticles'), {
  ssr: true,
});
const RelatedRestaurants = dynamic(
  () => import('../../blocks/RelatedRestaurants'),
  {
    ssr: true,
  }
);
const Team = dynamic(() => import('../../blocks/Team'), {
  ssr: true,
});
const Testimonial = dynamic(() => import('../../blocks/Testimonial'), {
  ssr: true,
});
const RichContent = dynamic(
  () => import('../../pages/restaurant/RichContent'),
  {
    ssr: true,
  }
);

const BlockManager = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => {
        let Block;

        switch (block.__component) {
          case 'blocks.faq':
            Block = Faq;
            break;

          case 'blocks.hero':
            Block = Hero;
            break;
          case 'blocks.details':
            Block = Details;
            break;
          case 'blocks.logo-clouds':
            Block = LogoClouds;
            break;
          case 'blocks.paralax-galery':
            Block = ParalaxGalery;
            break;
          case 'blocks.social':
            Block = Social;
            break;
          case 'blocks.drop-labs':
            Block = DropLabs;
            break;
          case 'blocks.top-trips':
            Block = TopTrips;
            break;
          case 'blocks.offers':
            Block = Offers;
            break;
          case 'blocks.about-with-images':
            Block = AboutWithImages;
            break;
          case 'blocks.banner':
            Block = Banner;
            break;
          case 'blocks.trip-details':
            Block = TripDetails;
            break;
          case 'blocks.primary-banner':
            Block = PrimaryBanner;
            break;
          case 'blocks.reviews':
            Block = Reviews;
            break;
          case 'blocks.contact':
            Block = Contact;
            break;
          case 'blocks.about':
            Block = About;
            break;
          case 'blocks.cta':
            Block = Cta;
            break;
          case 'blocks.team':
            Block = Team;
            break;
          case 'blocks.pricing':
            Block = Pricing;
            break;
          case 'blocks.features':
            Block = Features;
            break;
          case 'blocks.testimonial':
            Block = Testimonial;
            break;
          case 'restaurant.rich-content':
            Block = RichContent;
            break;
          case 'blocks.related-articles':
            Block = RelatedArticles;
            break;
          case 'blocks.cta-command-line':
            Block = CtaCommandLine;
            break;
          case 'blocks.related-restaurants':
            Block = RelatedRestaurants;
            break;
          case 'blocks.features-with-images':
            Block = FeaturesWithImages;
            break;
        }

        return Block ? (
          <div key={`index-${index}`}>
            <Block component={block.__component} {...block} />
          </div>
        ) : null;
      })}
    </div>
  );
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;

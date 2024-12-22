import delve from 'dlv';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
} from 'react-icons/ri';
import { getStrapiMedia } from '../../../utils';

function RenderIcon({ icon }) {
  switch (icon) {
    case 0:
      return <RiNumber1 size={24} color="black" />;
    case 1:
      return <RiNumber2 size={24} color="black" />;
    case 2:
      return <RiNumber3 size={24} color="black" />;
    case 3:
      return <RiNumber4 size={24} color="black" />;
    case 4:
      return <RiNumber5 size={24} color="black" />;
    case 5:
      return <RiNumber6 size={24} color="black" />;
    case 6:
      return <RiNumber7 size={24} color="black" />;
    case 7:
      return <RiNumber8 size={24} color="black" />;
    case 8:
      return <RiNumber9 size={24} color="black" />;
    default:
      return null;
  }
}

const TripDetails = ({ header, images, items }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');
  console.log(items, 'imagesimagesimagesimages');
  return (
    <section class="py-6 md:py-12 max-w-screen-2xl mx-auto bg-white overflow-hidden">
      <div class="px-6 md:px-12 ">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4 flex justify-center text-center lg:text-left lg:justify-start">
            <div className="max-w-xl">
              {label && (
                <span className="font-bold font-jakarta text-primary">
                  {label}
                </span>
              )}
              {title && (
                <h5 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta py-2">
                  {title}
                </h5>
              )}
              <ul>
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col lg:flex-row mb-4 justify-center lg:justify-start"
                  >
                    <div className="flex justify-center mb-2 pr-0 lg:mb-0 lg:pr-4">
                      <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mb-2 bg-primary rounded-xl">
                        {RenderIcon({ icon: index })}
                      </span>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="font-bold text-black  font-heading">
                        {delve(item, 'header.title')}
                      </h3>
                      <p className="text-black leading-loose">
                        {delve(item, 'header.label')}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center w-full lg:w-1/2 px-4">
            <div className="mb-6 w-full sm:w-1/2 px-3">
              <img
                className="mb-6 w-full h-64 object-cover rounded-3xl"
                src={getStrapiMedia(delve(images.data[0], 'attributes.url'))}
                alt={delve(images.data[0], 'attributes.alternativeText')}
              />
              <img
                className="w-full h-64 object-cover rounded-3xl"
                src={getStrapiMedia(delve(images.data[1], 'attributes.url'))}
                alt={delve(images.data[1], 'attributes.alternativeText')}
              />
            </div>
            <div className="w-full sm:w-1/2 px-3">
              <img
                className="w-full h-64 object-cover rounded-3xl"
                src={getStrapiMedia(delve(images.data[2], 'attributes.url'))}
                alt={delve(images.data[2], 'attributes.alternativeText')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TripDetails.defaultProps = {};

export default TripDetails;

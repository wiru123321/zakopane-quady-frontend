import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';
import { twMerge } from 'tailwind-merge';

const TopTrips = ({ header, items }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  console.log(header, items, 'dsfasdfcvx');

  return (
    <section className="my-12 mx-4 overflow-hidden">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto py-12 lg:py-16 rounded-3xl bg-black">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta mb-8 text-white">
            {title}
          </h3>
          <p className="text-lg font-jakarta text-white">{label}</p>
        </div>
        <div className="flex flex-wrap -m-3 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-3 group/card"
            >
              <div
                style={{
                  '---image-url': `url(${
                    getStrapiMedia(delve(item, 'image.data.attributes.url')) ||
                    ''
                  })`,
                }}
                className={twMerge(
                  'overflow-hidden relative card h-96 rounded-3xl shadow-xl  mx-auto backgroundImage flex flex-col justify-between p-4',
                  'bg-[image:var(---image-url)] bg-cover bg-center'
                )}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:opacity-70 bg-black opacity-50"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                  <div className="flex flex-col bg-[#233D4D] p-2 rounded-lg">
                    <p className="font-normal font-jakarta text-base text-gray-50 relative z-10">
                      {delve(item, 'tag')}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text content">
                    <h4 className="font-bold font-jakarta text-xl md:text-2xl text-gray-50 relative z-10">
                      {delve(item, 'header.title')}
                    </h4>
                    <p className="font-normal font-jakarta text-sm text-gray-50 relative z-10 my-4">
                      {delve(item, 'header.label')}
                    </p>
                  </div>
                  <CustomButton
                    theme={delve(item, 'header.theme')}
                    href={delve(item, 'button.href')}
                    target={delve(item, 'button.target')}
                    label={delve(item, 'button.label')}
                    isExternal={delve(item, 'button.isExternal')}
                    className="inline-block lg:inline-block w-full md:w-auto z-10 px-0 py-0"
                    textClassName="py-4 px-10 inline-block w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TopTrips.defaultProps = {};

export default TopTrips;

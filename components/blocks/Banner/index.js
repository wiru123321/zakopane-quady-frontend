import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';
import Link from 'next/link';

const Banner = ({ buttons, header, image }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  return (
    <section className="my-12 mx-4 overflow-hidden">
      <div
        className="relative px-6 md:px-12 max-w-screen-2xl mx-auto py-16 rounded-3xl"
        style={{
          backgroundImage: `url(${
            getStrapiMedia(delve(image, 'data.attributes.url')) || ''
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute w-full rounded-3xl h-full top-0 left-0 bg-black opacity-40"></div>
        <div className="relative">
          {title && (
            <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta mb-6 text-white md:max-w-2xl">
              {title}
            </h4>
          )}
          {label && (
            <p className="mb-14 font-jakarta text-white text-lg md:max-w-2xl">
              {label}
            </p>
          )}
        </div>
        <div className="flex flex-wrap -m-2">
          {buttons &&
            buttons.map((button, index) => (
              <div key={index} className="w-auto p-2">
                <div className="flex flex-wrap px-3 py-2 rounded-full">
                  <CustomButton
                    theme={delve(header, 'header.theme')}
                    href={delve(button, 'href')}
                    target={delve(button, 'target')}
                    label={delve(button, 'label')}
                    isExternal={delve(button, 'isExternal')}
                    className="inline-block lg:inline-block py-0 px-0 w-full md:w-auto z-10"
                    textClassName="py-4 px-10 inline-block w-full"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

Banner.defaultProps = {};

export default Banner;

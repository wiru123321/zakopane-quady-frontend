import delve from 'dlv';
import Link from 'next/link';
import { getStrapiMedia } from '../../../utils';

const Features = ({ header, cards }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  return (
    <section className="pt-8 md:pt-12 pb-12 max-w-screen-2xl mx-auto bg-white overflow-hidden">
      <div className="px-4">
        <div className="pb-12 md:mb-20 flex flex-wrap items-start text-center md:text-left">
          {title && (
            <div className="w-full md:w-1/2 p-0 md:p-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-black font-bold font-jakarta tracking-px-n leading-tight md:max-w-xl">
                {title}
              </h2>
            </div>
          )}
          {label && (
            <div className="w-full md:w-1/2 p-0 pt-8 md:p-8">
              <p className="text-lg font-jakarta text-black font-medium leading-relaxed md:max-w-xl">
                {label}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-wrap -m-3 justify-center">
          {cards.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3">
              <Link
                className="flex justify-center md:block h-full"
                href={delve(card, 'link.href')}
              >
                <div className="relative h-full rounded-3xl overflow-hidden cursor-pointer">
                  <img
                    className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                    src={getStrapiMedia(
                      delve(card, 'image.data.attributes.url')
                    )}
                    alt={delve(card, 'image.data.attributes.alternativeText')}
                  />
                  <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                    <div
                      className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                      style={{
                        WebkitBackdropFilter: 'blur(5px)',
                        backdropFilter: 'blur(5px)',
                      }}
                    >
                      <h3 className="text-3xl font-jakarta text-white text-center font-semibold">
                        {delve(card, 'title')}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Features.defaultProps = {};

export default Features;

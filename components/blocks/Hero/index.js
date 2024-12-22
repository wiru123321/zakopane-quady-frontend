import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';
import ImageCards from './image-cards';

const Hero = ({ image, header, text, buttons }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  return (
    <section className="mx-4">
      <div className="pb-8 md:pb-12 max-w-screen-2xl mx-auto">
        <div className="relative pt-40 pb-8 md:pt-48 md:pb-24 rounded-3xl overflow-hidden">
          <video
            className="min-w-full min-h-full object-cover absolute top-0 bottom-0 left-0 right-0"
            autoPlay
            muted
            loop
          >
            <source
              src={getStrapiMedia(delve(image, 'data.attributes.url')) || ''}
              type="video/mp4"
            />
          </video>
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
          <div className="relative px-4 mx-auto md:pl-12 2xl:pl-20">
            <div className="w-full lg:w-2/3 xl:w-[65%] 2xl:w-[55%] mb-0">
              {title ? (
                <h1 className="mb-6 md:mb-10 font-jakarta font-semibold text-center md:text-left text-white text-4xl md:text-5xl xl:text-8xl">
                  {title}
                </h1>
              ) : (
                <h1 className="mb-12 md:mb-16 font-jakarta font-semibold text-center md:text-left text-white text-4xl md:text-5xl xl:text-8xl">
                  <span>Wycieczki w Zakopanem </span>
                  <span class="text-primary">Skutery Śnieżne</span>
                  <span>, Quady i Buggy</span>
                </h1>
              )}
              {label && (
                <p className="font-jakarta mb-4 md:mb-10 text-xl md:text-2xl lg:text-3xl text-bold text-white">
                  {label}
                </p>
              )}
              {buttons?.map((button, index) => (
                <CustomButton
                  key={index}
                  theme={delve(button, 'theme')}
                  href={delve(button, 'link.href')}
                  target={delve(button, 'link.target')}
                  label={delve(button, 'link.label')}
                  isExternal={delve(button, 'link.isExternal')}
                  className="inline-block lg:inline-block py-0 px-0 w-full md:w-auto md:mr-6 mb-2 md:mb-0"
                  textClassName="py-4 px-10 inline-block w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {};

export default Hero;

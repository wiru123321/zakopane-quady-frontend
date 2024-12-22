import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';

const AboutWithImages = ({ header, button, images }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');
  console.log(images, 'imagesimages');
  return (
    <section class="py-6 md:py-12 max-w-screen-2xl mx-auto bg-white overflow-hidden">
      <div class="px-6 md:px-12 ">
        <div class="flex flex-wrap -mx-4 mb-24 text-center md:text-left">
          <div class="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div>
              {title && (
                <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta">
                  {title}
                </h2>
              )}
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <div class="lg:max-w-lg md:ml-auto">
              {label && (
                <p class="text-lg font-jakarta text-gray-900 font-medium leading-relaxed mb-10">
                  {label}
                </p>
              )}
              {delve(button, 'href') && (
                <CustomButton
                  theme="primary"
                  href={delve(button, 'href')}
                  target={delve(button, 'target')}
                  label={delve(button, 'label')}
                  isExternal={delve(button, 'isExternal')}
                  className="inline-block py-0 px-0 lg:inline-block"
                  textClassName="py-4 px-10 inline-block w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-wrap gap-y-6">
        {images &&
          images.data.map((image, index) => (
            <div
              key={index}
              class="w-1/2 md:w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4"
            >
              <img
                alt={delve(image, 'attributes.alternativeText')}
                class="block w-full h-full object-cover rounded-3xl"
                src={getStrapiMedia(delve(image, 'attributes.url'))}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

AboutWithImages.defaultProps = {};

export default AboutWithImages;

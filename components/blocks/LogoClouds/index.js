import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const LogoClouds = ({ images }) => {
  console.log(images, 'imagesimagesimages');
  return (
    <section class="py-24 overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center justify-center -m-6">
          {images.data?.map((image, index) => (
            <div key={index} class="w-auto p-6">
              <img
                width="120"
                src={getStrapiMedia(delve(image, 'attributes.url'))}
                alt={delve(image, 'attributes.alternativeText')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

LogoClouds.defaultProps = {};

export default LogoClouds;

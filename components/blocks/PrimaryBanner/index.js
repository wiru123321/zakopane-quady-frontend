import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';
import Link from 'next/link';

const PrimaryBanner = ({ button, header }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  return (
    <section className="my-6 md:my-12 mx-4 overflow-hidden">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto py-6 sm:py-12 lg:py-16 rounded-3xl bg-primary">
        <div className="relative py-16 px-0 md:px-8">
          <div className="relative text-center">
            {title && (
              <h5 className="text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta text-black mb-12">
                {title}
              </h5>
            )}
            <div className="relative flex items-center justify-center">
              {button.href && (
                <CustomButton
                  theme={delve(header, 'header.theme')}
                  href={delve(button, 'href')}
                  target={delve(button, 'target')}
                  label={delve(button, 'label')}
                  isExternal={delve(button, 'isExternal')}
                  className="inline-block lg:inline-block bg-white hover:bg-gray-200 py-0 px-0 w-full sm:w-auto md:mr-6 mb-2 md:mb-0"
                  textClassName="py-4 px-10 inline-block w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PrimaryBanner.defaultProps = {};

export default PrimaryBanner;

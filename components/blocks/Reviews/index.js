import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const Reviews = ({ header, items, button }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  console.log(items, button, 'fgdsfdsfsdf');

  return (
    <section className="max-w-screen-2xl mx-auto py-6 md:py-12 bg-white overflow-hidden">
      <div className="px-4">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-end -m-2 mb-0 md:mb-12 p-8">
          {title && (
            <div className="w-full lg:w-2/3 p-2">
              <h4 className="text-3xl md:text-5xl lg:text-6xl text-black font-bold font-jakarta font-heading tracking-px-n leading-tight">
                {title}
              </h4>
            </div>
          )}
          {label && (
            <div className="w-full lg:w-1/3 flex self-center p-2 justify-center">
              <Link href={delve(button, 'href') || ''} legacyBehavior>
                <a
                  target={delve(button, 'target')}
                  className="font-sans font-medium text-primary leading-10"
                >
                  {label}
                </a>
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-wrap -m-2">
          {items?.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl">
                <div className="flex flex-col justify-between h-full">
                  <div className="mb-7 block">
                    <div className="flex flex-wrap -m-0.5 mb-6">
                      {Array.from({ length: item.score }, (_, key) => (
                        <div key={key} className="w-auto p-0.5">
                          <svg
                            width={19}
                            height={18}
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                              fill="#F59E0B"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <h3 className="mb-6 text-lg font-bold font-heading">
                      {delve(item, 'header.title')}
                    </h3>
                    <p className="text-lg font-medium">
                      {delve(item, 'header.label')}
                    </p>
                  </div>
                  <div className="block">
                    <p className="font-bold">{delve(item, 'author')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Reviews.defaultProps = {};

export default Reviews;

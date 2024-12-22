import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';
import { twMerge } from 'tailwind-merge';

const Offers = ({ header, items, blackType }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  console.log(blackType, 'blackType');

  return (
    <section
      className={twMerge(
        `py-6 md:py-12 overflow-hidden`,
        blackType ? 'mx-4' : 'bg-white mx-auto max-w-screen-2xl'
      )}
    >
      <div
        className={twMerge(
          blackType &&
            'bg-black mx-auto max-w-screen-2xl px-6 md:px-12 py-12 lg:py-16 rounded-3xl'
        )}
      >
        <div className={twMerge(blackType ? ' px-0 md:px-4' : 'px-4')}>
          <div className="pb-4 md:mb-6 flex flex-wrap items-center text-center">
            {title && (
              <div className="w-full flex justify-center p-0 md:p-8">
                <h2
                  className={twMerge(
                    `text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta tracking-px-n leading-tight`,
                    blackType ? 'text-white' : 'text-black'
                  )}
                >
                  {title}
                </h2>
              </div>
            )}
            {label && (
              <div className="w-full flex justify-center p-0 pt-8 md:p-8">
                <p
                  className={twMerge(
                    `text-lg font-jakarta text-black font-medium leading-relaxed md:max-w-3xl`,
                    blackType ? 'text-white' : 'text-black'
                  )}
                >
                  {label}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-wrap -m-3 justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  `p-3 group/card`,
                  blackType ? 'w-full md:w-1/2' : 'w-full md:w-1/2 lg:w-1/3'
                )}
              >
                <div
                  style={{
                    '---image-url': `url(${
                      getStrapiMedia(
                        delve(item, 'image.data.attributes.url')
                      ) || ''
                    })`,
                  }}
                  className={twMerge(
                    'overflow-hidden relative card h-full rounded-3xl  mx-auto backgroundImage flex flex-col justify-between p-4',
                    'bg-[image:var(---image-url)] bg-cover bg-center',
                    blackType
                      ? 'min-h-[420px] xl:min-h-[520px]'
                      : 'min-h-[384px]'
                  )}
                >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:opacity-70 bg-black opacity-50"></div>
                  <div className="flex flex-row items-center space-x-4 z-10 mb-2">
                    <div className="flex flex-col bg-[#233D4D] p-2 rounded-lg">
                      <p className="font-normal font-jakarta text-base text-primary relative z-10">
                        {delve(item, 'tag')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col h-full justify-between z-10">
                    <div className="text content flex flex-col h-full justify-between">
                      <h4 className="font-bold font-jakarta text-xl md:text-2xl text-gray-50 relative z-10">
                        {delve(item, 'header.title')}
                      </h4>
                      <p
                        className={twMerge(
                          'font-normal font-jakarta text-gray-50 relative z-10 my-4',
                          blackType ? 'text-md md:text-lg' : 'text-lg'
                        )}
                      >
                        {delve(item, 'header.label')}
                      </p>
                    </div>
                    <CustomButton
                      theme={delve(item, 'header.theme')}
                      href={delve(item, 'button.href')}
                      target={delve(item, 'button.target')}
                      label={delve(item, 'button.label')}
                      isExternal={delve(item, 'button.isExternal')}
                      className="inline-block lg:inline-block w-full md:w-auto z-20 px-0 py-0"
                      textClassName="py-4 px-10 inline-block w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Offers.defaultProps = {};

export default Offers;

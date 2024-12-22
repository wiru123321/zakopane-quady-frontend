import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

const Details = ({
  header,
  button,
  items,
  title,
  priceText,
  notIncludedItem,
  additionalHeader,
}) => {
  const headerTitle = delve(header, 'title');
  const label = delve(header, 'label');
  const additionalTitle = delve(additionalHeader, 'title');
  const additionalLabel = delve(additionalHeader, 'label');

  return (
    <section className="relative my-12 mx-4 overflow-hidden">
      <div className="px-6 md:px-12 pt-32 pb-40 bg-primary max-w-screen-2xl mx-auto py-16 rounded-3xl">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
            {headerTitle && (
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta text-black mb-6">
                <span>{headerTitle}</span>
              </h3>
            )}
            {label && (
              <p className="text-lg font-jakarta text-black">{label}</p>
            )}
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="max-w-md lg:max-w-4xl mx-auto">
          <div className="-mt-52 mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-xl">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-2/5 mb-8 lg:mb-0 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100">
                <div className="text-center">
                  {priceText && (
                    <span className="block text-4xl font-jakarta font-bold text-black mb-5">
                      {priceText}
                    </span>
                  )}
                  {button && (
                    <CustomButton
                      theme="primary"
                      href={delve(button, 'href')}
                      target={delve(button, 'target')}
                      label={delve(button, 'label')}
                      isExternal={delve(button, 'isExternal')}
                      className="inline-block lg:inline-block py-0 px-0 w-full md:w-auto z-10"
                      textClassName="py-4 px-10 inline-block w-full"
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-3/5 px-4 py-2">
                <div className="max-w-sm ml-auto">
                  {title && (
                    <p className="text-black text-xl font-jakarta mb-8">
                      {title}
                    </p>
                  )}
                  <ul>
                    {items.map((item, index) => (
                      <li key={index} className="flex mb-6 items-center">
                        <FaCheckCircle
                          size={30}
                          className="flex-none"
                          color="#FFC300"
                        />
                        {item.text && (
                          <span className="ml-2 text-md font-jakarta text-black">
                            {item.text}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto mb-12 mt-6 text-center">
            {additionalTitle && (
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-jakarta text-black">
                <span>{additionalTitle}</span>
              </h3>
            )}
            {additionalLabel && (
              <p className="text-lg font-jakarta text-black">
                {additionalLabel}
              </p>
            )}
          </div>
        </div>
        {notIncludedItem.map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 lg:w-1/${notIncludedItem.length} p-4`}
          >
            <div className="mb-3 mx-auto w-12 h-12 rounded-full flex items-center justify-center">
              <MdAddShoppingCart
                size={30}
                className="flex-none"
                color="#FFC300"
              />
            </div>
            <p className="text-rhino-700 text-sm font-jakarta font-bold text-center mb-2">
              {delve(item, 'header.label')}
            </p>
            <p className="text-rhino-300 text-sm font-jakarta text-center">
              {delve(item, 'header.title')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

Details.defaultProps = {};

export default Details;

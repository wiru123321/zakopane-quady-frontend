import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const RenderIcon = ({ icon }) => {
  switch (icon) {
    case 'FACEBOOK':
      return <FaFacebook size={30} color="#ffc300" />;
    case 'INSTAGRAM':
      return <FaInstagram size={30} color="#ffc300" />;
    case 'TIKTOK':
      return <FaTiktok size={30} color="#ffc300" />;
    default:
      return null;
  }
};

const Social = ({ header, items }) => {
  const label = delve(header, 'label');
  const title = delve(header, 'title');

  return (
    <section className="relative py-4 pb-16 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl mx-auto pb-8 text-center">
          {title && (
            <h1 className="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
          )}
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-0"
            >
              <div className="max-w-sm mx-auto h-full py-8 px-6 bg-white border rounded-3xl border-gray-200">
                <div className="max-w-2xs mx-auto text-center flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center border bg-black rounded-2xl">
                    {RenderIcon({ icon: delve(item, 'type') })}
                  </div>
                  <h5 className="text-2xl font-bold text-black py-4">
                    {delve(item, 'header.title')}
                  </h5>

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

Social.defaultProps = {};

export default Social;

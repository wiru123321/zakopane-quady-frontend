import delve from 'dlv';
import CustomLink from '../../shared/CustomLink';
import Link from 'next/link';
import Image from 'next/Image';
import { getStrapiMedia } from '../../../utils';
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai';
import { FaSquarePhone } from 'react-icons/fa6';
import Cta from '../Navbar/cta';

const RenderIcon = ({ icon }) => {
  switch (icon) {
    case 'INSTAGRAM':
      return <AiFillInstagram size={30} color="white" />;
    case 'TIKTOK':
      return <AiFillTikTok size={30} color="white" />;
    case 'PHONE':
      return <FaSquarePhone size={30} color="black" />;
    default:
      return null;
  }
};

const Footer = ({ footer, pageData }) => {
  const label = delve(footer, 'label');
  const socialNetworks = delve(footer, 'socialNetworks');
  const footerColumns = delve(footer, 'footerColumns');
  const logo = delve(footer, 'logo.data.attributes.url');
  const href = delve(footer, 'logoHref');
  const copyRights = delve(footer, 'copyRights');

  console.log(logo);

  return (
    <footer className="py-12 overflow-hidden bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center -m-8 mb-16">
          <div className="w-full md:w-1/2 lg:w-4/12 p-8 order-1 lg:order-none">
            <div className="md:max-w-xs text-center md:text-start">
              <Link
                href={`${href}?lang=${
                  delve(pageData, 'attributes.locale') || 'en'
                }`}
                legacyBehavior
              >
                <a className="flex font-jakarta title-font font-medium items-center justify-center md:justify-start text-gray-900 mb-4 md:mb-0">
                  {logo && (
                    <Image
                      src={getStrapiMedia(logo)}
                      width={240}
                      height={140}
                    />
                  )}
                </a>
              </Link>
              <p className="text-white font-jakarta pt-4">{label}</p>
            </div>
          </div>
          {footerColumns &&
            footerColumns.map((column, index) => (
              <div
                className={`w-full md:w-1/2 lg:w-2/12 p-8 order-3 lg:order-none justify-items-center`}
                key={index}
              >
                <h3 className="mb-6 font-jakarta text-lg text-primary font-medium">
                  {delve(column, 'title')}
                </h3>
                <ul className="justify-items-center">
                  {delve(column, 'links') &&
                    delve(column, 'links').map((link, index2) => (
                      <li
                        key={index2}
                        className="mb-2.5 text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                      >
                        <CustomLink
                          {...link}
                          locale={delve(pageData, 'attributes.locale')}
                        />
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <div className="w-full md:w-1/2 lg:flex-1 p-8 order-2 lg:order-none">
            <div className="flex flex-wrap -m-2 justify-center">
              {socialNetworks &&
                socialNetworks.map((network, index) => (
                  <div className="w-auto p-2" key={index}>
                    {delve(network, 'isExternal') ? (
                      <Link
                        href={delve(network, 'href')}
                        className="block rounded-full"
                        legacyBehavior
                      >
                        <a
                          target={delve(network, 'target')}
                          className="block py-5 px-8 bg-gray-600 rounded-full"
                        >
                          <div className="flex flex-wrap items-center -m-2">
                            <div className="w-auto p-2">
                              {delve(network, 'socialIcon') &&
                                RenderIcon({
                                  icon: delve(network, 'socialIcon'),
                                })}
                            </div>
                            <div className="flex-1 p-2">
                              <p className="text-gray-300 font-jakarta">
                                {delve(network, 'label')}
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    ) : (
                      <Link
                        href={`${delve(network, 'href')}?lang=${
                          delve(pageData, 'attributes.locale') || 'en'
                        }`}
                        className="block rounded-full"
                        legacyBehavior
                      >
                        <a
                          target={delve(network, 'target')}
                          className="block py-5 px-8 bg-primary rounded-full"
                        >
                          <div className="flex flex-wrap items-center -m-2">
                            <div className="w-auto p-2">
                              {delve(network, 'socialIcon') &&
                                RenderIcon({
                                  icon: delve(network, 'socialIcon'),
                                })}
                            </div>
                            <div className="flex-1 p-2">
                              <p className="text-black font-jakarta">
                                {delve(network, 'label')}
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between -m-2">
          <div className="w-auto p-2">
            <p className="inline-block text-sm font-jakarta font-medium text-white text-opacity-60">
              © {copyRights}
            </p>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-2 sm:-m-7">
              <div className="w-auto p-2 sm:p-7">
                <a
                  className="inline-block font-jakarta text-sm text-white text-opacity-60 hover:text-opacity-100 font-medium transition duration-300"
                  href="#"
                >
                  Regulamin
                </a>
              </div>
              <div className="w-auto p-2 sm:p-7">
                <a
                  className="inline-block font-jakarta text-sm text-white text-opacity-60 hover:text-opacity-100 font-medium transition duration-300"
                  href="#"
                >
                  Polityka Prywatności
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import delve from 'dlv';
import CustomButton from '../../shared/CustomButton';
import { getStrapiMedia } from '../../../utils';
import { IoIosMail } from 'react-icons/io';
import { FaSquarePhone } from 'react-icons/fa6';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import 'github-markdown-css';
import ReactMarkdown from 'react-markdown';
import { twMerge } from 'tailwind-merge';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const RenderIcon = ({ icon }) => {
  switch (icon) {
    case 'PHONE':
      return <FaSquarePhone size={30} color="black" />;
    case 'MAIL':
      return <IoIosMail size={30} color="black" />;
    case 'ADRESS':
      return <FaHome size={30} color="black" />;
    default:
      return null;
  }
};

const Contact = ({ items, header, whiteType }) => {
  const title = delve(header, 'title');
  const label = delve(header, 'label');

  return (
    <section className="my-8 md:my-12 mx-4">
      <div
        className={twMerge(
          `rounded-3xl px-6 max-w-screen-2xl mx-auto`,
          whiteType ? 'bg-white md:px-8 py-0' : 'bg-black md:px-12 py-6'
        )}
      >
        <div className="flex flex-wrap -mx-4">
          <div
            className={twMerge(
              `w-full lg:w-1/2 px-4 md:pt-14 pb-6 md:pb-12 order-last lg:order-first h-full`,
              whiteType ? 'md:pt-8 lg:py-12' : 'md:pt-14 lg:py-24'
            )}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2272.30747055748!2d19.911348989634583!3d49.30372641223486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715ed7bf4293c7f%3A0xc285092db4db2d89!2sQuady%20Zakopane%20-%20Imprezy%20integracyjne%2C%20atv%2C%20offroad!5e0!3m2!1spl!2spl!4v1733442332453!5m2!1spl!2spl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="block max-w-lg mx-auto lg:max-w-none h-3/4 min-h-[450px] w-full rounded-xl object-cover"
            ></iframe>
            <p
              className={twMerge(
                `text-lg font-jakarta mt-6`,
                whiteType ? 'text-black' : 'text-white'
              )}
            >
              Znajdziesz nas na Gubałówce w Zakopanem – w zachodniej części, z
              łatwym dojazdem samochodowym od Kościeliska lub pieszo kolejką PKL
              z centrum miasta. Na szczycie czeka widokowy spacer, a po 1200
              metrach dotrzesz prosto do ZakopaneQuady!
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div
              className={twMerge(
                `max-w-lg mx-auto pt-6 text-center justify-center lg:text-left`,
                whiteType ? 'md:pt-8 lg:py-12 pb-10' : 'pb-16 md:pt-14 lg:py-24'
              )}
            >
              <h5
                className={twMerge(
                  `font-heading font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8`,
                  whiteType ? 'text-black' : 'text-white'
                )}
              >
                {title}
              </h5>
              <p
                className={twMerge(
                  `text-lg font-jakarta text-white mb-16`,
                  whiteType ? 'text-black' : 'text-white'
                )}
              >
                {label}
              </p>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="lg:flex mb-4 justify-items-center lg:justify-items-start"
                >
                  <div className="flex h-12 w-12 items-center justify-center border bg-primary rounded-2xl">
                    {RenderIcon({ icon: delve(item, 'type') })}
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-6">
                    <span
                      className={twMerge(
                        `block font-jakarta text-white text-lg font-medium mb-1`,
                        whiteType ? 'text-black' : 'text-white'
                      )}
                    >
                      {delve(item, 'title')}
                    </span>
                    <p
                      className={twMerge(
                        `text-lg font-jakarta text-white mb-1`,
                        whiteType ? 'text-black' : 'text-white'
                      )}
                    >
                      {delve(item, 'description')}
                    </p>
                    <Link
                      href={delve(item, 'action')}
                      target={
                        delve(item, 'type') === 'ADRESS' ? '_blank' : '_self'
                      }
                    >
                      <dd className={`markdown-body`}>
                        <ReactMarkdown
                          children={delve(item, 'value')}
                          linkTarget="_blank"
                          className={twMerge(
                            `text-lg font-jakarta font-medium text-white cursor-pointer`,
                            whiteType ? 'text-black' : 'text-white'
                          )}
                        ></ReactMarkdown>
                      </dd>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.defaultProps = {};

export default Contact;

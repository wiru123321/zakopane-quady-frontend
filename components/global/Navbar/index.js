import Logo from './Logo';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import delve from 'dlv';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Cta from './cta';
import { getStrapiMedia } from '../../../utils';

const Navigation = ({ navigation, pageData }) => {
  const [header, setHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  const scrollHeader = () => {
    if (window.scrollY >= 160) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && header) {
      // if scroll down hide the navbar
      setShow(false);
      setHeader(true);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);
  return (
    <>
      <div className="transition-all duration-300 p-4 pt-[35.2px] pb-8 z-20">
        <div className="max-w-screen-2xl flex px-0 md:px-6 justify-between h-16 mx-auto">
          <div className="hidden lg:block">
            <Logo
              button={delve(navigation, 'leftButton')}
              locale={delve(pageData, 'attributes.locale')}
            />
          </div>
          <div className="block content-center lg:hidden">
            <Logo
              button={delve(navigation, 'leftButton')}
              locale={delve(pageData, 'attributes.locale')}
              width={80}
              height={40}
            />
          </div>

          <div className="items-center flex-shrink-0 hidden lg:flex">
            <ul className="items-center hidden space-x-3 lg:flex">
              {navigation?.links.map((link, index) => (
                <li key={link.id} className="relative group">
                  <Link
                    href={`${delve(link, 'href')}?lang=${
                      delve(pageData, 'attributes.locale') || 'en'
                    }`}
                    key={`navigationLink-${index}`}
                    legacyBehavior
                  >
                    <a
                      className="lg:mr-10 font-jakarta font-semibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4"
                      key={`link-${index}`}
                      target={delve(link, 'target')}
                    >
                      {delve(link, 'label')}
                    </a>
                  </Link>
                  {link?.deepLinks.length > 0 && (
                    <div className="absolute lg:-left-48 top-1 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                      <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-30">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <Image
                                src={getStrapiMedia(
                                  delve(
                                    link.deepLinks[0],
                                    'image.data.attributes.url'
                                  )
                                )}
                                width={280}
                                height={140}
                                alt="Algochurn"
                                className="flex-shrink-0 rounded-md shadow-2xl"
                              />
                            </div>
                            <div>
                              {link.deepLinks.map((deepLink, index) => {
                                return (
                                  <Link
                                    href={`${delve(deepLink, 'href')}?lang=${
                                      delve(pageData, 'attributes.locale') ||
                                      'en'
                                    }`}
                                    key={`navigationLink-${index}`}
                                    className="flex space-x-2"
                                    legacyBehavior
                                  >
                                    <a className="inline">
                                      <div>
                                        <h4 className="text-xl font-jakarta font-bold mb-1 text-black dark:text-white">
                                          {delve(deepLink, 'label')}
                                        </h4>
                                        <p className="text-neutral-700 font-jakarta text-sm max-w-[10rem] dark:text-neutral-300">
                                          {delve(deepLink, 'description')}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li className="hidden lg:flex">
                <Cta
                  href={delve(navigation, 'rightButton.href')}
                  target={delve(navigation, 'rightButton.target')}
                  label={delve(navigation, 'rightButton.label')}
                  className="py-4 px-10"
                  textClassName="font-bold text-xl"
                />
              </li>
            </ul>
          </div>

          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" />
            <Dialog.Panel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10">
              <div className="flex items-center justify-between">
                <p className="-m-1.5 p-1.5">
                  <Logo
                    button={delve(navigation, 'leftButton')}
                    locale={delve(pageData, 'attributes.locale')}
                  />
                </p>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-700">
                  <div className="space-y-2 py-6">
                    {navigation?.links.map((link, index) => (
                      <a key={link.id} className="flex">
                        {link?.deepLinks.length > 0 ? (
                          <div className="block">
                            <button
                              type="button"
                              onClick={() => setAccordion(!accordion)}
                              className="-mx-3 w-auto font-jakarta text-start flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-base font-bold leading-7 text-black"
                            >
                              {delve(link, 'label')}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#000"
                                className="ms-auto block w-4 h-4 text-gray-600"
                              >
                                <path
                                  d="M19.5 8.25L12 15.75L4.5 8.25"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  className={`transform origin-center transition duration-200 ease-out ${
                                    accordion && '!rotate-180'
                                  }`}
                                ></path>
                              </svg>
                            </button>
                            <div
                              id={`accordion-text-nav`}
                              role="region"
                              aria-labelledby={`accordion-title-nav`}
                              className={`grid text-sm overflow-hidden text-black transition-all duration-300 ease-in-out ${
                                accordion
                                  ? 'grid-rows-[1fr] opacity-100'
                                  : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <div className="overflow-hidden">
                                <div className="grid grid-cols-2 gap-6">
                                  {link.deepLinks.map((deepLink, index) => {
                                    return (
                                      <div>
                                        <ul className="mt-3 text-[15px]">
                                          <Link
                                            href={`${delve(
                                              deepLink,
                                              'href'
                                            )}?lang=${
                                              delve(
                                                pageData,
                                                'attributes.locale'
                                              ) || 'en'
                                            }`}
                                            key={`navigationLink-${index}`}
                                            onClick={() => {
                                              closeMenu();
                                              setAccordion(!accordion);
                                            }}
                                            className="flex space-x-2"
                                            legacyBehavior
                                          >
                                            <a className="inline">
                                              <div>
                                                <h4 className="text-xl font-jakarta font-bold mb-1 text-black dark:text-white">
                                                  {delve(deepLink, 'label')}
                                                </h4>
                                                <p className="text-neutral-700 font-jakarta text-sm max-w-[10rem] dark:text-neutral-300">
                                                  {delve(
                                                    deepLink,
                                                    'description'
                                                  )}
                                                </p>
                                              </div>
                                            </a>
                                          </Link>
                                        </ul>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={`${delve(link, 'href')}?lang=${
                              delve(pageData, 'attributes.locale') || 'en'
                            }`}
                            onClick={() => closeMenu()}
                            legacyBehavior
                          >
                            <a
                              className="lg:mr-10 font-jakarta font-semibold hover:text-primary"
                              key={`link-${index}`}
                              target={delve(link, 'target')}
                            >
                              {delve(link, 'label')}
                            </a>
                          </Link>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
          <div className="flex items-center lg:hidden">
            <Cta
              href={delve(navigation, 'rightButton.href')}
              target={delve(navigation, 'rightButton.target')}
              label={delve(navigation, 'rightButton.label')}
              className="py-3 px-3"
              textClassName="font-bold text-md"
            />
            <button className="p-4" onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon className="h-7 w-7 text-black" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          `transition-all duration-300 top-0 ${
            show && header
              ? 'fixed w-full bg-[#ffffffCC] z-20 py-3 opacity-100'
              : 'fixed w-full bg-[#ffffffCC] -z-10 py-3 opacity-0'
          }`
        )}
      >
        <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6">
          <Logo
            button={delve(navigation, 'leftButton')}
            locale={delve(pageData, 'attributes.locale')}
          />

          <div className="items-center flex-shrink-0 hidden lg:flex">
            <ul className="items-center hidden space-x-3 lg:flex">
              {navigation?.links.map((link, index) => (
                <li key={link.id} className="relative group">
                  <Link
                    href={`${delve(link, 'href')}?lang=${
                      delve(pageData, 'attributes.locale') || 'en'
                    }`}
                    key={`navigationLink-${index}`}
                    legacyBehavior
                  >
                    <a
                      className="lg:mr-10 font-jakarta font-semibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4"
                      key={`link-${index}`}
                      target={delve(link, 'target')}
                    >
                      {delve(link, 'label')}
                    </a>
                  </Link>
                  {link?.deepLinks.length > 0 && (
                    <div className="absolute lg:-left-48 top-1 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                      <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-30">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <Image
                                src={getStrapiMedia(
                                  delve(
                                    link.deepLinks[0],
                                    'image.data.attributes.url'
                                  )
                                )}
                                width={280}
                                height={140}
                                alt="Algochurn"
                                className="flex-shrink-0 rounded-md shadow-2xl"
                              />
                            </div>
                            <div>
                              {link.deepLinks.map((deepLink, index) => {
                                return (
                                  <Link
                                    href={`${delve(deepLink, 'href')}?lang=${
                                      delve(pageData, 'attributes.locale') ||
                                      'en'
                                    }`}
                                    key={`navigationLink-${index}`}
                                    className="flex space-x-2"
                                    legacyBehavior
                                  >
                                    <a className="inline">
                                      <div>
                                        <h4 className="text-xl font-jakarta font-bold mb-1 text-black dark:text-white">
                                          {delve(deepLink, 'label')}
                                        </h4>
                                        <p className="text-neutral-700 font-jakarta text-sm max-w-[10rem] dark:text-neutral-300">
                                          {delve(deepLink, 'description')}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li className="hidden lg:flex">
                <Cta
                  href={delve(navigation, 'rightButton.href')}
                  target={delve(navigation, 'rightButton.target')}
                  label={delve(navigation, 'rightButton.label')}
                  className="py-4 px-10"
                />
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:hidden">
            <Cta
              href={delve(navigation, 'rightButton.href')}
              target={delve(navigation, 'rightButton.target')}
              label={delve(navigation, 'rightButton.label')}
            />
            <button className="p-4" onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon className="h-7 w-7 text-black" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Navigation.defaultProps = {};

export default Navigation;

import delve from 'dlv';
import Link from 'next/link';
import Image from 'next/Image';
import { getStrapiMedia } from '../../../utils';

const Logo = ({ button, locale, width = 120, height = 70 }) => {
  return (
    <Link
      href={`${delve(button, 'href')}?lang=${locale || 'en'}`}
      legacyBehavior
    >
      <a className="flex title-font font-medium items-center text-gray-900">
        <Image
          src={getStrapiMedia(delve(button, 'image.data.attributes.url'))}
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
};

export default Logo;

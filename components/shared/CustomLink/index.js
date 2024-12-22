import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const CustomLink = ({
  label,
  href,
  locale,
  target,
  isExternal,
  textClassName,
  linkClassName,
}) => {
  if (isExternal) {
    return (
      <Link href={href} legacyBehavior className={linkClassName}>
        <a className={twMerge('font-jakarta', textClassName)} target={target}>
          {label}
        </a>
      </Link>
    );
  } else {
    return (
      <Link
        href={`${href}?lang=${locale || 'en'}`}
        legacyBehavior
        className={linkClassName}
      >
        <a className={twMerge('font-jakarta', textClassName)} target={target}>
          {label}
        </a>
      </Link>
    );
  }
};

export default CustomLink;

import CustomLink from '../CustomLink';
import { twMerge } from 'tailwind-merge';

const CustomButton = ({
  href,
  target,
  label,
  className,
  theme,
  isExternal,
  textClassName,
  linkClassName,
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        `py-2 px-4 ${
          theme === 'primary'
            ? 'bg-primary hover:bg-black hover:text-primary hover:border-primary'
            : 'bg-white hover:bg-[#B2B2B3]'
        } text-black transition ease-in duration-200 min-h-max text-center text-base font-semibold shadow-md rounded-xl lg:block`,
        className
      )}
    >
      <CustomLink
        href={href}
        target={target}
        label={label}
        isExternal={isExternal}
        textClassName={textClassName}
        linkClassName={linkClassName}
      />
    </button>
  );
};

export default CustomButton;

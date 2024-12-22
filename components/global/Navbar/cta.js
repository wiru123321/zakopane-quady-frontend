import CustomLink from '../../shared/CustomLink';
import { twMerge } from 'tailwind-merge';

const Cta = ({ href, target, label, className, textClassName }) => {
  return (
    <button
      type="button"
      className={twMerge(
        'py-2 px-4 bg-primary hover:bg-black text-black hover:text-primary transition ease-in duration-200 min-h-max text-center text-base font-semibold shadow-md rounded-xl lg:block',
        className
      )}
    >
      <CustomLink
        href={href}
        target={target}
        label={label}
        textClassName={textClassName}
        isExternal={true}
      />
    </button>
  );
};

export default Cta;

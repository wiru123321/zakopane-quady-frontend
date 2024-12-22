export const skuterAdapter = ({
  slug,
  images,
  name,
  information,
  category,
  locale,
}) => {
  return {
    images,
    name,
    slug,
    information,
    category,
    locale,
  };
};

export const skuteryAdapter = (skutery) => {
  return skutery.map((skuter) => skuterAdapter({ ...skuter }));
};

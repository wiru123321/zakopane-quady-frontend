export const quadAdapter = ({
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

export const quadsAdapter = (quads) => {
  return quads.map((quad) => quadAdapter({ ...quad }));
};

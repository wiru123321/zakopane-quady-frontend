export const buggyAdapter = ({
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

export const buggiesAdapter = (buggies) => {
  return buggies.map((buggy) => buggyAdapter({ ...buggy }));
};

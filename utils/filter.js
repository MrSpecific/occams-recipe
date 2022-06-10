const category = ({ category: categoryFilter, recipe }) => {
  if (!recipe) return false;
  if (!categoryFilter) return true;

  return !!recipe.categories.find(
    (category) => category.slug.toLowerCase() === categoryFilter.toLowerCase()
  );
};

const filter = {
  category,
};

export default filter;

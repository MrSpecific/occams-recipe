import { fetchEntries } from './contentful';

export const getAllRecipeIds = () => {
  const titles = ['test', 'Perfect Rice'];

  return titles.map((title) => {
    return {
      params: {
        id: title.replace(/\.md$/, ''),
      },
    };
  });
};

export const getRecipeData = async (id) => {
  const allRecipes = await fetchEntries({
    content_type: 'recipe',
  });

  return {
    id,
    allRecipes,
  };
};

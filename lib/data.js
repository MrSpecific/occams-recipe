import { fetchEntries } from './contentful';

export const recipes = async () => {
  const allRecipes = await fetchEntries({
    'content_type': 'recipe',
  })

  return allRecipes
}

export const getIds = (entries) => {
  const ids = entries.map(entry => entry.fields.slug)

  return ids
}

export const getPaths = (entries) => {
  const paths = entries.map(entry => {
    return { params: { slug: entry.fields.slug } }
  })

  return paths
}

export const getEntry = (options) => {
  let entry;

  try {
    entry = options.entries.find(p => p.fields.slug === options.slug);
  } catch (error) {
    entry = options.entries[1];
  }

  return entry;
}
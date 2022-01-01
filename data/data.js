export const getIds = (entries) => {
  const ids = entries.map((entry) => entry.fields.slug);

  return ids;
};

export const getPaths = (entries, identifier = 'slug') => {
  const paths = entries.map((entry) => {
    return {
      params: {
        [identifier]: entry.slug || entry.fields.slug,
      },
    };
  });

  return paths;
};

export const getEntry = (options) => {
  let entry;

  try {
    entry = options.entries.find((p) => p.fields.slug === options.slug);
  } catch (error) {
    // eslint-disable-next-line prefer-destructuring
    entry = options.entries[1];
  }

  return entry;
};

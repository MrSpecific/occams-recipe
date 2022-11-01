import { DocumentIcon, BookIcon } from '@sanity/icons';

export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  icon: BookIcon,
  groups: [
    {
      default: true,
      name: 'info',
      title: 'Info',
    },
    {
      name: 'vitals',
      title: 'Vitals',
    },
    {
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'info',
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
      group: 'info',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      group: 'info',
    },
    {
      name: 'measures',
      title: 'Measures',
      type: 'array',
      of: [{ type: 'measure' }],
      group: 'vitals',
    },
  ],
  preview: {
    select: {
      active: 'active',
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};

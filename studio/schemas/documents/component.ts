import { IceCreamIcon } from '@sanity/icons';

export default {
  name: 'component',
  title: 'Component',
  type: 'document',
  icon: IceCreamIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
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

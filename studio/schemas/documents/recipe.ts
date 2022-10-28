import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      default: true,
      name: 'info',
      title: 'Info',
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
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'info',
    },
    // Slug
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
      group: 'info',
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
      }
    },
  },
}

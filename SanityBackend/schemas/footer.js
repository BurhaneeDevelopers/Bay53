import {idText} from 'typescript'
import {defineType, defineField} from 'sanity'

export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    // Links
    defineField({
      name: 'linkOne',
      title: 'Quick Contact',
      type: 'array',
      of: [
        {
          name: 'collectionGroup',
          title: 'Collection group',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Link',
              name: 'href',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'linkTwo',
      title: 'Privacy Policy',
      type: 'array',
      of: [
        {
          name: 'collectionGroup',
          title: 'Collection group',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Link',
              name: 'href',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            },
          ],
        },
      ],
    }),
  ],
}

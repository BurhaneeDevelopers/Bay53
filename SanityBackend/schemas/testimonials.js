import { idText } from "typescript";

export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Client Name',
    },
    {
      name: 'post',
      type: 'string',
      title: "Client's Post Example: CEO of Google",
    },
    {
      name:"id",
      type: "string",
      title: "id(Required)"
    },
    {
      title: 'Client Image',
      name: 'clientimage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'content',
      title: "Client's Testimonial",
      type: 'array',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}

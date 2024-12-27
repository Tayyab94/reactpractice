export default {
    name: 'authod',
    type: 'document',
      title: 'Author',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options:{
          hotspot:true
        }
      },

    ]
  }
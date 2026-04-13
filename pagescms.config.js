export default {
  collections: [
    {
      name: "courses",
      label: "Courses",
      folder: "data/courses.json",
      create: true,
      fields: [
        { name: "id", label: "ID", widget: "number" },
        { name: "title_en", label: "Title (EN)", widget: "string" },
        { name: "title_ar", label: "Title (AR)", widget: "string" },
        { name: "price", label: "Price", widget: "number" },
        { name: "image", label: "Image", widget: "image" }
      ]
    },
    {
      name: "instructors",
      label: "Instructors",
      folder: "data/instructors.json",
      create: true,
      fields: [
        { name: "id", label: "ID", widget: "number" },
        { name: "name_en", label: "Name (EN)", widget: "string" },
        { name: "name_ar", label: "Name (AR)", widget: "string" },
        { name: "title_en", label: "Title (EN)", widget: "string" },
        { name: "title_ar", label: "Title (AR)", widget: "string" },
        { name: "bio_en", label: "Bio (EN)", widget: "text" },
        { name: "bio_ar", label: "Bio (AR)", widget: "text" },
        { name: "image", label: "Image", widget: "image" }
      ]
    }
  ]
};
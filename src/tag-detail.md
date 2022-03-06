---
pagination:
  data: collections
  size: 1
  alias: tag
  addAllPagesToCollections: true
layout: layouts/tag_detail.html
eleventyComputed:
  title: Tagged “{{ tag }}”
permalink: /tags/{{ tag | slug }}/
---

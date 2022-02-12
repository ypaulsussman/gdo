---
title: "What I Do"
layout: 'layouts/content_list.html'
collection_lookup: "whatIDo"
pagination:
  data: collections.whatIDo
  size: 3
permalink: 'wid{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
---

"foo bar baz etc; here's the wid page"
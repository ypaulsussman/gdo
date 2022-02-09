---
title: "What I Do"
layout: 'layouts/content_listview.html'
collection_lookup: "whatIDo"
pagination:
  data: collections.whatIDo
  size: 3
permalink: 'what-i-do{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
---

"foo bar baz etc; here's the wid page"
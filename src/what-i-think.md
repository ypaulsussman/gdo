---
title: "What I Think"
layout: 'layouts/content_listview.html'
collection_lookup: "whatIThink"
pagination:
  data: collections.whatIThink
  size: 3
permalink: 'what-i-think{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
---

"foo bar baz etc; here's the wit page"
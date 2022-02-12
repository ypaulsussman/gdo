---
title: "What I Read"
layout: 'layouts/content_list.html'
collection_lookup: "whatIRead"
pagination:
  data: collections.whatIRead
  size: 3
permalink: 'wir{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
---

"foo bar baz etc; here's the wir page"
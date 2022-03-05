---
title: "What I Read"
layout: 'layouts/content_list.html'
pagination:
  data: collections.whatIRead
  size: 24
permalink: 'wir{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
---

When I read, watch -- or sometimes even attend -- something new, I often take notes.

Those notes go into a ~three-track pipeline:

```
State 00: Dormant
State 01a: Notetaking In Process
State 01b: Extracted (Notes Completed)
State 02: Transformed (Notes Revisited/Edited/Pruned)
State 03: Loaded (Notes Added to SRS)
State 04: Blogged
```

**Track 01:** After creating them, I sometimes realize a note isn't, in fact, directly pertinent to any topics I'm focusing on. 

Such notes' path is `01a => 01b => 02 => 00`. (_They thus remain available, if my mental wandering shifts direction._)

**Track 02:** Technical notes culminate in `State 03`, when I add them to Anki.

(_"Technical" here being taken to mean "declarative knowledge/trivially-falsifiable facts, usually about programming-language syntax, web/computing architecture, or Ukrainian vocabulary"._)

**Track 03:** Non-technical notes culminate in `State 04`, when I revisit them for a third time.

(_Currently "a second time", as I'm waiting to refill_ [`mokko`](https://github.com/ypaulsussman/mokko_api/) _until after I rewrite the whole thing._)
# Lit-Gigwiget

Building a music fake book app using [Lit](<https://lit.dev>).

At this point, we have a working

```html
<chord-diagram chord="Cmin7" instrument="Standard Ukulele"></chord-diagram>
```

It supports six instruments:

* Standard Ukulele
* Standard Guitar
* Standard Mandolin
* Drop-D Guitar
* 5ths tuned Ukulele
* Baritone Ukulele

It is also dynamically generating quite a number of chord *variants*:

`maj`, `min`, `dim`, `aug`, `7`, `m7`, `maj7`, `aug7`, `dim7`, `m7b5`, `mMaj7`, `sus2`, `sus4`, `7sus2`, `7sus4`, `9`, `m9`, `maj9`, `11`, `m11`, `13`, `m13`, `5`, `6`, `m6`, `add9`, `mAdd9`

And any of seventeen key signatures, from `A` to `G#/Ab`.
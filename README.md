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

## Todo / Extensions and expansions

There are things I would like to explore adding to this - while the facility is pretty solid as-is, the way the thing calculates the actual notes on the strings is *lazy*. I would like to be able to define system defaults, and user defaults. And perhaps even song defaults. With something like that, when we display a chord chart, it might need to check for **context** - that is, do we have a current "defaults" in the context object heirarchy that might override the system generated chord?

With that, when a chord loads we are going to check "is there a current song, and does the current song include an override definition? If not, is there a user default for the current chord? If not, is there a system default for the current chord?" In that way, we can customize the bejabbers out of each chord, and maintain a persistence of history.

So the `<chord-diagram>`, when it loads into the HTML, should be context-aware (I think). That is, if there *is* an existing context/config setup, it should see it - and if not, it should likely request that one *be* set up. The `<chord-diagram>` might exist in the context of a `<chord-sheet>`, which is basically a list element for those chord elements, and that might be the context container. Or it may be that, for user-defined overrides, the user (likely defined at a higher level) defines particular chord/instrument combinations.

In this way, we can have the calculated "fallback", and the possibility of customization.
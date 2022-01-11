## Description

Each mode is described as simple as an array of combinations.  
Each combination is an array that should have a maximum of 2 items.
Each item is described as `lhs` beats `rhs` aka `lhs -> rhs`.

Ex.

```js
[ROCK, (beats ->) SCISSORS],
[PAPER, (beats ->) ROCK],
[SCISSORS, (beats ->) PAPER],
```

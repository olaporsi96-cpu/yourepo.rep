## Control Flow & Comparison ##
The Hidden Pitfalls of Loose Equality (==)
The loose equality operator (==) tries to match values by implicitly changing their data types behind the scenes (type coercion). This automated type-guessing leads to unexpected logic bugs:

JavaScript
// Hidden validation bugs caused by loose type matching
let runtimeInput = " "; 
if (runtimeInput == 0) {
  // True! The browser implicitly changes an empty string space into a number zero, breaking validation rules
}
The Solution:
Always use strict equality (===). It validates that both the value and the underlying data type match perfectly, eliminating type coercion bugs.

Logical Operator Divergence (?? vs ||)
|| (Logical OR): Triggers its fallback value whenever the left-side expression evaluates to any falsy value (including false, 0, empty strings "", null, or undefined).

?? (Nullish Coalescing): Triggers its fallback value only if the left-side expression is explicitly null or undefined.

Bug Point Scenario:
JavaScript
let userSavedScore = 0;

let displayScoreA = userSavedScore || 100; // Returns 100 (Wipes out a valid score of 0!)
let displayScoreB = use
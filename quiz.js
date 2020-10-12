7.
new Number() is a built-in function constructor.
When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true.
However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.


18.
This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.
JavaScript checks if the objects have a reference to the same location in memory.

20.
With "use strict", you can make sure that you don't accidentally declare global variables. 
# randomBox

## RandomBox

This module creates an object from an array, with a next function that return each time a different random item from the array (true random).

##### Behavior
When construction of new randomBox, the given array is randomized in a cycle variable, and also backuped in an archive variable.
Each randomBox.next() call, the first element of the cycle array is removed and returned. When the cycle array is empty, it is reloaded/randomized from the archive.

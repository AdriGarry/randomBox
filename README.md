# randomBox

[![Version](https://img.shields.io/github/package-json/v/adrigarry/randomBox)](https://github.com/AdriGarry/randomBox/tags)
![Languages](https://img.shields.io/github/languages/count/adrigarry/randomBox)
![Top language](https://img.shields.io/github/languages/top/adrigarry/randomBox)
![Total lines](https://img.shields.io/tokei/lines/github/adrigarry/randomBox)
![Code size](https://img.shields.io/github/languages/code-size/adrigarry/randomBox)
![Repo size](https://img.shields.io/github/repo-size/adrigarry/randomBox)

[![Pull request](https://img.shields.io/github/issues-pr/adrigarry/randomBox)](https://github.com/AdriGarry/randomBox/pulls)
[![Commit](https://img.shields.io/github/commit-activity/w/adrigarry/randomBox)](https://github.com/AdriGarry/randomBox/commits/master)
[![Last commit](https://img.shields.io/github/last-commit/adrigarry/randomBox)](https://github.com/AdriGarry/randomBox/commits/master)

NPM: https://www.npmjs.com/package/randombox

## RandomBox

This module creates an object from an array, with a next function that return each time a different random item from the array.

##### Behavior

When construction of new randomBox, the given array is randomized in a cycle variable, and also backuped in an archive variable.
On each randomBox.next() call, the first element of the cycle array is removed and returned. When the cycle array is empty, it is reloaded/randomized from the archive.

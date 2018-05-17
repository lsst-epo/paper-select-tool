# paper-select-tool

[![npm version](https://badge.fury.io/js/paper-select-tool.svg)](https://badge.fury.io/js/paper-select-tool)

A [Paper.js](http://paperjs.org/) based selection tool.

Adds a Paper.js based tool to a canvas. Currently a lasso, rectangle and circle selection tool are implemented.

Install
-------

The paper-select-tool library is available on npm.

```bash
npm i @jmatt/paper-select-tool
```

Usage
-----

To use it, import it and use one of the selection tools.

```javascript
import * as pst from 'paper-select-tool';

var core = document.getElementById('core');
var project;
window.onload = function() {
  pst.lasso(core);
}
// ...
var things = [{ point: new paper.Point(100, 100),
                id: 'big bada boom' }];
var inSelection = pst.hitFilter(things);
// returns the filtered collection of objects with points in the selection.
```

Examples
--------

Examples can be found in the `examples` directory.

License
-------

The MIT License. See the [LICENSE file](https://github.com/lsst-epo/paper-select-tool/blob/master/LICENSE).
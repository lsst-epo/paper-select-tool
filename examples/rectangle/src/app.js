// or var pst = require('paper-select-tool);
import * as pst from 'paper-select-tool';

var core = document.getElementById('core');

window.onload = function() {
  core.style.height = '100%';
  core.style.width = '100vw';
  core.height = document.body.height;
  core.width = document.body.width;
  var settings = pst.Settings();
  pst.rectangle(settings, core);
};

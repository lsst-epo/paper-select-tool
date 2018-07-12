// or var pst = require('paper-select-tool);
import * as pst from 'paper-select-tool';
import * as paper from 'paper';

var core = document.getElementById('core'),
  core2 = document.getElementById('core2');

window.onload = function() {
  core.style.background = '#eeeeee';
  core.style.height = '50%';
  core.style.width = '100vw';
  core.height = document.body.height;
  core.width = document.body.width;
  core2.style.background = '#dedede';
  core2.style.height = '50%';
  core2.style.width = '100vw';
  core2.height = document.body.height;
  core2.width = document.body.width;
  window.paper = paper;
  var settings = new pst.Settings();
  // configure settings through the pst.settings object.
  settings.strokeColor = '#08BCBC';
  pst.lasso(settings, core);

  var settings2 = new pst.Settings();
  // configure settings through the pst.settings object.
  settings2.strokeColor = '#08BCBC';
  pst.lasso(settings2, core2);
};

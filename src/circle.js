'use strict';

import * as paper from 'paper';

import { settings } from './index.js';

export default function rectangleInit(canvas) {
  if (!canvas) canvas = document.createElement('canvas');
  var ps = paper.default.setup(canvas);
  settings.scope = ps;
  var path1,
    point1,
    path2,
    segment,
    movePath = false,
    tool = new ps.Tool(),
    // style
    alpha = settings.alpha,
    lightness = settings.lightness,
    hue = settings.hue,
    saturation = settings.saturation,
    strokeColor = settings.strokeColor,
    hitOptions = {
      segments: true,
      stroke: true,
      fill: true,
      tolerance: 5,
    };

  function stylePath(path) {
    path.fillColor = {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: alpha,
    };
    path.strokeColor = strokeColor;
    path.closed = true;
  }

  tool.onMouseDown = function(event) {
    segment = path2 = null;
    var hitResult = ps.project.hitTest(event.point, hitOptions);
    if (!hitResult) {
      if (path1) {
        path1.selected = false;
        ps.project.activeLayer.removeChildren();
      }
      point1 = event.point;
      path1 = new ps.Path.Circle({ center: point1, radius: 0 });
      stylePath(path1);
      path1.fullySelected = true;
    } else {
      if (event.modifiers.shift) {
        if (hitResult.type == 'segment') {
          hitResult.segment.remove();
        }
        return;
      }
      if (hitResult) {
        path2 = hitResult.item;
      }
      movePath = hitResult.type == 'fill';
      if (movePath) ps.project.activeLayer.addChild(hitResult.item);
    }
  };

  tool.onMouseMove = function(event) {
    ps.project.activeLayer.selected = false;
    if (event.item) event.item.selected = true;
  };

  tool.onMouseDrag = function(event) {
    // Every drag event, add a point to the path at the current
    // position of the mouse:
    if (path2) {
      path2.position.x += event.delta.x;
      path2.position.y += event.delta.y;
    } else if (path1) {
      var radius = event.point.getDistance(point1);
      ps.project.activeLayer.removeChildren();
      path1 = new ps.Path.Circle({ center: point1, radius: radius });
      stylePath(path1);
    }
  };

  tool.onMouseUp = function(event) {
    path1.fullySelected = true;
  };

  console.debug('Select Cricle Added!');
  ps.project.view.draw();
  return ps;
}

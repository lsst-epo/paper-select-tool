'use strict';

import * as paper from 'paper';

import { settings } from './index.js';

export default function lassoInit (canvas) {
  if (!canvas)
    canvas = document.createElement('canvas');
  var ps = paper.default.setup(canvas);
  settings.scope = ps;

  var path1,
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
        tolerance: 5
      };

  function stylePath(path) {
    path.fillColor = { hue: hue, saturation: saturation, 
                       lightness: lightness, alpha: alpha };
    path.strokeColor = strokeColor;
    path.closed = true;
  }

  tool.onMouseDown = function (event) {
    segment = path2 = null;
    var hitResult = ps.project.hitTest(event.point, hitOptions);
    // If we produced a path before, deselect it:
    if (!hitResult) {
      if (path1) {
        path1.selected = false;
        ps.project.activeLayer.removeChildren();
      }
      path1 = new ps.Path();
      stylePath(path1)
      // Select the path, so we can see its segment points:
      path1.fullySelected = true;
    }
    else {
      if (event.modifiers.shift) {
        if (hitResult.type == 'segment') {
          hitResult.segment.remove();
        }
        return;
      }
      if (hitResult) {
        path2 = hitResult.item;
        if (hitResult.type == 'segment') {
          segment = hitResult.segment;
        } else if (hitResult.type == 'stroke') {
          var location = hitResult.location;
          segment = path2.insert(location.index + 1, event.point);
          path2.smooth();
        }
      }
      movePath = hitResult.type == 'fill';
      if (movePath)
        ps.project.activeLayer.addChild(hitResult.item);
    }
  };
  tool.onMouseMove = function (event) {
    ps.project.activeLayer.selected = false;
    if (event.item)
      event.item.selected = true;
  };
  tool.onMouseDrag = function (event) {
    // Every drag event, add a point to the path at the current
    // position of the mouse:
    if (segment) {
      segment.point.x += event.delta.x;
      segment.point.y += event.delta.y;
      path2.smooth();
    }
    else if (path2) {
      path2.position.x += event.delta.x;
      path2.position.y += event.delta.y;
    }
    else if (path1) {
      path1.add(event.point);
    }
  };
  tool.onMouseUp = function (event) {
    var segmentCount = path1.segments.length;
    // When the mouse is released, simplify it:
    path1.smooth();
    path1.simplify();
    // Select the path, so we can see its segments:
    path1.fullySelected = true;
  };
  console.debug('Select Lasso Added!');
  ps.project.view.draw();
  return ps;
}
'use strict';

export default function rectangleInit (canvas) {
  if (!canvas)
    canvas = document.createElement('canvas');
  canvas.style.height = '100%';
  canvas.style.width = '100vw';
  canvas.height = document.body.height;
  canvas.width = document.body.width;
  // Create an empty project for the canvas.
  paper.setup(canvas);
  var path1,
      point1,
      path2,
      segment,
      movePath = false,
      tool = new paper.Tool(),
      hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
      };

  tool.onMouseDown = function (event) {
    segment = path2 = null;
    var hitResult = paper.project.hitTest(event.point, hitOptions);
    // If we produced a path before, deselect it:
    if (!hitResult) {
      if (path1) {
        path1.selected = false;
        path1 = null;
        paper.project.activeLayer.removeChildren();
      }
      point1 = event.point;
      var size = new paper.Size(0, 0);
      var rect = new paper.Rectangle({point: point1, size: size});

      path1 = new paper.Path(rect);
      var lightness = 0.28, hue = 180, saturation = 0.93;
      path1.fillColor = { hue: hue, saturation: saturation, lightness: lightness, alpha: 0.2 };
      path1.closed = true;
      path1.strokeColor = '#BEE7F5';
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
      }
      movePath = hitResult.type == 'fill';
      if (movePath)
        paper.project.activeLayer.addChild(hitResult.item);
    }
  };

  tool.onMouseMove = function (event) {
    paper.project.activeLayer.selected = false;
    if (event.item)
      event.item.selected = true;
  };

  tool.onMouseDrag = function (event) {
    // Every drag event, add a point to the path at the current
    // position of the mouse:
    if (path2) {
      path2.position.x = path2.position.x + event.delta.x;
      path2.position.y = path2.position.y + event.delta.y;
    }
    else if (path1) {
      console.log('mouse drag');
      var point2 = new paper.Point(event.x, event.y);
      console.log('point2 = ', event.point);
      var rect = new paper.Rectangle({from: point1, to: event.point});
      path1 = new paper.Path.Rectangle(rect);
      var lightness = 0.28, hue = 180, saturation = 0.93;
      path1.fillColor = { hue: hue, saturation: saturation, lightness: lightness, alpha: 0.2 };
      path1.closed = true;
      path1.strokeColor = '#BEE7F5';
      paper.project.view.draw();
      //path1.add(event.point);
    }
  };

  tool.onMouseUp = function (event) {
    var segmentCount = path1.segments.length;
    // When the mouse is released, simplify it:
    //path1.smooth();
    //path1.simplify();
    // Select the path, so we can see its segments:
    path1.fullySelected = true;
  };

  console.log('Select Rectangle Added!');
  paper.project.view.draw();
  return paper.project;
}
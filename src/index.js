'use strict';

import lassoInit from './lasso';
export const lasso = lassoInit;

import rectangleInit from './rectangle';
export const rectangle = rectangleInit;

import circleInit from './circle';
export const circle = circleInit;

class Settings {
  constructor() {
    this.alpha = 0.2;
    this.lightness = 0.28;
    this.hue = 180;
    this.saturation = 0.93;
    this.strokeColor = '#BEE7F5';
  }

  get scope() {
    return this._scope;
  }

  set scope(scope) {
    this._scope = scope;
  }

  get alpha() {
    return this._alpha;
  }

  set alpha(alpha) {
    this._alpha = alpha;
  }

  get lightness() {
    return this._lightness;
  }

  set lightness(lightness) {
    this._lightness = lightness;
  }

  get hue() {
    return this._hue;
  }

  set hue(hue) {
    this._hue = hue;
  }

  get saturation() {
    return this._saturation;
  }

  set saturation(saturation) {
    this._saturation = saturation;
  }

  get strokeColor() {
    return this._strokeColor;
  }

  set strokeColor(strokeColor) {
    this._strokeColor = strokeColor;
  }
}
export let settings = new Settings();

export function hitsFilter(points) {
  var hits = [];
  points.forEach(function(p) {
    h = settings.scope.hitTest(p['point']);
    if (h) {
      hits.push(p);
    }
  });
  return hits;
}

'use strict';

import * as paper from 'paper';
paper.install(window);

import lassoInit from './lasso';
export const lasso = lassoInit;

import rectangleInit from './rectangle';
export const rectangle = rectangleInit;

import circleInit from './circle';
export const circle = circleInit;


export function hitsFilter(points) {
    var hits = [];
    points.forEach(function (p) {
        h = paper.project.hitTest(p['point']);
        if (h) {
            hits.push(p);
        }
    });
    return hits;
}
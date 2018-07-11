!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("paper")):"function"==typeof define&&define.amd?define(["paper"],t):"object"==typeof exports?exports.PST=t(require("paper")):e.PST=t(e.paper)}(window,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(t,o){t.exports=e},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t||(t=document.createElement("canvas"));var o=new n.default.PaperScope;o.setup(t),e.scope=o;var r,i,s,l=new o.Tool,a=e.alpha,u=e.lightness,c=e.hue,f=e.saturation,p=e.strokeColor,d={segments:!0,stroke:!0,fill:!0,tolerance:5};function h(e){e.fillColor={hue:c,saturation:f,lightness:u,alpha:a},e.strokeColor=p,e.closed=!0}return l.onMouseDown=function(e){s=null;var t=o.project.hitTest(e.point,d);if(t){if(e.modifiers.shift)return void("segment"==t.type&&t.segment.remove());t&&(s=t.item),"fill"==t.type&&o.project.activeLayer.addChild(t.item)}else r&&(r.selected=!1,o.project.activeLayer.removeChildren()),i=e.point,h(r=new o.Path.Circle({center:i,radius:0})),r.fullySelected=!0},l.onMouseMove=function(e){o.project.activeLayer.selected=!1,e.item&&(e.item.selected=!0)},l.onMouseDrag=function(e){if(s)s.position.x+=e.delta.x,s.position.y+=e.delta.y;else if(r){var t=e.point.getDistance(i);o.project.activeLayer.removeChildren(),h(r=new o.Path.Circle({center:i,radius:t}))}},l.onMouseUp=function(e){r.fullySelected=!0},console.debug("Select Circle Added!"),o.project.view.draw(),o};var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(0))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t||(t=document.createElement("canvas"));var o=new n.default.PaperScope;o.setup(t),e.scope=o;var r,i,s,l=new o.Tool,a=e.alpha,u=e.lightness,c=e.hue,f=e.saturation,p=e.strokeColor,d={segments:!0,stroke:!0,fill:!0,tolerance:5};function h(e){e.fillColor={hue:c,saturation:f,lightness:u,alpha:a},e.strokeColor=p,e.closed=!0}return l.onMouseDown=function(e){s=null;var t=o.project.hitTest(e.point,d);if(t){if(e.modifiers.shift)return void("segment"==t.type&&t.segment.remove());t&&(s=t.item),"fill"==t.type&&o.project.activeLayer.addChild(t.item)}else{r&&(r.selected=!1,o.project.activeLayer.removeChildren()),i=e.point;var n=new o.Size(0,0),l=new o.Rectangle({point:i,size:n});h(r=new o.Path(l)),r.fullySelected=!0}},l.onMouseMove=function(e){o.project.activeLayer.selected=!1,e.item&&(e.item.selected=!0)},l.onMouseDrag=function(e){if(s)s.position.x+=e.delta.x,s.position.y+=e.delta.y;else if(r){new o.Point(e.x,e.y);var t=new o.Rectangle({from:i,to:e.point});o.project.activeLayer.removeChildren(),h(r=new o.Path.Rectangle(t))}},l.onMouseUp=function(e){r.fullySelected=!0},console.debug("Select Rectangle Added!"),o.project.view.draw(),o};var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(0))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t||(t=document.createElement("canvas"));var o=new n.default.PaperScope;o.setup(t),e.scope=o;var r,i,s,l=new o.Tool,a=e.alpha,u=e.lightness,c=e.hue,f=e.saturation,p=e.strokeColor,d={segments:!0,stroke:!0,fill:!0,tolerance:5};return l.onMouseDown=function(e){s=i=null;var t,n=o.project.hitTest(e.point,d);if(n){if(e.modifiers.shift)return void("segment"==n.type&&n.segment.remove());if(n)if(i=n.item,"segment"==n.type)s=n.segment;else if("stroke"==n.type){var l=n.location;s=i.insert(l.index+1,e.point),i.smooth()}"fill"==n.type&&o.project.activeLayer.addChild(n.item)}else r&&(r.selected=!1,o.project.activeLayer.removeChildren()),r=new o.Path,(t=r).fillColor={hue:c,saturation:f,lightness:u,alpha:a},t.strokeColor=p,t.closed=!0,r.fullySelected=!0},l.onMouseMove=function(e){o.project.activeLayer.selected=!1,e.item&&(e.item.selected=!0)},l.onMouseDrag=function(e){s?(s.point.x+=e.delta.x,s.point.y+=e.delta.y,i.smooth()):i?(i.position.x+=e.delta.x,i.position.y+=e.delta.y):r&&r.add(e.point)},l.onMouseUp=function(e){r.segments.length,r.smooth(),r.simplify(),r.fullySelected=!0},console.debug("Select Lasso Added!"),o.project.view.draw(),o};var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(0))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=t.circle=t.rectangle=t.lasso=void 0;var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();t.pointsFilter=function(e,t){var o=[];return t.forEach(function(t){e.scope.project.hitTest(t.point)&&o.push(t)}),o};var r=l(o(3)),i=l(o(2)),s=l(o(1));function l(e){return e&&e.__esModule?e:{default:e}}t.lasso=r.default,t.rectangle=i.default,t.circle=s.default,t.Settings=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.alpha=.2,this.lightness=.28,this.hue=180,this.saturation=.93,this.strokeColor="#BEE7F5"}return n(e,[{key:"scope",get:function(){return this._scope},set:function(e){this._scope=e}},{key:"alpha",get:function(){return this._alpha},set:function(e){this._alpha=e}},{key:"lightness",get:function(){return this._lightness},set:function(e){this._lightness=e}},{key:"hue",get:function(){return this._hue},set:function(e){this._hue=e}},{key:"saturation",get:function(){return this._saturation},set:function(e){this._saturation=e}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(e){this._strokeColor=e}}]),e}()}])});
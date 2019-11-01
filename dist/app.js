!function(t){var r={};function n(i){if(r[i])return r[i].exports;var e=r[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=r,n.d=function(t,r,i){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)n.d(i,e,function(r){return t[r]}.bind(null,e));return i},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=8)}([function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i,e,o=function(t){return"function"==typeof t},s=1280,a=720;var u=[];r.isPause=!1,r.cap=function(t){if(!i)throw"cap仅当needCap为真值时可用";return t?captureScreen(t):captureScreen()},r.default=function(t){void 0===t&&(t={}),i=!0===t.needCap,e=!0===t.needService,s=t.baseWidth||s,a=t.baseHeight||a,r.screenType=s>=a?"w":"h",r.isRoot="undefined"!=typeof $shell&&$shell.checkAccess&&$shell.checkAccess("root")||!1;var n="undefined"!=typeof device?Math.max(device.width,device.height):0,o="undefined"!=typeof device?Math.min(device.width,device.height):0;r.width="w"===r.screenType?n:o,r.height="w"===r.screenType?o:n,r.scale=Math.min(r.width/s,r.height/a),threads&&threads.start&&threads.start((function(){if(i){var t="w"===r.screenType?[r.width,r.height]:[r.height,r.width];requestScreenCapture(t[0],t[1])||(toast("请求截图失败"),exit())}!e&&r.isRoot||null!=auto.service||app.startActivity({action:"android.settings.ACCESSIBILITY_SETTINGS"})}))},r.getHeight=function(t){return void 0===t&&(t=1),Math.floor(r.height*t)},r.getWidth=function(t){return void 0===t&&(t=1),Math.floor(r.width*t)},r.pause=function(){r.isPause=!0},r.resume=function(){r.isPause=!1},r.use=function(t,r){if(-1===u.indexOf(t))return o(t)?t(r):o(t.install)&&t.install(r),u.push(t)}},function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=n(0);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function e(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var i=Array(t),e=0;for(r=0;r<n;r++)for(var o=arguments[r],s=0,a=o.length;s<a;s++,e++)i[e]=o[s];return i}var o=n(4);var s={install:function(t){r.swipe=function(t,r,n){var s=t[0],a=t[1],u=r[0],c=r[1],f=Math.max(s,u),h=Math.min(s,u),l=Math.max(a,c),x=Math.min(a,c);if(n=n||random(800,1e3),n+=Math.max(f-h,l-x),i.isRoot)return Swipe(s,a,u,c,n),void sleep(n);var p=[Math.floor((f-h)/3+h)-random(5,10),Math.floor((l-x)/3+x)+random(5,10)],y=[Math.floor((f-h)/3*2+h)+random(5,10),Math.floor((l-x)/3*2+x)-random(5,10)],v=(new(o.bind.apply(o,e([void 0],t,r,p,y)))).getLUT(16).map((function(t){return[Math.floor(t.x),Math.floor(t.y)]}));gesture.apply(void 0,e([n],v))},r.click=function(t,r,n){void 0===n&&(n=[600,800]),null!=t&&null!=r&&(i.isRoot?(Tap(t,r),sleep(300)):press(t,r,random.apply(void 0,n)))}}};r.default=s},function(t,r,n){!function(){"use strict";var r=Math.abs,i=Math.min,e=Math.max,o=Math.cos,s=Math.sin,a=Math.acos,u=Math.sqrt,c=Math.PI,f={x:0,y:0,z:0},h=n(3),l=n(5),x=function(t){var n=t&&t.forEach?t:[].slice.call(arguments),i=!1;if("object"==typeof n[0]){i=n.length;var e=[];n.forEach((function(t){["x","y","z"].forEach((function(r){void 0!==t[r]&&e.push(t[r])}))})),n=e}var o=!1,s=n.length;if(i){if(i>4){if(1!==arguments.length)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");o=!0}}else if(6!==s&&8!==s&&9!==s&&12!==s&&1!==arguments.length)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");var a=!o&&(9===s||12===s)||t&&t[0]&&void 0!==t[0].z;this._3d=a;for(var u=[],c=0,f=a?3:2;c<s;c+=f){var l={x:n[c],y:n[c+1]};a&&(l.z=n[c+2]),u.push(l)}this.order=u.length-1,this.points=u;var x=["x","y"];a&&x.push("z"),this.dims=x,this.dimlen=x.length,function(t){for(var n=t.order,i=t.points,e=h.align(i,{p1:i[0],p2:i[n]}),o=0;o<e.length;o++)if(r(e[o].y)>1e-4)return void(t._linear=!1);t._linear=!0}(this),this._t1=0,this._t2=1,this.update()},p=n(6);function y(t,r,n,i,e){void 0===e&&(e=.5);var o=h.projectionratio(e,t),s=1-o,a={x:o*r.x+s*i.x,y:o*r.y+s*i.y},u=h.abcratio(e,t);return{A:{x:n.x+(n.x-a.x)/u,y:n.y+(n.y-a.y)/u},B:n,C:a}}x.SVGtoBeziers=function(t){return p(x,t)},x.quadraticFromPoints=function(t,r,n,i){if(void 0===i&&(i=.5),0===i)return new x(r,r,n);if(1===i)return new x(t,r,r);var e=y(2,t,r,n,i);return new x(t,e.A,n)},x.cubicFromPoints=function(t,r,n,i,e){void 0===i&&(i=.5);var o=y(3,t,r,n,i);void 0===e&&(e=h.dist(r,o.C));var s=e*(1-i)/i,a=h.dist(t,n),u=(n.x-t.x)/a,c=(n.y-t.y)/a,f=e*u,l=e*c,p=s*u,v=s*c,d=r.x-f,m=r.y-l,g=r.x+p,z=r.y+v,b=o.A,_=b.x+(d-b.x)/(1-i),w=b.y+(m-b.y)/(1-i),M=b.x+(g-b.x)/i,S=b.y+(z-b.y)/i,E={x:t.x+(_-t.x)/i,y:t.y+(w-t.y)/i},k={x:n.x+(M-n.x)/(1-i),y:n.y+(S-n.y)/(1-i)};return new x(t,E,k,n)};var v=function(){return h};x.getUtils=v,x.PolyBezier=l,x.prototype={getUtils:v,valueOf:function(){return this.toString()},toString:function(){return h.pointsToString(this.points)},toSVG:function(t){if(this._3d)return!1;for(var r=this.points,n=["M",r[0].x,r[0].y,2===this.order?"Q":"C"],i=1,e=r.length;i<e;i++)n.push(r[i].x),n.push(r[i].y);return n.join(" ")},setRatios:function(t){if(t.length!==this.points.length)throw new Error("incorrect number of ratio values");this.ratios=t,this._lut=[]},update:function(){this._lut=[],this.dpoints=h.derive(this.points,this._3d),this.computedirection()},computedirection:function(){var t=this.points,r=h.angle(t[0],t[this.order],t[1]);this.clockwise=r>0},length:function(){return h.length(this.derivative.bind(this))},_lut:[],getLUT:function(t){if(t=t||100,this._lut.length===t)return this._lut;this._lut=[],t--;for(var r=0;r<=t;r++)this._lut.push(this.compute(r/t));return this._lut},on:function(t,r){r=r||5;for(var n,i=this.getLUT(),e=[],o=0,s=0;s<i.length;s++)n=i[s],h.dist(n,t)<r&&(e.push(n),o+=s/i.length);return!!e.length&&o/e.length},project:function(t){var r=this.getLUT(),n=r.length-1,i=h.closest(r,t),e=i.mdist,o=i.mpos;if(0===o||o===n){var s=o/n,a=this.compute(s);return a.t=s,a.d=e,a}var u,c,f,l=(o+1)/n,x=.1/n;for(e+=1,u=s=(o-1)/n;s<l+x;s+=x)c=this.compute(s),(f=h.dist(t,c))<e&&(e=f,u=s);return(c=this.compute(u)).t=u,c.d=e,c},get:function(t){return this.compute(t)},point:function(t){return this.points[t]},compute:function(t){return this.ratios?h.computeWithRatios(t,this.points,this.ratios,this._3d):h.compute(t,this.points,this._3d,this.ratios)},raise:function(){for(var t,r,n=this.points,i=[n[0]],e=n.length,o=1;o<e;o++)t=n[o],r=n[o-1],i[o]={x:(e-o)/e*t.x+o/e*r.x,y:(e-o)/e*t.y+o/e*r.y};return i[e]=n[e-1],new x(i)},derivative:function(t){var r,n,i=1-t,e=0,o=this.dpoints[0];2===this.order&&(o=[o[0],o[1],f],r=i,n=t),3===this.order&&(r=i*i,n=i*t*2,e=t*t);var s={x:r*o[0].x+n*o[1].x+e*o[2].x,y:r*o[0].y+n*o[1].y+e*o[2].y};return this._3d&&(s.z=r*o[0].z+n*o[1].z+e*o[2].z),s},curvature:function(t){return h.curvature(t,this.points,this._3d)},inflections:function(){return h.inflections(this.points)},normal:function(t){return this._3d?this.__normal3(t):this.__normal2(t)},__normal2:function(t){var r=this.derivative(t),n=u(r.x*r.x+r.y*r.y);return{x:-r.y/n,y:r.x/n}},__normal3:function(t){var r=this.derivative(t),n=this.derivative(t+.01),i=u(r.x*r.x+r.y*r.y+r.z*r.z),e=u(n.x*n.x+n.y*n.y+n.z*n.z);r.x/=i,r.y/=i,r.z/=i,n.x/=e,n.y/=e,n.z/=e;var o={x:n.y*r.z-n.z*r.y,y:n.z*r.x-n.x*r.z,z:n.x*r.y-n.y*r.x},s=u(o.x*o.x+o.y*o.y+o.z*o.z);o.x/=s,o.y/=s,o.z/=s;var a=[o.x*o.x,o.x*o.y-o.z,o.x*o.z+o.y,o.x*o.y+o.z,o.y*o.y,o.y*o.z-o.x,o.x*o.z-o.y,o.y*o.z+o.x,o.z*o.z];return{x:a[0]*r.x+a[1]*r.y+a[2]*r.z,y:a[3]*r.x+a[4]*r.y+a[5]*r.z,z:a[6]*r.x+a[7]*r.y+a[8]*r.z}},hull:function(t){var r,n=this.points,i=[],e=[],o=0,s=0,a=0;for(e[o++]=n[0],e[o++]=n[1],e[o++]=n[2],3===this.order&&(e[o++]=n[3]);n.length>1;){for(i=[],s=0,a=n.length-1;s<a;s++)r=h.lerp(t,n[s],n[s+1]),e[o++]=r,i.push(r);n=i}return e},split:function(t,r){if(0===t&&r)return this.split(r).left;if(1===r)return this.split(t).right;var n=this.hull(t),i={left:2===this.order?new x([n[0],n[3],n[5]]):new x([n[0],n[4],n[7],n[9]]),right:2===this.order?new x([n[5],n[4],n[2]]):new x([n[9],n[8],n[6],n[3]]),span:n};return i.left._t1=h.map(0,0,1,this._t1,this._t2),i.left._t2=h.map(t,0,1,this._t1,this._t2),i.right._t1=h.map(t,0,1,this._t1,this._t2),i.right._t2=h.map(1,0,1,this._t1,this._t2),r?(r=h.map(r,t,1,0,1),i.right.split(r).left):i},extrema:function(){var t,r,n=this.dims,i={},e=[];return n.forEach(function(n){r=function(t){return t[n]},t=this.dpoints[0].map(r),i[n]=h.droots(t),3===this.order&&(t=this.dpoints[1].map(r),i[n]=i[n].concat(h.droots(t))),i[n]=i[n].filter((function(t){return t>=0&&t<=1})),e=e.concat(i[n].sort(h.numberSort))}.bind(this)),e=e.sort(h.numberSort).filter((function(t,r){return e.indexOf(t)===r})),i.values=e,i},bbox:function(){var t=this.extrema(),r={};return this.dims.forEach(function(n){r[n]=h.getminmax(this,n,t[n])}.bind(this)),r},overlaps:function(t){var r=this.bbox(),n=t.bbox();return h.bboxoverlap(r,n)},offset:function(t,r){if(void 0!==r){var n=this.get(t),i=this.normal(t),e={c:n,n:i,x:n.x+i.x*r,y:n.y+i.y*r};return this._3d&&(e.z=n.z+i.z*r),e}if(this._linear){var o=this.normal(0),s=this.points.map((function(r){var n={x:r.x+t*o.x,y:r.y+t*o.y};return r.z&&i.z&&(n.z=r.z+t*o.z),n}));return[new x(s)]}return this.reduce().map((function(r){return r.scale(t)}))},simple:function(){if(3===this.order){var t=h.angle(this.points[0],this.points[3],this.points[1]),n=h.angle(this.points[0],this.points[3],this.points[2]);if(t>0&&n<0||t<0&&n>0)return!1}var i=this.normal(0),e=this.normal(1),o=i.x*e.x+i.y*e.y;return this._3d&&(o+=i.z*e.z),r(a(o))<c/3},reduce:function(){var t,n,i=0,e=0,o=[],s=[],a=this.extrema().values;for(-1===a.indexOf(0)&&(a=[0].concat(a)),-1===a.indexOf(1)&&a.push(1),i=a[0],t=1;t<a.length;t++)e=a[t],(n=this.split(i,e))._t1=i,n._t2=e,o.push(n),i=e;return o.forEach((function(t){for(i=0,e=0;e<=1;)for(e=i+.01;e<=1.01;e+=.01)if(!(n=t.split(i,e)).simple()){if(r(i-(e-=.01))<.01)return[];(n=t.split(i,e))._t1=h.map(i,0,1,t._t1,t._t2),n._t2=h.map(e,0,1,t._t1,t._t2),s.push(n),i=e;break}i<1&&((n=t.split(i,1))._t1=h.map(i,0,1,t._t1,t._t2),n._t2=t._t2,s.push(n))})),s},scale:function(t){var r=this.order,n=!1;if("function"==typeof t&&(n=t),n&&2===r)return this.raise().scale(n);var i=this.clockwise,e=n?n(0):t,o=n?n(1):t,s=[this.offset(0,10),this.offset(1,10)],a=h.lli4(s[0],s[0].c,s[1],s[1].c);if(!a)throw new Error("cannot scale this curve. Try reducing it first.");var c=this.points,f=[];return[0,1].forEach(function(t){var n=f[t*r]=h.copy(c[t*r]);n.x+=(t?o:e)*s[t].n.x,n.y+=(t?o:e)*s[t].n.y}.bind(this)),n?([0,1].forEach(function(e){if(2!==this.order||!e){var o=c[e+1],s={x:o.x-a.x,y:o.y-a.y},h=n?n((e+1)/r):t;n&&!i&&(h=-h);var l=u(s.x*s.x+s.y*s.y);s.x/=l,s.y/=l,f[e+1]={x:o.x+h*s.x,y:o.y+h*s.y}}}.bind(this)),new x(f)):([0,1].forEach(function(t){if(2!==this.order||!t){var n=f[t*r],i=this.derivative(t),e={x:n.x+i.x,y:n.y+i.y};f[t+1]=h.lli4(n,e,a,c[t+1])}}.bind(this)),new x(f))},outline:function(t,r,n,i){r=void 0===r?t:r;var e,o=this.reduce(),s=o.length,a=[],u=[],c=0,f=this.length(),x=void 0!==n&&void 0!==i;function p(t,r,n,i,e){return function(o){var s=i/n,a=(i+e)/n,u=r-t;return h.map(o,0,1,t+s*u,t+a*u)}}o.forEach((function(e){_=e.length(),x?(a.push(e.scale(p(t,n,f,c,_))),u.push(e.scale(p(-r,-i,f,c,_)))):(a.push(e.scale(t)),u.push(e.scale(-r))),c+=_})),u=u.map((function(t){return(e=t.points)[3]?t.points=[e[3],e[2],e[1],e[0]]:t.points=[e[2],e[1],e[0]],t})).reverse();var y=a[0].points[0],v=a[s-1].points[a[s-1].points.length-1],d=u[s-1].points[u[s-1].points.length-1],m=u[0].points[0],g=h.makeline(d,y),z=h.makeline(v,m),b=[g].concat(a).concat([z]).concat(u),_=b.length;return new l(b)},outlineshapes:function(t,r,n){r=r||t;for(var i=this.outline(t,r).curves,e=[],o=1,s=i.length;o<s/2;o++){var a=h.makeshape(i[o],i[s-o],n);a.startcap.virtual=o>1,a.endcap.virtual=o<s/2-1,e.push(a)}return e},intersects:function(t,r){return t?t.p1&&t.p2?this.lineIntersects(t):(t instanceof x&&(t=t.reduce()),this.curveintersects(this.reduce(),t,r)):this.selfintersects(r)},lineIntersects:function(t){var r=i(t.p1.x,t.p2.x),n=i(t.p1.y,t.p2.y),o=e(t.p1.x,t.p2.x),s=e(t.p1.y,t.p2.y),a=this;return h.roots(this.points,t).filter((function(t){var i=a.get(t);return h.between(i.x,r,o)&&h.between(i.y,n,s)}))},selfintersects:function(t){var r,n,i,e,o=this.reduce(),s=o.length-2,a=[];for(r=0;r<s;r++)i=o.slice(r,r+1),e=o.slice(r+2),n=this.curveintersects(i,e,t),a=a.concat(n);return a},curveintersects:function(t,r,n){var i=[];t.forEach((function(t){r.forEach((function(r){t.overlaps(r)&&i.push({left:t,right:r})}))}));var e=[];return i.forEach((function(t){var r=h.pairiteration(t.left,t.right,n);r.length>0&&(e=e.concat(r))})),e},arcs:function(t){t=t||.5;return this._iterate(t,[])},_error:function(t,n,i,e){var o=(e-i)/4,s=this.get(i+o),a=this.get(e-o),u=h.dist(t,n),c=h.dist(t,s),f=h.dist(t,a);return r(c-u)+r(f-u)},_iterate:function(t,r){var n,i=0,e=1;do{n=0,e=1;var a,u,c,f,l,x=this.get(i),p=!1,y=!1,v=e,d=1;do{if(y=p,f=c,v=(i+e)/2,a=this.get(v),u=this.get(e),(c=h.getccenter(x,a,u)).interval={start:i,end:e},p=this._error(c,x,i,e)<=t,(l=y&&!p)||(d=e),p){if(e>=1){if(c.interval.end=d=1,f=c,e>1){var m={x:c.x+c.r*o(c.e),y:c.y+c.r*s(c.e)};c.e+=h.angle({x:c.x,y:c.y},m,this.get(1))}break}e+=(e-i)/2}else e=v}while(!l&&n++<100);if(n>=100)break;f=f||c,r.push(f),i=d}while(e<1);return r}},t.exports=x}()},function(t,r,n){!function(){"use strict";var r=Math.abs,i=Math.cos,e=Math.sin,o=Math.acos,s=Math.atan2,a=Math.sqrt,u=Math.pow,c=function(t){return t<0?-u(-t,1/3):u(t,1/3)},f=Math.PI,h=2*f,l=f/2,x=Number.MAX_SAFE_INTEGER||9007199254740991,p=Number.MIN_SAFE_INTEGER||-9007199254740991,y={x:0,y:0,z:0},v={Tvalues:[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],Cvalues:[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],arcfn:function(t,r){var n=r(t),i=n.x*n.x+n.y*n.y;return void 0!==n.z&&(i+=n.z*n.z),a(i)},compute:function(t,r,n){if(0===t)return r[0];var i=r.length-1;if(1===t)return r[i];var e=r,o=1-t;if(0===i)return r[0];if(1===i)return l={x:o*e[0].x+t*e[1].x,y:o*e[0].y+t*e[1].y},n&&(l.z=o*e[0].z+t*e[1].z),l;if(i<4){var s,a,u,c=o*o,f=t*t,h=0;2===i?(e=[e[0],e[1],e[2],y],s=c,a=o*t*2,u=f):3===i&&(s=c*o,a=c*t*3,u=o*f*3,h=t*f);var l={x:s*e[0].x+a*e[1].x+u*e[2].x+h*e[3].x,y:s*e[0].y+a*e[1].y+u*e[2].y+h*e[3].y};return n&&(l.z=s*e[0].z+a*e[1].z+u*e[2].z+h*e[3].z),l}for(var x=JSON.parse(JSON.stringify(r));x.length>1;){for(var p=0;p<x.length-1;p++)x[p]={x:x[p].x+(x[p+1].x-x[p].x)*t,y:x[p].y+(x[p+1].y-x[p].y)*t},void 0!==x[p].z&&(x[p]=x[p].z+(x[p+1].z-x[p].z)*t);x.splice(x.length-1,1)}return x[0]},computeWithRatios:function(t,r,n,i){var e,o=1-t,s=n,a=r,u=s[0],c=s[1],f=s[2],h=s[3];return u*=o,c*=t,2===a.length?(e=u+c,{x:(u*a[0].x+c*a[1].x)/e,y:(u*a[0].y+c*a[1].y)/e,z:!!i&&(u*a[0].z+c*a[1].z)/e}):(u*=o,c*=2*o,f*=t*t,3===a.length?(e=u+c+f,{x:(u*a[0].x+c*a[1].x+f*a[2].x)/e,y:(u*a[0].y+c*a[1].y+f*a[2].y)/e,z:!!i&&(u*a[0].z+c*a[1].z+f*a[2].z)/e}):(u*=o,c*=1.5*o,f*=3*o,h*=t*t*t,4===a.length?(e=u+c+f+h,{x:(u*a[0].x+c*a[1].x+f*a[2].x+h*a[3].x)/e,y:(u*a[0].y+c*a[1].y+f*a[2].y+h*a[3].y)/e,z:!!i&&(u*a[0].z+c*a[1].z+f*a[2].z+h*a[3].z)/e}):void 0))},derive:function(t,r){for(var n=[],i=t,e=i.length,o=e-1;e>1;e--,o--){for(var s,a=[],u=0;u<o;u++)s={x:o*(i[u+1].x-i[u].x),y:o*(i[u+1].y-i[u].y)},r&&(s.z=o*(i[u+1].z-i[u].z)),a.push(s);n.push(a),i=a}return n},between:function(t,r,n){return r<=t&&t<=n||v.approximately(t,r)||v.approximately(t,n)},approximately:function(t,n,i){return r(t-n)<=(i||1e-6)},length:function(t){var r,n,i=0,e=v.Tvalues.length;for(r=0;r<e;r++)n=.5*v.Tvalues[r]+.5,i+=v.Cvalues[r]*v.arcfn(n,t);return.5*i},map:function(t,r,n,i,e){return i+(e-i)*((t-r)/(n-r))},lerp:function(t,r,n){var i={x:r.x+t*(n.x-r.x),y:r.y+t*(n.y-r.y)};return r.z&&n.z&&(i.z=r.z+t*(n.z-r.z)),i},pointToString:function(t){var r=t.x+"/"+t.y;return void 0!==t.z&&(r+="/"+t.z),r},pointsToString:function(t){return"["+t.map(v.pointToString).join(", ")+"]"},copy:function(t){return JSON.parse(JSON.stringify(t))},angle:function(t,r,n){var i=r.x-t.x,e=r.y-t.y,o=n.x-t.x,a=n.y-t.y;return s(i*a-e*o,i*o+e*a)},round:function(t,r){var n=""+t,i=n.indexOf(".");return parseFloat(n.substring(0,i+1+r))},dist:function(t,r){var n=t.x-r.x,i=t.y-r.y;return a(n*n+i*i)},closest:function(t,r){var n,i,e=u(2,63);return t.forEach((function(t,o){(i=v.dist(r,t))<e&&(e=i,n=o)})),{mdist:e,mpos:n}},abcratio:function(t,n){if(2!==n&&3!==n)return!1;if(void 0===t)t=.5;else if(0===t||1===t)return t;var i=u(t,n)+u(1-t,n);return r((i-1)/i)},projectionratio:function(t,r){if(2!==r&&3!==r)return!1;if(void 0===t)t=.5;else if(0===t||1===t)return t;var n=u(1-t,r);return n/(u(t,r)+n)},lli8:function(t,r,n,i,e,o,s,a){var u=(t-n)*(o-a)-(r-i)*(e-s);return 0!=u&&{x:((t*i-r*n)*(e-s)-(t-n)*(e*a-o*s))/u,y:((t*i-r*n)*(o-a)-(r-i)*(e*a-o*s))/u}},lli4:function(t,r,n,i){var e=t.x,o=t.y,s=r.x,a=r.y,u=n.x,c=n.y,f=i.x,h=i.y;return v.lli8(e,o,s,a,u,c,f,h)},lli:function(t,r){return v.lli4(t,t.c,r,r.c)},makeline:function(t,r){var i=n(2),e=t.x,o=t.y,s=r.x,a=r.y,u=(s-e)/3,c=(a-o)/3;return new i(e,o,e+u,o+c,e+2*u,o+2*c,s,a)},findbbox:function(t){var r=x,n=x,i=p,e=p;return t.forEach((function(t){var o=t.bbox();r>o.x.min&&(r=o.x.min),n>o.y.min&&(n=o.y.min),i<o.x.max&&(i=o.x.max),e<o.y.max&&(e=o.y.max)})),{x:{min:r,mid:(r+i)/2,max:i,size:i-r},y:{min:n,mid:(n+e)/2,max:e,size:e-n}}},shapeintersections:function(t,r,n,i,e){if(!v.bboxoverlap(r,i))return[];var o=[],s=[t.startcap,t.forward,t.back,t.endcap],a=[n.startcap,n.forward,n.back,n.endcap];return s.forEach((function(r){r.virtual||a.forEach((function(i){if(!i.virtual){var s=r.intersects(i,e);s.length>0&&(s.c1=r,s.c2=i,s.s1=t,s.s2=n,o.push(s))}}))})),o},makeshape:function(t,r,n){var i=r.points.length,e=t.points.length,o=v.makeline(r.points[i-1],t.points[0]),s=v.makeline(t.points[e-1],r.points[0]),a={startcap:o,forward:t,back:r,endcap:s,bbox:v.findbbox([o,t,r,s])},u=v;return a.intersections=function(t){return u.shapeintersections(a,a.bbox,t,t.bbox,n)},a},getminmax:function(t,r,n){if(!n)return{min:0,max:0};var i,e,o=x,s=p;-1===n.indexOf(0)&&(n=[0].concat(n)),-1===n.indexOf(1)&&n.push(1);for(var a=0,u=n.length;a<u;a++)i=n[a],(e=t.get(i))[r]<o&&(o=e[r]),e[r]>s&&(s=e[r]);return{min:o,mid:(o+s)/2,max:s,size:s-o}},align:function(t,r){var n=r.p1.x,o=r.p1.y,a=-s(r.p2.y-o,r.p2.x-n);return t.map((function(t){return{x:(t.x-n)*i(a)-(t.y-o)*e(a),y:(t.x-n)*e(a)+(t.y-o)*i(a)}}))},roots:function(t,r){r=r||{p1:{x:0,y:0},p2:{x:1,y:0}};var n=t.length-1,e=v.align(t,r),s=function(t){return 0<=t&&t<=1};if(2===n){if(0!==(y=(d=e[0].y)-2*(m=e[1].y)+(g=e[2].y))){var u=-a(m*m-d*g),f=-d+m;return[-(u+f)/y,-(-u+f)/y].filter(s)}return m!==g&&0===y?[(2*m-g)/(2*m-2*g)].filter(s):[]}var l=e[0].y,x=e[1].y,p=e[2].y,y=3*x-l-3*p+e[3].y,d=3*l-6*x+3*p,m=-3*l+3*x,g=l;if(v.approximately(y,0)){if(v.approximately(d,0))return v.approximately(m,0)?[]:[-g/m].filter(s);var z=2*d;return[((b=a(m*m-4*d*g))-m)/z,(-m-b)/z].filter(s)}var b,_,w=(e=(3*(m/=y)-(d/=y)*d)/3)/3,M=(b=(2*d*d*d-9*d*m+27*(g/=y))/27)/2,S=M*M+w*w*w;if(S<0){var E=-e/3,k=a(E*E*E),O=-b/(2*k),T=o(O<-1?-1:O>1?1:O),j=2*c(k);return[j*i(T/3)-d/3,j*i((T+h)/3)-d/3,j*i((T+2*h)/3)-d/3].filter(s)}if(0===S)return[2*(_=M<0?c(-M):-c(M))-d/3,-_-d/3].filter(s);var C=a(S);return[(_=c(-M+C))-c(M+C)-d/3].filter(s)},droots:function(t){if(3===t.length){var r=t[0],n=t[1],i=t[2],e=r-2*n+i;if(0!==e){var o=-a(n*n-r*i),s=-r+n;return[-(o+s)/e,-(-o+s)/e]}return n!==i&&0===e?[(2*n-i)/(2*(n-i))]:[]}if(2===t.length)return(r=t[0])!==(n=t[1])?[r/(r-n)]:[]},curvature:function(t,n,i,e){var o,s,c,f,h,l,x=v.derive(n),p=x[0],y=x[1],d=v.compute(t,p),m=v.compute(t,y),g=d.x*d.x+d.y*d.y;if(i?(o=a(u(d.y*m.z-m.y*d.z,2)+u(d.z*m.x-m.z*d.x,2)+u(d.x*m.y-m.x*d.y,2)),s=u(g+d.z*d.z,2/3)):(o=d.x*m.y-d.y*m.x,s=u(g,2/3)),0===o||0===s)return{k:0,r:0};if(h=o/s,l=s/o,!e){var z=v.curvature(t-.001,n,i,!0).k,b=v.curvature(t+.001,n,i,!0).k;f=(b-h+(h-z))/2,c=(r(b-h)+r(h-z))/2}return{k:h,r:l,dk:f,adk:c}},inflections:function(t){if(t.length<4)return[];var r=v.align(t,{p1:t[0],p2:t.slice(-1)[0]}),n=r[2].x*r[1].y,i=r[3].x*r[1].y,e=r[1].x*r[2].y,o=18*(-3*n+2*i+3*e-(h=r[3].x*r[2].y)),s=18*(3*n-i-3*e),a=18*(e-n);if(v.approximately(o,0)){if(!v.approximately(s,0)){var u=-a/s;if(0<=u&&u<=1)return[u]}return[]}var c=s*s-4*o*a,f=Math.sqrt(c),h=2*o;return v.approximately(h,0)?[]:[(f-s)/h,-(s+f)/h].filter((function(t){return 0<=t&&t<=1}))},bboxoverlap:function(t,n){var i,e,o,s,a,u=["x","y"],c=u.length;for(i=0;i<c;i++)if(o=t[e=u[i]].mid,s=n[e].mid,a=(t[e].size+n[e].size)/2,r(o-s)>=a)return!1;return!0},expandbox:function(t,r){r.x.min<t.x.min&&(t.x.min=r.x.min),r.y.min<t.y.min&&(t.y.min=r.y.min),r.z&&r.z.min<t.z.min&&(t.z.min=r.z.min),r.x.max>t.x.max&&(t.x.max=r.x.max),r.y.max>t.y.max&&(t.y.max=r.y.max),r.z&&r.z.max>t.z.max&&(t.z.max=r.z.max),t.x.mid=(t.x.min+t.x.max)/2,t.y.mid=(t.y.min+t.y.max)/2,t.z&&(t.z.mid=(t.z.min+t.z.max)/2),t.x.size=t.x.max-t.x.min,t.y.size=t.y.max-t.y.min,t.z&&(t.z.size=t.z.max-t.z.min)},pairiteration:function(t,r,n){var i=t.bbox(),e=r.bbox(),o=1e5,s=n||.5;if(i.x.size+i.y.size<s&&e.x.size+e.y.size<s)return[(o*(t._t1+t._t2)/2|0)/o+"/"+(o*(r._t1+r._t2)/2|0)/o];var a=t.split(.5),u=r.split(.5),c=[{left:a.left,right:u.left},{left:a.left,right:u.right},{left:a.right,right:u.right},{left:a.right,right:u.left}];c=c.filter((function(t){return v.bboxoverlap(t.left.bbox(),t.right.bbox())}));var f=[];return 0===c.length?f:(c.forEach((function(t){f=f.concat(v.pairiteration(t.left,t.right,s))})),f=f.filter((function(t,r){return f.indexOf(t)===r})))},getccenter:function(t,r,n){var o,a=r.x-t.x,u=r.y-t.y,c=n.x-r.x,f=n.y-r.y,x=a*i(l)-u*e(l),p=a*e(l)+u*i(l),y=c*i(l)-f*e(l),d=c*e(l)+f*i(l),m=(t.x+r.x)/2,g=(t.y+r.y)/2,z=(r.x+n.x)/2,b=(r.y+n.y)/2,_=m+x,w=g+p,M=z+y,S=b+d,E=v.lli8(m,g,_,w,z,b,M,S),k=v.dist(E,t),O=s(t.y-E.y,t.x-E.x),T=s(r.y-E.y,r.x-E.x),j=s(n.y-E.y,n.x-E.x);return O<j?((O>T||T>j)&&(O+=h),O>j&&(o=j,j=O,O=o)):j<T&&T<O?(o=j,j=O,O=o):j+=h,E.s=O,E.e=j,E.r=k,E},numberSort:function(t,r){return t-r}};t.exports=v}()},function(t,r,n){t.exports=n(2)},function(t,r,n){!function(){"use strict";var r=n(3),i=function(t){this.curves=[],this._3d=!1,t&&(this.curves=t,this._3d=this.curves[0]._3d)};i.prototype={valueOf:function(){return this.toString()},toString:function(){return"["+this.curves.map((function(t){return r.pointsToString(t.points)})).join(", ")+"]"},addCurve:function(t){this.curves.push(t),this._3d=this._3d||t._3d},length:function(){return this.curves.map((function(t){return t.length()})).reduce((function(t,r){return t+r}))},curve:function(t){return this.curves[t]},bbox:function(){for(var t=this.curves,n=t[0].bbox(),i=1;i<t.length;i++)r.expandbox(n,t[i].bbox());return n},offset:function(t){var r=[];return this.curves.forEach((function(n){r=r.concat(n.offset(t))})),new i(r)}},t.exports=i}()},function(t,r,n){var i=n(7),e={x:!1,y:!1};function o(t,r,n){if("Z"!==r){if("M"!==r){var i=[!1,e.x,e.y].concat(n),o=new(t.bind.apply(t,i)),s=n.slice(-2);return e={x:s[0],y:s[1]},o}e={x:n[0],y:n[1]}}}t.exports=function(t,r){for(var n,e,s=i(r).split(" "),a=new RegExp("[MLCQZ]",""),u=[],c={C:6,Q:4,L:2,M:2};s.length;)n=s.splice(0,1)[0],a.test(n)&&(e=o(t,n,s.splice(0,c[n]).map(parseFloat)))&&u.push(e);return new t.PolyBezier(u)}},function(t,r){t.exports=function(t){var r,n,i,e,o,s,a=(t=t.replace(/,/g," ").replace(/-/g," - ").replace(/-\s+/g,"-").replace(/([a-zA-Z])/g," $1 ")).replace(/([a-zA-Z])\s?/g,"|$1").split("|"),u=a.length,c=[],f=0,h=0,l=0,x=0,p=0,y=0,v=0,d=0,m="";for(r=1;r<u;r++)if(e=(i=(n=a[r]).substring(0,1)).toLowerCase(),o=(c=(c=n.replace(i,"").trim().split(" ")).filter((function(t){return""!==t})).map(parseFloat)).length,"m"===e){if(m+="M ","m"===i?(l+=c[0],x+=c[1]):(l=c[0],x=c[1]),f=l,h=x,m+=l+" "+x+" ",o>2)for(s=0;s<o;s+=2)"m"===i?(l+=c[s],x+=c[s+1]):(l=c[s],x=c[s+1]),m+=["L",l,x,""].join(" ")}else if("l"===e)for(s=0;s<o;s+=2)"l"===i?(l+=c[s],x+=c[s+1]):(l=c[s],x=c[s+1]),m+=["L",l,x,""].join(" ");else if("h"===e)for(s=0;s<o;s++)"h"===i?l+=c[s]:l=c[s],m+=["L",l,x,""].join(" ");else if("v"===e)for(s=0;s<o;s++)"v"===i?x+=c[s]:x=c[s],m+=["L",l,x,""].join(" ");else if("q"===e)for(s=0;s<o;s+=4)"q"===i?(p=l+c[s],y=x+c[s+1],l+=c[s+2],x+=c[s+3]):(p=c[s],y=c[s+1],l=c[s+2],x=c[s+3]),m+=["Q",p,y,l,x,""].join(" ");else if("t"===e)for(s=0;s<o;s+=2)p=l+(l-p),y=x+(x-y),"t"===i?(l+=c[s],x+=c[s+1]):(l=c[s],x=c[s+1]),m+=["Q",p,y,l,x,""].join(" ");else if("c"===e)for(s=0;s<o;s+=6)"c"===i?(p=l+c[s],y=x+c[s+1],v=l+c[s+2],d=x+c[s+3],l+=c[s+4],x+=c[s+5]):(p=c[s],y=c[s+1],v=c[s+2],d=c[s+3],l=c[s+4],x=c[s+5]),m+=["C",p,y,v,d,l,x,""].join(" ");else if("s"===e)for(s=0;s<o;s+=4)p=l+(l-v),y=x+(x-d),"s"===i?(v=l+c[s],d=x+c[s+1],l+=c[s+2],x+=c[s+3]):(v=c[s],d=c[s+1],l=c[s+2],x=c[s+3]),m+=["C",p,y,v,d,l,x,""].join(" ");else"z"===e&&(m+="Z ",l=f,x=h);return m.trim()}},function(t,r,n){"use strict";n.r(r);var i=n(0),e=n.n(i),o=n(1),s=n.n(o);e()(),i.use(s.a);i.cap;var a=o.click;o.swipe;log("hello, world"),a(100,200)}]);
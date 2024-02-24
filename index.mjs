// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n,m,o){var d,p,h,l;if(!r(n))throw new TypeError(i("1Pr3F",n));if(!s(m))throw new TypeError(i("1Pr3X",m));if(arguments.length>2&&!r(o))throw new TypeError(i("1PrAO",o));if(d=e(o=o||"..."),p=0,m>e(n))return n;if(m-d<0)return o.slice(0,m);for(h=0;h<m-d;)p=l=t(n,p),h+=1;return n.substring(0,l)+o}export{n as default};
//# sourceMappingURL=index.mjs.map
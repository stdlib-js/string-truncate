// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,m,a){var d,g,o,l;if(!e(n))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",n));if(!t(m))throw new TypeError(i("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",m));if(arguments.length>2&&!e(a))throw new TypeError(i("invalid argument. Third argument must be a string. Value: `%s`.",a));if(d=r(a=a||"..."),g=0,m>r(n))return n;if(m-d<0)return a.slice(0,m);for(o=0;o<m-d;)g=l=s(n,g),o+=1;return n.substring(0,l)+a}export{n as default};
//# sourceMappingURL=index.mjs.map

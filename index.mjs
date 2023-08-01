// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,m,o){var d,h,p,l;if(!r(n))throw new TypeError(i("0hm3R",n));if(!s(m))throw new TypeError(i("0hm3k",m));if(arguments.length>2&&!r(o))throw new TypeError(i("0hmB6",o));if(d=e(o=o||"..."),h=0,m>e(n))return n;if(m-d<0)return o.slice(0,m);for(p=0;p<m-d;)h=l=t(n,h),p+=1;return n.substring(0,l)+o}export{n as default};
//# sourceMappingURL=index.mjs.map
"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=f(function(q,o){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,h=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,v=require('@stdlib/string-num-grapheme-clusters/dist'),l=require('@stdlib/string-next-grapheme-cluster-break/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e,r,i){var t,a,u,n;if(!m(e))throw new TypeError(s('1Pr3F',e));if(!h(r))throw new TypeError(s('1Pr3X',r));if(arguments.length>2&&!m(i))throw new TypeError(s('1PrAO',i));if(i=i||"...",t=v(i),a=0,r>=v(e))return e;if(r-t<=0)return i.slice(0,r);for(u=0;u<r-t;)n=l(e,a),a=n,u+=1;return e.substring(0,n)+i}o.exports=p
});var w=g();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

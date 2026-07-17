"use strict";var f=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=f(function(q,o){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,h=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,v=require('@stdlib/string-num-grapheme-clusters/dist'),l=require('@stdlib/string-next-grapheme-cluster-break/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function p(i,r,e){var t,a,u,n;if(!m(i))throw new TypeError(s('1Pr3F',i));if(!h(r))throw new TypeError(s('1Pr3X',r));if(arguments.length>2&&!m(e))throw new TypeError(s('1PrAO',e));if(e=e||"...",t=v(e),a=0,r>=v(i))return i;if(r-t<=0)return e.slice(0,r);for(u=0;u<r-t;)n=l(i,a),a=n,u+=1;return i.substring(0,n)+e}o.exports=p
});var w=g();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

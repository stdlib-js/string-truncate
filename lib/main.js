/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var numGraphemeClusters = require( '@stdlib/string-num-grapheme-clusters' );
var nextGraphemeClusterBreak = require( '@stdlib/string-next-grapheme-cluster-break' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Truncates a string to a specified length.
*
* @param {string} str - input string
* @param {integer} len - output string length (including ending)
* @param {string} [ending='...'] - custom ending
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a string
* @returns {string} truncated string
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 7 );
* // returns 'beep...'
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 5, '>>>' );
* // returns 'be>>>'
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 10 );
* // returns 'beep boop'
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 0 );
* // returns ''
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 2 );
* // returns '..'
*
* @example
* var str = '🐺 Wolf Brothers 🐺';
* var out = truncate( str, 6 );
* // returns '🐺 W...'
*/
function truncate( str, len, ending ) {
	var endingLength;
	var fromIndex;
	var nVisual;
	var idx;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', len ) );
	}
	if ( arguments.length > 2 ) {
		if ( !isString( ending ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a string. Value: `%s`.', ending ) );
		}
	}
	ending = ending || '...';
	endingLength = numGraphemeClusters( ending );
	fromIndex = 0;
	if ( len >= numGraphemeClusters( str ) ) {
		return str;
	}
	if ( len - endingLength <= 0 ) {
		return ending.slice( 0, len );
	}
	nVisual = 0;
	while ( nVisual < len - endingLength ) {
		idx = nextGraphemeClusterBreak( str, fromIndex );
		fromIndex = idx;
		nVisual += 1;
	}
	return str.substring( 0, idx ) + ending;
}


// EXPORTS //

module.exports = truncate;

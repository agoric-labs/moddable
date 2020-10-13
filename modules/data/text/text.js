/**
 * minimal TextDecoder
 * No support for encodeInto.
 *
 * ref https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 */
export class TextEncoder {
	constructor() {

	}
	get encoding() {
		return 'utf-8';
	}
	encode(s) {
		if (typeof s !== 'string') {
			throw new TypeError(typeof s);
		}
		let arrayBuffer;
		let bytes;
		// fxArrayBuffer only allocates a chunk if length > 0
		// else new Uint8Array(enc.encode(""))
		// throws new "detached buffer!"
		if (s.length === 0) {
			// arrayBuffer = undefined;
			bytes = new Uint8Array();
		} else {
			arrayBuffer = utf8_encode(s);
			bytes = new Uint8Array(arrayBuffer);
		}
		// trace(`encode ${JSON.stringify(s)} -> ArrayBuffer(${arrayBuffer ? arrayBuffer.byteLength : ''}) -> Uint8Array(${bytes.length})\n`);
		return bytes;
	}
	encodeInto() {
		throw new TypeError('encodeInto not supported');
	}
}

const UTF8Names = ["unicode-1-1-utf-8", "utf-8", "utf8"];

/**
 * minimal utf-8 TextDecoder
 * no support for fatal, stream, etc.
 *
 * ref https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
 */
export class TextDecoder {
	/**
	 * @param {string=} utfLabel optional name for UTF-8
	 * @param {*} options fatal is not supported
	 */
	constructor(utfLabel, options) {
		if (utfLabel & !UTF8Names.includes(utfLabel)) {
			throw new TypeError(utfLabel);
		}
		if (options && options.fatal) {
			throw new TypeError('fatal not supported');
		}
	}
	/**
	 * @param {Uint8Array} bytes
	 * @param {*} options stream is not supported
	 */
	decode(bytes, options) {
		if (options && options.stream) {
			throw new TypeError('stream is unsupported');
		}
		if (!(bytes instanceof Uint8Array)) {
			throw new TypeError('arg must be Uint8Array');
		}
		return utf8_decode(bytes.buffer);
	}
}

function utf8_encode(string) @ "xs_utf8_encode";
function utf8_decode(buffer) @ "xs_utf8_decode";

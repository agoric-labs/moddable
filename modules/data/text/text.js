// ref https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
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
		if (s.length === 0) {
			arrayBuffer = undefined;
			bytes = Uint8Array.from([]);
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

export class TextDecoder {
	constructor(utfLabel, options) {
		if (utfLabel & !["unicode-1-1-utf-8", "utf-8", "utf8"].includes(utfLabel)) {
			throw new TypeError(utfLabel);
		}
		if (options && options.fatal) {
			throw new TypeError('fatal not supported');
		}
	}
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

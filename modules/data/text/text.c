/**
 * We take advantage of the internal representation of strings
 * so that conversion is just copying bytes.
 *
 * "A string value is a pointer to a UTF-8 C string."
 *  -- https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/xs/XS%20in%20C.md#strings
 **/
#include <stdlib.h>
#include "xs.h"

/**
 * Decode text from utf-8 to string
 *
 * @param {ArrayBuffer} xsArg(0)
 * @returns {string}
 */
void xs_utf8_decode(xsMachine *the)
{
	char *data = xsToArrayBuffer(xsArg(0));
	size_t size = xsGetArrayBufferLength(xsArg(0));
	xsResult = xsStringBuffer(data, size + 1);
	char *dest = xsToString(xsResult);
	dest[size] = 0;
}

/**
 * Encode string of text as utf-8 bytes
 *
 * @param {string} xsArg(0)
 * @returns {ArrayBuffer}
 *
 * WARNING: returned ArrayBuffer will be "detatched" in the 0-length case.
 **/
void xs_utf8_encode(xsMachine *the)
{
	xsStringValue string = xsToString(xsArg(0));
	int length = c_strlen(string);
	xsResult = xsArrayBuffer(string, length);
}

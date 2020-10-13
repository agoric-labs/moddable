#include <stdlib.h>
#include "xs.h"

void xs_utf8_decode(xsMachine *the)
{
	char *data = xsToArrayBuffer(xsArg(0));
	size_t size = xsGetArrayBufferLength(xsArg(0));
	xsResult = xsStringBuffer(data, size + 1);
	char *dest = xsToString(xsResult);
	dest[size] = 0;
}

void xs_utf8_encode(xsMachine *the)
{
	xsStringValue string = xsToString(xsArg(0));
	int length = c_strlen(string);
	xsResult = xsArrayBuffer(string, length);
}

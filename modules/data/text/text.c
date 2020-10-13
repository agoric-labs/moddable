#include <assert.h>
#include "xs.h"

void xs_utf8_decode(xsMachine *the)
{
	char *raw = xsToArrayBuffer(xsArg(0));
	xsResult = xsStringBuffer(raw, c_strlen(raw));
}

void xs_utf8_encode(xsMachine *the)
{
	xsStringValue string = xsToString(xsArg(0));
	int length = c_strlen(string);
	xsResult = xsArrayBuffer(string, length);
}

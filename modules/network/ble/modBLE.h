/*
 * Copyright (c) 2016-2018  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 * 
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 * 
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 * 
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

#ifndef __mod_ble__
#define __mod_ble__

#include "inttypes.h"

typedef enum {
	NoInputNoOutput = 0,
	DisplayOnly,
	KeyboardOnly,
	KeyboardDisplay,
	DisplayYesNo
} IOCapability;

typedef enum {
	LE_LIMITED_DISCOVERABLE_MODE = (1L << 0),
	LE_GENERAL_DISCOVERABLE_MODE = (1L << 1),
	NO_BR_EDR = (1L << 2),
	LE_BR_EDR_CONTROLLER = (1L << 3),
	LE_BR_EDR_HOST = (1L << 4)
} AdvertisingFlags;

uint16_t modBLESetSecurityParameters(uint8_t encryption, uint8_t bonding, uint8_t mitm, uint16_t ioCapability);

#endif

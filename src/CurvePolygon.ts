// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

@cgeo.mixin()
export class CurvePolygon extends cgeo.CurvePolygon {

	writeWKT() {
		return(cgeo.Polygon.prototype.writeWKT.call(this));
	}

}
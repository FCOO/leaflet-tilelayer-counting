/****************************************************************************
    leaflet-tilelayer-counting.js, 

    (c) 2016, FCOO

    https://github.com/FCOO/leaflet-tilelayer-counting
    https://github.com/FCOO

****************************************************************************/
(function (L/*, window, document, undefined*/) {
    "use strict";
    L.TileLayer.Counting = L.TileLayer.extend({
        initialize: function (url, options) {
            this._counter = 0;
            L.TileLayer.prototype.initialize.call(this, url, options);
        },
        addTo: function(map) {
            if (this._counter === 0) {
                L.TileLayer.prototype.addTo.call(this, map);
            }
            this._counter += 1;
        },
        removeFrom: function(map) {
            if (this._counter == 1) {
                L.TileLayer.prototype.removeFrom.call(this, map);
            }
            this._counter -= 1;
        },
    });

    L.TileLayer.WMS.Counting = L.TileLayer.WMS.extend({
        initialize: function (url, options) {
            this._counter = 0;
            L.TileLayer.WMS.prototype.initialize.call(this, url, options);
        },
        addTo: function(map) {
            if (this._counter === 0) {
                L.TileLayer.WMS.prototype.addTo.call(this, map);
            }
            this._counter += 1;
        },
        removeFrom: function(map) {
            if (this._counter == 1) {
                L.TileLayer.WMS.prototype.removeFrom.call(this, map);
            }
            this._counter -= 1;
        },
    });
}(L, this, document));




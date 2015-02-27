/**
 * A Leaflet TileLayer which keeps track of how many times it has been added
 * and removed. It is only added if no other instances of it are already
 * added and it is not removed until the last instance of it has been removed.
 */
L.TileLayer.Counting = L.TileLayer.extend({
        initialize: function (url, options) {
                this._counter = 0;
		L.TileLayer.prototype.initialize.call(this, url, options);
        },
	addTo: function(map) {
                if (this._counter == 0) {
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

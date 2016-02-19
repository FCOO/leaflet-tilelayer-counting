# leaflet-tilelayer-counting
>


## Description
Leaflet TileLayer (L.TileLayer) which keeps track of how many times the user adds and removes it from the map. It is only added once and is not removed until it has been removed from the map the same number of times it has been added.

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-tilelayer-counting.git --save`

## Demo
http://FCOO.github.io/leaflet-tilelayer-counting/demo/ 

## Usage

        var layer = new L.TileLayer.Counting('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a>'
        });
        layer.addTo(map);
        // Do some stuff...
        layer.addTo(map);


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-tilelayer-counting/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Jesper Larsen jla@fcoo.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog




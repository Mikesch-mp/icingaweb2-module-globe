#Icinga Web 2 Globe 3D Module

![Globe 3D](https://github.com/Mikesch-mp/icingaweb2-module-globe/raw/master/doc/images/globe01.png)

## Requirements

* Icinga Web 2 (&gt;= 2.0.0)
* Browser that support WebGL (Firefox,Chrome, etc.)

## Installation

Copy all files/folders into .../icingaweb2/modules/globe. The foldername for the module must be globe!

## Geolocations

To get the hosts displayd on the globe you have to add to each host configuration 
```
vars.geolocation = "<latitude>,<longitude>"
```

To get Geolocation data, best use a website like http://www.latlong.net or use you smartphone :)


## Refresh Timer

To change the default timer of 5 minutes to something that fits you, change in file globe/public/js/module.js
```
                // Default refresh is 5 min
                300000
                // End Default refresh
```

Time is in milliseconds!

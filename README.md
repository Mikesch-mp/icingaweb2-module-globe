# Globe 3D module for Icinga Web 2

#### Table of Contents

1. [About](#about)
2. [License](#license)
3. [Support](#support)
4. [Requirements](#requirements)
5. [Installation](#installation)
6. [Configuration](#configuration)
7. [Thanks](#thanks)
8. [Contributing](#contributing)

## About

Globe 3D is a gimmick module for Icinga Web 2. It will display bars with service states of your hosts on a 3D globe.

![Globe 3D](https://github.com/Mikesch-mp/icingaweb2-module-globe/raw/master/doc/images/globe01.png)

## License

Icinga Web 2 and this Icinga Web 2 module are licensed under the terms of the GNU General Public License Version 2, you will find a copy of this license in the LICENSE file included in the source package.

This module uses Three.js:

* [Three.js](https://github.com/mrdoob/three.js) - MIT license

## Support

Join the [Icinga community channels](https://www.icinga.com/community/get-involved/) for questions.

## Requirements

* [Icinga Web 2](https://www.icinga.com/products/icinga-web-2/) (>= 2.4.1)
* Browser that support WebGL (Firefox,Chrome, etc.)

## Installation

As with any Icinga Web 2 module, installation is pretty straight-forward. In
case you're installing it from source all you have to do is to drop the globe 3d
module in one of your module paths. You can examine (and set) the module path(s)
in `Configuration / Application`. In a typical environment you'll probably drop the
module to `/usr/share/icingaweb2/modules/globe`. Please note that the directory
name MUST be `globe` and not `icingaweb2-module-globe` or anything else.

### Git clone

Use this only if you want tu use/test the latest developer version of the module.

```
ICINGAWEB_MODULEPATH="/usr/share/icingaweb2/modules"
REPO_URL="https://github.com/Mikesch-mp/icingaweb2-module-globe"
TARGET_DIR="${ICINGAWEB_MODULEPATH}/globe"
git clone "${REPO_URL}" "${TARGET_DIR}"
```

### Tarball

Replace the version number with the lates available version from [Latest Release](https://github.com/Mikesch-mp/icingaweb2-module-globe/releases/latest)

```
MODULE_VERSION="1.0.4"
ICINGAWEB_MODULEPATH="/usr/share/icingaweb2/modules"
REPO_URL="https://github.com/Mikesch-mp/icingaweb2-module-globe"
TARGET_DIR="${ICINGAWEB_MODULEPATH}/globe"
URL="${REPO_URL}/archive/v${MODULE_VERSION}.tar.gz"
install -d -m 0755 "${TARGET_DIR}"
wget -q -O - "$URL" | tar xfz - -C "${TARGET_DIR}" --strip-components 1
```

### Enable the module 

In the Icinga Web 2 frontend in `Configuration -> Modules -> globe -> enable`.
You can also enable the module by using the `icingacli` command:

```
icingacli module enable globe
```

## Configuration

### Module

Configure the factor used to multiply count of services with in Configuration -> Modules -> globe where you navigate to the configuration tab.

### Add coordinates to a host object in Icinga 2

Add a custom attribute called `geolocation` to any host you want to display on the globe. Its value consists of WGS84 coordinates in the following format:

```
vars.geolocation = "<latitude>,<longitude>"
```

Example:

```
object Host "db-in-la" {
  check_command = "hostalive"
  address = "192.168.33.5"
  vars.geolocation = "34.052234,-118.243685"
}
```

### Refresh Timer

To change the default timer of 5 minutes to something that fits you, change in file globe/public/js/module.js
```
                // Default refresh is 5 min
                300000
                // End Default refresh
```

Time is in milliseconds!


To get Geolocation data, best use a website like http://www.latlong.net or use you smartphone :)

## Contributing

There are many ways to contribute to the Icinga Web module for Maps --
whether it be sending patches, testing, reporting bugs, or reviewing and
updating the documentation. Every contribution is appreciated!


Please continue reading in the [contributing chapter](CONTRIBUTING.md).

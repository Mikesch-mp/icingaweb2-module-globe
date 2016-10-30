
(function(Icinga) {

    var Globe = function(module) {
        /**
         * YES, we need Icinga
         */
        this.module = module;

        this.idCache = {};

        this.initialize();

        this.module.icinga.logger.debug('Globe 3D module loaded');
    };


    Globe.prototype = {

        initialize: function()
        {
            this.module.on('rendered', this.onRenderedContainer);
            this.module.icinga.logger.debug('Globe 3D module initialized');
        },

        onRenderedContainer: function(event) {

		var globe = new DAT.Globe(document.getElementById('earthcontainer'), function(label) { 
			return new THREE.Color([0x44bb77,0xffaa44,0xff5566,0xaa44ff,0x0095bf][label]);
		});
		xhr = new XMLHttpRequest();
		xhr.open('GET', 'img/globe/nodata.json', true);
	  	xhr.onreadystatechange = function(e) {
	   		if (xhr.readyState === 4) {
	      			if (xhr.status === 200) {
	        			var data = JSON.parse(xhr.responseText);
	        			window.data = data;
					globe.addData(data, {format: 'legend'});
	        			globe.createPoints();  // Create the geometry
	        			globe.animate();  // Begin animation
				}
			}
		};
		xhr.send(null);

        },
    };

    Icinga.availableModules.globe = Globe;

}(Icinga));


(function(Icinga) {

    var Globe = function(module) {
        /**
         * YES, we need Icinga
         */
        this.module = module;

        this.idCache = {};

        this.initialize();

        this.timer;

        this.module.icinga.logger.debug('Globe 3D module loaded');

    };

    var tempData;
    
    Globe.prototype = {

        initialize: function()
        {
            this.module.on('rendered', this.onRenderedContainer);
            this.module.icinga.logger.debug('Globe 3D module initialized');
        },

        registerTimer: function () {
            this.timer = this.module.icinga.timer.register(
                this.updateGlobeData,
                this,
		// Default refresh is 5 min
                300000
		// End Default refresh
            );
            return this;
        },

        updateGlobeData: function () {
            xhr = new XMLHttpRequest();
            xhr.open('GET', 'globe/globedata', true);
            xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
            	if (xhr.status === 200) {
                	var data = JSON.parse(xhr.responseText);
                        window.data = data;
			if(tempData!=null){
				globe.removeAllPoints();
		        }
                        globe.addData(data, {format: 'legend'});
                        globe.createPoints();  // Create the geometry
			tempData = "1";
                }
           }
           };
           xhr.send(null);
        },
        
	onRenderedContainer: function(event) {

		tempData = null;
		globe = new DAT.Globe(document.getElementById('earthcontainer'), function(label) { 
			return new THREE.Color([0x44bb77,0xffaa44,0xff5566,0xaa44ff,0x0095bf][label]);
		});
		globe.animate();  // Begin animation
		this.updateGlobeData();
		this.registerTimer();
		tempData = null;
        },
    };

    Icinga.availableModules.globe = Globe;

}(Icinga));


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
            this.module.icinga.logger.debug('Graphite module initialized');
        },

        onRenderedContainer: function(event) {

        var container = document.getElementById( 'earthcontainer' );  // Where to put the globe?
        var globe = new DAT.Globe( container );  // Make the globe
        globe.createPoints();  // Create the geometry
        globe.animate();  // Begin animation

        },
    };

    Icinga.availableModules.globe = Globe;

}(Icinga));

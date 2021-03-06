$(document).ready(function(){
    var all_draws;

    $.get("/load_all_draw/", function(ret){
        all_draws=ret['all_draws'];
        for(var i in all_draws){
            //alert(all_draws[i]);
            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(all_draws[i])
              });

            var vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });

            map.addLayer(vectorLayer);
        }
    });
});
Pdok.addcss("styles/default/style.css");
Pdok.addcss("styles/api.css");
OpenLayers.ImgPath = "img/";
var config_vialink = OpenLayers.Util.getParameters();
if (!config_vialink.mapdiv) {
    config_vialink.mapdiv = 'map_vialink';
}
var api_vialink;
var pdok_kaart_api;
Pdok.ready(function() {
    api_vialink = new Pdok.Api(config_vialink);
    pdok_kaart_api = api_vialink;
});

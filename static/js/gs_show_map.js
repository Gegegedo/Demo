$(function(){
var my_map;
var layer1;
var layer2;
var layer3;
var layer4;
var layer5;
var layer6;
var layer7;
var btns=[$('#btn0'),$('#btn1'),$('#btn2'),$('#btn3'),$('#btn4'),$('#btn5'),$('#btn6'),$('#btn7')];
function clear_patterns(){
map.removeLayer(layer1);
map.removeLayer(layer2);
map.removeLayer(layer3);
map.removeLayer(layer4);
map.removeLayer(layer5);
map.removeLayer(layer6);
map.removeLayer(layer7);

}
function clear_btn(){
for(var i in btns){
btns[i].css("background","#f4f5f9");
btns[i].css("color","#717274");
}
}
function display_patterns(status_array){
if(status_array[0]){

clear_patterns();
map.addLayer(layer1);
map.addLayer(layer2);
map.addLayer(layer3);
map.addLayer(layer4);
map.addLayer(layer5);
map.addLayer(layer6);
map.addLayer(layer7);
}
if(status_array[1]){
clear_patterns();
map.addLayer(layer1);


}
if(status_array[2]){
clear_patterns();
map.addLayer(layer2);


}
if(status_array[3]){
clear_patterns();
map.addLayer(layer3);


}
if(status_array[4]){
clear_patterns();
map.addLayer(layer4);


}
if(status_array[5]){
clear_patterns();
map.addLayer(layer5);


}
if(status_array[6]){
clear_patterns();
map.addLayer(layer6);


}
if(status_array[7]){
clear_patterns();
map.addLayer(layer7);


}
}
 var map = new ol.Map({
   target: 'map',
   view: new ol.View({
     center: ol.proj.fromLonLat([117.2027, 39.1653]),
     zoom: 12,
     maxZoom:18,
     minZoom:4
   }),
   controls: ol.control.defaults().extend([
        new ol.control.ScaleLine({  }),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: 'EPSG:4326'
        }),
        new ol.control.ScaleLine({  }),
        new ol.control.ZoomSlider({
            maxResolution:1000,
            minResolution:1000
        })
  ]),
 });
map.addLayer(default_geo_layer2);
map.addLayer(default_geo_layer4);
    selection1=document.getElementById("imagery");
    var maps_list;
    $.ajax({
            type:'get',
            url:'/_map_inquiry/',
            data: {
            },
            success:function(d_maps){
                maps_list=JSON.parse(d_maps['maps']);
                maps_list=maps_list['maps'];
                console.log(maps_list[0]['id']);
                console.log(typeof(d_maps));
               // maps_list=map_list["maps"];
                for(var m in maps_list){
                    area=maps_list[m]['area'];

                    time=maps_list[m]['capture_time'];
                    id=maps_list[m]['id'];

                    selection1.add(new Option(area+time,id))


                }
            }
         });
$("#confirm_button").click(function(){

var index1 = selection1.selectedIndex;
var value = selection1.options[index1].value;
console.log(value);
clear_btn();
map.removeLayer(my_map);
clear_patterns();
my_map= new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Map:'+value.toString()}
          }),
          opacity:1,
        });


map.addLayer(my_map);
  layer1 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Mask:'+value.toString()+'_1'}
          }),
          opacity:0.5,
        });
  layer2 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Mask:'+value.toString()+'_2'}
          }),
          opacity:0.5,
        });
   layer3 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Mask:'+value.toString()+'_3'}
          }),
          opacity:0.5,
        });
    layer4 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Mask:'+value.toString()+'_4'}
          }),
          opacity:0.5,
        });
    layer5 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Mask:'+value.toString()+'_5'}
          }),
          opacity:0.5,
        });
     layer6 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Mask:'+value.toString()+'_6'}
          }),
          opacity:0.5,
        });
    layer7 = new ol.layer.Image({
          source: new ol.source.ImageWMS({

          url:'http://172.20.53.157:8080/geoserver/wms',
          projection:'EPSG:4326',
          params:{
            LAYERS: 'Mask:'+value.toString()+'_7'}
          }),
          opacity:0.5,
        });
     var btn_status=[false,false,false,false,false,false,false,false];


function change_btn_css(btn_status){
if(btn_status[0]){
clear_btn();
btns[0].css("background","#0090ff");
btns[0].css('color','white');
}
if(btn_status[1]){
clear_btn();
btns[1].css("background","#0090ff");
btns[1].css('color','white');
}
if(btn_status[2]){
clear_btn();
btns[2].css("background","#0090ff");
btns[2].css('color','white');
}
if(btn_status[3]){
clear_btn();
btns[3].css("background","#0090ff");
btns[3].css('color','white');
}
if(btn_status[4]){
clear_btn();
btns[4].css("background","#0090ff");
btns[4].css('color','white');
}
if(btn_status[5]){
clear_btn();
btns[5].css("background","#0090ff");
btns[5].css('color','white');
}
if(btn_status[6]){
clear_btn();
btns[6].css("background","#0090ff");
btns[6].css('color','white');
}
if(btn_status[7]){
clear_btn();
btns[7].css("background","#0090ff");
btns[7].css('color','white');
}

}
$("#btn0").click(function(){

for(var i in btn_status){
if(i!=0){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
$("#btn1").click(function(){

for(var i in btn_status){
if(i!=1){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
$("#btn2").click(function(){

for(var i in btn_status){
if(i!=2){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
$("#btn3").click(function(){
for(var i in btn_status){
if(i!=3){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
$("#btn4").click(function(){
for(var i in btn_status){
if(i!=4){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
$("#btn5").click(function(){
for(var i in btn_status){
if(i!=5){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
$("#btn6").click(function(){
for(var i in btn_status){
if(i!=6){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
$("#btn7").click(function(){
for(var i in btn_status){
if(i!=7){
btn_status[i]=false;
}else{
btn_status[i]=true;
}
change_btn_css(btn_status);
display_patterns(btn_status);
}
})
}
)


});
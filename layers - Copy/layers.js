var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'รวมทุกอย่าง',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> รวมทุกอย่าง'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1];
lyr__1.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ละติจูด': 'ละติจูด', 'ลองติจูด': 'ลองติจูด', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'Facebook': 'Facebook', 'ภาพสถานที่': 'ภาพสถานที่', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', });
lyr__1.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ละติจูด': 'TextEdit', 'ลองติจูด': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'Facebook': 'TextEdit', 'ภาพสถานที่': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', });
lyr__1.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ละติจูด': 'hidden field', 'ลองติจูด': 'hidden field', 'ประเภทสถานที่': 'hidden field', 'ที่อยู่': 'header label - always visible', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'Facebook': 'header label - always visible', 'ภาพสถานที่': 'header label - always visible', 'field_12': 'hidden field', 'field_13': 'hidden field', 'field_14': 'hidden field', 'field_15': 'hidden field', 'field_16': 'hidden field', 'field_17': 'hidden field', 'field_18': 'hidden field', 'field_19': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', 'field_22': 'hidden field', 'field_23': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', 'field_26': 'hidden field', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
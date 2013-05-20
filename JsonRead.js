$(document).ready(function() { 
    
    //JQuery API to load JSON-encoded data
    $.getJSON('data.json', function(featureList) {
        
        //alert(featureList.buildNumber);
        //alert(featureList.newFeatures[1].name);
          
        $(featureList.newFeatures).each(function(index, items){ 

            $('#features').append('<tr> <td nowrap> '+featureList.newFeatures[index].feature_name+' </td> <td width="800px"> '+featureList.newFeatures[index].feature_desc+' </td></tr>');     
        })//each
    
    });//getJSON
 
});//document.ready
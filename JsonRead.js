$(document).ready(function() { 

    //JQuery API to load JSON-encoded data
    $.getJSON('data.json', function(featureList) {
        
        //update title
        var output = '<h3>' + featureList.title + '</h3>';
        $('#headline').html(output);
        
        //update table headers
        output='<tr id="header"> <th scope="col">' + featureList.header_name + '</th>'+'<th scope="col">' + featureList.header_desc + '</th> </tr>';

        $('#features').append(output);  
                              
        //update table
        $(featureList.newFeatures).each(function(index, items){ 

            $('#features').append('<tr> <td nowrap> '+featureList.newFeatures[index].feature_name+' </td> <td width="800px"> '+featureList.newFeatures[index].feature_desc+' </td></tr>');     
        })//each
    
    });//getJSON
 
});//document.ready
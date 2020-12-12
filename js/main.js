$(document).ready(function () {
    let introduction_height=0;
    let content_height=0;
    let affected_height=0;
    let is_obviousajax_down = false;
    let is_notobviousajax_down = false;
    $.ajax({
        type: "GET",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=rdec-key-123-45678-011121314",
        success: function (response) { 
            let object = response.records.earthquake[0];
            let affected_object = object.intensity.shakingArea;
            let affected_array = [];
            if(object.reportColor=="黃色"){
                $("#obvious_title").css({"background":"#fed23a"});
            }else if(object.reportColor=="橘色"){
                $("#obvious_title").css({"background":"#f39800"});
            }else if(object.reportColor=="紅色"){
                $("#obvious_title").css({"background":"red"});
            }
            affected_object.forEach(function(value, index, array){
                if(value.areaDesc.indexOf("最大震度") != -1){
                    affected_array.push(value);
                }
            });
            $('#obvious_introduction').append("<h5>"+object.reportContent+"</h5>");
            $('#obvious_img').attr("src",object.reportImageURI);
            $('#obvious_content').append("<li>編號："+object.earthquakeNo+"</li>")
            .append("<li>位置："+object.earthquakeInfo.epiCenter.location+"</li>")
            .append("<li>時間："+object.earthquakeInfo.originTime+"</li>")
            .append("<li>規模："+object.earthquakeInfo.magnitude.magnitudeValue+"</li>")
            .append("<li>深度："+object.earthquakeInfo.depth.value+"公里</li>");
            affected_array.forEach(function(value,index,array){
                $("#obvious_affected").append("<li>"+value.areaDesc+"："+value.areaName+"</li>");
            });
            introduction_height = introduction_height < $('#obvious_introduction').innerHeight() ?  $('#obvious_introduction').innerHeight() : introduction_height;
            content_height = content_height < $('#obvious_content').innerHeight() ?  $('#obvious_content').innerHeight() : content_height;
            affected_height = affected_height < $('#obvious_affected').innerHeight() ?  $('#obvious_affected').innerHeight() : affected_height;
            is_obviousajax_down=true;
            ControlHight();
        }
    }); 
    //區域地震
    $.ajax({
        type: "GET",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0016-001?Authorization=rdec-key-123-45678-011121314",
        success: function (response) {
            let object=response.records.earthquake[0];
            let affected_object = object.intensity.shakingArea;
            let affected_array = [];
            if(object.reportColor=="黃色"){
                $("#not_obvious_title").css({"background":"#fed23a"});
            }else if(object.reportColor=="橘色"){
                $("#not_obvious_title").css({"background":"#f39800"});
            }else if(object.reportColor=="紅色"){
                $("#not_obvious_title").css({"background":"red"});
            }
            affected_object.forEach(function(value, index, array){
                if(value.areaDesc.indexOf("最大震度") != -1){
                    affected_array.push(value);
                }
            });
            $('#not_obvious_introduction').append("<h5>"+object.reportContent+"</h5>");
            $('#not_obvious_img').attr("src",object.reportImageURI);
            $('#not_obvious_content').append("<li>編號："+object.earthquakeNo+"</li>")
            .append("<li>位置："+object.earthquakeInfo.epiCenter.location+"</li>")
            .append("<li>時間："+object.earthquakeInfo.originTime+"</li>")
            .append("<li>規模："+object.earthquakeInfo.magnitude.magnitudeValue+"</li>")
            .append("<li>深度："+object.earthquakeInfo.depth.value+"公里</li>");     
            affected_array.forEach(function(value,index,array){
                $("#not_obvious_affected").append("<li>"+value.areaDesc+"："+value.areaName+"</li>");
            });
            introduction_height = introduction_height < $('#not_obvious_introduction').innerHeight() ?  $('#not_obvious_introduction').innerHeight() : introduction_height;
            content_height = content_height < $('#not_obvious_content').innerHeight() ?  $('#not_obvious_content').innerHeight() : content_height;
            affected_height = affected_height < $('#not_obvious_affected').innerHeight() ?  $('#not_obvious_affected').innerHeight() : affected_height;
            is_notobviousajax_down = true;
            ControlHight();
        }
    });
    function ControlHight(){
        if(is_notobviousajax_down && is_obviousajax_down){
            $('#obvious_introductio,#not_obvious_introduction').height(introduction_height);
            $('#obvious_content,#not_obvious_content').height(content_height);
            $('#obvious_affected,#not_obvious_affected').height(affected_height);
        }
    }
});
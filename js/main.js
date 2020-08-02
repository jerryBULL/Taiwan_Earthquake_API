$(document).ready(function () {
    //顯著地震
    //編號：object.earthquakeNo
    //時間：object.earthquakeInfo.originTime
    //規模：object.earthquakeInfo.magnitude.magnitudeValue
    //位置：object.earthquakeInfo.epiCenter.location
    //深度：object.earthquakeInfo.depth.value
    //顏色：object.reportColor
    //圖片：object.reportImageURI
    //簡介：object.reportContent
    $.ajax({
        type: "GET",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=rdec-key-123-45678-011121314",
        success: function (response) { 
            let object=response.records.earthquake[0];
            if(object.reportColor=="黃色"){
                $("#obvious_title").css({"background":"#fed23a"});
            }else if(object.reportColor=="橘色"){
                $("#obvious_title").css({"background":"#f39800"});
            }else if(object.reportColor=="紅色"){
                $("#obvious_title").css({"background":"red"});
            }
            $('#obvious_introduction').append("<h5>"+object.reportContent+"</h5>");
            $('#obvious_img').attr("src",object.reportImageURI);
            $('#obvious_content').append("<li>編號："+object.earthquakeNo+"</li>")
            .append("<li>位置："+object.earthquakeInfo.epiCenter.location+"</li>")
            .append("<li>時間："+object.earthquakeInfo.originTime+"</li>")
            .append("<li>規模："+object.earthquakeInfo.magnitude.magnitudeValue+"</li>")
            .append("<li>深度："+object.earthquakeInfo.depth.value+"公里</li>");
        }
    }); 
    //區域地震
    $.ajax({
        type: "GET",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0016-001?Authorization=rdec-key-123-45678-011121314",
        success: function (response) {
            let object=response.records.earthquake[0];
            if(object.reportColor=="黃色"){
                $("#not_obvious_title").css({"background":"#fed23a"});
            }else if(object.reportColor=="橘色"){
                $("#not_obvious_title").css({"background":"#f39800"});
            }else if(object.reportColor=="紅色"){
                $("#not_obvious_title").css({"background":"red"});
            }
            $('#not_obvious_introduction').append("<h5>"+object.reportContent+"</h5>");
            $('#not_obvious_img').attr("src",object.reportImageURI);
            $('#not_obvious_content').append("<li>編號："+object.earthquakeNo+"</li>")
            .append("<li>位置："+object.earthquakeInfo.epiCenter.location+"</li>")
            .append("<li>時間："+object.earthquakeInfo.originTime+"</li>")
            .append("<li>規模："+object.earthquakeInfo.magnitude.magnitudeValue+"</li>")
            .append("<li>深度："+object.earthquakeInfo.depth.value+"公里</li>");     
        }
    });
});
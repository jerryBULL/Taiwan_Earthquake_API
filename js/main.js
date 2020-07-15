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
            $('#obvious_introduction').append("<h3>"+object.reportContent+"</h3>");
            $('.obvious_img').append("<img src="+object.reportImageURI+">");
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
            $('#not_obvious_introduction').append("<h3>"+object.reportContent+"</h3>");
            $('.not_obvious_img').append("<img src="+object.reportImageURI+">");
            $('#not_obvious_content').append("<li>編號："+object.earthquakeNo+"</li>")
            .append("<li>位置："+object.earthquakeInfo.epiCenter.location+"</li>")
            .append("<li>時間："+object.earthquakeInfo.originTime+"</li>")
            .append("<li>規模："+object.earthquakeInfo.magnitude.magnitudeValue+"</li>")
            .append("<li>深度："+object.earthquakeInfo.depth.value+"公里</li>");     
        }
    });
});
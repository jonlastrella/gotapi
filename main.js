//"https://www.anapioficeandfire.com/api/houses"
//17
//229
//362
//378


// $(document).ready(function(){
//     $('.b').click(function(){
//         for(var i = 1; i <= 500; i++){
//             $.get(`https://www.anapioficeandfire.com/api/houses/` + i, function(res){
//                 var details = "";
//                 details += "Name:" + " " +  res.name
//                 details += "<p>Words:" + " " + res.words + "</p>"
//                 details += "<p>Titles:" + " " + res.titles + "</p>"
//                 $('.house-details').html(details);
//             }, "json");
//         }
//     })

var url = "https://www.anapioficeandfire.com/api/houses/"

$(document).ready(function(){
    $('.b').click(function(){
        for(var i = 17; i <= 17; i++){
            $.get(url + i, function(res){
                var details = "";
                details += "Name:" + " " +  res.name
                details += "<p>Words:" + " " + res.words + "</p>"
                details += "<p>Titles:" + " " + res.titles + "</p>"
                $('.house-details').html(details);
            }, "json");
        }
    })
    $('.l').click(function(){
        for(var i = 229; i <= 229; i++){
            $.get(url + i, function(res){
                var details = "";
                details += "Name:" + " " + res.name
                details += "<p>Words:" + " " + res.words + "</p>"
                details += "<p>Titles:" + " " + res.titles + "</p>"
                $('.house-details').html(details);
            }, "json");
        }
    })
    $('.s').click(function(){
        for(var i = 362; i <= 362; i++){
            $.get(url + i, function(res){
                var details = "";
                details += "Name:" + " " + res.name
                details += "<p>Words:" + " " + res.words + "</p>"
                details += "<p>Titles:" + " " + res.titles + "</p>"
                $('.house-details').html(details);
            }, "json");
        }
    })
    $('.t').click(function(){
        for(var i = 378; i <= 378; i++){
            $.get(url + i, function(res){
                var details = "";
                details += "Name:" + " " + res.name
                details += "<p>Words:" + " " + res.words + "</p>"
                details += "<p>Titles:" + " " + res.titles + "</p>"
                $('.house-details').html(details);
            }, "json");
        }
    })
})

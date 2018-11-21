var topics = ["raccoons", "chickens", "puppies", "fireworks", "melting", "fail", "cars", "cats", "squirrels", "birthday"];

$(document).on("ready", makeButtons);

function makeButtons() {
    $("#buttonsDisplay").empty();
    for (var i = 0; i<topics.length; i++) {
        var chicken = $("<button>");
        chicken.attr({"class": "gifButton", "id": "button-"+topics[i], "data-value": topics[i]})
        chicken.text(topics[i]);
        $("#buttonsDisplay").append(chicken);
    }
};

$(document).on("click", ".gifButton", searchGifs);


function searchGifs() {
    var searchTerm = $(this).attr("data-value");
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key=YyFcuSJGOvGOgs54xRgxJ3bhn8IxMkWF&limit=5";
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(response){
        console.log(response);
        for (var i = 0; i < response.data.length; i++){
            var dolphin = $("<img>");
            var whale = $("<p>");
            dolphin.attr("src", response.data[i].images.fixed_height.url);
            whale.text("Rating: " +response.data[i].rating);
            $("#gifDisplay").prepend(dolphin, whale);
        }
    });
}

$("#addGif").on("click", function(booger){
    booger.preventDefault();
    var neue = $("#gifInput").val().trim();
    topics.push(neue);
    makeButtons();
    $("#gifInput").val("");
})

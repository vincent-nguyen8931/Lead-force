$("#add-btn").on("click", function (event) {
    event.preventDefault();

    // make a newCharacter obj
    var newCharacter = {
        // name from name input
        username: $("#name").val().trim(),
        // role from role input
        password: $("#role").val().trim(),
        // age from age input
        email: $("#age").val().trim(),
        // points from force-points input
        forcePoints: $("#force-points").val().trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/api/leads/:id", newCharacter)
        // on success, run this callback
        .then(function (data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a character with an alert window
            alert("Adding character...");
        });

    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#role").val("");
    $("#age").val("");
    $("#force-points").val("");

});


$.get("/api/leads/", function (data) {

    // for each character that our server sends us back
    for (var i = 0; i < data.length; i++) {
        // create a parent div for the oncoming elements
        var wellSection = $("<div>");
        // add a class to this div: 'well'
        wellSection.addClass("well");
        // add an id to the well to mark which well it is
        wellSection.attr("id", "character-well-" + i);
        // append the well to the well section
        $("#well-section").append(wellSection);

        // Now add all of our character data to the well we just placed on the page

        // make the name an h2,
        $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
        // the role an h3,
        $("#character-well-" + i).append("<h3>Role: " + data[i].role + "</h4>");
        // the age an h3,
        $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
        // and the forcepoints an h3.
        $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
    }
});


$(document).ready(function(){

//Get values at buttonclick in activity modal
$("#actSubmitBtn").click(function() {
    let actValue = $("#inputAct").val();
    let actUrgency = $("input[name='urgentie']:checked").val();

    //Check if text field isn't empty before adding activity
    if (actValue != "") {
        if (actUrgency == "laag") {
    $("#rowOne").append("<p><span class='urgencyLow'>" + actValue + "</span></p>");
        } else if(actUrgency == "middel") {
            $("#rowOne").append("<p><span class='urgencyNormal'>" + actValue + "</span></p>");
        } else {
            $("#rowOne").append("<p><span class='urgencyHigh'>" + actValue + "</span></p>");
        }

    //Close Modal and reset modal fields 
    $("#inputAct").val("");
    $("input[name='urgentie']:checked").removeProp("checked");
    $("#modalContainer").css("display", "none");
    } else {
        alert("Graag text invullen bij het activiteit veld!!");
    }
    
    

});

}) //Final bracket
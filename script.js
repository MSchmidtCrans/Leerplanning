$(document).ready(function(){

//Get values at buttonclick in activity modal
$("#actSubmitBtn").click(function() {
    let actValue = $("#inputAct").val();
    let actUrgency = $("input[name='urgentie']:checked").val();
    $("#rowOne").append("<p><span>" + actValue + "</span></p>");

    //Close Modal and reset modal fields 
    $("#inputAct").val("");
    $("input[name='urgentie']:checked").removeProp("checked");
    $("#modalContainer").css("display", "none");
    
    

});

}) //Final bracket
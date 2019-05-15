$(document).ready(function(){

//Get values at buttonclick in activity modal
$("#actSubmitBtn").click(function() {

    let actValue = $("#inputAct").val();
    let actUrgency = $("input[name='urgentie']:checked").val();
    let idClass = actValue + actUrgency;

    //Check if text field isn't empty before adding activity 
    if (actValue != "") {

        //Assign urgency background color
        if (actUrgency == "middel") {
            $("#rowOne").append("<p><span id='" + idClass + "' class='urgencyNormal' draggable=true ondragstart=drag(event)>" + actValue + "</span></p>");
        } else if(actUrgency == "hoog") {
            $("#rowOne").append("<p><span id='" + idClass + "' class='urgencyHigh' draggable=true ondragstart=drag(event)>" + actValue + "</span></p>");
        } else {
            $("#rowOne").append("<p><span id='" + idClass + "' class='urgencyLow' draggable=true ondragstart=drag(event)>" + actValue + "</span></p>");
        }

    //Close Modal and reset modal fields 
    $("#inputAct").val("");
    $("input[name='urgentie']:checked").removeProp("checked");
    $("#modalContainer").css("display", "none");
    } else {
        alert("Graag tekst invullen en/of een urgentie kiezen!!");
    }     


}); //Click event end

}) //Document ready end

//Drag and drop functions

//Set the column divs to allow drops from drags
function allowDrop(ev) {
    ev.preventDefault();
  }

//Set what data is to be dragged from the source div
function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

//On drop drop the source div in the target div
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
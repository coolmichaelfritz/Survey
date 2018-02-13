$(document).ready(function()  {
  $("#blanks form").submit(function(event) {
    var userNameInput = $("input#userName").val();
    var userAnimalInput = $("input#userAnimal").val();
    var userFoodInput = $("input#userFood").val();
    var userLocationInput = $("input#userLocation").val();
    var userColor = $("#color").val();

    $(".userName").text(userNameInput);
    $(".userFood").text(userFoodInput);
    $(".userAnimal").text(userAnimalInput);
    $(".userLocation").text(userLocationInput);
    $(".userColor").text(userColor);


    $("#userInfo").show();

    event.preventDefault();
  });
});

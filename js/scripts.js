$(document).ready(function()  {
  $("#blanks form").submit(function(event) {
    var userNameInput = $("input#userName").val();
    var userAnimalInput = $("input#userAnimal").val();
    var userFoodInput = $("input#userFood").val();
    var userLocationInput = $("input#userLocation").val();


    $(".userName").text(userNameInput);
    $(".userFood").text(userFoodInput);
    $(".userAnimal").text(userAnimalInput);
    $(".userLocation").text(userLocationInput);

    $("#userInfo").show();

    event.preventDefault();
  });
});

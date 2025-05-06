$(Document).ready(function () {
  $("#sing-r").click(function () {
    $(".sinein-C").hide();
    $(".Login-C").css("display", "none");
    $(".sinein-C").fadeIn(800);
  });

  $("#login-r").click(function () {
    $(".sinein-C").css("display", "none");
    $(".Login-C").css("display", "block");
    $(".Login-C").hide();
    $(".Login-C").fadeIn(800)();
  });

  var Username;
  var Password;
  $.getJSON("../js/data/User-Pass.json", function (response) {
    Username = response.Username;
    Password = response.Password;
    alert(
      "Username : " +
        Username +
        "\nPassword : " +
        Password +
        "\nnot case sensitive "
    );
  });

  $("#LogButton").click(function (e) {
    e.preventDefault();

    var LogUsername = $("#Username").val().toUpperCase();
    var LogPassword = $("#LogPassword").val().toUpperCase();

    if (LogUsername === Username && LogPassword === Password) {
      $("#user-l").css({"box-shadow": "0 0 20px 12px rgba(95, 243, 82, 0.64)","transition": ".6s"});
      $(".Login-C").css({"box-shadow": "0 0 20px 12px rgba(95, 243, 82, 0.64)","transition": ".6s"});
      $(".Login-C form").hide(400);
      $(".Login-C h2").text("Welcome back");


      setTimeout(function () {
        window.location.href = "../index.html";
      }, 2200);
    } 
    else {
        $("#user-l").css({"box-shadow": "0 0 25px 12px rgb(245, 35, 35)","transition": ".35s"}); 
        $(".Login-C").css({"box-shadow": "0 0 40px 6px rgb(245, 35, 35)","transition": ".35s"}); 
        
        setTimeout(function () 
        {
            $("#user-l").css({"box-shadow": "0 0 25px 12px rgba(5, 174, 216, 0.644)","transition": ".6s"});   
            $(".Login-C").css({"box-shadow": "0 0 20px 12px rgba(5, 174, 216, 0.644)","transition": ".6s"});   
          }, 1200);
    }
  });

  $("#SignButton").click(function (e) {
    e.preventDefault();

    alert("Sorry ,this feature still not active");
  });
});

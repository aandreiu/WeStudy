
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
        window.location = "/index";
  }
}

function changeUser(response) {
    $(".facebookLogin").hide();
    $("#name").text(response.name);
    $("#photo").attr("src", response.picture.data.url);
  var newLink = "profile/" + response.name;
	console.log(newLink);
	$("#profileLink").attr("href", newLink);
}

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
        window.location = "/index";
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);}
  else {
    window.alert("Facebook login unsuccessful");
  }
}

function changeUser(response) {
    $("h1#name").text(response.name);
    $("img#photo").attr("src", response.picture.data.url);
}
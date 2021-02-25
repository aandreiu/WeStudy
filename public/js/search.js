function myFriends() {
  var input, f, ul, li, a, j, value;
  input = document.getElementById('searchFriends');
  f = input.value.toUpperCase();
  ul = document.getElementById("friendsList");
  li = ul.getElementsByTagName('li');

  for (j = 0; j < li.length; j+=1) {
    a = li[j].getElementsByTagName("a")[0];
    if (value = a.textContent) {
      value = a.textContent;
    } else {
      value = a.innerText;
    }
    if (value.toUpperCase().indexOf(f) > -1) {
      li[j].style.display = "";
    } else {
      li[j].style.display = "none";
    }
  }
}
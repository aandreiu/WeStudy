// Create new task after clicking Add button
function newFutureTask() {
  var new_li = document.createElement("li");
  var input = document.getElementById("task-input").value;
  var task = document.createTextNode(input);
  new_li.appendChild(task);

  document.getElementById("task-list").appendChild(new_li);
  document.getElementById("task-input").value = "";
  document.getElementById("finish-date").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  new_li.appendChild(span);

  for (i = 0; i < x.length; i++) {
    x[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Add X button on each task
var x_list = document.getElementsByTagName("LI"); var i;
for (i = 0; i < x_list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  x_list[i].appendChild(span);
}

// Click on a close button to hide the current list item
var x = document.getElementsByClassName("close"); var i;
for (i = 0; i < x.length; i++) {
  x[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add checkmark when clicked on
var check_task = document.querySelector('ul');
check_task.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('check');
  }
}, false);
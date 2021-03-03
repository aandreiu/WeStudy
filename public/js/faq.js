var q = document.getElementsByClassName("faq");
var j;

for (j = 0; j < q.length; j++) {
    q[j].addEventListener("click", function() {
        this.classList.toggle("active2");
    var answer = this.nextElementSibling;
    if(answer.style.display === "block") {
        answer.style.display = "none"; 
     }
    else {
        answer.style.display = "block";
    }
  });
 }
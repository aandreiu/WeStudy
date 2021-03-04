'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    $('.faq a').click(showQuestionDetails);
})

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function showQuestionDetails(e) {
    e.preventDefault();
    var faqID = $(this).closest('.faq').attr('id');
    var idNumber = faqID.substr('faq'.length);
    $.get("/faq/" + idNumber, callbackFn);
}

function callbackFn(result){
    console.log(result); 

    var resultHTML = '<h4>' + result['question'] + '</h4>' + 
    '<p>' + result['answer'] + '</p>';

    var idnumb = "faq" + result.id;
    $("#" + idnumb + " .details").html(resultHTML);
}

var q = document.getElementsByClassName("faq");
var j;

// for (j = 0; j < q.length; j++) {
//     q[j].addEventListener("click", function() {
//         this.classList.toggle("active2");
//     var answer = this.nextElementSibling;
//     if(answer.style.display === "block") {
//         answer.style.display = "none"; 
//      }
//     else {
//         answer.style.display = "block";
//     }
//   });
//  }

//  for (j = 0; j < q.length; j++) {
//     q[j].addEventListener("click", function() {
//         this.classList.toggle("active2");
//     var answer = this.nextElementSibling;
//     if(answer.style.maxHeight) {
//         answer.style.maxHeight = null; 
//      }
//     else {
//         answer.style.maxHeight = answer.scrollHeight + "px";
//     }
//   });
//  }
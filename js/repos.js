// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}



$(document).ready(function(){


$("#repobutton").on("click", function() {
  
  $.ajax({
  type: "GET",
  url: "https://api.github.com/users/MariaVintimilla/repos",
  success: tester
  });


function tester(dataFromRepos){
  for (var i = 0; i < dataFromRepos.length; i++) {
    var x = buildElements(dataFromRepos[i].name);

  $("tr").append(x);   

  }
}

function buildElements(dataRedux) {
  var y = $("<div>").append(dataRedux);
  return y;
 }


});
});

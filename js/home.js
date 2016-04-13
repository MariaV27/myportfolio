$('.carousel').carousel();

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

 
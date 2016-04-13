$('.carousel').carousel();

$(document).ready(function(){



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

 
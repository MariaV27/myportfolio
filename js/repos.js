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

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/mariav70/repos",
    success: function(repos) {
      for (var i = 0; i < repos.length; i++) {
      var newListItem = buildListGroup(repos[i]);
      $(".list-group").append(newListItem);
      }
    },
    error: function(jqHXR, textStatus, errorThrown) {
      alert("Error");
    }
  });

  function buildListGroup(repoData) {
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(repoData.name);
    return newLink;
  }
});

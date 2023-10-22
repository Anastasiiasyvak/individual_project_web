function toggleText() {
    var moreText = document.getElementById("moreText");
    var toggleButton = document.getElementById("toggleButton");
    var hideButton = document.getElementById("hideButton");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        toggleButton.style.display = "none";
        hideButton.style.display = "block";
    } else {
        moreText.style.display = "none";
        toggleButton.style.display = "block";
        hideButton.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video");

    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});


window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (window.pageYOffset > 50) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
  }
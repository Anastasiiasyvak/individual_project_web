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


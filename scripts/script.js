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



  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }



const instagramIcon = document.getElementById("instagram-icon");
const instagramLink = "https://www.instagram.com/p/CyVc-sVIG6MuxB5M6xLv2QzJjNAefb_MUF9IfA0/?igshid=MzRlODBiNWFlZA==";

instagramIcon.addEventListener("click", function () {
  window.open(instagramLink, "_blank");
});


const facebookLink = "https://uk-ua.facebook.com/";

const facebookIcon = document.querySelector(".gg-facebook"); 

facebookIcon.addEventListener("click", function () {
  window.open(facebookLink, "_blank");
});


const chanelIcon = document.getElementById("chanel-icon");

chanelIcon.addEventListener("click", function () {
  const chanelLink = "https://www.chanel.com/#";
  window.open(chanelLink, "_blank");
});
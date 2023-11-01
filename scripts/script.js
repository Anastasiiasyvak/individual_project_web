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

document.addEventListener("DOMContentLoaded", function() {
const formButton = document.getElementById("formButton");

formButton.addEventListener("click", function() {
    window.location.href = "index1.html";
});
});


document.getElementById("submit-icon").addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const url = `https://emailvalidation.abstractapi.com/v1/?api_key=336853bb264944ffa8dc47a694dbf8fa&email=${email}`;
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4) {
          if (xmlHttp.status === 200) {
              const response = JSON.parse(xmlHttp.responseText);
              if (response.is_valid_format.value) {
                  alert("Email is valid");
              } else {
                  alert("Email is invalid");
              }
          } else {
              alert("Error during query execution");
          }
      }
  };

  xmlHttp.open("GET", url, true); 
  xmlHttp.send();
});


//video library

  var modal = document.getElementById("modal");

  var btn = document.getElementsByClassName("video-btn");

  var span = document.getElementById("close");

  var videoSrc

function openmodal(event) {
  stopBgSound();
  modal.style.display = "block";
  videoSrc = $(this).data( "src" );
  $("#video").attr('src',videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
}

for (var i = 0 ; i < btn.length; i++){
  btn[i].addEventListener('click', openmodal);
}

span.onclick = function() {
  modal.style.display = "none";
  $("#video").attr('src',videoSrc);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $("#video").attr('src',videoSrc);
  }
}

//audio player stuff

var tracks = document.getElementsByClassName("track");

var playButton = document.getElementsByClassName("playButton");
var pauseButton = document.getElementsByClassName("pauseButton");

var barSize;

for (var i = 0 ; i < playButton.length; i++){
  playButton[i].addEventListener('click', playTrack);
}

for (var i = 0 ; i < pauseButton.length; i++){
  pauseButton[i].addEventListener('click', pauseTrack);
}

function stopBgSound() {
  for (var i = 0 ; i < tracks.length; i++){
    if (!tracks[i].paused){
      tracks[i].pause();
    }
  }
}

function playTrack(event) {
  stopBgSound();
  var nav = ((event.target).parentNode).parentNode;
  var track = nav.getElementsByClassName("track");
  var bar = nav.getElementsByClassName("progressBar");
  barSize = nav.getElementsByClassName("cleanbar")[0].offsetWidth;
  track[0].play();
  setInterval(function() {update(track[0], bar[0])}, 500);
}

function pauseTrack(event) {
  var nav = ((event.target).parentNode).parentNode;
  var track = nav.getElementsByClassName("track");
  track[0].pause();
}


function update(track, bar) {
  if(!track.ended) {
    var size = parseInt(track.currentTime*barSize/track.duration);
    bar.style.width = size + "px";
  }
  else {
    bar.style.width = 0 + "px";
  }
}

//home button

const btnHome = document.getElementById("home-nav");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    btnHome.classList.add("active");
  }
  else {
    btnHome.classList.remove("active");
  }
})

// burger menu

const drop = document.getElementById("dropbtn");
const navbar = document.getElementById("navbar");
const menuItems = navbar.getElementsByTagName("a");

function toggle() {
     if (drop.getAttribute("aria-expanded") === "false") {
         drop.setAttribute("aria-expanded", "true");
     }
     else {
       drop.setAttribute("aria-expanded", "false");
     }
}
drop.addEventListener("click", toggle)

for (var i = 0 ; i < menuItems.length; i++){
  menuItems[i].addEventListener("click", function() {
    drop.setAttribute("aria-expanded", "false");
  });
}

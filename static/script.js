//video library

  var modal = document.getElementById("modal");

  var btn = document.getElementsByClassName("video-btn");

  var span = document.getElementById("close");

  var videoSrc

function openmodal(event) {
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

var barSize = 493;

for (var i = 0 ; i < playButton.length; i++){
  playButton[i].addEventListener('click', playTrack);
}

for (var i = 0 ; i < pauseButton.length; i++){
  pauseButton[i].addEventListener('click', pauseTrack);
}

function playTrack(event) {
  for (var i = 0 ; i < tracks.length; i++){
    if (!tracks[i].paused){
      tracks[i].pause();
    }
  }
  var nav = ((event.target).parentNode).parentNode;
  var track = nav.getElementsByClassName("track");
  var bar = nav.getElementsByClassName("progressBar");
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

//scroll to top

const btnScrollToTop = document.getElementById("scrolltotop");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    btnScrollToTop.classList.add("active");
  }
  else {
    btnScrollToTop.classList.remove("active");
  }
})

btnScrollToTop.addEventListener("click", function() {
  $("html, body").animate({ scrollTop: 0}, "slow");
})

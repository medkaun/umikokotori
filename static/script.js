
  // Get the modal
  var modal = document.getElementById("modal");

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("video-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementById("close");

  var videoSrc

function openmodal(event) {
  modal.style.display = "block";
  videoSrc = $(this).data( "src" );
  $("#video").attr('src',videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
  // var iFrame = document.getElementById( 'video' );
  //   resizeIFrameToFitContent( iFrame );
}

// function resizeIFrameToFitContent( iFrame ) {
//
//     iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
//     iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
// }

// When the user clicks the button, open the modal
for (var i = 0 ; i < btn.length; i++){
  btn[i].addEventListener('click', openmodal);
}

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("#video").attr('src',videoSrc);
}

// When the user clicks anywhere outside of the modal, close it
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
// var bar = document.getElementsByClassName("defaultBar");
// var progressBar = document.getElementsByClassName("progressBar");

// for (var i = 0 ; i < playButton.length; i++){
//   playButton[i].addEventListener('click', playTrack(i));
// }

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

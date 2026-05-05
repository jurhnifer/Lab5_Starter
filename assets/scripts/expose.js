// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Initialize the horn selection
  let horn = document.getElementById('horn-select');
  // Initialize the volume control
  let volume = document.getElementById('volume');
  // Initialize audio element
  let audio = new Audio();
  // Initialize image
  let img = document.querySelector('img');
  // Initialize button
  let button = document.querySelector('button');
  // Initialize sound volume image
  let soundVolumeImg = document.getElementById('volume-controls').querySelector('img');
  // Add event listener for horn selection change
  horn.addEventListener('change', function() {
    if (horn.value == 'air-horn') {
      audio.src = 'assets/audio/air-horn.mp3';
      img.src = 'assets/images/air-horn.svg';
    }
    else if (horn.value == 'car-horn') {
      audio.src = 'assets/audio/car-horn.mp3';
      img.src = 'assets/images/car-horn.svg';
    } else if (horn.value == 'party-horn') {
      audio.src = 'assets/audio/party-horn.mp3';
      img.src = 'assets/images/party-horn.svg';
    } else {
      audio.src = '';
      img.src = 'assets/images/no-image.png';
    }
  });

  // Add event listener for volume change
  volume.addEventListener('input', function() {
    if (volume.value == 0) {
      audio.volume = 0;
      soundVolumeImg.src = 'assets/icons/volume-level-0.svg';
    } else if (volume.value < 33) {
      audio.volume = volume.value / 100;
      soundVolumeImg.src = 'assets/icons/volume-level-1.svg';
    } else if (volume.value < 67) {
      audio.volume = volume.value / 100;
      soundVolumeImg.src = 'assets/icons/volume-level-2.svg';
    } else {
      audio.volume = volume.value / 100;
      soundVolumeImg.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Add event listener for button click
  button.addEventListener('click', function() {
    audio.play();
    if (horn.value == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
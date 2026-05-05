// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Initialize the smiley face image
  let img = document.querySelector('img');
  // Initialize text to speak input
  let textToSpeakInput = document.getElementById('text-to-speak');
  // Initialize button
  let button = document.querySelector('button');
  // Initialize synthesis
  let synth = window.speechSynthesis;
  // Initialize voice selection
  let voiceSelect = document.getElementById('voice-select');
  // Populate voice selection dropdown
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for (const voice of voices) {
      let option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if(voice.default){
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', function() {
    let utterThis = new SpeechSynthesisUtterance(textToSpeakInput.value);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    synth.speak(utterThis);
    utterThis.addEventListener('start', function() {
      img.src = 'assets/images/smiling-open.png';
    });
    utterThis.addEventListener('end', function() {
      img.src = 'assets/images/smiling.png';
    });

  });



}
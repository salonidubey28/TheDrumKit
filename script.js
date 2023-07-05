const drums = document.querySelectorAll('.drum');

function playDrumSound(event) {
  let audioKey;

  if (event.type === 'click') {
    audioKey = this.getAttribute('data-key');
  } else if (event.type === 'keydown') {
    audioKey = event.keyCode;
  }

  const audio = document.querySelector(`audio[data-key="${audioKey}"]`);
  const drum = document.querySelector(`.drum[data-key="${audioKey}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  drum.classList.add('playing');
  audio.addEventListener('ended', () => {
    drum.classList.remove('playing');
  });
}

drums.forEach((drum) => {
  drum.addEventListener('click', playDrumSound);
});

document.addEventListener('keydown', playDrumSound);

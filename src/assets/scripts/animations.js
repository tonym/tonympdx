function fadeInPage() {
  const fader = document.getElementById('fader');
  if (!window.AnimationEvent) {
    return;
  }
  fader.classList.add('fade-out');
}
fadeInPage();

document.addEventListener('DOMContentLoaded', () => {
  if (!window.AnimationEvent) {
    return;
  }
  const anchors = document.getElementsByClassName('main-nav');
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', (e) => {
      const fader = document.getElementById('fader');
      const anchor = e.currentTarget;

      const listener = function () {
        window.location = anchor.href;
      };

      fader.addEventListener('animationend', listener);

      e.preventDefault();
      fader.classList.add('fade-in');
    });
  }
});

window.addEventListener('pageshow', (e) => {
  if (!e.persisted) {
    return;
  }
  const fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

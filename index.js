const speakersInfo = [{
  name: 'Anthony Hopkins',
  inform: 'Twenty-nine years on, Hopkins wins Best Actor In 2021',
  image: 'content/images/the-best-actor.jpg',
},
{
  name: 'Jane Campion',
  inform: 'The Power of the Dog wins Best Director In 2021',
  image: 'content/images/the-best-director.jpg',
}];
function displaySpeakers() {
  const speakersPart = document.getElementById('speakers');
  const speakers = document.createElement('div');
  speakers.classList.add('row');
  speakersInfo.forEach((info) => {
    const speaker = `<div class="d-flex align-items-center row mt-2 col-md-6 m-md-0">
    <div class="col-5 mb-2">
      <div class="speakers-img-background"></div>
      <img class="speakers-img" alt="best actor" src="${info.image}">
    </div>
    <div class="speakers-info col-7">
      <h4 class="color-primary font-secondary about-page-header h6">${info.name}</h4>
      <p class="color-secondary font-secondary">${info.inform}</p>
    </div>
    </div>`;
    speakers.insertAdjacentHTML('beforeend', speaker);
  });
  speakersPart.appendChild(speakers);
}
const moresInform = [{
  nameMore: 'Isaac Perlmutter',
  informMore: 'Chairperson of Marvel Entertainment',
  imageMore: 'content/images/marvel-ceo.jpg',
},
{
  nameMore: 'Will Smith',
  informMore: 'Willard Carroll Smith II, is an American actor, rapper, and film producer.',
  imageMore: 'content/images/will-smith.jpg',
},
{
  nameMore: 'Angelina Jolie',
  informMore: 'Angelina Jolie the sponsorship of this event Awards',
  imageMore: 'content/images/angelina-jolie.jpg',
},
{
  nameMore: 'Angelina Jolie',
  informMore: 'Angelina Jolie the sponsorship of this event Awards',
  imageMore: 'content/images/angelina-jolie.jpg',
}];
function displayMores() {
  const morePart = document.getElementById('mores');
  const mores = document.createElement('div');
  mores.classList.add('row');
  moresInform.forEach((inform) => {
    const more = `<div class="d-flex align-items-center row mt-2 mb-3 col-md-6 m-md-0">
    <div class="col-5 mb-2 align-items-center">
        <img class="speakers-img" alt="speakers Photo" src="${inform.imageMore}">
    </div>
    <div class="col-7">
      <h4 class="color-primary font-secondary about-page-header h6">${inform.nameMore}</h4>
      <p class="color-secondary font-secondary">${inform.informMore}</p>
    </div>
    </div>`;
    mores.insertAdjacentHTML('beforeend', more);
  });
  morePart.appendChild(mores);
}

window.addEventListener('DOMContentLoaded', () => {
  displaySpeakers();
  displayMores();
});
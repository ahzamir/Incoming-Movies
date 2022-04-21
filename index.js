const speakersInfo = [{
  name: 'Anthony Hopkins',
  inform: 'Twenty-nine years on, Hopkins wins Best Actor In 2021',
  shortBio: 'Also among the notable winners at the 2021 Academy Awards, which were held as a multi- venue event due to the covid - 19 pandemic, was Sir Anthony Hopkins, who received the second Best Actor Oscar of his career, nearly three decades after his first',
  image: 'content/images/the-best-actor.jpg',
},
{
  name: 'Jane Campion',
  inform: 'The Power of the Dog wins Best Director In 2021',
  shortBio: 'Jane Campion has won the Oscar for best director at the 94th Academy Awards, currently under way at the Dolby theatre in Los Angeles. Campion becomes the third woman to win the award, after Chloé Zhao in 2021 and Kathryn Bigelow in 2010.',
  image: 'content/images/the-best-director.jpg',
},
{
  name: 'Isaac Perlmutter',
  inform: 'Chairperson of Marvel Entertainment',
  shortBio: 'Isaac "Ike" Perlmutter is an Israeli-American businessman and financier. He is the chairman and former CEO of Marvel Entertainment. He was also the owner of Remington Products and Marvel Toys.',
  image: 'content/images/marvel-ceo.jpg',
},
{
  name: 'Will Smith',
  inform: 'Willard Carroll Smith II, is an American actor, rapper, and film producer.',
  shortBio: 'Will Smith’s transformation from a fearful child in a tense West Philadelphia home to one of the biggest rap stars of his era and then one of the biggest movie stars in Hollywood history, with a string of box office successes that will likely never be broken, is an epic tale of inner transformation and outer triumph, and Will tells it astonishingly well. But its only half the story.',
  image: 'content/images/will-smith.jpg',
},
{
  name: 'Angelina Jolie',
  inform: 'Angelina Jolie the sponsorship of this event Awards',
  shortBio: 'Angelina Jolie DCMG is an American actress, filmmaker, and humanitarian. The recipient of numerous accolades, including an Academy Award and three Golden Globe Awards, she has been named Hollywoods highest-paid actress multiple times.',
  image: 'content/images/angelina-jolie.jpg',
},
{
  name: 'Angelina Jolie',
  inform: 'Angelina Jolie the sponsorship of this event Awards',
  shortBio: 'Angelina Jolie DCMG is an American actress, filmmaker, and humanitarian. The recipient of numerous accolades, including an Academy Award and three Golden Globe Awards, she has been named Hollywoods highest-paid actress multiple times.',
  image: 'content/images/angelina-jolie.jpg',
}];
function displaySpeakers() {
  const speakersPart = document.getElementById('speakers');
  const speakers = document.createElement('div');
  speakersInfo.forEach((speakerInfo) => {
    const speaker = `<div class="d-flex align-items-center row mt-2 col-md-6 m-md-0">
    <img class="col-3" alt="best actor" src="${speaker.image}">
    <div class="col-9">
      <h4 class="color-secondary font-secondary about-page-header h6">${speaker.name}</h4>
      <p class="color-primary font-secondary">${speaker.inform}</p>
      <p class="color-secondary font-secondary">${speaker.shortBio}</p>
    </div>
    </div>`;
    speakers.insertAdjacentHTML('beforeend', speakers);
  });
  speakersPart.appendChild(speakers);
}

window.addEventListener('DOMContentLoaded', () => {
  displaySpeakers();
});
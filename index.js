const cardData = [
  { name: "Rain Wordle",
    url: "https://rainwordle.net",
    description: "Rain World Wordle.",
    img: "images/rain-wordle.png",
  },
  {
    name: "Metin2 Reversal Docs",
    url: "/",
    description: "Metin2 Reversal Docs.",
    img: "images/metin2-warrior.png",
  },
  {
    name: "The book of osu!taiko",
    url: "/",
    description: "The book of osu!taiko.",
    img: "images/osu-taiko-book.png",
  },
  {
    name: "Roblox AHKv2 Scripts",
    url: "/",
    description: "Roblox AHKv2 Scripts.",
    img: "images/roblox-script.webp",
  },
  // {
  //   name: "Coming Soon!",
  //   url: "/",
  //   description: "Stay tuned!",
  //   img: "images/rain-wordle.png",
  // },
  // {
  // name: "Coming Soon!",
  // url: "/",
  // description: "Stay tuned!",
  // img: "images/rain-wordle.png",
  // },
]

function createCards(list) {
  let i = 0;
  for (let data of cardData) {
    list.innerHTML += `<div class="card card-${i + 1}"></div>`;
    const card = document.querySelector('.card-' + (i + 1));
    console.log("card:", card);
    if (i > cardData.length) break;
    card.innerHTML = `
    <div>
      <a href="${data.url}">
          <img src="${data.img}" alt="${data.name} image">
      <div class="card-footer">
          <div style="display: inline;">${data.name}</div>
          <div style="display: inline;">Emblems</div>
        </div>
      </a>
      <div class="card-desc">${data.description}</div>
    </div>
    `;
    i++;
  }

  // Have to use 2nd for loop, innerHTML removes event listeners
  for (let j = 0; j < i; j++) {
    const card = document.querySelector('.card-' + (j + 1));
    cardAnimate(card);
  }
} 

function cardAnimate(card) {
  let footer = card.querySelector('.card-footer');
  let img = card.querySelector('img');
  let desc = card.querySelector('.card-desc');
  card.addEventListener('mouseenter', (e) => {
    // card.style.transform = 'scale(1.05)';
    // card.style.transition = 'transform 0.3s ease';
    footer.style.transform = `translateY(-${footer.offsetTop}px)`;
    footer.style.transition = 'transform 0.3s ease';
    img.style.transition= 'filter 0.4s ease';
    img.style.filter = 'blur(2px)';
    desc.style.transform = `translateY(2.5rem)`;
    desc.style.transition = 'transform 2s ease, opacity 1s ease';
    desc.style.opacity = '100%';
  });
  card.addEventListener('mouseleave', (e) => {
    // card.style.transform = 'scale(1)';
    // card.style.transition = 'transform 0.3s ease';
    footer.style.transform = `translateY(${0}px)`;
    footer.style.transition = 'transform 0.5s ease';
    img.style.transition= 'filter 0.5s ease';
    img.style.filter = 'blur(0)';
    desc.style.opacity = '0%';
    desc.style.transform = `translateY(0)`;
    desc.style.transition = 'opacity 0.1s ease';
  });
  console.log('Animated card:', footer, img, desc);
}

window.onload = (e) => {
  console.log(document.querySelector('.about'));
  const dropdownButton = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownButton.addEventListener('click', (e) => { 
    // console.log("siema", e);
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    dropdownButton.innerHTML = dropdownButton.innerHTML === 'V' ? '^' : 'V';
  });

  const cardList = document.querySelector('.cardlist');
  createCards(cardList);
};

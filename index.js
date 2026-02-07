const cardData = [
  { name: "Rain Wordle",
    url: "https://rainwordle.net",
    description: `Inspired by Wordle and Jumple, Rain Wordle is a region-guessing game, 
    where player guesses one of the many regions of the game Rain World. 
    The guesses are taken based on the information given by an interactive map. 
    The map zooms out if player guesses incorrectly, displaying more information about the region. 
    The game is designed to be simple and addictive, with a focus on quick gameplay and replayability.`,
    img: "images/rain-wordle.png",
    emblems: ["flag_usa", "javascript", "react", "tailwindcss"],
  },
  {
    name: "Metin2 Reversal Docs",
    url: "https://drive.google.com/drive/folders/1GiaCRx2K-0qt5OI9ARMcS19TKJ-2iQZ7",
    description: `A reverse engineering project that aims to document various aspects of the popular MMORPG game Metin2, 
    The project is designed to provide a comprehensive resource for developers and players 
    interested in understanding the inner workings of the game.`,
    img: "images/metin2-warrior.png",
    emblems: ["flag_pl", "google_sheets"],
  },
  {
    name: "The book of osu!taiko",
    url: "https://docs.google.com/document/d/10XNC70UKTBXAhEHQvo4ug0k4xpEUdKQ_GjM2nog51vk",
    description: `(pl. Księga osu!taiko) is a comprehensive polish guide to the rhythm game osu!taiko, 
    covering everything from basic gameplay mechanics to advanced techniques and strategies. 
    It is designed to help players of all skill levels improve their performance 
    and enjoy the game to the fullest.`,
    img: "images/osu-taiko-book.png",
    emblems: ["flag_pl", "taiko"],
  },
  {
    name: "Roblox AHKv2 Scripts",
    url: "https://github.com/t0nik/roblox-scripts-ahk",
    description: `Some AutoHotkey v2 scripts for various Roblox games, such as Chaos Town. 
    These scripts are designed to automate certain tasks such as trading.`,
    img: "images/roblox-script.webp",
    emblems: ["flag_usa", "ahk"],
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

    const emblemsHTML = setEmblemsHTML(data.emblems);
    card.innerHTML = `
    <div style="height: 100%;">
      <a href="${data.url}">
          <img src="${data.img}" alt="${data.name} image">
      <div class="card-footer">
          <div style="display: inline;">${data.name}</div>
          <div style="display: inline;">${emblemsHTML}</div>
        </div>
      
      <div class="card-desc">${data.description}</div>
      </a>
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

function setEmblemsHTML(emblems) {
  let resultHTML = `<div class="emblems" style="display: inline; display: flex; justify-content: center; gap: 5px;">`;
  for (let em of emblems) {
    resultHTML += `<img src="images/emblems/${em}.png" alt="${em} emblem" style="width: auto;">`;
  }
  resultHTML += `</div>`;
  return resultHTML;
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

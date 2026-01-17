const cardData = [
  { name: "Rain Wordle",
    url: "https://rainwordle.net",
    description: "Rain World Wordle.",
    img: "images/rain-wordle.png",
  }
]

window.onload = (e) => {
  console.log(document.querySelector('.about'));
  const dropdownButton = document.querySelector('.dropdown button');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownButton.addEventListener('click', (e) => { 
    // console.log("siema", e);
    dropdownContent.style.display =
      dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  const cardList = document.querySelector('.cardlist');
  let i = 0;
  for (let data of cardData) {
    cardList.innerHTML += `<div class="card card-${i + 1}"></div>`;
    const card = document.querySelector('.card-' + (i + 1));
    console.log("card:", card);
    if (i > cardData.length) break;
    card.innerHTML = `<div>
      <a href="${cardData[i].url}">
        <img src="${cardData[i].img}" alt="${cardData[i].name} image">
      </a>
      <div>${cardData[i].description}</div>
      </div>
      <div class="card-footer">
        <div style="display: inline;">${cardData[i].name}</div>
        <div style="display: inline;">Emblems</div>
      </div>
    `

    if (card.className === 'card-' + i + 1) {
      card.addEventListener('click', (e) => {
        console.log('Card clicked:', card);
        console.log(`You clicked on ${card.innerHTML}`);
      });
    }
    i++;
  }
};




window.onload = (e) => {
  console.log(document.querySelector('.about'));
  const dropdownButton = document.querySelector('.dropdown button');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownButton.addEventListener('click', (e) => { 
    // console.log("siema", e);
    dropdownContent.style.display =
      dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
};




// Menu button
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menuBtn.style.color = 'black';
    menuBtn.innerHTML = '&#9776;';
    menu.classList.remove('slide-down');
    menu.classList.add('slide-up');
    setTimeout(() => {
      menu.style.display = 'none';
    }, 600)
  } else {
    menuBtn.style.color = 'red';
    menuBtn.innerHTML = '&times;';
    menu.classList.remove('slide-up');
    menu.classList.add('slide-down');
      menu.style.display = 'flex';
  }
})

// CTA button
let ctaBtn = document.querySelector('.CTA-btn');
let contactSection = document.querySelector('#contact');
ctaBtn.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth'});
})

// Lumineo image
let lumineoNum = 0;
function toogleImg() {
  let lumineoImage = document.querySelector('.lumineo-img');
  if (lumineoNum === 0) {
    lumineoNum++;
    lumineoImage.src = 'lumineo.gif';
    setTimeout(toogleImg, 4000);
  } else if (lumineoNum === 1) {  
    lumineoNum--;
    lumineoImage.src = 'lumineo.png';
    setTimeout(toogleImg, 4000);
  }
}
setTimeout(toogleImg, 4000);


// Ratings
let staticFeedBacks = [
  {
    name: "Meteor",
    brand: "Meteor FX",
    txt: "The color you used for my logo is so amazing, thank you for your services",
  },
  {
    name: "Kaine Dorothy",
    brand: "Dora Designs",
    txt: "I'm so happy I chose you as a designer for my brand logo, thank you Marvellous",
  },
  {
    name: "Fashanu Favour",
    brand: "Taste Quest",
    txt: "This is so amazing, you turned the plain texts I sent you into something captivating. Thank you Marvellous",
  },
];
let feedBacks = JSON.parse(localStorage.getItem('feedBacks')) || staticFeedBacks;

let messagBox = document.querySelector('#message-box');
let ratesBox = document.querySelector('#rates-box');
let ratingForm = document.querySelector('#rating-form');
ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.querySelector('#client-name').value;
  let brand = document.querySelector('#client-brand').value;
  let txt = document.querySelector('#client-txt').value;
  if (name.value !== '' && brand.value !== '' 
    && txt.value !== '') {
      let client = {
        name,
        brand,
        txt,
      }
      feedBacks.push(client);
      localStorage.setItem('feedBacks', JSON.stringify(feedBacks));
      messagBox.innerHTML = 'Successfully shared';
      setTimeout(() => {
        window.location.reload();
      }, 2000)
  }
})

// Animate ratings
if (feedBacks.length > 0) {
  feedBacks.forEach((client) => {
    elemHtml = `
    <div class="client-feedback">
      <h3>${client.name}</h3>
      <p>CEO of ${client.brand}</p>
      <pre>${client.txt}</pre>
    </div>
  `;
  ratesBox.insertAdjacentHTML('beforeend', elemHtml);
  })
  const container = document.getElementById('rates-box');
  const childDivs = container.children;
  const scrollHeight = childDivs[0].offsetHeight;
  let currentIndex = 0;

  function scrollToNextDiv() {
    if (currentIndex >= childDivs.length) {
      currentIndex = 0
    }
    container.scrollTo({top: scrollHeight * currentIndex, behavior: 'smooth'});
    currentIndex++;
    setTimeout(scrollToNextDiv, 2000);
  }
  setTimeout(scrollToNextDiv, 2000);
}
let formElems = document.querySelectorAll('#client-name, #client-brand, #client-txt');
let submitBtn = document.querySelector('#submit-btn');
formElems.forEach((elem) => {
  elem.addEventListener('input', () => {
    if (elem.value === '') {
      submitBtn.disabled = true
      submitBtn.style.opacity = '0.2';
      elem.style = 'border: 1px solid red';
      messagBox.innerHTML = 'Field must not be left empty!';
    } else {
      submitBtn.disabled = false
      submitBtn.style.opacity = '1';
      elem.style = 'border: 1px solid #cacaca';
      messagBox.innerHTML = '';
    }
  })
})

// Back to top button
let backToTopButton = document.querySelector('.back-to-top-btn');
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
window.addEventListener('scroll', () => {
  if (window.scrollY >= 400) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// localStorage.removeItem('feedBacks')
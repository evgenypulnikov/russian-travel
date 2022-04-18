const initPhotos = [
  {
    name: 'Карелия',
    link: 'images/karelia.jpg'
  },
  {
    name: 'Сочи',
    link: 'images/sochi.jpg'
  },
  {
    name: 'Целинное',
    link: 'images/tselinnoye.jpg'
  },
  {
    name: 'Эльбрус',
    link: 'images/elbrus.jpg'
  },
  {
    name: 'Байкал',
    link: 'images/baikal.jpg'
  },
  {
    name: 'Камчатка',
    link: 'images/kamchatka.jpg'
  },
  {
    name: 'Камчатка',
    link: 'images/kamchatka-2.jpg'
  },
  {
    name: 'Байкал',
    link: 'images/baikal-2.jpg'
  },
  {
    name: 'Ергаки',
    link: 'images/ergaki.jpg'
  }
]

// Photo Grid

const photoGridContainer = document.querySelector('.photo-grid');
const photoGridTemplate = document.querySelector('#photo-grid-template').content;
const photoGridTemplateImage = photoGridTemplate.querySelector('.photo-grid__item');


// Full View

const fullViewPopup = document.querySelector('.popup_full-view');
const fullViewContainer = document.querySelector('.full-view');
const fullViewImg = fullViewPopup.querySelector('.full-view__image');
const fullViewImgCaption = fullViewContainer.querySelector('.full-view__caption');

function openPopup(popup) {
  popup.classList.add('popup_is_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_is_opened');
}

// Create Image

function createImage(name, link) {
  photoGridTemplateImage.src = link;
  photoGridTemplateImage.alt = name;

  const photoGridElement = photoGridTemplate.cloneNode(true);

  const photoGridItem = photoGridElement.querySelector('.photo-grid__item');
  photoGridItem.addEventListener('click', function() {
    fullViewImg.src = link;
    fullViewImg.alt = name;
    fullViewImgCaption.textContent = name;
    openPopup(fullViewPopup);
  });

  return photoGridElement;
}

// Render Image

function renderImage(item, container) {
  container.prepend(item);
}

initPhotos.forEach(function(initPhotos) {
  const item = createImage(initPhotos.name, initPhotos.link);
  renderImage(item, photoGridContainer);
});


// Close Button

const closeButton = document.querySelectorAll('.popup__close-button');
  closeButton.forEach(function(btn) {
    btn.addEventListener('click', function(evt) {
      closePopup(evt.target.closest('.popup'));
    });
});

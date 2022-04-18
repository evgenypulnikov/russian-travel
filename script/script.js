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

const initArticles = [
  {
    title: 'Куршская коса',
    link: 'http://park-kosa.ru',
    linkText: 'park-kosa.ru',
    imgSrc: 'images/place-kosa.jpg',
    paragraph: 'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на\xA0краю российского анклава.',
    secondParagraph: 'На этом Калининградская область не заканчивается.  Для\xA0путешественника и\xA0исследователя там же по\xA0соседству — самая западная точка России, Балтийская коса, — и\xA0немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в\xA0спокойствие природы и запах стального, прохладного моря.'
  },
  {
    title: 'Кольский',
    link: 'https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy',
    linkText: 'National Geographic',
    imgSrc: 'images/place-kolsky.jpg',
    paragraph: 'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а\xA0на север — Ледовитый океан, прикидывающийся Баренцевым морем.',
    secondParagraph: 'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в\xA0Мурманск.'
  },
  {
    title: 'Алтай',
    link: 'https://www.facebook.com/vera.bashmakova/posts/10156011613718822',
    linkText: 'Facebook',
    imgSrc: 'images/place-altai.jpg',
    paragraph: 'Алтай — одно из красивейших мест в\xA0России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А\xA0если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.',
    secondParagraph: 'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а\xA0на равнинах пасутся косули. И\xA0знаменитые манулы — тоже обитатели Алтайского края.'
  },
  {
    title: 'Зимний Байкал',
    link: 'https://vk.com/baikalmile',
    linkText: 'https://vk.com/baikalmile',
    imgSrc: 'images/place-winter-baikal.jpg',
    paragraph: 'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и\xA0одно из красивейших мест в\xA0России.',
    secondParagraph: 'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как\xA0можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.'
  },
  {
    title: 'Карелия',
    link: 'http://vodlozero.ru',
    linkText: 'http://vodlozero.ru/',
    imgSrc: 'images/place-karelia.jpg',
    paragraph: 'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера.\
    Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем\xA0полтысячелетия.\
    Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.'
  }
]

// Photo Grid Vars

const photoGridContainer = document.querySelector('.photo-grid');
const photoGridTemplate = document.querySelector('#photo-grid-template').content;
const photoGridTemplateImage = photoGridTemplate.querySelector('.photo-grid__item');


// Full View Vars

const fullViewPopup = document.querySelector('.popup_full-view');
const fullViewContainer = document.querySelector('.full-view');
const fullViewImg = fullViewPopup.querySelector('.full-view__image');
const fullViewImgCaption = fullViewContainer.querySelector('.full-view__caption');

// Article Vars

const articlesContainer = document.querySelector('.places');
const articleTemplate = document.querySelector('#place-template').content;
const articleTitle = articleTemplate.querySelector('.place__title');
const articleLink = articleTemplate.querySelector('.place__website');
const articleImg = articleTemplate.querySelector('.place__image');
const articleParagraph = articleTemplate.querySelector('.place__paragraph');
const articleSecondParagraph = articleTemplate.querySelector('.place__second-paragraph');

// Create Article

function createArticle(title, link, linkText, imgSrc, paragraph, secondParagraph) {
  articleTitle.textContent = title;
  articleLink.href = link;
  articleLink.textContent = linkText;
  articleImg.src = imgSrc;
  articleImg.alt = title;
  articleParagraph.textContent = paragraph;
  articleSecondParagraph.textContent = secondParagraph;

  const articleElement = articleTemplate.cloneNode(true);
  return articleElement;
}

// Render Article

function renderArticle(article, container) {
  container.append(article);
}

initArticles.forEach(function(initArticles) {
  const article = createArticle(initArticles.title, initArticles.link, initArticles.linkText, initArticles.imgSrc, initArticles.paragraph, initArticles.secondParagraph);
  renderArticle(article, articlesContainer);
});

// Open & Close Popup

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


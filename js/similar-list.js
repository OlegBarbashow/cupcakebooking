import {getSimilarAddresses} from './data.js';

const mapElement = document.querySelector('#map-canvas');
const similarRelatedTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const similarRelated = getSimilarAddresses();
const similarRelatedFragment = document.createDocumentFragment();

similarRelated.forEach(({offer, author}) => {
  const relatedElement = similarRelatedTemplate.cloneNode(true);

  if (offer.title) {
    relatedElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    relatedElement.querySelector('.popup__title').classList.add('visually-hidden');
  }

  if (offer.address) {
    relatedElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    relatedElement.querySelector('.popup__text--address').classList.add('visually-hidden');
  }

  if (offer.price) {
    relatedElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    relatedElement.querySelector('.popup__text--price').classList.add('visually-hidden');
  }

  if (offer.type) {
    switch (offer.type) {
      case 'flat':
        relatedElement.querySelector('.popup__type').textContent = 'Квартира';
        break;
      case 'bungalow':
        relatedElement.querySelector('.popup__type').textContent = 'Бунгало';
        break;
      case 'house':
        relatedElement.querySelector('.popup__type').textContent = 'Дом';
        break;
      case 'palace':
        relatedElement.querySelector('.popup__type').textContent = 'Дворец';
        break;
    }
  } else {
    relatedElement.querySelector('.popup__type').classList.add('visually-hidden');
  }

  if (offer.rooms && offer.guests) {
    relatedElement.querySelector('.popup__text--capacity')
      .textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else if (offer.rooms) {
    relatedElement.querySelector('.popup__text--capacity')
      .textContent = `${offer.rooms} комнаты`;
  } else if (offer.guests) {
    relatedElement.querySelector('.popup__text--capacity')
      .textContent = `Для ${offer.guests} гостей`;
  } else {
    relatedElement.querySelector('.popup__text--capacity').classList.add('visually-hidden');
  }


  if (offer.checkin && offer.checkout) {
    relatedElement.querySelector('.popup__text--time')
      .textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else if (offer.checkin) {
    relatedElement.querySelector('.popup__text--time')
      .textContent = `Заезд после ${offer.checkin}`;
  } else if (offer.checkout) {
    relatedElement.querySelector('.popup__text--time')
      .textContent = `Выезд до ${offer.checkout}`;
  } else {
    relatedElement.querySelector('.popup__text--time').classList.add('visually-hidden');
  }


  if (offer.features.length) {
    const featuresList = relatedElement.querySelector('.popup__features');
    while (featuresList.firstChild) {
      featuresList.removeChild(featuresList.firstChild);
    }
    const featuresFragment = document.createDocumentFragment();
    offer.features.forEach((feature) => {
      const featureClass = `popup__feature--${feature}`;
      const featureItem = document.createElement('li');
      featureItem.classList.add(featureClass, 'popup__feature');
      featuresFragment.append(featureItem);
    });
    featuresList.append(featuresFragment);
  } else {
    relatedElement.querySelector('.popup__features').classList.add('visually-hidden');
  }

  if (offer.description) {
    relatedElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    relatedElement.querySelector('.popup__description').classList.add('visually-hidden');
  }

  if (offer.photos.length) {
    const photoWrapper = relatedElement.querySelector('.popup__photos');
    const photoListFragment = document.createDocumentFragment();
    offer.photos.forEach((photoUrl) => {
      const photoElement = photoWrapper.querySelector('.popup__photo').cloneNode();
      photoElement.src = photoUrl;
      photoListFragment.append(photoElement);
    });
    while (photoWrapper.firstChild) {
      photoWrapper.removeChild(photoWrapper.firstChild);
    }
    photoWrapper.append(photoListFragment);
  } else {
    relatedElement.querySelector('.popup__photos').classList.add('visually-hidden');
  }

  if (author.avatar) {
    relatedElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    relatedElement.querySelector('.popup__avatar').classList.add('visually-hidden');
  }

  similarRelatedFragment.append(relatedElement);
});

mapElement.append(similarRelatedFragment.firstChild);

console.log(getSimilarAddresses());

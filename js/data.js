import {
  getRandomNumber,
  getRandomArrayElement,
  getRandomArrayElements,
  getRandomFractionalNumber
} from './util.js';

const SIMILAR_ADDRESS_COUNT = 10;

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const checkin = [
  '12:00',
  '13:00',
  '14:00',
];

const checkout = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];



const createAddressData = () => {
  const locationX = getRandomFractionalNumber(35.65000, 35.70000, 5);
  const locationY = getRandomFractionalNumber(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) +'.png',
    },
    offer: {
      title: 'Сдам жильё в аренду',
      address: locationX + ', ' + locationY,
      price: getRandomNumber(1000, 500000),
      type: getRandomArrayElement(types),
      rooms: getRandomNumber(1, 20),
      guests: getRandomNumber(1, 20),
      checkin: getRandomArrayElement(checkin),
      checkout: getRandomArrayElement(checkout),
      features: getRandomArrayElements(features),
      description: 'Убежище для путника',
      photos: getRandomArrayElements(photos),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  }
}

const getSimilarAddresses = () => {
  return new Array(SIMILAR_ADDRESS_COUNT).fill(null).map(() => createAddressData());
}

export {getSimilarAddresses};

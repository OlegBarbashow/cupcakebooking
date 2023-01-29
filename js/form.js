const setFormElementsEnabled = (elements) => {
  elements.forEach(element => {
    element.disabled = false;
  });
}

const setFormsMapEnabled = () => {
  const formAd = document.querySelector('.ad-form');
  const inputsAd = formAd.querySelectorAll('input');
  const selectsAd = formAd.querySelectorAll('select');
  const textareasAd = formAd.querySelectorAll('textarea');
  const buttonsAd = formAd.querySelectorAll('button');
  const formFilters = document.querySelector('.map__filters');
  const inputsFilters = formFilters.querySelectorAll('input');
  const selectsFilters = formFilters.querySelectorAll('select');

  formAd.classList.remove('ad-form--disabled');
  setFormElementsEnabled(inputsAd);
  setFormElementsEnabled(selectsAd);
  setFormElementsEnabled(textareasAd);
  setFormElementsEnabled(buttonsAd);

  formFilters.classList.remove('ad-form--disabled');
  setFormElementsEnabled(inputsFilters);
  setFormElementsEnabled(selectsFilters);
}


const form = () => {
  const formAd = document.querySelector('.ad-form');
  const inputsAd = formAd.querySelectorAll('input');
  const selectsAd = formAd.querySelectorAll('select');
  const textareasAd = formAd.querySelectorAll('textarea');
  const buttonsAd = formAd.querySelectorAll('button');
  const formFilters = document.querySelector('.map__filters');
  const inputsFilters = formFilters.querySelectorAll('input');
  const selectsFilters = formFilters.querySelectorAll('select');
  const price = document.querySelector('#price');
  const title = document.querySelector('#title');

  const setFormElementsDisable = (elements) => {
    elements.forEach(element => {
      element.disabled = true;
    });
  }



  const setFormsMapDisabled = () => {
    formAd.classList.add('ad-form--disabled');
    setFormElementsDisable(inputsAd);
    setFormElementsDisable(selectsAd);
    setFormElementsDisable(textareasAd);
    setFormElementsDisable(buttonsAd);

    formFilters.classList.add('ad-form--disabled');
    setFormElementsDisable(inputsFilters);
    setFormElementsDisable(selectsFilters);
  }



  const setMinimumPriceHousing = () => {
    const typeHousing = document.querySelector('#type');
    typeHousing.addEventListener('change', (evt) => {
      const typeProperty = evt.target.value;
      switch (typeProperty) {
        case 'palace':
          price.placeholder = 'Mин. цена 10000';
          price.min = 10000;
          break;
        case 'flat':
          price.placeholder = 'Mин. цена 1000';
          price.min = 1000;
          break;
        case 'house':
          price.placeholder = 'Mин. цена 5000';
          price.min = 5000;
          break;
        case 'bungalow':
          price.placeholder = 'Mин. цена 0';
          price.min = 0;
          break;
      }
    });
  }

  const setCheckinCheckoutTimeRelations = () => {
    const checkin = document.querySelector('#timein'),
      checkout = document.querySelector('#timeout');

    checkin.addEventListener('change', (evt) => {
      for (let i = 0; i < checkout.options.length; i++) {
        if (evt.target.value === checkin.options[i].value) {
          checkout.options[i].selected = true;
        }
      }
    });

    checkout.addEventListener('change', (evt) => {
      for (let i = 0; i < checkin.options.length; i++) {
        if (evt.target.value === checkout.options[i].value) {
          checkin.options[i].selected = true;
        }
      }
    });
  }

  const checkRoomsBedsRelations = () => {
    const rooms = document.querySelector('#room_number'),
      beds = document.querySelector('#capacity');

    rooms.addEventListener('change', () => {
      if (+rooms.value === 1 && +beds.value !== 1) {
        rooms.setCustomValidity('1 комната — «для 1 гостя»;');
      } else if (+rooms.value === 2 && (+beds.value !== 1 && +beds.value !== 2)) {
        rooms.setCustomValidity('2 комнаты — «для 2 гостей» или «для 1 гостя»;');
      } else if (+rooms.value === 3 && (+beds.value !== 1 && +beds.value !== 2 && +beds.value !== 3)) {
        rooms.setCustomValidity('3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;');
      } else if (+rooms.value === 100 && +beds.value !== 0) {
        rooms.setCustomValidity('100 комнат — «не для гостей»;');
      } else {
        rooms.setCustomValidity('')
      }
      rooms.reportValidity();
    });

    beds.addEventListener('change', () => {
      if (+rooms.value === 1 && +beds.value !== 1) {
        beds.setCustomValidity('1 комната — «для 1 гостя»;');
      } else if (+rooms.value === 2 && (+beds.value !== 1 && +beds.value !== 2)) {
        beds.setCustomValidity('2 комнаты — «для 2 гостей» или «для 1 гостя»;');
      } else if (+rooms.value === 3 && (+beds.value !== 1 && +beds.value !== 2 && +beds.value !== 3)) {
        beds.setCustomValidity('3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;');
      } else if (+rooms.value === 100 && +beds.value !== 0) {
        beds.setCustomValidity('100 комнат — «не для гостей»;');
      } else {
        beds.setCustomValidity('')
      }
      beds.reportValidity();
    });


  }

  const checkTitleLength = () => {
    title.addEventListener('keyup', () => {
      if (title.value.length < 30) {
        title.setCustomValidity('Минимальная длина — 30 символов;');
      } else if (title.value.length > 100) {
        title.setCustomValidity('Максимальная длина — 100 символов;');
      } else {
        title.setCustomValidity('');
      }
      title.reportValidity();
    });
  }

  const checkPrice = () => {
    price.addEventListener('input', () => {
      if (+price.value > 1000000) {
        price.setCustomValidity('Максимальное значение — 1 000 000;');
      } else {
        price.setCustomValidity('');
      }
      price.reportValidity();
    });
  }


  setFormsMapDisabled();
  setMinimumPriceHousing();
  setCheckinCheckoutTimeRelations();
  checkRoomsBedsRelations();
  checkTitleLength();
  checkPrice();
}

const setCoordinatesInput = ({lat, lng}) => {
  const address = document.querySelector('#address');
  lat = lat.toFixed(5);
  lng = lng.toFixed(5);
  address.value =  '{' + lat + '}, {' + lng + '}';
}

export {form, setCoordinatesInput, setFormsMapEnabled};

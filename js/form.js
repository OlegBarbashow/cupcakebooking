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
    const minPrice = document.querySelector('#price');
    typeHousing.addEventListener('change', (evt) => {
      const typeProperty = evt.target.value;
      switch (typeProperty) {
        case 'palace':
          minPrice.placeholder = 'Mин. цена 10000';
          minPrice.min = 10000;
          break;
        case 'flat':
          minPrice.placeholder = 'Mин. цена 1000';
          minPrice.min = 1000;
          break;
        case 'house':
          minPrice.placeholder = 'Mин. цена 5000';
          minPrice.min = 5000;
          break;
        case 'bungalow':
          minPrice.placeholder = 'Mин. цена 0';
          minPrice.min = 0;
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

  setFormsMapDisabled();
  setMinimumPriceHousing();
  setCheckinCheckoutTimeRelations();
}

const setCoordinates = ({lat, lng}) => {
  const address = document.querySelector('#address');
  lat = lat.toFixed(5);
  lng = lng.toFixed(5);
  address.value =  '{' + lat + '}, {' + lng + '}';
}

export {form, setCoordinates, setFormsMapEnabled};

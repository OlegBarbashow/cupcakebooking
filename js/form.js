const form = () => {

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

  setMinimumPriceHousing();
  setCheckinCheckoutTimeRelations();
}

export default form;

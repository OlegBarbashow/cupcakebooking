import {setCoordinates, setFormsMapEnabled} from './form.js';
import {getSimilarAddresses} from './data.js';
import realestatePopupCard from './realestatePopupCard.js';
const map = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      setFormsMapEnabled();
    })
    .setView({
      lat: 35.6895,
      lng: 139.692,
    }, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const mainPinIcon = L.icon(
    {
      iconUrl: '../img/main-pin.svg',
      iconSize: [48, 48],
      iconAnchor: [8, 16],
    },
  );

  const mainPinMarker = L.marker(
    {
      lat: 35.6895,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    setCoordinates(evt.target.getLatLng());
  });

  const points = getSimilarAddresses();

  points.forEach((point) => {
    const {y, x} = point.location;
    const icon = L.icon(
      {
        iconUrl: '../img/pin.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      },
    );

    const marker = L.marker(
      {
        lat: x,
        lng: y,
      },
      {
        icon,
      },
    );

    marker.addTo(map)
      .bindPopup(
        realestatePopupCard(point),
        {
          keepInView: true,
        },
      );

  });
}

export default map;

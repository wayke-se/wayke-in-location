import InLocation from './index';

const lat = 57.7043183;
const lng = 11.9646843;
const distance = 1000;

window.addEventListener('DOMContentLoaded', (_) => {
  InLocation(lat, lng, distance, (inLocation, metadata) => {
    const node = document.createElement('div');
    node.innerHTML = `
      <h1>${inLocation ? 'In location' : 'Not in location'}</h1>
      ${
        metadata
          ? `
        <p><b>Distance between:</b> ${metadata.distance} km</p>
        <p><b>User latitude:</b> ${metadata.userLocation.lat}</p>
        <p><b>User longitude:</b> ${metadata.userLocation.lat}</p>
      `
          : ''
      }
      <p><b>Base latitude:</b> ${lat}</p>
      <p><b>Base longitude:</b> ${lng}</p>
      <p><b>Max distance:</b> ${distance} km</p>
    
    `;
    document.body.appendChild(node);
  });
});

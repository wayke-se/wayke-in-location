import InLocation from './index';

const lat = 57.7043183;
const lng = 11.9646843;
const distance = 1000;

window.addEventListener('DOMContentLoaded', (_) => {
  InLocation(lat, lng, distance, (inLocation, metadata) => {
    const node = document.createElement('div');
    node.innerHTML = `
      <h1>${inLocation ? 'In location' : 'Not in location'}</h1>
      <table>
        <tr>
          <th>Type</th>
          <th>Value</th>
        </tr>
        ${
          metadata
            ? `
            <tr>
              <td>Distance between base and client</td>
              <td>${metadata.distance} km</td>
            </tr>
            <tr>
              <td>Client latitude</td>
              <td>${metadata.clientPosition.coords.latitude}</td>
            </tr>
            <tr>
              <td>Client longitude</td>
              <td>${metadata.clientPosition.coords.longitude}</td>
            </tr>
            <tr>
              <td>Client position accuracy</td>
              <td>${metadata.clientPosition.coords.accuracy} meters (More or less)</td>
            </tr>
        `
            : ''
        }
        <tr>
          <td>Base latitude</td>
          <td>${lat}</td>
        </tr>
        <tr>
          <td>Base longitude</td>
          <td>${lng}</td>
        </tr>
        <tr>
          <td>Max distance</td>
          <td>${distance} km</td>
        </tr>
      </table>
    `;
    document.body.appendChild(node);
  });
});

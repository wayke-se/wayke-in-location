import { getCoords, getDistanceFromLatLonInKm } from './location';

interface Metadata {
  distance: number;
  userLocation: {
    lat: number;
    lng: number;
  };
}

const InLocation = async (
  lat: number,
  lng: number,
  maxDistance: number,
  callback: (inLocation: boolean, metadata?: Metadata) => void
) => {
  if (!lat) {
    throw 'Missing lat';
  }

  if (!lng) {
    throw 'Missing lng';
  }

  if (!maxDistance) {
    throw 'Missing maxDistance';
  }

  if (!callback) {
    throw 'Missing callback';
  }

  try {
    const currentLocation = await getCoords();
    const distance = getDistanceFromLatLonInKm(lat, lng, currentLocation.lat, currentLocation.lng);
    if (distance <= maxDistance) {
      callback(true, {
        userLocation: currentLocation,
        distance,
      });
    } else {
      callback(false, {
        userLocation: currentLocation,
        distance,
      });
    }
  } catch (e) {
    callback(false);
  }
};

export default InLocation;

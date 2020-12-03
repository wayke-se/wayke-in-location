import { getCoords, getDistanceFromLatLonInKm, Position } from './location';

interface Metadata {
  distance: number;
  clientPosition: Position;
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
    const clientPosition = await getCoords();
    const distance = getDistanceFromLatLonInKm(
      lat,
      lng,
      clientPosition.coords.latitude,
      clientPosition.coords.longitude
    );
    if (distance <= maxDistance) {
      callback(true, {
        clientPosition,
        distance,
      });
    } else {
      callback(false, {
        clientPosition,
        distance,
      });
    }
  } catch (e) {
    callback(false);
  }
};

export default InLocation;

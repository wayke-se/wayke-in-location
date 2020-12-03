# Wayke Valuation

Check if client is inside the circle given a `latitude`, `longitude` and `max distance`. Uses the `Geolocation API`.

This project creates a stand alone javascript bundle with the Wayke In Location which can be directly referenced from HTML - without manually building the component from source.


## Usage 1: Auto

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <script src="https://cdn.wayke.se/public-assets/wayke.in-location.v1.0.0.js"></script>
    <!--
        A development version is available here:
        <script src="https://test-cdn.wayketech.se/public-assets/wayke.in-location.v1.0.0.js"></script>
    -->
    <script>
      new Wayke.InLocation(57.7043183, 11.9646843, 1000, (inLocation, metadata) => {
        if (inLocation) {
          // is in location
          console.log(metadata);
        } else {
          // is not in location
        }
      })
    </script>

  </body>
</html>
```

## Models
### InLocation function

| Property   | Type               | Required | Description        |
|------------|--------------------|----------|--------------------|
| argument 1 | number             | true     | latitude           |
| argument 2 | number             | true     | longitude          |
| argument 3 | number             | false    | Max distance in km |
| argument 4 | InLocationCallback | false    | Callback method    |

### InLocationCallback
| Property     | Type     |
|--------------|----------|
| argument 1   | boolean  |
| argument 1   | Metadata |

### Metadata
| Property       | Type     |
|----------------|----------|
| distance       | number   |
| clientPosition | Position |

### Position (GeolocationPosition)
https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition

| Property  | Type        |
|-----------|-------------|
| coords    | Coordinates |
| timestamp | number      |


### Coordinates (GeolocationPosition.coords)
https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition/coords

| Property         | Type        |
|------------------|-------------|
| accuracy         | number      |
| altitude         | number \| null |
| altitudeAccuracy | number \| null |
| heading          | number \| null |
| latitude         | number \| null |
| longitude        | number \| null |
| speed            | number \| null |



## Available Sources
| Version | Environment | Url                                                                   |
|---------|-------------|-----------------------------------------------------------------------|
| 1.0.0   | Production  | https://cdn.wayke.se/public-assets/wayke.in.valuation.v1.0.0.js          |
| 1.0.0   | Development | https://test-cdn.wayketech.se/public-assets/wayke.in-valuation.v1.0.0.js |

## Develop

### Prerequisite
```bash
npm install
```
### Start

Starts a local dev-server running at http://localhost:5000/ with watch

```bash
npm start
```

## Build Production

Builds production to `./build`

```bash
npm run build
```

## Build Development

Builds development to `./build`

```bash
npm run build:dev
```
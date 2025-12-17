// Halcyon Watchface Configuration with Data URI
var configURL = "http://localhost:3000/config.html";

function locationError(err) {
  console.log('location error on the JS side :-(');
}

function locationSuccess(pos) {
  // now that we have the location, get the timezone offset 
  var tzOffset = new Date().getTimezoneOffset() * -1;

  // collect everything to send
  var message = {
    'LOCATION_LAT': Math.round(pos.coords.latitude * 1000000),
    'LOCATION_LNG': Math.round(pos.coords.longitude * 1000000),
    'LOCATION_GMT_OFFSET': tzOffset
  };

  // send the message to the watch
  Pebble.sendAppMessage(message,
    function (e) {
      // console.log('Location info sent to Pebble successfully!');
    },
    function (e) {
      // console.log('Error sending location info to Pebble!');
    }
  );
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(
    locationSuccess,
    locationError,
    { timeout: 15000, maximumAge: 60000 }
  );
}

// Listen for when the watchface is opened
Pebble.addEventListener('ready',
  function (e) {
    // first thing to do: send the watchface our location
    getLocation();
  }
);

// Listen for when configuration is requested
Pebble.addEventListener('showConfiguration', function () {
  var url = configURL;
  Pebble.openURL(url);
});

// Listen for when configuration is closed
Pebble.addEventListener('webviewclosed', function (e) {
  // Decode and parse the configuration data
  var configData = JSON.parse(decodeURIComponent(e.response));

  // Convert to proper format and send to watch
  var dict = {};

  // Process all color settings (convert hex to decimal)
  Object.keys(configData).forEach(function (key) {
    if (key.includes('COLOR')) {
      dict[key] = parseInt(configData[key], 16);
    } else if (key.includes('SETTING_')) {
      // Handle checkboxes and selects
      if (typeof configData[key] === 'boolean') {
        dict[key] = configData[key] ? 1 : 0;
      } else {
        dict[key] = configData[key];
      }
    }
  });

  // Send to watchapp
  Pebble.sendAppMessage(dict,
    function () {
      console.log('Config data sent successfully!');
    },
    function (e) {
      console.log('Error sending config data!');
    }
  );
});

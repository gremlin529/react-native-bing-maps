import * as React from 'react';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

import { StyleSheet, View } from 'react-native';
import BingMapsViewManager from 'react-native-bing-maps';
// import { BING_MAPS_KEY } from '@env';

const BING_MAPS_KEY =
  'Ap4QcVrvAUTkJKLM9RbTtRh1MD7Ioqt_QBxubQz3rIaVDskMgVZXQ2ux-NgfO30d';

const pinSVG =
  '<svg width="24" height="24" fill="grey" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21.068 7.758-4.826-4.826a2.75 2.75 0 0 0-4.404.715l-2.435 4.87a.75.75 0 0 1-.426.374L4.81 10.33a1.25 1.25 0 0 0-.476 2.065L7.439 15.5 3 19.94V21h1.06l4.44-4.44 3.104 3.105a1.25 1.25 0 0 0 2.066-.476l1.44-4.166a.75.75 0 0 1 .373-.426l4.87-2.435a2.75 2.75 0 0 0 .715-4.404Z" fill="#212121"/></svg>';

export default function App() {
  const pins: MapPin[] = [
    { lat: 12.9010875, long: 77.6095084, icon: pinSVG, title: 'worksite' },
    { lat: 12.904465, long: 77.606488, title: 'default pin' },
    { lat: 12.906828, long: 77.601596, title: 'offscreen?' },
  ];

  //        mapLocation={{ lat: 12.9010875, long: 77.6095084, zoom: 15 }}

  return (
    <View style={styles.container}>
      <BingMapsViewManager
        credentialsKey={BING_MAPS_KEY}
        buildingsVisible={true}
        pins={{ centerPinsInView: true, mapViewMargin: 100, pins: pins }}
        businessLandmarksVisible={true}
        compassButtonVisible={true}
        transitFeaturesVisible={true}
        tiltButtonVisible={true}
        zoomButtonsVisible={true}
        copyrightDisplay="always"
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: height,
    width: width,
    marginVertical: 20,
  },
});

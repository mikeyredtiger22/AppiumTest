import React from 'react';
import { StyleSheet, View, Text, Dimensions, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_DEFAULT } from 'react-native-maps';
import { Navigator } from 'react-native-navigation';
import MapMarkerCallout from '../components/MapMarkerCallout';

const locationPermission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

type Props = {
  navigator: Navigator
};

class MapPage extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE,
          },
        },
      ],
    };
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = () => {
    PermissionsAndroid.request(locationPermission, {
      title: 'Location Permission Needed',
      message: 'We need your access to your location to show on the maps screen.',
    }).then((requestResult) => {
      console.warn(requestResult);
    });
  };

  navHome = () => {
    this.props.navigator.popToRoot();
  };

  render() {
    const { region, markers } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_DEFAULT}
          style={styles.map}
          initialRegion={region}
          showsUserLocation
          showsMyLocationButton
          userLocationAnnotationTitle="LOCAC"
        >
          <Marker
            accessibilityLabel="Label0"
            coordinate={markers[0].coordinate}
            title="Title234"
            description="Desc234"
            pinColor={randomColor()}
          >
            <Callout tooltip>
              <MapMarkerCallout>
                <Text>This is a custom callout bubble view</Text>
              </MapMarkerCallout>
            </Callout>
          </Marker>
          <Marker
            accessibilityLabel="Label1"
            coordinate={markers[1].coordinate}
            title="Title123"
            description="Desc123"
            pinColor={randomColor()}
          >
            <Callout tooltip onPress={this.navHome}>
              <MapMarkerCallout>
                <Text>Tap here to go to the Home Page</Text>
              </MapMarkerCallout>
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  plainView: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default MapPage;

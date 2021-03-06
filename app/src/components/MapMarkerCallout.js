import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

const MapMarkerCallout = props => (
  <View style={styles.container}>
    <View style={styles.bubble}>
      <View style={styles.amount}>
        {props.children}
      </View>
    </View>
    <View style={styles.arrowBorder} />
    <View style={styles.arrow} />
  </View>
);

MapMarkerCallout.propTypes = {
  children: PropTypes.node,
};

MapMarkerCallout.defaultProps = {
  children: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#4da2ab',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#4da2ab',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

export default MapMarkerCallout;

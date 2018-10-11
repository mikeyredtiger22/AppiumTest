import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PillButton = ({ title, onPress }) => (
  <Button
    title={title}
    onPress={onPress}
    buttonStyle={styles.button}
    containerStyle={styles.container}
  />
);

PillButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PillButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4cc600',
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  container: {
    margin: 5,
  },
});

'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  transparentButton: {
    marginTop: 10,
    padding: 15
  },
  transparentButtonText: {
    color: '#0485A9',
    textAlign: 'center',
    fontSize: 16
  },
  primaryButton: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primaryButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  },
  actionButtonRight: {
    position: 'absolute',
    marginVertical: 550,
    marginLeft: 220,
    width: 200,
    height: 200,
  },
  actionButtonLeft: {
    position: 'absolute',
    marginVertical: 550,
    width: 200,
    height: 200,
  },
  actionButtonIcon: {
    fontSize: 24,
    height: 22,
    color: 'white',
  },
  selectViewButtonRight: {
    position: 'absolute',
    marginTop: 200,
  },
  selectTextContainer: {
    position: 'absolute',
    marginVertical: 50,
    alignSelf: 'center',
  },
  ar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  displayBar: {
    alignItems: 'center',
    height: 45,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
  },
  displayFont: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cameraPreview: {
    flex: 1,
  },
  closeCameraContainer: {
    position: 'absolute',
    marginVertical: 10,
    marginLeft: 375,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 28,
    height: 30,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default styles;

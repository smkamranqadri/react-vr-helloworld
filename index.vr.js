import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

class reactvrhelloworld extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('background.jpg')}/>
        <Text
          style={{
            // backgroundColor:'#546e7a',
            color: '#9e9e9e',
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.4,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
          }}>
          Bab-e-Abdullah - Masjid-al-Haram
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('react-vr-helloworld', () => reactvrhelloworld);

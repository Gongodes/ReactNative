import React from 'react';
import {View, Text, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        height: 90,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}>
      <Text style={{color: 'white', fontSize: 25, fontWeight: '800'}}>
        Bienvenido
      </Text>
      <View>
        <Image
          source={require('../assests/logo.png')}
          style={{width: 90, height: 90}}
        />
      </View>
    </View>
  );
};

export default Header;

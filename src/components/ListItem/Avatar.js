import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Avatar extends PureComponent {
  render() {
    const { text, src } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.container} source={src} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Avatar;

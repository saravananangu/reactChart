import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Row from '../Row';
import { getPlatformElevation } from '../../utils';

class Content extends PureComponent {
  render() {
    const { keystrokes, date, isReceived, application } = this.props;

    return (

      <Row style={styles.container}>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>KEYSTROKES </Text>
          <Text style={styles.keystrokesText}>{keystrokes}</Text>
        </View>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>Date</Text>
          <Text>{date.format('LL')}</Text>
        </View>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>APPLICATIONS</Text>
          <Text>{application}</Text>
        </View>
      </Row>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    alignItems: 'center',
  },
  cellContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 10,
    color: 'gray',
  },
  keystrokestText: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default Content;

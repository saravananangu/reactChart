import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

class Card extends PureComponent {
  render() {
    console.log(this.props, 'this.props:::')
    return ( 
            <View style={{
                backgroundColor: '#fff', 
                flex: 0.3,
                height: 100,
                width: 400,
                padding: 20,
                borderRadius: 4,
                borderWidth: 4,
                borderColor: this.props.color
              }}> 
              
                <Text style={{color: this.props.color }}>
                    {this.props.data.name},
                    {this.props.data.title}
                </Text> 
            </View>         
    )
  }
}

export default Card;

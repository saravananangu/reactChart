import React, { PureComponent } from 'react';
import { Text, View, FlatList, StyleSheet, Easing } from 'react-native';

import { SharedElement } from 'react-native-motion';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Toolbar from './Toolbar';
import BottomBar from './BottomBar';
import { ListItem } from '../../components';
import data from '../../data/data';
import Swipeout from 'react-native-swipeout';

class List extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { opacityOfSelectedItem: 1, selectedItem: null };
    this.sharedElementRefs = {};
  }
  onListItemPressed = item => {
    const { onItemPress } = this.props;
    this.setState({ selectedItem: item });

    onItemPress(item);

    this.sharedElementRefs[item.name].moveToDestination();
  };
  onMoveToDestinationWillStart = () => {
    this.setState({ opacityOfSelectedItem: 0 });
  };
  onMoveToSourceDidFinish = () => {
    this.setState({ opacityOfSelectedItem: 1 });
  };
  getSharedNode = props => {
    const { item } = props;

    return (
      <View style={{ backgroundColor: 'transparent' }}>
        <ListItem item={item} animateOnDidMount={false} isHidden={false} />
      </View>
    );
  };
  renderItem = ({ item }) => {
    const { opacityOfSelectedItem } = this.state;
    const { selectedItem, navigation } = this.props;

    const isHidden = selectedItem && selectedItem.name !== item.name;
    const isSelected = selectedItem && selectedItem.name === item.name;
    const id = item.name;
    var swipeoutBtns = [
      {
        text: 'View',
        color: '#fff',
        backgroundColor: '#145A80',
        onPress: function() {
          navigation.navigate("Sliding");
        }
      }
    ];
    
    return (
      <SharedElement
        easing={Easing.in(Easing.back())}
        ref={node => (this.sharedElementRefs[id] = node)}
        id={id}
        onMoveToDestinationWillStart={this.onMoveToDestinationWillStart}
        onMoveToSourceDidFinish={this.onMoveToSourceDidFinish}
        getNode={this.getSharedNode}
        item={item}
      >
        <View
          style={{
            opacity: opacityOfSelectedItem,
            backgroundColor: 'transparent',
          }}
        >
          <Swipeout right={swipeoutBtns}>
              <ListItem
                item={item}
                onPress={this.onListItemPressed}
                isHidden={isHidden}
              /> 
          </Swipeout>


       

        </View>
      </SharedElement>
    );
  };
  render() {
    const { opacityOfSelectedItem } = this.state;
    const { selectedItem, phase } = this.props;

    return (
      <View style={styles.container}>
        <Toolbar
          isHidden={phase !== 'phase-0'}
          onBackPress={this.onBackPressed}
        />
        <FlatList
          data={data}
          dataExtra={{ phase, opacityOfSelectedItem }}
          keyExtractor={item => item.name}
          renderItem={this.renderItem}
        />
        <BottomBar isHidden={phase !== 'phase-0'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default List;

import React from 'react';
import { InteractionManager, StyleSheet, View } from 'react-native';
import { SharedElementRenderer } from 'react-native-motion';

import List from './src/screens/List/List';
import Detail from './src/screens/Detail/Detail';
import BubbleChart from './src/components/BubbleChart';
import Sliding from './src/components/Sliding';
import Main from './src/components/Main';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import ToolbarBackground from './src/screens/Detail/ToolbarBackground';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

 class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      // phase of animation
      // phase-0:
      // default
      //
      // phase-1:
      // hide list toolbar, hide list bottom bar, show toolbar background and move item
      //
      // phase-2:
      // show detail toolbar, show detail bottom bar, show details of item
      //
      // phase-3
      // hide details of item
      //
      // phase-4
      // hide detail toolbar, hide detail bootom bar, move item back to scrool view
      phase: 'phase-0',
    };
  }
  onItemPressed = item => {
    this.setState({
      phase: 'phase-1',
      selectedItem: item,
    });
  };
  onBackPressed = () => {
    this.setState({
      phase: 'phase-3',
    });
  };
  onSharedElementMovedToDestination = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        phase: 'phase-2',
      });
    });
  };
  onSharedElementMovedToSource = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        selectedItem: null,
        phase: 'phase-0',
      });
    });
  };
  renderPage() {
    const { selectedItem, position, detailItem, phase } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <List
          selectedItem={selectedItem}
          onItemPress={this.onItemPressed}
          phase={phase}
          navigation = {this.props.navigation}  
        />
        <Detail
          phase={phase}
          selectedItem={selectedItem}
          onBackPress={this.onBackPressed}
          onSharedElementMovedToDestination={
            this.onSharedElementMovedToDestination
          }
          onSharedElementMovedToSource={this.onSharedElementMovedToSource}
        />
      </View>
    );
  }
  render() {
    const {
      selectedItem,
      goToDetail,
      position,
      detailItem,
      goBackRequested,
      phase,
    } = this.state;

    return (

      
      <Container>
        
        <SharedElementRenderer>
          <View style={styles.container}>
            <ToolbarBackground
              isHidden={phase !== 'phase-1' && phase !== 'phase-2'}
            />
            {this.renderPage()}
          </View>
        </SharedElementRenderer>

      
        <Footer >
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate("BubbleChart")}>
              <Text> Apps </Text>
              <Icon name='ios-apps-outline' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Sliding")}>

              <Icon name='ios-camera-outline' />
            </Button>
            <Button active onPress={() => this.props.navigation.navigate("Main")}>

              <Icon name='ios-compass' />
            </Button>
            <Button>

              <Icon name='ios-contact-outline' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>


    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  BubbleChart: {
    screen: BubbleChart
  },
  Sliding: {
    screen: Sliding
  },
  Main: {
    screen: Main
  }
});

export default createAppContainer(AppNavigator);
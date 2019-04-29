import React from 'react';
import { InteractionManager, StyleSheet, View, Dimensions, ScrollView, FlatList, TouchableWithoutFeedback, Image} from 'react-native';
import { SharedElementRenderer, SharedElement} from 'react-native-motion';

import List from './src/screens/List/List';
import Detail from './src/screens/Detail/Detail';
import BubbleChart from './src/components/BubbleChart';
import Sliding from './src/components/Sliding';
import Main from './src/components/Main';
import ParallaxScrollView from './src/react-native-parallax-scrollview/src/ParallaxScrollView';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import ToolbarBackground from './src/screens/Detail/ToolbarBackground';
import { Container, ListItem, CheckBox, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swipeout from 'react-native-swipeout';
import data from './src/data/data';
import Content from './src/components/ListItem/Content';
import Header from './src/components/ListItem/Header';
import { getPlatformElevation } from './src/utils';




import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import { breakStatement } from '@babel/types';
const {
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');



// import TabBar from 'react-native-tab-bar-footer';

// const tabs = [
//   {
//     icon: star,
//     activeIcon: starActive,
//     title: 'Favorites'
//   },
//   {
//     icon: play,
//     activeIcon: playActive,
//     title: 'Play'
//   },
//   {
//     icon: user,
//     activeIcon: userActive,
//     title: 'Profile'
    
//   },
// ];


 export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      setVisibleToFalse: false,
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
   tabs = [
    {
      key: 'Charts',
      icon: 'bubble-chart',
      label: 'Charts',
      barColor: '#03b5fc',
      pressColor: '#00416A'
    },
    {
      key: 'home',
      icon: 'home',
      label: 'Home',
      pressColor: '#BBD2C5'
    },
    {
      key: 'Search',
      icon: 'search',
      label: 'Search',
      pressColor: '#076585'
    }
  ];

  renderIcon = icon => ({ isActive }) => (
    <Icon size={34} color="white" name={icon} />
  )
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      // label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )
   
  redirectPage = newTab => { 
      
    switch(newTab.key) {
      case 'Charts':
        this.props.navigation.navigate("BubbleChart");
      break
    }
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

  onListItemPressed = item => {

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

  renderItem = ({ item }) => {
    let that = this;
    var swipeoutBtns = [
      {
        text: 'View',
        color: '#fff',
        backgroundColor: '#076585',
        onPress: function() {
          that.props.navigation.navigate("Sliding");
        }
      }
    ];
    const { name, isReceived, ...rest } = item;
    return (
     

      <SharedElement >
        <Swipeout right={swipeoutBtns}>
          <TouchableWithoutFeedback onPress={this.onPressed}>
            <View   style={styles.v_container} pointerEvents="box-only">
              <Header name={name} isReceived={isReceived}  onPress={() => { }} />
              <Content {...rest} />
            </View>
          </TouchableWithoutFeedback>
        </Swipeout>
      </SharedElement>
    );
  };



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
        <Container >

        <ParallaxScrollView
          windowHeight={200}
          backgroundSource={{ uri: 'http://www.wallpapermaiden.com/wallpaper/22011/download/1080x1920/blue-gradient.png' }}
         //backgroundSource={ require('./Angappan.jpg')}
          navBarTitle='Knowyourday'
          navBarTitleColor='rgba(3, 181, 252, 1)'
           navBarColor='lightblue'
          headerView={(
            <View style={{ width: 100,  height: 100 }}>
              <View style={styles.headerTextView}>
                {/* <Text style={styles.headerTextViewTitle}></Text> */}
                <Image
                  style={{width: 100, height: 100,     
                    borderRadius: 44, }}
                   source={require('./src/assets/Jon.jpg')}
                   
                  />
              </View>
            </View>
          )}
          // leftIcon={{name: 'rocket', color: 'rgba(228, 117, 125, 1)', size: 30, type: 'font-awesome'}}
          // leftIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
          rightIcon={{name: 'user', color: '#fff', size: 30, type: 'font-awesome'}}
          rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
          
        >
  <ScrollView style={{flex: 1, backgroundColor: 'rgba(228, 117, 125, 1)'}}>
        <View>
              <FlatList
                data={data}
                keyExtractor={item => item.name}
                renderItem={this.renderItem}
              />
        </View>

    {/* <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32, color: 'white'}}>Custom view</Text>
    </View>

    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32, color: 'white'}}>keep going.</Text>
    </View>
    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32, color: 'white'}}>keep going..</Text>
    </View>
    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32, color: 'white'}}>keep going...</Text>
    </View>
    <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32, color: 'white'}}>the end! :)</Text>
    </View> */}

  </ScrollView>
</ParallaxScrollView>
     
    
        
        <BottomNavigation
          onTabPress={newTab => this.redirectPage(newTab)}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />

       </Container>

      


    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  v_container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,

    zIndex: 1,
    ...getPlatformElevation(2),
  }
});


// const AppNavigator = createStackNavigator({
//   App: {
//     screen: App,
//     navigationOptions: {
//       headerMode: 'none',  // doesn't work
//       header: null, // only this works
//     }
//   },
//   BubbleChart: {
//     screen: BubbleChart
//   },
//   Sliding: {
//     screen: Sliding
//   },
//   Main: {
//     screen: Main
//   }
// });

// export default createAppContainer(AppNavigator);
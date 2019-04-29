import React from 'react';
import { InteractionManager, StyleSheet, View, Dimensions, ScrollView, FlatList, TouchableWithoutFeedback, Image, ImageBackground, TextInput} from 'react-native';
import { SharedElementRenderer, SharedElement} from 'react-native-motion';

import List from './src/screens/List/List';
import Detail from './src/screens/Detail/Detail';
import BubbleChart from './src/components/BubbleChart';
import Sliding from './src/components/Sliding';
import Main from './src/components/Main';
import ParallaxScrollView from './src/react-native-parallax-scrollview/src/ParallaxScrollView';
import Home from './Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ToolbarBackground from './src/screens/Detail/ToolbarBackground';
import { Container, ListItem, CheckBox, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swipeout from 'react-native-swipeout';
import data from './src/data/data';
import Content from './src/components/ListItem//Content';
import Header from './src/components/ListItem//Header';
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


 class App extends React.Component {
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
      case 'Search':
      this.props.navigation.navigate("Sliding");
      break
    default:
     this.props.navigation.navigate("Home");

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
      <View style={styles.container}>
      <ImageBackground source={require('./src/assets/background.png')} style={{ flex: 1 }}>
        <View style={styles.form_container}>
          {/* Logo section */}
          {/* <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/KYD-light.png')}
              style={{ width: 50, height: 50, }} />
          </View> */}
          {/* Form section */}
          <Text style={styles.labelStyle}>Username</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{ flex: 1 }}
              onChangeText={(text) => console.log('text --> ', text)}
              underlineColorAndroid="transparent"
            />
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/ic_person.png' }} style={styles.ImageStyle} />
          </View>
          <Text style={styles.labelStyle}>Password</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{ flex: 1 }}
              onChangeText={(text) => console.log('text --> ', text)}
              underlineColorAndroid="transparent"
            />
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/ic_person.png' }} style={styles.ImageStyle} />
          </View>
          <Text style={styles.forgetPsw}>Forget Password</Text>
          {/* Login Button section */}
          <View style={{alignItems: 'center'}}>
          <View style={styles.btnContainer}>
            <Text style={styles.loginStyle} onPress={() => this.props.navigation.navigate("Home")} >Log In</Text>
          </View>  
          </View>
        </View>
      </ImageBackground>
    </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   v_container: {
//     backgroundColor: 'white',
//     marginHorizontal: 16,
//     marginVertical: 4,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 15,

//     zIndex: 1,
//     ...getPlatformElevation(2),
//   },
  
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form_container: {
    flex: 1,
    justifyContent: 'center',
  },
  labelStyle: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10
  },
  forgetPsw: {
    color: '#FFF',
    fontSize: 13,
    alignSelf: 'flex-end',
    marginRight: 15,
    paddingBottom: 10
  },
  inputStyle: {
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10
  },
  btnLogin: {
    marginTop: 10,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 15,
    marginRight:15
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 10,
    margin: 10
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btnContainer:{
   // width: 70,
    padding: 10, 
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  loginStyle: { 
    color: '#00bbff', 
    fontWeight: 'bold', 
    fontSize: 18 
  }
});



const AppNavigator = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      headerMode: 'none',  // doesn't work
      header: null, // only this works
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerMode: 'none',  // doesn't work
      header: null, // only this works
    }
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
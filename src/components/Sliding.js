import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  Dimensions,
  WebView,
  Platform,
  ActivityIndicator
} from "react-native";
import ProgressCircle from 'react-native-progress-circle/src/index'

const cardHeight = 250;
const cardTitle = 45;
const cardPadding = 10;


const { height, width } = Dimensions.get("window");
const cards = [
  {
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF"
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    price: "64 CHF"
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    price: "80 CHF"
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    price: "85 CHF"
  },
  {
    name: "Combi",
    color: "#1c1c1c",
    price: "145 CHF"
  },
  {
    name: "Signature",
    color: "#a390bc",
    price: "92 CHF"
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    price: "47 CHF"
  }
];



 class Sliding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  state = {
    y: new Animated.Value(0)
  };
  
  hideSpinner= () => {
    this.setState({visible : false });
  }
 

  render() {
    const { y } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: 30 }}>
      <View style={{  padding: 10 }} >
      <Text style={{ fontSize: 18 }}>{'Chrome'}</Text>

          <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="red"
            animationMethod="spring"
            animationConfig={{ speed: 4 }}
        >
            <Text style={{ fontSize: 18 }}>{'30% '}</Text>
        </ProgressCircle>
        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="greeb"
        >
            <Text style={{ fontSize: 18 }}>{'30%' }</Text>
        </ProgressCircle>
      </View>



      <View style={{  paddingVertical: 10 }}>
        <ProgressCircle
          percent={30}
          radius={50}
          borderWidth={8}
          color="#3399FF"
          shadowColor="#999"
          bgColor="yellow"
        >
          <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
        <ProgressCircle
          percent={30}
          radius={50}
          borderWidth={8}
          color="#3399FF"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
      </View>

      </View>
      // <SafeAreaView style={styles.root}>
      //   <View style={styles.container}>
      //     <View style={StyleSheet.absoluteFill}>
      //       {cards.map((card, i) => {
      //         const inputRange = [-cardHeight, 0];
      //         const outputRange = [
      //           cardHeight * i,
      //           (cardHeight - cardTitle) * -i
      //         ];
      //         if (i > 0) {
      //           inputRange.push(cardPadding * i);
      //           outputRange.push((cardHeight - cardPadding) * -i);
      //         }
      //         const translateY = y.interpolate({
      //           inputRange,
      //           outputRange,
      //           extrapolateRight: "clamp"
      //         });
      //         return (
      //           <Animated.View
      //             key={card.name}
      //             style={{ transform: [{ translateY }] }}
      //           >
      //             <View style={[styles.card, { backgroundColor: card.color }]} >
      //               <Text>{card.name}</Text>
      //             </View>
      //           </Animated.View>
      //         );
      //       })}
      //     </View>
      //     <Animated.ScrollView
      //       scrollEventThrottle={16}
      //       contentContainerStyle={styles.content}
      //       showsVerticalScrollIndicator={false}
      //       onScroll={Animated.event(
      //         [
      //           {
      //             nativeEvent: {
      //               contentOffset: { y }
      //             }
      //           }
      //         ],
      //         { useNativeDriver: true }
      //       )}
      //     />
      //   </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16
  },
  container: {
    flex: 1
  },
  content: {
    height: height * 2
  },
  card: {
    height: cardHeight,
    borderRadius: 10
  },
  full: {
    flex: 1,
    backgroundColor: "transparent"
  }
});

export default Sliding;

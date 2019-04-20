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

const  _chartData = `
<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Pictorial fraction chart</title>
  <style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  #chartdiv {
    width: 100%;
    height: 800px;
  }
  
  </style>
  
  
     

  
</head>

<body>

  <script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/material.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
<div id="chartdiv"></div>
  
  

    <script>
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var iconPath =
      "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z";
    
    var chart = am4core.create("chartdiv", am4charts.SlicedChart);
    
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.paddingLeft = 100;
    chart.responsive.enabled = true;
    

    chart.data = [
      {
        name: "Login Window",
        value: 20,
        disabled: true,
        color: am4core.color("#7b131c")
      },
      {
        name: "Google Chrome",
        value: 20,
        color: am4core.color("#7b131c")
      },
      {
        name: "Code",
        value: 20,
        color: am4core.color("#7b131c")
      },
      {
        name: "Telegram",
        value: 20,
        color: am4core.color("#7b131c")
      },
      {
        name: "Terminal",
        value: 20,
        color: am4core.color("#7b131c")
      }
    ];
    
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = false;

 

    
    // this makes only A label to be visible
    series.labels.template.propertyFields.disabled = true;
    series.ticks.template.propertyFields.disabled = true;
    series.labels.template.fill = am4core.color("#A0CA92");

    
    series.maskSprite.path = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0;
    
    series.labelsContainer.width = 50;
    
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingRight = 160;
    chart.legend.paddingBottom = 40;
    chart.legend.verticalGap = 0.5;
    
    let marker = chart.legend.markers.template.children.getIndex(0);
    chart.legend.markers.template.width = 20;
    chart.legend.markers.template.height = 20;
    marker.cornerRadius(20, 20, 20, 20);
    </script>




</body>

</html>

`;

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
      <View  style={{ height: height }}>
      <WebView
          source={{
              html: _chartData ,
              baseUrl:
              Platform.OS == "ios" ? `file://${RNFS.MainBundlePath}/charts/` : `file:///android_asset/charts/`}}
          style={styles.full}
          onLoad={() => this.hideSpinner()}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={Platform.OS === 'ios' ? false : true}
          scrollEnabled={false}
          automaticallyAdjustContentInsets={true}
      />
       {this.state.visible && (
          <ActivityIndicator
            style={{ position: "absolute", top: height / 2, left: width / 2 }}
            size="large"
          />
        )}
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

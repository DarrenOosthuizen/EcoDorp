import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar, Icon } from "react-native-tab-view";
import TempIcon from './assets/TempIcon.png'

const TempRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>

  </View>
  
);

const HumRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const AirRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const CO2Route = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const TVOCRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const PMRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const CORoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const NO2Route = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const OzoneRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#FFF' }}
      style={{ backgroundColor: '#61B522'}}
      activeColor={"#FFF"}
      inactiveColor={"#3A4234"}
      scrollEnabled ={true}
      
    />
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "temp", title: "Temperature"},
    { key: "hum", title: "Humadity" },
    { key: "air", title: "Air Pressure" },
    { key: "co2", title: "CO2" },
    { key: "tvoc", title: "TVOC" },
    { key: "pm", title: "PM2.5" },
    { key: "co", title: "CO" },
    { key: "no2", title: "NO2" },
    { key: "ozone", title: "Ozone" },
  ]);

  const renderScene = SceneMap({
    temp: TempRoute,
    hum: HumRoute,
    air: AirRoute,
    co2: CO2Route,
    tvoc: TVOCRoute,
    pm: PMRoute,
    co: CORoute,
    no2: NO2Route,
    ozone: OzoneRoute,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

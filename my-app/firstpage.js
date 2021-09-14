import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";


class firstpage extends React.Component {
  
  render() {
   
    return (
      <View style={{ flex: 1}}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //對齊上面
          }}
        />
          <View>
            <ImageBackground
              style={styles.background}
              source={require("./assets/background.png")}
            > 
              <View style={styles.textPosition}>
                <View style={{flexDirection: "row"}}>
                  <Text style={styles.text}>Find</Text>
                  <Text style={styles.textbold}>POSE</Text>
                  <Text style={styles.text}>Through</Text>
                </View>
                <View style={{flexDirection: "row",marginLeft:"15%",marginTop : "4%"}}>
                  <Text style={styles.textbold}>Background</Text>
                  <Text style={styles.text}>Image</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("mainpage");
              }}>
                <Image 
                  style={styles.image}
                  source={require("./assets/component.png")} >
                </Image>
              </TouchableOpacity>
            </ImageBackground>
          </View>
      </View>
    );
  }
}
  


export default firstpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  background : {
    height : windowHeight,
    width : windowWidth,
  },
  textPosition : {
    marginTop : "30%",
    marginLeft : "15%",
  },
  text : {
    fontSize : 25 * rem,
    color : "#484848",
    marginRight : "2%",
    fontFamily : "sans-serif-light",
  },
  textbold : {
    fontSize : 25 * rem,
    color : "#484848",
    marginRight : "2%",
  },
  image : {
    width : "100%",
    marginTop : "10%",
    marginLeft : "6%",
  },
});

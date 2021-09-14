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


class mainpage extends React.Component {
  
  render() {
   
    return (
      <View style={{ flex: 1}}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //對齊上面
          }}
        />
          <View>
            <View style={{backgroundColor:"white", height: "20%"}}>
              <View style={{flexDirection: "row",marginTop : "13%",marginLeft : "15%"}}>
                <View>
                  <Text style={styles.text1}>12</Text>
                  <Text style={styles.text2}>POSES</Text>
                </View>
                <Image 
                  style={styles.cloud}
                  source={require("./assets/cloud.png")} >
                </Image>
                <View>
                  <Text style={styles.text3}>13</Text>
                  <Text style={styles.text4}>SCENES</Text>
                </View>


              </View>
              

            </View>
            <ImageBackground
              style={styles.background}
              source={require("./assets/background.png")}
            > 
              <View style={{marginTop : "25%"}}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => {
                  this.props.navigation.navigate("thirdpage");
                }}>
                  <View style={styles.tags}>
                    <Image 
                      style={styles.image}
                      source={require("./assets/tags.png")} >
                    </Image>
                    <View style={styles.textplace}>
                      <Text style={styles.text}>By Background</Text>
                      <Text style={styles.textbold}>Tags</Text>
                    </View >
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => {
                  this.props.navigation.navigate("forthpage");
                }}>
                  <View style={styles.tags}>
                    <Image 
                      style={styles.image}
                      source={require("./assets/photos.png")} >
                    </Image>
                    <View style={styles.textplace}>
                      <Text style={styles.text}>By Background</Text>
                      <Text style={styles.textbold}>Photos</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
  


export default mainpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  background : {
    height : windowHeight,
    width : windowWidth,
  },
  //for upperline
  cloud : {
    width : "30%",
    height : "130%",
    marginRight : "8%",
  },
  text1 : {
    fontSize : 20 * rem,
    color : "#484848",
    marginLeft : "18%",
    marginTop : "23%",
  },
  text2 : {
    fontSize : 12 * rem,
    color : "#484848",
    marginTop : "3%",
    marginLeft : "12%",
  },
  text3 : {
    fontSize : 20 * rem,
    color : "#484848",
    marginLeft : "22%",
    marginTop : "22%",
  },
  text4 : {
    fontSize : 12 * rem,
    color : "#484848",
    marginTop : "3%",
    marginLeft : "10%",
  },
  //for button
  button : {
    width : "76%",
    height : "22%",
    backgroundColor : "white",
    marginLeft : "12%",
    marginBottom : "15%",
    borderRadius : 20*rem,
    elevation: 5*rem, //shadow
        
  },
  tags : {
    flexDirection: "row",
    height : "100%",
  },
  image : {
    width : "28%",
    height : "100%",
    borderBottomLeftRadius: 20*rem,
    borderTopLeftRadius: 20*rem,
    resizeMode : "cover",
  },
  textplace : {
  },
  text : {
    fontSize : 16*rem,
    color : "#484848",
    marginTop : "8%",
    marginLeft: "22%",
  },
  textbold : {
    fontSize : 20*rem,
    color : "#484848",
    fontWeight : "bold",
    marginTop : "4%",
    marginLeft: "40%",
  },
});

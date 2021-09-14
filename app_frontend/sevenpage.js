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
import { Ionicons } from '@expo/vector-icons';
import PinchZoomView from 'react-native-pinch-zoom-view';
import {X,Y,S} from 'react-native-pinch-zoom-view/index.js';

class sevenpage extends React.Component {
  

  constructor(props) {
    super(props);


    this.state = {
        imageIndex: 0,
        isImageViewVisible: false,
    } 

  };

  render() {
    const images = [this.props.route.params?.someParam ?? 'defaultValue'];

    return (
        <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //對齊上面
          }}
        />
        <View>
          <ImageBackground
            style={styles.background}
            source={require("./assets/background.jpg")}
          > 
              {/*upperline (back and save) */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "6%"}}>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("fifthpage");}}>
                  <Ionicons name="arrow-back" size={26*rem} color="#484848"/>
                </TouchableOpacity>

                <Text style={[styles.text,{fontSize:12, marginTop:"6%",marginLeft:"2%",color:"#7B7B7B"}]}>可拖移和縮放人物，決定好位置，請按Send鍵</Text>
                
                <TouchableOpacity style={{marginLeft:"3%"}} 
                    onPress={()=>{
                      alert("X軸: " + X + "\nY軸: " + Y + "\nScale: " + S)}}>
                    <Text style={styles.text}>Send</Text>
                </TouchableOpacity>
              
              </View>      

              
                  <View style={styles.slide1}>
                      <ImageBackground source={images[0].source} style={styles.image}>
                      <PinchZoomView maxScale={5} minScale={0.1}>
           
                        <Image source={require('./assets/model.jpg')} style={styles.model}></Image>
                       
                      </PinchZoomView>
                      </ImageBackground>
                  </View>

              </ImageBackground> 
                
          </View>
      </View>
    );
  }
}
  

export default sevenpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : windowHeight,
    width : windowWidth,
  },
  text : {
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here

  //style for home button
  home : {
    backgroundColor :"#7FA6A6",
    width : "68%",
    height : "24%",
    marginRight : "16%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
 //style for right button
 button :{
    padding : "2%",
    flexDirection : "row",
    backgroundColor :"#484848",
    marginLeft : "8%",
    width : "80%",
    height : "24%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
 buttontext : {
    color : "#EFEFEF",
    fontSize : 12*rem,
    marginLeft : "4%",
 },

 slide1: {

  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2%',
  height: '88%',

  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.4,
  shadowRadius: 5,
  elevation: 7,
  },
  image: {
  height: '98%',
  width: '98%',
  resizeMode: 'cover',
  marginLeft:'2%',
  marginTop:'1%'
  },
  ImageButton: {
    marginTop: '10%',
    marginLeft: "10%",
    height: '70%',
    width: '80%',
  },
  model:{

  }

});

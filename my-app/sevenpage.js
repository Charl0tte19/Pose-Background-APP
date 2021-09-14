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
  TouchableHighlight,
  
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import PinchZoomView from 'react-native-pinch-zoom-view';
import {X,Y,S} from 'react-native-pinch-zoom-view/index.js';
import ImageView from 'react-native-image-view';

const url = 'http://140.123.97.109:5360';
var ratio_X, ratio_Y;
var person_r_x, person_r_y;

class sevenpage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        imageIndex: 0,
        isImageViewVisible: false,
        data: null,
        isLoading: false,
        change: 0,
        image2: null
    } 
  };

  _upload_2(person_img, Ratio) {

    this.setState({isLoading: true});
    
    // 將參數打包
    var obj = {
      person: person_img,
      position_x: (X/Ratio+150*Ratio)*S,
      position_y: (Y/Ratio+150*Ratio)*S,
      scale: 0.9*S
    }

    
    console.log("\n###   顯示上傳到upload2.php的JSON   ###"); //(除錯用)
    console.log(obj);                                        //(除錯用)

    fetch( url + '/php/upload2.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json});
      }) // 將收到的 Json 傳給 data
      .catch((error) => console.error(error))
      .finally(() => { this.setState({ isLoading: false });
                       this.setState({image2: url + this.state.data.path + "?ran=" + Math.random()});
                       this.setState({change: 1});
                       console.log("\n###   upload2.php 回傳結果   ###"); //(除錯用)
                       console.log(this.state.data); // 顯示 data 內容  (除錯用)
                       alert("Success");
    });
  }

  

  render() {
    var image1 = this.props.route.params?.someParam ?? 'defaultValue';    /* image1 為 /images/xxx.jpg (person的原圖)*/ 
    var person = this.props.route.params?.Person ?? 'defaultValue';       /* person 為 /xxxx/xxxx/xxx.jpg */

    const myRatio = this.props.route.params?.myRatio ?? 'defaultValue'; 
    
    const {isImageViewVisible, imageIndex} = this.state;
    var image2 = [{source:{uri: this.state.image2},title:'01',width:1500,height:2000}];

    if(this.state.change==0){
    
    //傳回合成圖前的畫面
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
            source={require("./assets/background.png")}
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
                      if (this.state.isLoading === true){
                        alert("Error!  Waitting Response");
                     }
                     else{
                      this._upload_2(image1,myRatio);
                     }                    
                    }}>
                    <Text style={styles.text}>Send</Text>
                </TouchableOpacity>
              
              </View>      

              
                  <View style={styles.slide1}>
                      <ImageBackground source={{ uri: url + "/images/upload/tmp.jpg?ran=" + Math.random()}} style={styles.image}>
                      <PinchZoomView maxScale={5} minScale={0.1}>

                        <Image source={{ uri: url + person}} style={{marginLeft:"50%", marginTop:"75%",height:800*myRatio, width:600*myRatio, borderWidth:1, borderColor:"#FF0000"}}></Image>
                       
                      </PinchZoomView>
                      </ImageBackground>
                  </View>

              </ImageBackground> 
                
          </View>
      </View>
    );
    }
    else{
      //傳回合成圖後的畫面

      //(測試用，會一直出現) X Y S可否傳送並返回
      // alert('X: '+this.state.data.X + '\nY: '+this.state.data.Y + '\nS: '+this.state.data.S)
      
      return(
      <View style={{ flex: 1 }}>
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
            {/*upperline (back and save) */}
            <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "6%"}}>

              <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate("fifthpage");}}>
                <Ionicons name="arrow-back" size={26*rem} color="#484848"/>
              </TouchableOpacity>
            
            </View>      

            { /* 合成照顯示區 */}
            {image2.map((image, index) => (
                      <TouchableHighlight
                          key={image.title}
                          style={styles.ImageButton}
                          onPress={() => {
                              this.setState({
                                  imageIndex: index,
                                  isImageViewVisible: true,
                              });
                          }}
                      >
                      <View style={styles.slide2}>
                          <Image source={image.source} style={styles.image2}></Image>
                      </View>
                      </TouchableHighlight>
                  ))}

              <ImageView
                  glideAlways
                  images={image2}
                  imageIndex={imageIndex}
                  animationType="fade"
                  isVisible={isImageViewVisible}
                  renderFooter={this.renderFooter}
                  onClose={() => this.setState({isImageViewVisible: false})}
                  onImageChange={index => {
                      console.log(index);
                  }}
              />

            { /* 合成照顯示區結束 */}

            </ImageBackground>
              
        </View>
    </View>
  ) 
    }
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
  slide2:{
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  
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
  image2:{
      height: '95%',
      width: '93%',
      resizeMode: 'cover'
  },
  ImageButton: {
    marginTop: '5%',
    marginLeft: "5%",
    height: '80%',
    width: '90%',
  },

});

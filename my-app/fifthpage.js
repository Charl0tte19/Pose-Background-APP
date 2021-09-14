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
  TouchableHighlight 
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import ImageView from 'react-native-image-view';
import {Num} from 'react-native-swiper/src/index.js';   //此變數為選中的照片的index
import * as FileSystem from 'expo-file-system';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const url = 'http://140.123.97.109:5360';

/*
基本上沒用了

var file = [
  require('./assets/01.jpg'),
  require('./assets/02.jpg'),
  require('./assets/03.jpg'),
  require('./assets/04.jpg'),
  require('./assets/05.jpg'),
]

var images = [
  {
source: file[0],
      title: '01',
      width: 1500,
      height: 1500,
  },
  {
    source: file[1],
    title: '02',
    width: 1500,
    height: 1500,
  },
  {
    source: file[2],
    title: '03',
    width: 1500,
    height: 1500,
  },
  {
    source: file[3],
    title: '04',
    width: 1500,
    height: 1500,
  },
  {
    source: file[4],
    title: '05',
    width: 2000,
    height: 2000,
  }

]
*/
class fifthpage extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            imageIndex: 0,
            isImageViewVisible: false,
            //為了save加的
            hasPermission: null,
            hasPermission_library: null,
            cameraType: Camera.Constants.Type.back,
        };  
    };

  /* 這邊都是為了save加的 */

  getPermissionAsync0 = async (img) => {
    await this.getPermissionAsync();
    if(this.state.hasPermission==true&&this.state.hasPermission_library==true){
      this.takePicture(img);
      alert('Downloading...');
    }else{
      alert('Dowload failed !');
    }
  }

  getPermissionAsync = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });
    if(this.state.hasPermission===false){
      alert('Permission to access Camera is required!');
      return
    }

    let status2 =  await MediaLibrary.requestPermissionsAsync();
    this.setState({ hasPermission_library: status2.status === 'granted' });
    if(this.state.hasPermission_library===false){
      alert('Permission to access Medialibrary is required!');
      return
    }
  }

  takePicture = async (img) => {
      let photo = await this.camera.takePictureAsync({ skipProcessing: true });
      let downloadResumable =FileSystem.createDownloadResumable(img.source.uri, 
      photo.uri)
      const { uri } = await downloadResumable.downloadAsync();
      MediaLibrary.saveToLibraryAsync(photo.uri);
      alert('The image has been saved in DCIM folder!');
    
  }

  

  /* 到這裡 */



  render() {
    const {isImageViewVisible, imageIndex, IsCameraReady, cameraType} = this.state;
    var current = 0;
    const isFocused  = this.props.navigation.isFocused();


    const myRatio = this.props.route.params?.myRatio ?? 'defaultValue';     
    
  
    //接收圖片訊息
    const from_server = this.props.route.params?.someParam ?? 'defaultValue';

    //有無回傳圖片
    var notfound = false;
    
    /* 要顯示的圖片們 */
    var images = []
    var person = []

    //若找不到圖片
    if(from_server.length==0){
      images.push({source:require('./assets/notfound.png'),title:0,width:1500,height:2000})
      notfound = true
    }
    else{
      for(var i=0;i<from_server.length;i++){
        images.push({source:{uri:null},title:i,width:1500,height:2000})
        person.push(from_server.image[i].person)
        images[i].source.uri = url + from_server.image[i].path
      }
    }
    /* 圖片填放完畢 */

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
              {/* Save按鍵區塊 */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "4%"}}>

                <TouchableOpacity disabled={notfound} onPress={()=>{  
                
                if(this.state.hasPermission!=true||this.state.hasPermission_library!=true){
                  this.getPermissionAsync0(images[Num]);
                }else{
                  
                  this.takePicture(images[Num]);
                  alert('Downloading...');
                }

                }}>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
              </View>
              {/* Save按鍵區塊結束 */}      


              {/* 滑動圖片區塊 */}
              <Swiper style={styles.wrapper} showsButtons={true} prevButton={<Text style={styles.buttonText}>‹</Text>} nextButton={<Text style={styles.buttonText}>›</Text>}DotColor={'#B3B3B3'} activeDotColor={'#888888'}>
              
                {images.map((image, index) => (

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
                      <View style={styles.slide1}>
                          <Image source={image.source} style={styles.image}></Image>                   
                      </View>
        
                      </TouchableHighlight>
                ))}

              </Swiper>

              {/* 一些設定 */}
              <ImageView
                  glideAlways
                  images={images}
                  imageIndex={imageIndex}
                  animationType="fade"
                  isVisible={isImageViewVisible}
                  renderFooter={this.renderFooter}
                  onClose={() => this.setState({isImageViewVisible: false})}
                  onImageChange={index => {
                      console.log(index);
                  }}
              />
              {/* 滑動圖片區塊結束 */}

            </ImageBackground>

            {/* Home鍵和model鍵區塊 */}
            <View style={{flexDirection : "row",marginTop : "4%", marginLeft : "9%"}}>
                {/*home button */}
                <TouchableOpacity 
                onPress={() => {
                    //此處跳到mainpage
                    this.props.navigation.navigate("mainpage");
                }}>
                <View  style={styles.home}> 
                    <Entypo name="home" size={24*rem} color="white" /> 
                </View> 
                </TouchableOpacity>
                {/*right button */}
                <TouchableOpacity 
                onPress={() => {
                    //此處跳到sevenpage，並傳送參數(選中的圖和人)
                    this.props.navigation.navigate("sevenpage",{
                      someParam:from_server.image[Num].path, Person: person[Num], myRatio: myRatio})  //只需要傳給下一頁 person 的資訊就好 ，背景圖已經在server了
                }}>
                <View  style={styles.button}> 
                <Ionicons name="person" size={24*rem} color="#EFEFEF" />
                    <Text style={styles.buttontext}>Put the model in your photo</Text> 
                </View> 
                </TouchableOpacity>
            </View>
            {/* Home鍵和model鍵區塊結束 */}

            {/* 為了Save功能而放的隱藏相機 */}
            {isFocused && <Camera style={{width:'10%', height:'10%'}} type={cameraType} autoFocus={Camera.Constants.AutoFocus.off} //為了save加的，奇怪的實作方法(表面上是相機拍照)
                  ref={ref => {this.camera = ref}}></Camera>}
            {/* 相機區塊結束 */}

          </View>
      </View>
    );
  }
}
  

export default fifthpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : 8.6*windowHeight/10,
    width : windowWidth,
  },
  text : {
    marginLeft : "63%",
    marginRight : "46%",
    width: "12%",
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here

  //style for home button
  home : {
    backgroundColor :"#7FA6A6",
    width : "62%",
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

  wrapper: {
    marginTop: '8%',
    height: '90%',
  },
  buttonText:{
    fontSize: 40,
    color: '#616161'
  },
  slide1: {
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
  height: '95%',
  width: '93%',
  resizeMode: 'cover'
  },
  ImageButton: {
    marginLeft: "10%",
    height: '83%',
    width: '80%',
  }
});
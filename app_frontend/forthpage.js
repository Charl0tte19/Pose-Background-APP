import React, { useEffect,useState } from "react";
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
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';


class forthpage extends React.Component {

  //add
  constructor(props){
    super(props);
    this.state = {
        background_img: null,
        base64_img: null,
        data: null,
        isLoading: true,
    };
  }


  upload_1(Base64){

    const url = 'http://140.123.97.109:5360';
    
    // 包裝 json 
    var obj = {
      image: Base64
    };
    
    // 上傳 json 
  
    fetch(url + '/test_fetch.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }
  


  render() {
   
  //add
    let openCameraPickerAsync = async () => {
    
      let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchCameraAsync(
          {base64: true}
        );
        this.setState({background_img: pickerResult.uri})
        this.setState({base64_img: pickerResult.base64})
        console.log(pickerResult);
      } 
    };

    let openImagePickerAsync = async () => {
    
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access gallery is required!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchImageLibraryAsync(
          {base64: true}
        );
        this.setState({background_img: pickerResult.uri})
        this.setState({base64_img: pickerResult.base64})
        console.log(pickerResult);
      }
    };



    
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
              {/*upperline (back icon and search) */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "4%"}}>
                <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("mainpage");
              }}>
                  <Ionicons name="arrow-back" size={26*rem} color="#484848" />
                </TouchableOpacity>
                <Text style={styles.text}>SEARCH</Text>
              </View>                
            </ImageBackground>

            {/********************/}
        
            
            <View style={{marginLeft:'7%',marginTop:"5%"}}>
              <Text style={styles.tital}>Scene</Text>
            </View>

            <View style={styles.picture}>
              <Image source={{uri:this.state.background_img}} style={{ width: 240, height: 360}} />
            </View>

          {/*  分gallery & camera  */}
            <View style={{marginTop:'1%',alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:15, color:'#bbb'}}>Upload your background picture</Text>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openCameraPickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Camera</Text>
              </TouchableOpacity>
            </View>
          

            {/********************/}

            {/*submit button */}
            <View>
              <TouchableOpacity 
                onPress={() => {
                  this.upload_1(this.state.base64_img);
                  this.props.navigation.navigate("fifthpage");
                  
                }}>
                <View  style={styles.submit}> 
                  <Text style={styles.submittext}>Submit</Text> 
                </View> 
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}
  


export default forthpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : windowHeight/14,
    width : windowWidth,
  },
  text : {
    marginLeft : "30%",
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_container:{
    margin:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  tital:{
    fontSize: 20, 
    alignItems:'center',
    justifyContent:'flex-start',
    fontWeight:'bold',
  },
  button: {
    flex:1,
    alignItems: 'center',
    borderRadius : 10*rem,
    margin: 9,
    padding: 4,
    backgroundColor: '#ccc'
  },
  buttonText: {
    textAlign:'center',
    fontSize: 16,
    color: '#000',
  },
  picture:{
    marginTop:'5%',
    marginLeft: '15%',
    alignItems:'center',
    justifyContent:'center',
    width: '70%',
    borderWidth:1, 
    borderColor: '#ccc'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  //style for submit button
  submit : {
    backgroundColor :"#484848",
    marginTop : "1%",
    marginLeft : "31%",
    width : "38%",
    height : "32%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
  submittext : {
    color : "white",
    fontSize : 16*rem, 
  },
});
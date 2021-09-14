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
import * as ImageManipulator from 'expo-image-manipulator';

const url = 'http://140.123.97.109:5360';
var ratio_X, ratio_Y;

class forthpage extends React.Component {

  //add
  constructor(props){
    super(props);
    this.state = {
        background_img: null,
        base64_img: null,
        data: null,
        isLoading: false,
        myRatio: 1,
    };
  }

  upload_1(Base64){
    
    this.setState({isLoading: true});

    // Base64 包裝成 json 
    var obj = {
      upload: Base64
    };
    
    // 上傳 json 
    /* '/php/save_image.php'是存圖 */ /* '/php/upload1.php' 正式版本 */ 
    fetch(url + '/php/upload1.php', {    
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
        console.log(this.state.data); // (除錯用)
        alert("Success!"); 
        this.props.navigation.navigate("fifthpage",{someParam:this.state.data, myRatio: this.state.myRatio});
        //this.props.navigation.navigate("fifthpage",{someParam:this.state.data, Ratio_X:ratio_X,Ratio_Y:ratio_Y});
      });

  }

  ratio(width, height){
    var image_ratio = width / height;   
    var screen_ratio = windowWidth / windowHeight;   
    if (image_ratio < screen_ratio){
      this.setState({myRatio: (0.98*windowWidth)/width}); /* 理論值 0.98 */ /* 較好值 0.888 */
    }else{
      this.setState({myRatio: (0.7367*windowHeight)/height}); /* 理論值 0.8624 */ /* 較好值 0.7367 */
    }
    console.log(this.state.myRatio);
  }
  

  render() {
   
  //add
    let openCameraPickerAsync = async () => {
    
      let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }else if (this.state.isLoading === true) {
        alert('Waitting Response!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchCameraAsync(
          {base64: true}
        );
        
        let resize_img = null
        
        //resize

        resize_img = await ImageManipulator.manipulateAsync(pickerResult.uri,[{resize:{width:2000}}],{base64:true})

        if(resize_img.height<1500)
          resize_img = await ImageManipulator.manipulateAsync(resize_img.uri,[{resize:{height:2000}}],{base64:true})

        
        this.setState({background_img: resize_img.uri})
        this.setState({base64_img: resize_img.base64})

        this.ratio(resize_img.width, resize_img.height);

        console.log(resize_img.height + " " + resize_img.width)
        //console.log(pickerResult); // 圖片太大 console 顯示可能會出錯
      } 
    };

    let openImagePickerAsync = async () => {
    
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access gallery is required!');
        return;
      }
      else if (this.state.isLoading === true) {
        alert('Waitting Response!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchImageLibraryAsync(
          {base64: true}
        );
        
        let resize_img = null
        
        //resize
        
        resize_img = await ImageManipulator.manipulateAsync(pickerResult.uri,[{resize:{width:2000}}],{base64:true})
     
        if(resize_img.height<1500)
          resize_img = await ImageManipulator.manipulateAsync(resize_img.uri,[{resize:{height:2000}}],{base64:true})


        this.setState({background_img: resize_img.uri})
        this.setState({base64_img: resize_img.base64})

        this.ratio(resize_img.width, resize_img.height);

        console.log(resize_img.height + " " + resize_img.width)
        //console.log(pickerResult); // 圖片太大 console 顯示可能會出錯
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
            source={require("./assets/background.png")}
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
                  
                  //呼叫server
                  if ((this.state.base64_img === null) || (this.state.base64_img === '')){
                    alert("Error!  Base64 is Null");
                  }
                  else if (this.state.isLoading === true){
                    alert("Error!  Waitting Response");
                  }
                  else{
                    alert('Please wait...');
                    this.upload_1(this.state.base64_img); //按下後執行上傳動作
                  }

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
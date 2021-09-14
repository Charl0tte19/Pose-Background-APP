import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  ScrollView, 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

//add
const url = 'http://140.123.97.109:5360';

class thirdpage extends React.Component {
  //add
  constructor(props){
    super(props);
    this.state = {
      Male:0,
      Female:0,
      back:0,
      seat:0,
      lean:0,
      jump:0,
      touch:0,
      lie:0,
      lookback:0,
      dontlook:0,
      limb:0,
      stand:0,
      squat:0,
      other:0,
      road: 0,
      building: 0,
      sky: 0,
      outdoor: 0,
      car: 0,
      tree: 0,
      mountain: 0,
      store: 0,
      seaside: 0,
      wall: 0,
      sign: 0,
      stairs: 0,
      sofa: 0,
      windows: 0,
      table: 0,
      bed:0,
      decoration:0,
      door:0,
      television:0,
      computer:0,
      ceiling:0,
      floor:0,
      river:0,
      select_G:0,
      select_P:0,
      select_S:0,
      sex:0,
      pose:0,
      scene:0
    };
  }

  //add

  render() {
   
  //add

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
            {/*put your code here*/}  
            <View style={{alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:17, color:'#ccc'}}>    Choose the tags you want !</Text>
            </View>
 
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Gender</Text>
            </View>
          
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_G==0) {
                  this.setState({Male: 1,select_G: 1}),
                  this.setState({sex: 1})
                }
                else if(this.state.select_G==1 && this.state.Male==1)
                this.setState({Male: 0,select_G: 0}) }}
                style={[styles.button,{backgroundColor: this.state.Male==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.Male==0?'#000':'white'}]}>
                  Male
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_G==0){
                this.setState({Female: 1,select_G: 1}),
                this.setState({sex: 2})
              } 
                else if(this.state.select_G==1 && this.state.Female==1)
                this.setState({Female: 0,select_G: 0}) }}
                style={[styles.button,{backgroundColor: this.state.Female==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.Female==0?'#000':'white'}]}>
                  Female
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft:'7%'}}>
              <Text style={styles.tital}>Pose</Text>
            </View>

            <ScrollView horizontal={true}>
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({back: 1,select_P: 1}),
                this.setState({pose: 1})
              }
                else if(this.state.select_P==1 && this.state.back==1)
                this.setState({back: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.back==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.back==0?'#000':'white'}]}>
                  背影
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({seat: 1,select_P: 1}),
                this.setState({pose: 2})
              }
                else if(this.state.select_P==1 && this.state.seat==1)
                this.setState({seat: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.seat==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.seat==0?'#000':'white'}]}>
                  坐姿/盤坐
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({lean: 1,select_P: 1}),
                this.setState({pose: 3})
              }
                else if(this.state.select_P==1 && this.state.lean==1)
                this.setState({lean: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.lean==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.lean==0?'#000':'white'}]}>
                  倚靠  
              </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({jump: 1,select_P: 1}),
                this.setState({pose: 4})
              }
                else if(this.state.select_P==1 && this.state.jump==1)
                this.setState({jump: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.jump==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.jump==0?'#000':'white'}]}>
                  跳躍
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({touch: 1,select_P: 1}),
                this.setState({pose: 5})
              }
                else if(this.state.select_P==1 && this.state.touch==1)
                this.setState({touch: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.touch==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.touch==0?'#000':'white'}]}>
                  摸頭
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({lie: 1,select_P: 1}),
                this.setState({pose: 6})
              }
                else if(this.state.select_P==1 && this.state.lie==1)
                this.setState({lie: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.lie==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.lie==0?'#000':'white'}]}>
                  躺/趴
              </Text>
              </TouchableOpacity>
              </View>

              
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({lookback: 1,select_P: 1}),
                this.setState({pose: 7})
              }
                else if(this.state.select_P==1 && this.state.lookback==1)
                this.setState({lookback: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.lookback==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.lookback==0?'#000':'white'}]}>
                  側身/回眸
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({dontlook: 1,select_P: 1}),
                this.setState({pose: 8})
              }
                else if(this.state.select_P==1 && this.state.dontlook==1)
                this.setState({dontlook: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.dontlook==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.dontlook==0?'#000':'white'}]}>
                  不看鏡頭
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({limb: 1,select_P: 1}),
                this.setState({pose: 9})
              }
                else if(this.state.select_P==1 && this.state.limb==1)
                this.setState({limb: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.limb==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.limb==0?'#000':'white'}]}>
                  手/腳 擺動/伸展
              </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({stand: 1,select_P: 1}),
                this.setState({pose: 10})
              }
                else if(this.state.select_P==1 && this.state.stand==1)
                this.setState({stand: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.stand==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.stand==0?'#000':'white'}]}>
                  自然站姿
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({squat: 1,select_P: 1}),
                this.setState({pose: 11})
              }
                else if(this.state.select_P==1 && this.state.squat==1)
                this.setState({squat: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.squat==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.squat==0?'#000':'white'}]}>
                  蹲/跪/彎腰
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_P==0){
                this.setState({other: 1,select_P: 1}),
                this.setState({pose: 12})
              }
                else if(this.state.select_P==1 && this.state.other==1)
                this.setState({other: 0,select_P: 0}) }}
                style={[styles.button,{backgroundColor: this.state.other==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.other==0?'#000':'white'}]}>
                  其他
              </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
            
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Scene</Text>
            </View>

            
            <ScrollView style={{height:600/16*9}}>
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({road: 1,select_S: 1}),
                this.setState({scene: 1})
              }
                else if(this.state.select_S==1 && this.state.road==1)
                this.setState({road: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.road==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.road==0?'#000':'white'}]}>
                  一般街景
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({building: 1,select_S: 1}),
                this.setState({scene: 2})
              }
                else if(this.state.select_S==1 && this.state.building==1)
                this.setState({building: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.building==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.building==0?'#000':'white'}]}>
                  海邊/海景
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({sky: 1,select_S: 1}),
                this.setState({scene: 3})
              }
                else if(this.state.select_S==1 && this.state.sky==1)
                this.setState({sky: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.sky==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.sky==0?'#000':'white'}]}>
                  居家
              </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({outdoor: 1,select_S: 1}),
                this.setState({scene: 4})
              }
                else if(this.state.select_S==1 && this.state.outdoor==1)
                this.setState({outdoor: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.outdoor==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.outdoor==0?'#000':'white'}]}>
                  野外
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({car: 1,select_S: 1}),
                this.setState({scene: 5})
              }
                else if(this.state.select_S==1 && this.state.car==1)
                this.setState({car: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.car==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.car==0?'#000':'white'}]}>
                  河/湖景
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({tree: 1,select_S: 1}),
                this.setState({scene: 6})
              }
                else if(this.state.select_S==1 && this.state.tree==1)
                this.setState({tree: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.tree==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.tree==0?'#000':'white'}]}>
                  觀光場所(遊樂園 寺廟 地標等)  
              </Text>
              </TouchableOpacity>
              </View>

              
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({mountain: 1,select_S: 1}),
                this.setState({scene: 7})
              }
                else if(this.state.select_S==1 && this.state.mountain==1)
                this.setState({mountain: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.mountain==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.mountain==0?'#000':'white'}]}>
                  餐飲(餐廳 咖啡廳)
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({store: 1,select_S: 1}),
                this.setState({scene: 8})
              }
                else if(this.state.select_S==1 && this.state.store==1)
                this.setState({store: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.store==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.store==0?'#000':'white'}]}>
                  商店/店家/百貨 [室內]
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({seaside: 1,select_S: 1}),
                this.setState({scene: 9})
              }
                else if(this.state.select_S==1 && this.state.seaside==1)
                this.setState({seaside: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.seaside==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.seaside==0?'#000':'white'}]}>
                  古老/遺跡/懷舊
              </Text>
              </TouchableOpacity>
            </View>


            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({wall: 1,select_S: 1}),
                this.setState({scene: 10})
              }
                else if(this.state.select_S==1 && this.state.wall==1)
                this.setState({wall: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.wall==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.wall==0?'#000':'white'}]}>
                  一大片牆(磚牆 廣告牆 塗鴉牆等)
              </Text>
              </TouchableOpacity>
 
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({sign: 1,select_S: 1}),
                this.setState({scene: 11})
              }
                else if(this.state.select_S==1 && this.state.sign==1)
                this.setState({sign: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.sign==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.sign==0?'#000':'white'}]}>
                  運動場所
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({stairs: 1,select_S: 1}),
                this.setState({scene: 12})
              }
                else if(this.state.select_S==1 && this.state.stairs==1)
                this.setState({stairs: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.stairs==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.stairs==0?'#000':'white'}]}>
                  其他 [室外]
              </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => 
              { if(this.state.select_S==0){
                this.setState({sofa: 1,select_S: 1}),
                this.setState({scene: 13})
              }
                else if(this.state.select_S==1 && this.state.sofa==1)
                this.setState({sofa: 0,select_S: 0}) }}
                style={[styles.button,{backgroundColor: this.state.sofa==0 ? '#ccc':'#ABDB8A'}]}>
                <Text style={[styles.buttonText,{color:this.state.sofa==0?'#000':'white'}]}>
                  其他 [室內]
              </Text>
              </TouchableOpacity>
            </View>
              

            </ScrollView>
        

            {/********************/}
              
            {/*submit button */}
            <View>
              <TouchableOpacity 
                onPress={() => {
                  fetch(url + '/php/tag.php', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      sex: this.state.sex,
                      pose: this.state.pose,
                      scene: this.state.scene
                    })
                  }, [])
                    .then((response) => response.json())
                    .then((json) => {
                      let img = new Array();
                      for(let i=0; i<JSON.stringify(json.length); i++){
                        let tmp = JSON.stringify(json.image[i]).replace('"', '');
                        img.push(tmp.replace('"', ''))
                      }
                      for(let i=JSON.stringify(json.length); i<5; i++)
                        img.push('null')
                      this.props.navigation.navigate("sixthpage", {
                        img1: img[0],
                        img2: img[1],
                        img3: img[2],
                        img4: img[3],
                        img5: img[4],
                    });})
                    .catch((error) => console.error(error))
                    .finally(() => setLoading(false));
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
  


export default thirdpage;

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
/*
  scrollView: {
    backgroundColor: 'pink',
    height: 100,
  },
  */

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
    backgroundColor: '#ccc',
    borderRadius : 10*rem,
    margin: 9,
    padding: 4,    
  },
  buttonText: {
    textAlign:'center',
    fontSize: 12,
    color: '#000',
  },
  picture:{
    marginTop:'5%',
    alignItems:'center',
    justifyContent:'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  //style for submit button
  submit : {
    backgroundColor :"#484848",
    marginTop : "10%",
    marginLeft : "31%",
    width : "38%",
    height : "32%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
  submittext : {
    color : "white",
    fontSize : 14*rem, 
  },
});

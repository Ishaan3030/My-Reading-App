import React,{Component} from 'react';
import{View,Text,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';


export default class Home extends Component{
  render(){
    return(
      <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage}source={{
        uri: 'https://flyclipart.com/thumb2/animated-monkey-in-a-tree-clipart-clip-art-images-59764.png'
      }}>
      <Text style={styles.text}>Mickey the Monkey</Text>
      <View>
      <Text style={styles.titleText}>Hi guys, today we are going to reading a poem called Mickey the Monkey, and you are going to answer 5 questions about the poem</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{
        this.props.navigation.navigate('Poem')
      }}>
      <Text style={styles.buttonText}>Start</Text></TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'orange',
  },
  text:{
    color:'green',
    alignSelf:'center',
    justifyContent:'center',
    fontSize: 30,
    marginTop: 20
  },
  backgroundImage:{
     flex: 1,
     resizeMode:'cover',
     marginTop: -20,
     scaleX: 0.06,
     scaleY: 0.06
  },
  titleText:{
    fontSize: 25,
    alignSelf:'center',
    justifyContent:'center',
    marginTop: 100,
    fontWeight: "bold",
    color:'black'
  },
  button:{
    flex:1,
    marginTop: 100,
    alignSelf:'center',
    backgroundColor:"yellow",
    width:100,
    height: 100,
    borderRadius:20,
  },
  buttonText:{
    fontSize: 20,
    alignSelf:'center',
    justifyContent:'center',
    color:'black',
    marginTop:-1,
  }
})
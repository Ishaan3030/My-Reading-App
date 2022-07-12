import React,{Component} from 'react';
import{View,Text,StyleSheet, Image, TouchableOpacity} from 'react-native';


export default class Result extends Component{
  constructor(){
    super();
    this.state={
      points:"#"
    }
  }
  render(){
    return(
      <View style={styles.container}>
      <Image style={styles.image} source={{
        uri: 'https://cdn5.vectorstock.com/i/1000x1000/48/79/star-ribbon-badge-vector-19134879.jpg'
      }}/>
      <Text style={styles.text}>Congratulations! You have finished the quiz</Text>
      <Text>Total Score: {this.state.points}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{
        this.props.navigation.navigate('Home')
      }}>
      <Text style={styles.buttonText}>Back</Text></TouchableOpacity>
      
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'orange',
  },
  image:{
     marginTop: 100,
     width: 200,
     height: 200,
     alignSelf:'center'
  },
  text:{
    fontSize: 20,
    alignSelf:'center',
    justifyContent:'center',
    marginTop: 30,
    color:'black'
  },
  button:{
    marginTop: 100,
    alignSelf:'center',
    backgroundColor:"yellow",
    width: 100,
    height: 30,
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